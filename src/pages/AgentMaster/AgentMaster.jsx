import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import AgentMasterForm from './Agentmasterform';
import { AgentmasterinitialState } from './Agentmaster.initialState';

export default function AgentMaster() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(AgentmasterinitialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleToggleActive = () => {
    setFormData(prev => ({ ...prev, isActive: !prev.isActive }));
  };

  const handleSubmit = () => {
    toast.success('Agent saved successfully!');
  };

  const handleUpdate = () => {
    toast.success('Agent updated successfully!');
  };

  const handleCancel = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-full" style={{ backgroundColor: 'var(--color-background)' }}>
      <Toaster position="top-right" />
      <AgentMasterForm
        formData={formData}
        errors={errors}
        onChange={handleChange}
        onToggleActive={handleToggleActive}
        onSave={handleSubmit}
        onUpdate={handleUpdate}
        onCancel={handleCancel}
      />
    </div>
  );
}