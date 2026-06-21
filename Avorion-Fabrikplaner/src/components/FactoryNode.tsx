import { useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import type { FactoryData } from '../data/factories';
import { useLanguage } from '../LanguageContext';
import { t } from '../data/translations';

const FactoryNode = ({ data, id }: { data: { factory: FactoryData, onGoodClick?: (nodeId: string, good: string, isInput: boolean) => void, onAlternativeChange?: (nodeId: string, oldGood: string, newGood: string) => void }, id: string }) => {
  const { factory, onGoodClick, onAlternativeChange } = data;
  const { lang } = useLanguage();

  return (
    <div className="factory-node" style={{ borderColor: factory.color }}>
      <div className="factory-node-header" style={{ backgroundColor: factory.color }}>
        {t(factory.name, lang)}
      </div>
      
      <div className="factory-node-content">
        <div className="io-section">
          {factory.inputs.length > 0 && <strong>{lang === 'de' ? 'Benötigt:' : 'Requires:'}</strong>}
          {factory.inputs.map((inputDef, index) => {
            const isArray = Array.isArray(inputDef);
            const [selectedVal, setSelectedVal] = useState(isArray ? inputDef[0] : inputDef);

            return (
              <div key={`in-${index}`} className="io-item input-item">
                <Handle
                  type="target"
                  position={Position.Left}
                  id={`input-${selectedVal}`}
                  style={{ background: '#555', width: '8px', height: '8px', left: '-4px' }}
                />
                
                {isArray ? (
                  <select 
                    className="alternative-select"
                    value={selectedVal}
                    onChange={(e) => {
                      const newGood = e.target.value;
                      const oldGood = selectedVal;
                      setSelectedVal(newGood);
                      if (onAlternativeChange) {
                        onAlternativeChange(id, oldGood, newGood);
                      }
                    }}
                  >
                    {inputDef.map((opt: string) => (
                      <option key={opt} value={opt}>{t(opt, lang)}</option>
                    ))}
                  </select>
                ) : (
                  <span 
                    className="good-item" 
                    onClick={() => onGoodClick && onGoodClick(id, selectedVal as string, true)}
                  >
                    {t(selectedVal as string, lang)}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="io-section" style={{ textAlign: 'right' }}>
          <strong>{lang === 'de' ? 'Produziert:' : 'Produces:'}</strong>
          {factory.outputs.map((output, index) => (
            <div key={`out-${index}`} className="io-item output-item">
              <span 
                className="good-item"
                onClick={() => onGoodClick && onGoodClick(id, output, false)}
              >
                {t(output, lang)}
              </span>
              <Handle
                type="source"
                position={Position.Right}
                id={`output-${output}`}
                style={{ background: factory.color, width: '10px', height: '10px', right: '-5px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FactoryNode;
