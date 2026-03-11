import * as yup from 'yup';

// Customer form validation schema
export const customerSchema = yup.object().shape({
  // Basic Customer Information
  customerName: yup
    .string()
    .required('Please enter the customer name')
    .min(2, 'Customer name must be at least 2 characters')
    .max(100, 'Customer name cannot exceed 100 characters'),
  
  rocNo: yup
    .string()
    .max(50, 'ROC number cannot exceed 50 characters'),
  
  address: yup
    .string()
    .required('Please enter the address')
    .min(10, 'Address must be at least 10 characters')
    .max(500, 'Address cannot exceed 500 characters'),
  
  picName: yup
    .string()
    .max(100, 'PIC name cannot exceed 100 characters'),
  
  symbolName: yup
    .string(),
  
  paymentTerm: yup
    .string(),
  
  gtsNo: yup
    .string()
    .max(50, 'GTS number cannot exceed 50 characters'),
});

// Field-level validation helper
export const validateField = async (fieldName, value, schema = customerSchema) => {
  try {
    await schema.validateAt(fieldName, { [fieldName]: value });
    return null;
  } catch (error) {
    return error.message;
  }
};

// Form-level validation helper
export const validateForm = async (values, schema = customerSchema) => {
  try {
    await schema.validate(values, { abortEarly: false });
    return {};
  } catch (error) {
    const errors = {};
    error.inner.forEach((err) => {
      errors[err.path] = err.message;
    });
    return errors;
  }
};

// Get required fields list
export const getRequiredFields = () => {
  return [
    'customerName',
    'address', 
  ];
};

export default customerSchema;