import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ModuleForm from './ModuleForm';
import { Module } from './types/modules';

const EditPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [module, setModule] = useState<Module | null>(null);

  useEffect(() => {
    if (id) {
      const fetchModule = async () => {
        try {
          const response = await fetch(`/api/modules/${id}`);
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
    }
  }, [id]);

  const handleUpdate = async (updatedModule: Module) => {
    try {
      const response = await fetch(`/api/modules/${id}`, {
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

export default EditPage;
