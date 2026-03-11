// Supplier.validation.js

export const validateSupplier = (data) => {
    const errors = {};
  
    // ===== BASIC INFORMATION =====
    if (!data.suppliername?.trim()) {
      errors.suppliername = 'Supplier name is required';
    }
  
    if (!data.supplierid?.trim()) {
      errors.supplierid = 'Supplier ID is required';
    }
  
    if (!data.address?.trim()) {
      errors.address = 'Address is required';
    }
  
    // ===== LOCATION =====
    if (!data.city?.trim()) {
      errors.city = 'City is required';
    }
  
    if (!data.country) {
      errors.country = 'Country is required';
    }
  
    if (!data.state?.trim()) {
      errors.state = 'State is required';
    }
  
    if (!data.zipCode?.trim()) {
      errors.zipCode = 'ZIP code is required';
    } else if (!/^[0-9]{5,10}$/.test(data.zipCode)) {
      errors.zipCode = 'ZIP code must be 5–10 digits';
    }
  
    // ===== CONTACT =====
    if (data.emailId && !isValidEmail(data.emailId)) {
      errors.emailId = 'Invalid email format';
    }
  
    if (data.accountsEmail && !isValidEmail(data.accountsEmail)) {
      errors.accountsEmail = 'Invalid accounts email';
    }
  
    if (data.phone && !isValidPhone(data.phone)) {
      errors.phone = 'Invalid phone number';
    }
  
    if (data.accountsPhone && !isValidPhone(data.accountsPhone)) {
      errors.accountsPhone = 'Invalid accounts phone';
    }
  
    // ===== TAX DETAILS =====
    if (!data.tinno?.trim()) {
      errors.tinno = 'TIN number is required';
    }
  
    if (!data.tintype) {
      errors.tintype = 'TIN type is required';
    }
  
    if (!data.suppliertinNo?.trim()) {
      errors.suppliertinNo = 'Supplier TIN is required';
    }
  
    if (!data.registrationno?.trim()) {
      errors.registrationno = 'Registration number is required';
    }
  
    // ===== MSIC =====
    if (!data.msiccode?.trim()) {
      errors.msiccode = 'MSIC code is required';
    }
  
    if (!data.msiccodetype) {
      errors.msiccodetype = 'MSIC code type is required';
    }
  
    // ===== TAX EXEMPTION (conditional) =====
    if (data.taxexemptionno && !data.taxexemptionexpirydate) {
      errors.taxexemptionexpirydate = 'Expiry date is required';
    }
  
    return errors;
  };
  
  // ===== HELPERS =====
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
  const isValidPhone = (phone) =>
    /^[+]?[0-9\s\-()]{7,20}$/.test(phone);
  