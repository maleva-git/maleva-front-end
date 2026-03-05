export const storageUtils = {
  // Set item in localStorage
  setItem: (key, value) => {
    try {
      const serialized = JSON.stringify(value);
      localStorage.setItem(key, serialized);
      return true;
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      return false;
    }
  },

  // Get item from localStorage
  getItem: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return defaultValue;
    }
  },

  // Remove item from localStorage
  removeItem: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing from localStorage:', error);
      return false;
    }
  },

  // Clear all localStorage
  clear: () => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing localStorage:', error);
      return false;
    }
  },

  // Get employee info
  getEmployeeInfo: () => {
    return {
      employeeRefId: localStorage.getItem('EmployeeRefid') || 0,
      employeeName: localStorage.getItem('EmployeeName') || ''
    };
  },

  // Set employee info
  setEmployeeInfo: (employeeRefId, employeeName) => {
    localStorage.setItem('EmployeeRefid', employeeRefId);
    localStorage.setItem('EmployeeName', employeeName);
  },

  // Clear employee info
  clearEmployeeInfo: () => {
    localStorage.removeItem('EmployeeRefid');
    localStorage.removeItem('EmployeeName');
  }
};
