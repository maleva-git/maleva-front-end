/**
 * Planning Module Constants
 * 
 * This file contains all constants specific to the Planning module.
 * For shared constants (like PORT_OPTIONS), import from constants/dropdownOptions.js
 * 
 * @module Planning/Constants
 */

/**
 * Employee roles for Planning module
 * Used to filter employees in dropdowns
 */
export const EMPLOYEE_ROLES = [500, 500];

/**
 * Status color mappings for planning items
 * Used for visual status indicators in the UI
 */
export const STATUS_COLORS = {
  'Pending': 'bg-yellow-100 text-yellow-800',
  'In Progress': 'bg-blue-100 text-blue-800',
  'Completed': 'bg-green-100 text-green-800',
  'Cancelled': 'bg-red-100 text-red-800'
};

/**
 * Default form values for new planning entries
 */
export const DEFAULT_PLANNING_FORM = {
  planningNo: '',
  planningDate: new Date().toISOString().split('T')[0],
  pickupFromDate: new Date().toISOString().split('T')[0],
  pickupToDate: new Date().toISOString().split('T')[0],
  port: '',
  employee: '',
  remarks: '',
  searchText: ''
};
