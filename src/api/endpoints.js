// Centralized API endpoints
export const API_ENDPOINTS = {
  // RTI
  RTI: {
    SELECT: '/RTI/SelectRTI',
    SELECT_BY_ID: '/RTI/SelectRTIById',
    SAVE: '/RTI/SaveRTI',
    DELETE: '/RTI/DeleteRTI',
    VIEW: '/RTI/ViewRTI',
    REVISE: '/RTI/ReviseRTI',
  },
  
  // Master Data
  DRIVER: {
    SELECT: '/DriverMaster/SelectDriverName',
    GET: '/DriverMaster/GetDriver',
  },
  
  TRUCK: {
    SELECT: '/TruckMaster/SelectTruckAll',
    GET: '/TruckMaster/GetTruck',
    SELECT_BY_ID: '/TruckMaster/SelectTruck',
  },
  
  AGENT_COMPANY: {
    SELECT: '/AgentCompanyMaster/SelectAgentCompany',
  },
  
  AGENT: {
    SELECT_ALL: '/AgentMaster/SelectAgentAll',
  },
  
  JOB_TYPE: {
    LIST: '/api/job-type-master',
    GET: (id) => `/api/job-type-master/${id}`,
    BY_COMPANY: (companyId) => `/api/job-type-master/jobtypes/${companyId}`,
    CREATE: '/api/job-type-master',
    UPDATE: (id) => `/api/job-type-master/${id}`,
    DELETE: (id) => `/api/job-type-master/${id}`,
  },
  
  JOB_STATUS: {
    LIST: '/api/job-status-master',
    GET: (id) => `/api/job-status-master/${id}`,
    BY_COMPANY: (companyId) => `/api/job-status-master/select/${companyId}/`,
    CREATE: '/api/job-status-master',
    UPDATE: (id) => `/api/job-status-master/${id}`,
    DELETE: (id) => `/api/job-status-master/${id}`,
  },
  
  CUSTOMER: {
    GET: (id) => `/api/customers/${id}`,
    SELECT: '/api/customers/select',
    LIST: '/api/customers',
    CREATE: '/api/customers',
    UPDATE: (id) => `/api/customers/${id}`,
    SOFT_DELETE: (id) => `/api/customers/${id}/soft-delete`,
  },
  
  ADDRESS: {
    LIST: '/api/addresses',
    GET: (id) => `/api/addresses/${id}`,
    ACTIVE_BY_COMPANY: (companyId) => `/api/addresses/company/${companyId}/active`,
    SEARCH: (companyId) => `/api/addresses/company/${companyId}/search`,
    CREATE: '/api/addresses',
    UPDATE: (id) => `/api/addresses/${id}`,
    DELETE: (id) => `/api/addresses/${id}`,
  },
  
  EMPLOYEE: {
    GET: '/EmployeeMaster/GetEmployee',
    SELECT_TYPE: '/EmployeeMaster/SelectEmployeeType',
  },
  
  // Auth
  AUTH: {
    LOGIN: '/api/auth/login',
    EDIT_PASSWORD: '/Login/EditPassword',
  },
  
  // Sale Order
  SALE_ORDER: {
    SELECT_BY_ID: '/SaleOrder/SelectSaleOrderById',
    SAVE: '/api/sale-orders/save',
    UPDATE: (id) => `/api/sale-orders/${id}`,
    GET: (id) => `/api/sale-orders/${id}`,
    LIST: '/api/sale-orders',
    DELETE: (id) => `/api/sale-orders/${id}`,
  },
  
  SEQUENCE: {
    MAX_SEQUENCE: (companyId) => `/api/sequence-masters/company/${companyId}/max-sequence`,
  },
  
  JOB_ALL_DATA: {
    SELECT: '/api/job-all-data/select',
  },
  
  PRODUCT: {
    LIST: '/api/product-masters',
    GET: (id) => `/api/product-masters/${id}`,
    BY_COMPANY: (companyId) => `/api/product-masters/company/${companyId}`,
    ACTIVE_BY_COMPANY: (companyId) => `/api/product-masters/company/${companyId}/active`,
    PRODUCT_LIST: (companyId) => `/api/item-masters/company/${companyId}/products`,
    SEARCH: (companyId) => `/api/product-masters/company/${companyId}/search`,
    BY_CODE: (prodCode, companyId) => `/api/product-masters/code/${prodCode}?companyRefId=${companyId}`,
    CREATE: '/api/product-masters',
    UPDATE: (id) => `/api/product-masters/${id}`,
    DELETE: (id) => `/api/product-masters/${id}`,
    ACTIVATE: (id) => `/api/product-masters/${id}/activate`,
    DEACTIVATE: (id) => `/api/product-masters/${id}/deactivate`,
  },

  PORT: {
    ACTIVE_BY_COMPANY: (companyId) => `/api/port-masters/company/${companyId}/active`,
  },

  TAX: {
    SELECT: (companyId) => `/api/tax-masters/select/${companyId}`,
  },
};
