import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import SupplierForm from './SupplierForm';
import { initialSupplierState } from './supplier.initialState';
import { validateSupplier } from './supplier.validation';



export default function SupplierPage() {
 const navigate = useNavigate();
const [formData, setFormData] = useState(initialSupplierState);
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


  const handleToggleActive = () => {
    setFormData(prev => ({ ...prev, active: !prev.active }));
  };

  const handleSave = () => {
    const validationErrors = validateSupplier(formData);

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      toast.success('Customer saved successfully 🎉');

      const payload = {
        ...formData,
        active: formData.active ? 1 : 0
      };


    } else {
      setErrors(validationErrors);
      toast.error('Please fix validation errors');
    }
  };


return (
<>

<Toaster position="top-right" />
<SupplierForm
        formData={formData}
        errors={errors}
        onChange={handleChange}
        onToggleActive={handleToggleActive}
        onSave={handleSave}
        onUpdate={() => toast.success('Updated')}
        onBank={() => toast('Coming soon')}
        onCancel={() => navigate('/dashboard')}
      />



</>)


}