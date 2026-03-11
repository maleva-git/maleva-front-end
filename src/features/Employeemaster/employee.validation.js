export const validateEmployee = (data) => {
  const errors = {};

  // Personal Information Validation
  if (!data.firstName?.trim()) {
    errors.firstName = 'First name is required';
  }

  if (!data.lastName?.trim()) {
    errors.lastName = 'Last name is required';
  }

  if (!data.employeeId?.trim()) {
    errors.employeeId = 'Employee ID is required';
  }

  if (!data.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.phone?.trim()) {
    errors.phone = 'Phone number is required';
  }

  if (!data.dateOfBirth) {
    errors.dateOfBirth = 'Date of birth is required';
  }

  // Address Validation
  if (!data.address?.trim()) {
    errors.address = 'Address is required';
  }

  if (!data.city?.trim()) {
    errors.city = 'City is required';
  }

  if (!data.state?.trim()) {
    errors.state = 'State is required';
  }

  if (!data.zipCode?.trim()) {
    errors.zipCode = 'ZIP code is required';
  }

  if (!data.country?.trim()) {
    errors.country = 'Country is required';
  }

  // Employment Information Validation
  if (!data.department?.trim()) {
    errors.department = 'Department is required';
  }

  if (!data.position?.trim()) {
    errors.position = 'Position is required';
  }

  if (!data.employmentType?.trim()) {
    errors.employmentType = 'Employment type is required';
  }

  if (!data.startDate) {
    errors.startDate = 'Start date is required';
  }

  if (!data.salary?.trim()) {
    errors.salary = 'Salary is required';
  } else if (isNaN(data.salary) || parseFloat(data.salary) <= 0) {
    errors.salary = 'Please enter a valid salary amount';
  }

  // Account Details Validation
  if (!data.username?.trim()) {
    errors.username = 'Username is required';
  }

  if (!data.password?.trim()) {
    errors.password = 'Password is required';
  } else if (data.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
  }

  if (!data.role?.trim()) {
    errors.role = 'Role is required';
  }

  return errors;
};