export const initialEmployeeState = {
  // Personal Information
  firstName: '',
  lastName: '',
  employeeId: '',
  email: '',
  phone: '',
  dateOfBirth: '',
  gender: '',
  maritalStatus: '',
  
  // Address Information
  address: '',
  city: '',
  state: '',
  zipCode: '',
  country: '',
  
  // Employment Information
  department: '',
  position: '',
  employmentType: '',
  startDate: '',
  salary: '',
  manager: '',
  workLocation: '',
  
  // Account Details
  username: '',
  password: '',
  role: '',
  permissions: [],
  
  // Bank Details
  bankName: '',
  accountHolderName: '',
  accountNumber: '',
  routingNumber: '',
  swiftCode: '',
  accountType: '',
  bankAddress: '',
  
  // Documents
  profilePhoto: '',
  resume: '',
  idDocument: '',
  
  // System
  active: true,
  createdDate: new Date().toISOString().split('T')[0]
};