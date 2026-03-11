export const dateUtils = {
  // Format date to dd/MM/yyyy
  formatDate: (date) => {
    if (!date) return '';
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  },

  // Format date to dd/MM/yyyy HH:mm
  formatDateTime: (date) => {
    if (!date) return '';
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  },

  // Convert dd/MM/yyyy to yyyy-MM-dd
  toISODate: (dateStr) => {
    if (!dateStr) return '';
    const parts = dateStr.split('/');
    if (parts.length !== 3) return '';
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  },

  // Convert dd/MM/yyyy HH:mm to ISO format
  toISODateTime: (dateTimeStr) => {
    if (!dateTimeStr) return '';
    const [datePart, timePart] = dateTimeStr.split(' ');
    const [day, month, year] = datePart.split('/');
    return `${year}-${month}-${day}T${timePart}:00`;
  },

  // Get current date in yyyy-MM-dd format
  getCurrentDate: () => {
    return new Date().toISOString().split('T')[0];
  },

  // Get current datetime in ISO format
  getCurrentDateTime: () => {
    return new Date().toISOString().slice(0, 16);
  },

  // Check if date is valid
  isValidDate: (dateStr) => {
    const date = new Date(dateStr);
    return date instanceof Date && !isNaN(date);
  }
};
