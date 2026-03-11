import { cargoOptions, commodityOptions, vesselTypeOptions, zbOptions } from '../../../constants/dropdownOptions';

export const saleOrderOptions = {
  statusOptions: [
    { value: 'pending', label: 'Pending Approval' },
    { value: 'approved', label: 'Approved' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' }
  ],

  countryOptions: [
    { value: 'MY', label: 'MY' },
    { value: 'TR', label: 'TR' },
    { value: 'ME', label: 'ME' }
  ],

  jobTypeOptions: [
    { value: 'import', label: 'Import' },
    { value: 'export', label: 'Export' }
  ],

  cargoTypeOptions: cargoOptions,

  commodityOptions: commodityOptions,

  truckSizeOptions: [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' }
  ],

  vesselTypeOptions: vesselTypeOptions,

  zbOptions: zbOptions,

  agentOptions: [
    { value: 'global-shipping', label: 'Global Shipping Agency Ltd' },
    { value: 'pacific-logistics', label: 'Pacific Logistics' }
  ],

  officerOptions: [
    { value: 'alex-tan', label: 'Alex Tan' },
    { value: 'john-doe', label: 'John Doe' }
  ]
};
