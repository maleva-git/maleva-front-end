export const validationUtils = {
  // Validate required field
  isRequired: (value) => {
    if (value === null || value === undefined) return false;
    if (typeof value === 'string') return value.trim().length > 0;
    return true;
  },

  // Validate number
  isNumber: (value) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
  },

  // Validate positive number
  isPositiveNumber: (value) => {
    return validationUtils.isNumber(value) && parseFloat(value) > 0;
  },

  // Validate integer
  isInteger: (value) => {
    return Number.isInteger(Number(value));
  },

  // Validate max length
  maxLength: (value, max) => {
    if (!value) return true;
    return String(value).length <= max;
  },

  // Validate min length
  minLength: (value, min) => {
    if (!value) return false;
    return String(value).length >= min;
  },

  // Null to empty string
  nullToString: (value) => {
    return value === null || value === undefined ? '' : String(value);
  },

  // Null to zero
  nullToZero: (value) => {
    return value === null || value === undefined || value === '' ? 0 : Number(value);
  },

  // Validate form data
  validatePlanningForm: (formData) => {
    const errors = {};

    if (!validationUtils.isRequired(formData.planningNo)) {
      errors.planningNo = 'Planning number is required';
    }

    if (!validationUtils.isRequired(formData.planningDate)) {
      errors.planningDate = 'Planning date is required';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }
};
