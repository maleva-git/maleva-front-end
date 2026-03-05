// RTI Constants
export const LINK_LIST = ['1ST LINK', '2ND LINK'];
export const YES_NO_LIST = ['YES', 'NO'];
export const EXIT_LIST = ['NO', 'EMPTY 80', 'EMPTY 50'];
export const MANPOWER_LIST = ['NO', '1', '2'];

// Grid Column Names
export const GRID_COLUMNS = {
  JOB_NO: 'JobNo',
  CUSTOMER_NAME: 'CustomerName',
  JOB_DATE: 'JobDate',
  SALARY: 'Salary',
  PPIC: 'PPIC',
  DPIC: 'DPIC',
  PWD_TYPE: 'PWDType',
  ORIGIN: 'OriginD',
  DESTINATION: 'DestinationD',
  PICKUP_DATE: 'PickupDateD',
  DELIVERY_DATE: 'DeliveryDateD',
  PICKUP_ADDRESS: 'PickupAddressD',
  DELIVERY_ADDRESS: 'DeliveryAddressD',
  PICKUP_ADDRESS_TIMELIST: 'PickupAddressTimelistD',
  PICKUP_ADDRESS_QUANTITY: 'PickupAddressQuantityD',
  DELIVERY_ADDRESS_QUANTITY: 'DeliveryAddressQuantityD',
  DELIVERY_ADDRESS_DATELIST: 'DeliveryAddressdatelistD',
  SLEEPING: 'Sleeping',
  ON_TIME: 'OnTime',
  TRUCK_MAINTENANCE: 'TruckMaintenance',
  DO_SUBMISSION: 'DoSubmission',
  ID: 'Id',
  SALE_ORDER_MASTER_REF_ID: 'SaleOrderMasterRefId',
  RTI_MASTER_REF_ID: 'RTIMasterRefId',
  EDIT_MODE: 'EditMode',
};

// Password Types
export const PASSWORD_TYPES = {
  EDIT: 'EditPassword',
  FORM_CONFIG: 'FormConfig',
  ADMIN: 'AdminPower',
};

// Keyboard Shortcuts
export const KEYBOARD_SHORTCUTS = {
  F1: 112,  // Save
  F3: 114,  // Search by number
  F5: 116,  // View list
  F9: 120,  // Delete
  F10: 121, // Clear
  ENTER: 13,
  DELETE: 46,
  ESC: 27,
  ARROW_DOWN: 40,
};

// Calculation Types
export const CALC_TYPES = {
  SLEEPING: 2,
  PICKUP: 3,
  DROP: 4,
  EXIT: 5,
  MANPOWER: 5,
};

// Expiry check days
export const EXPIRY_DAYS = {
  COMMON: 15,
  EXPENSE_DUE: 5,
  SERVICE_ALIGNMENT_GREECE: 5,
  APAD_BONAM: 60,
};

// Truck license fields to check
export const TRUCK_LICENSE_FIELDS = [
  { field: 'RotexMyExp', name: 'RotexMy' },
  { field: 'RotexSGExp', name: 'RotexSG' },
  { field: 'PuspacomExp', name: 'Puspacom' },
  { field: 'RotexMyExp1', name: 'RotexMyExp1' },
  { field: 'RotexSGExp1', name: 'RotexSGExp1' },
  { field: 'PuspacomExp1', name: 'PuspacomExp1' },
  { field: 'InsuratnceExp', name: 'Insuratnce' },
  { field: 'BonamExp', name: 'Bonam' },
  { field: 'ApadExp', name: 'Apad' },
  { field: 'ServiceExp', name: 'Service' },
  { field: 'AlignmentExp', name: 'Alignment' },
  { field: 'GreeceExp', name: 'Greece' },
];
