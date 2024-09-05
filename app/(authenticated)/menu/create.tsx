import React from 'react';
import ModuleForm from './ModuleForm';
import { Module } from '../types/modules';

const CreatePage: React.FC = () => {
  const handleCreate = async (newModule: Module) => {
    try {
      const response = await fetch('/api/modules', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newModule),
      });
      if (response.ok) {
        console.log('Module created');
        // Redirecionar ou atualizar a lista de módulos
      } else {
        console.error('Failed to create module');
      }
    } catch (error) {
      console.error('Error creating module:', error);
    }
  };

  return (
    <>
      <h2>Create a New Module</h2>
      <ModuleForm
        initialValues={{ icon: '', link: '', name: '', description: '' }}
        onSubmit={handleCreate}
      />
    </>
  );
};

export default CreatePage;
