import { TRUCK_LICENSE_FIELDS } from '../model/constants';

export class RTIValidationService {
  // Validate truck license expiry
  static validateTruckLicense(truckData) {
    const expiredLicenses = [];
    const expiryDate = new Date();
    const beforeDate = new Date(expiryDate);
    beforeDate.setDate(beforeDate.getDate() + 5);

    TRUCK_LICENSE_FIELDS.forEach(({ field, name }) => {
      if (truckData[field]) {
        const licenseDate = new Date(truckData[field]);
        if (licenseDate <= beforeDate) {
          expiredLicenses.push(name);
        }
      }
    });

    return {
      isValid: expiredLicenses.length === 0,
      expiredLicenses,
      message: expiredLicenses.length > 0 
        ? `${expiredLicenses.join(', ')} - License expired / Going to be expired !!`
        : null,
    };
  }

  // Validate form before save
  static validateForm(state, gridData) {
    const errors = [];

    if (!state.driverRefId) {
      errors.push('Please select Driver Name');
    }

    if (!state.truckRefId) {
      errors.push('Please select Vehicle Number');
    }

    if (!state.rtiDate) {
      errors.push('Please select RTI Date');
    }

    if (gridData.length === 0) {
      errors.push('Please add at least one job');
    }

    // Validate grid data
    gridData.forEach((row, index) => {
      if (!row.JobNo || row.JobNo.trim() === '') {
        errors.push(`Row ${index + 1}: Job No is required`);
      }
    });

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  // Validate grid cell input
  static validateCellInput(columnName, value, maxLength = 50) {
    if (columnName === 'Salary' || columnName === 'PPIC' || columnName === 'DPIC') {
      return /^\d*\.?\d*$/.test(value) && value.length <= maxLength;
    }
    
    if (columnName === 'PWDType') {
      return /^[0-2]$/.test(value);
    }

    return value.length <= maxLength;
  }

  // Check duplicate job numbers
  static checkDuplicateJobNo(gridData) {
    const jobNos = gridData.map(row => row.JobNo).filter(Boolean);
    const uniqueJobNos = new Set(jobNos);
    
    if (jobNos.length !== uniqueJobNos.size) {
      const duplicates = jobNos.filter((item, index) => jobNos.indexOf(item) !== index);
      return {
        hasDuplicate: true,
        duplicates: [...new Set(duplicates)],
      };
    }

    return { hasDuplicate: false, duplicates: [] };
  }

  // Validate employee login
  static validateEmployeeLogin(employees, employeeId, password) {
    const employee = employees.find(emp => emp.Id === employeeId && emp.Password === password);
    
    return {
      isValid: !!employee,
      employee: employee || null,
      message: employee ? null : 'Invalid Password !!!',
    };
  }
}
