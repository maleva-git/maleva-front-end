// customer.validation.js
export const validateCustomer = (data) => {
    const errors = {};
  
    if (!data.customerName.trim()) errors.customerName = 'Customer name is required';
    if (!data.address.trim()) errors.address = 'Address is required';
    if (!data.city.trim()) errors.city = 'City is required';
    if (!data.country.trim()) errors.country = 'Country is required';
    if (!data.state.trim()) errors.state = 'State is required';
    if (!data.zipCode.trim()) errors.zipCode = 'ZIP code is required';
    if (!data.operationsPhone.trim()) errors.operationsPhone = 'Operations phone is required';
    if (!data.tinNo.trim()) errors.tinNo = 'Customer TIN is required';
    if (!data.registrationNo.trim()) errors.registrationNo = 'Registration number is required';
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (data.emailId && !emailRegex.test(data.emailId)) {
      errors.emailId = 'Invalid email format';
    }
    if (data.accountsEmail && !emailRegex.test(data.accountsEmail)) {
      errors.accountsEmail = 'Invalid email format';
    }
    if (data.operationsEmail && !emailRegex.test(data.operationsEmail)) {
      errors.operationsEmail = 'Invalid email format';
    }
  
    const phoneRegex = /^[+]?[0-9\s\-()]{7,20}$/;
    if (data.phone && !phoneRegex.test(data.phone)) {
      errors.phone = 'Invalid phone format';
    }
    if (data.operationsPhone && !phoneRegex.test(data.operationsPhone)) {
      errors.operationsPhone = 'Invalid phone format';
    }
  
    if (data.zipCode && !/^[0-9]{5,10}$/.test(data.zipCode)) {
      errors.zipCode = 'ZIP code must be 5-10 digits';
    }
  
    return errors;
  };
  