import React, { useState } from 'react';
import { Search, PlusCircle, Rocket, Globe } from 'lucide-react';
import { factories } from '../data/factories';
import { t } from '../data/translations';
import { useLanguage } from '../LanguageContext';

const Sidebar = ({ onAutoBuild }: { onAutoBuild: (id: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { lang, setLang } = useLanguage();

  const filteredFactories = factories.filter((factory) => {
    // Filter out mines
    if (factory.id.includes('mine') || factory.id === 'oil_rig') return false;

    const tName = t(factory.name, lang).toLowerCase();
    const tOutputs = factory.outputs.map(o => t(o, lang).toLowerCase());
    return tName.includes(searchTerm.toLowerCase()) || tOutputs.some(o => o.includes(searchTerm.toLowerCase()));
  });

  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>
          <Rocket size={24} className="text-blue-500" />
          Avorion-Fabrikplaner
        </h1>
        <button 
           onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
           style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', padding: '0.5rem', borderRadius: '4px', cursor: 'pointer', marginTop: '1rem', width: '100%', justifyContent: 'center' }}
        >
           <Globe size={16} /> {lang === 'en' ? 'English' : 'Deutsch'}
        </button>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,0,0,0.2)', padding: '0.5rem 1rem', borderRadius: '6px' }}>
          <Search size={18} style={{ color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder={lang === 'de' ? "Suchen..." : "Search..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: '#fff', 
              outline: 'none',
              width: '100%'
            }}
          />
        </div>

        <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
          {lang === 'de' ? 'Ziehe Fabriken in den Bereich oder klicke auf +, um die Kette zu bauen.' : 'Drag factories to the board or click + to auto-build.'}
        </div>
        
        {filteredFactories.map((factory) => (
          <div
            key={factory.id}
            className="factory-item"
            draggable
            onDragStart={(event) => onDragStart(event, factory.id)}
          >
            <div className="factory-item-header" style={{ justifyContent: 'space-between', display: 'flex', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div 
                  className="factory-color-dot" 
                  style={{ color: factory.color, backgroundColor: factory.color }} 
                />
                <span className="factory-name">{t(factory.name, lang)}</span>
              </div>
              <button 
                className="auto-build-btn"
                title={lang === 'de' ? "Komplette Kette automatisch bauen" : "Auto-build complete chain"}
                onClick={() => onAutoBuild(factory.id)}
              >
                <PlusCircle size={20} />
              </button>
            </div>
            <div className="factory-details">
              {factory.inputs.length > 0 ? (
                <span><strong style={{ color: '#fb923c' }}>In:</strong> {factory.inputs.map(i => Array.isArray(i) ? i.map(x=>t(x,lang)).join('/') : t(i, lang)).join(', ')}</span>
              ) : (
                <span><em style={{ color: '#fb923c' }}>{lang === 'de' ? "Basis-Ressource" : "Base Resource"}</em></span>
              )}
              <span><strong style={{ color: '#60a5fa' }}>Out:</strong> {factory.outputs.map(o => t(o, lang)).join(', ')}</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
