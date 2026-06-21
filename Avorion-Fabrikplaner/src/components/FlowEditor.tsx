import React, { useState, useRef, useCallback } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  useReactFlow
} from '@xyflow/react';
import type { Connection, Edge, Node } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { v4 as uuidv4 } from 'uuid';
import dagre from 'dagre';

import Sidebar from './Sidebar';
import FactoryNode from './FactoryNode';
import { factories } from '../data/factories';
import type { FactoryData } from '../data/factories';
import { Trash2 } from 'lucide-react';

const nodeTypes = {
  factoryNode: FactoryNode,
};

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

const getLayoutedElements = (nodes: Node[], edges: Edge[]) => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  
  const nodeWidth = 300;
  const nodeHeight = 150;

  dagreGraph.setGraph({ rankdir: 'LR', ranksep: 120, nodesep: 60 });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    return {
      ...node,
      position: {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
};

const FlowEditor = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const { fitView } = useReactFlow();

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
    [setEdges]
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');
      if (typeof type === 'undefined' || !type) return;

      const factoryTemplate = factories.find(f => f.id === type);
      if (!factoryTemplate) return;

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode: Node = {
        id: uuidv4(),
        type: 'factoryNode',
        position,
        data: { factory: factoryTemplate },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );

  const spawnChain = (targetGood: string, consumerNodeId: string, newNodesRef: Node[], newEdgesRef: Edge[]) => {
     const provider = factories.find(f => f.outputs.includes(targetGood));
     if (!provider) return;

     const spawnNodeRecursive = (factory: FactoryData, consumerId: string, consumedGood: string) => {
        const nodeId = uuidv4();

        newNodesRef.push({
          id: nodeId,
          type: 'factoryNode',
          position: { x: 0, y: 0 },
          data: { factory }
        });

        newEdgesRef.push({
           id: uuidv4(),
           source: nodeId,
           sourceHandle: `output-${consumedGood}`,
           target: consumerId,
           targetHandle: `input-${consumedGood}`,
           animated: true,
           style: { strokeWidth: 2, stroke: factory.color },
           type: 'smoothstep'
        });

        factory.inputs.forEach((inputDef) => {
           const inputGood = Array.isArray(inputDef) ? inputDef[0] : inputDef;
           const subProvider = factories.find(f => f.outputs.includes(inputGood));
           if (subProvider) {
              spawnNodeRecursive(subProvider, nodeId, inputGood);
           }
        });
     };

     spawnNodeRecursive(provider, consumerNodeId, targetGood);
  };

  const autoBuild = useCallback((targetFactoryId: string) => {
    const newNodes: Node[] = [];
    const newEdges: Edge[] = [];

    const spawnRoot = (factory: FactoryData): string => {
      const nodeId = uuidv4();
      newNodes.push({
        id: nodeId,
        type: 'factoryNode',
        position: { x: 0, y: 0 },
        data: { factory }
      });

      factory.inputs.forEach((inputDef) => {
         const inputGood = Array.isArray(inputDef) ? inputDef[0] : inputDef;
         spawnChain(inputGood, nodeId, newNodes, newEdges);
      });
      return nodeId;
    };

    const rootFactory = factories.find(f => f.id === targetFactoryId);
    if (rootFactory) {
       spawnRoot(rootFactory);
       const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(newNodes, newEdges);
       setNodes(layoutedNodes);
       setEdges(layoutedEdges);
       
       setTimeout(() => {
         fitView({ padding: 0.2, duration: 800 });
       }, 50);
    }
  }, [setNodes, setEdges, fitView]);

  const onAlternativeChange = useCallback((nodeId: string, oldGood: string, newGood: string) => {
     setNodes((currentNodes) => {
        setEdges((currentEdges) => {
           const nodesToDelete = new Set<string>();
           const edgesToDelete = new Set<string>();

           const traceDeletions = (currentId: string) => {
              nodesToDelete.add(currentId);
              currentEdges.forEach(e => {
                 if (e.target === currentId) {
                    edgesToDelete.add(e.id);
                    traceDeletions(e.source);
                 }
                 if (e.source === currentId) {
                    edgesToDelete.add(e.id);
                 }
              });
           };

           const oldEdge = currentEdges.find(e => e.target === nodeId && e.targetHandle === `input-${oldGood}`);
           if (oldEdge) {
              edgesToDelete.add(oldEdge.id);
              traceDeletions(oldEdge.source);
           }

           const remainingNodes = currentNodes.filter(n => !nodesToDelete.has(n.id));
           const remainingEdges = currentEdges.filter(e => !edgesToDelete.has(e.id));

           const newNodesToAdd: Node[] = [];
           const newEdgesToAdd: Edge[] = [];

           spawnChain(newGood, nodeId, newNodesToAdd, newEdgesToAdd);

           const combinedNodes = [...remainingNodes, ...newNodesToAdd];
           const combinedEdges = [...remainingEdges, ...newEdgesToAdd];

           const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(combinedNodes, combinedEdges);
           
           // We have to set both in the same pass. The setState function allows us to update.
           // However, inside setEdges we also update setNodes.
           setTimeout(() => setNodes(layoutedNodes), 0);
           return layoutedEdges;
        });
        return currentNodes; // will be immediately overwritten by the timeout above
     });
     
     setTimeout(() => {
       fitView({ padding: 0.2, duration: 800 });
     }, 100);
  }, [setNodes, setEdges, fitView]);

  const onGoodClick = useCallback((nodeId: string, good: string, isInput: boolean) => {
     const highlightedNodes = new Set<string>();
     const highlightedEdges = new Set<string>();

     const traverseBackwards = (currentId: string, handlePattern?: string) => {
        highlightedNodes.add(currentId);
        edges.forEach(e => {
           if (e.target === currentId && (!handlePattern || e.targetHandle === handlePattern)) {
              highlightedEdges.add(e.id);
              traverseBackwards(e.source);
           }
        });
     };

     const traverseForwards = (currentId: string, handlePattern?: string) => {
        highlightedNodes.add(currentId);
        edges.forEach(e => {
           if (e.source === currentId && (!handlePattern || e.sourceHandle === handlePattern)) {
              highlightedEdges.add(e.id);
              traverseForwards(e.target);
           }
        });
     };

     if (isInput) {
         traverseBackwards(nodeId, `input-${good}`);
     } else {
         traverseForwards(nodeId, `output-${good}`);
     }

     setNodes(nds => nds.map(n => ({
        ...n,
        className: highlightedNodes.has(n.id) ? '' : 'dimmed'
     })));
     setEdges(eds => eds.map(e => ({
        ...e,
        className: highlightedEdges.has(e.id) ? '' : 'dimmed'
     })));
  }, [edges, setNodes, setEdges]);

  const resetHighlights = useCallback(() => {
     setNodes(nds => nds.map(n => ({ ...n, className: '' })));
     setEdges(eds => eds.map(e => ({ ...e, className: '' })));
  }, [setNodes, setEdges]);

  const nodesWithCallback = nodes.map(n => ({
    ...n,
    data: {
      ...n.data,
      onGoodClick,
      onAlternativeChange
    }
  }));

  const clearBoard = () => {
    if (window.confirm('Möchtest du das Brett wirklich leeren?')) {
      setNodes([]);
      setEdges([]);
    }
  };

  return (
    <div className="app-container">
      <Sidebar onAutoBuild={autoBuild} />
      <div className="editor-container" ref={reactFlowWrapper}>
        <div className="controls-panel">
          <button className="btn" onClick={clearBoard}>
            <Trash2 size={16} /> Leeren
          </button>
        </div>
        <ReactFlow
          nodes={nodesWithCallback}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onPaneClick={resetHighlights}
          nodeTypes={nodeTypes}
          fitView
          colorMode="dark"
          defaultEdgeOptions={{ 
            style: { strokeWidth: 2 },
            type: 'smoothstep'
          }}
        >
          <Background color="#272d43" gap={20} size={1} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

const WrappedFlowEditor = () => (
  <ReactFlowProvider>
    <FlowEditor />
  </ReactFlowProvider>
);

export default WrappedFlowEditor;
