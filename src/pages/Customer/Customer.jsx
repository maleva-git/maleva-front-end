import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import CustomerForm from './CustomerForm';
import { initialCustomerState } from './customer.initialState';
import { validateCustomer } from './customer.validation';

export default function CustomerPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialCustomerState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  
  const onViewAllCustomers = () => {
    navigate('/customer-view');
  }

  const handleToggleActive = () => {
    setFormData(prev => ({ ...prev, active: !prev.active }));
  };

  const handleSave = () => {
    const validationErrors = validateCustomer(formData);

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      toast.success('Customer saved successfully 🎉');

      const payload = {
        ...formData,
        active: formData.active ? 1 : 0
      };

      console.log(payload);
    } else {
      setErrors(validationErrors);
      toast.error('Please fix validation errors');
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <CustomerForm
        formData={formData}
        errors={errors}
        onChange={handleChange}
        onToggleActive={handleToggleActive}
        onSave={handleSave}
        onViewAllCustomers={onViewAllCustomers}
        onUpdate={() => toast.success('Updated')}
        onBank={() => toast('Coming soon')}
        onCancel={() => navigate('/dashboard')}
      />
    </>
  );
}
