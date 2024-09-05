import React, { useEffect, useState } from 'react';
import ModuleForm from '../ModuleForm';
import { Module } from '../../types/modules';
import { useParams } from 'react-router-dom';

const EditModule: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [module, setModule] = useState<Module | null>(null);

  useEffect(() => {
    const fetchModule = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/modules/${id}`);
        if (response.ok) {
          const data = await response.json();
          setModule(data);
        } else {
          console.error('Failed to fetch module');
        }
      } catch (error) {
        console.error('Error fetching module:', error);
      }
    };

    fetchModule();
  }, [id]);

  const handleUpdate = async (updatedModule: Module) => {
    try {
      const response = await fetch(`http://localhost:3000/api/modules/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedModule),
      });
      if (response.ok) {
        console.log('Module updated');
        // Redirecionar ou atualizar a lista de módulos
      } else {
        console.error('Failed to update module');
      }
    } catch (error) {
      console.error('Error updating module:', error);
    }
  };

  if (!module) return <div>Loading...</div>;

  return (
    <div>
      <h2>Edit Module</h2>
      <ModuleForm initialValues={module} onSubmit={handleUpdate} />
    </div>
  );
};

export default EditModule;
