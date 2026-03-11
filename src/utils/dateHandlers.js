// Date handling utilities for Sale Order

/**
 * Formats date for backend - handles NULL values properly
 * @param {string|null} dateValue - Date value from input
 * @param {boolean} isChecked - Whether the checkbox is checked
 * @returns {string|null} - Formatted date or null
 */
export const formatDateForBackend = (dateValue, isChecked = true) => {
  // If checkbox is not checked, return null
  if (!isChecked) {
    return null;
  }
  
  // If no date value, return null
  if (!dateValue || dateValue === '') {
    return null;
  }
  
  // Return the date value as is (backend will handle formatting)
  return dateValue;
};

/**
 * Formats date with time for backend
 * @param {string|null} dateValue - Date value
 * @param {string|null} timeValue - Time value
 * @param {boolean} isChecked - Whether checkbox is checked
 * @returns {string|null} - Formatted datetime or null
 */
export const formatDateTimeForBackend = (dateValue, timeValue, isChecked = true) => {
  if (!isChecked || !dateValue) {
    return null;
  }
  
  // If time is provided, combine date and time
  if (timeValue) {
    return `${dateValue}T${timeValue}`;
  }
  
  // Otherwise just return date
  return dateValue;
};

/**
 * Prepares all date fields for backend submission
 * @param {object} formData - Form data object
 * @returns {object} - Object with properly formatted dates
 */
export const prepareDateFields = (formData) => {
  return {
    // ETA, ETB, ETD for main vessel
    ETA: formatDateForBackend(formData.eta, formData.etaChecked),
    ETB: formatDateForBackend(formData.etb, formData.etbChecked),
    ETD: formatDateForBackend(formData.etd, formData.etdChecked),
    
    // ETA, ETB, ETD for off vessel
    OETA: formatDateForBackend(formData.oeta, formData.oetaChecked),
    OETB: formatDateForBackend(formData.oetb, formData.oetbChecked),
    OETD: formatDateForBackend(formData.oetd, formData.oetdChecked),
    
    // Forwarding dates
    ForwardingDate: formatDateForBackend(formData.forwardingDate1, formData.forwardingDate1Checked),
    Forwarding2Date: formatDateForBackend(formData.forwardingDate2, formData.forwardingDate2Checked),
    Forwarding3Date: formatDateForBackend(formData.forwardingDate3, formData.forwardingDate3Checked),
    
    // Pickup and Delivery dates
    PickupDate: formatDateForBackend(formData.pickupDate, formData.pickupDateChecked),
    DeliveryDate: formatDateForBackend(formData.deliveryDate, formData.deliveryDateChecked),
    
    // Warehouse dates
    WareHouseEnterDate: formatDateForBackend(formData.warehouseEnterDate, formData.warehouseEnterDateChecked),
    WareHouseExitDate: formatDateForBackend(formData.warehouseExitDate, formData.warehouseExitDateChecked),
    
    // Flight time
    FlighTime: formatDateForBackend(formData.flightTime, formData.flightTimeChecked)
  };
};

/**
 * Example usage in your save function
 */
export const exampleUsage = (formData) => {
  const dateFields = prepareDateFields(formData);
  
  const payload = {
    ...formData,
    ...dateFields
  };
  
  return payload;
};
