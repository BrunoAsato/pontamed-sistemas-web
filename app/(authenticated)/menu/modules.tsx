import React, { useEffect, useState } from 'react';

interface ModulesProps {
  icon: string;
  moduleName: string;
  moduleDescription: string;
}

const Modules: React.FC = () => {
  const [modules, setModules] = useState<ModulesProps>([]);
  const [moduleName, setModuleName] = useState('');
  const [moduleDescription, setModuleDescription] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/modules')
      .then((response) => response.json())
      .then((data) => setModules(data))
      .catch((error) => console.error('Error fetching modules:', error));
  }, []);

  const handleAddModule = () => {
    if (moduleName && moduleDescription) {
      const newModule = { moduleName, moduleDescription };
      // setModules([...modules, newModule]);//
      setModules((prevModules: Modules[]) => [...prevModules, newModule]);
      setModuleName('');
      setModuleDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={moduleName}
        onChange={(e) => setModuleName(e.target.value)}
        placeholder="Nome do módulo"
      />
      <input
        type="text"
        value={moduleDescription}
        onChange={(e) => setModuleDescription(e.target.value)}
        placeholder="Descrição do módulo"
      />
      <button onClick={handleAddModule}>Adicionar módulo</button>
      <ul>
        {modules.map((module, index) => (
          <li key={index}>
            {module.moduleName} - {module.moduleDescription}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Modules;
