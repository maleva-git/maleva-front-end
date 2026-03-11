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
  

  
  // Auth
  AUTH: {
    LOGIN: '/api/auth/login',
    REFRESH_TOKEN: '/api/auth/refresh-token',
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
    ACTIVE_BY_COMPANY: (companyId) => `/api/tax-masters/company/${companyId}/active`,
  },

  // Employee
  EMPLOYEE: {
    LIST: '/api/employees',
    GET: (id) => `/api/employees/${id}`,
    BY_COMPANY: (companyId) => `/api/employees/company/${companyId}/all`,
    BY_COMPANY_ROLES: (companyId) => `/api/employees/company/${companyId}/roles`,
    SELECT_TYPE: '/EmployeeMaster/SelectEmployeeType',
  },

  // Currency value
  CURRENCY: {
    VALUE: '/api/currency-value/get',
  },

  // Job Status Master (legacy endpoint)
  JOB_STATUS_MASTER: {
    SELECT: '/JobStatusMaster/SelectJobStatus',
  },

  // Sale Order View (legacy endpoints used for list/actions)
  SALE_ORDER_VIEW: {
    GET_VIEW: '/SaleOrder/GetSaleOrderView',
    UPDATE_JOB_STATUS: '/SaleOrder/UpdateJobStatus',
    CONVERT_TO_DO: '/SaleOrder/DoConvert',
    CONVERT_TO_INVOICE: '/SaleOrder/InvoiceConvert',
  },

  // Truck — full set (extends legacy master selects)
  TRUCK_API: {
    BY_COMPANY: (companyId) => `/api/trucks/company/${companyId}`,
    GET: (id) => `/api/trucks/${id}`,
    LICENSE_CHECK: (truckId) => `/api/trucks/${truckId}/license-check`,
  },

  // Driver
  DRIVER_API: {
    BY_COMPANY: (companyId) => `/api/drivers/company/${companyId}`,
    GET: (id) => `/api/drivers/${id}`,
  },
  // Agent Company (modern API)
  AGENT_COMPANY_API: {
    BY_COMPANY: (companyId) => `/api/agent-companies/company/${companyId}`,
  },

  // Agents (modern API)
  AGENTS_API: {
    SELECT_ALL: (companyRefId, jobId) => `/api/agents/select-all?companyRefId=${companyRefId}&jobId=${jobId}`,
  },

  // Purchase Order (BillsOrderMaster)
  PURCHASE_ORDER: {
    VIEW: '/BillsOrderMaster/BillsOrderView',
    EDIT: '/BillsOrderMaster/BillsOrderEdit',
    SAVE: '/BillsOrderMaster/BillsOrderSave',
    DELETE: '/BillsOrderMaster/BillsOrderDelete',
    UPLOAD: '/BillsOrderMaster/UploadFiles',
  },

  // Supplier
  SUPPLIER: {
    GET: '/SupplierMaster/GetSupplier',
  },

  // Payment Terms
  PAYMENT_TERMS: {
    SELECT: '/PaymentTermsMaster/SelectPaymentTerms',
  },

  // Item Master
  ITEM_MASTER: {
    GET_PRODUCT_LIST: '/ItemMaster/GetProductList',
  },

  // Job Master
  JOB_MASTER: {
    SEARCH: '/JobMaster/SearchJob',
  },

  // Planning
  PLANNING: {
    LIST: '/api/planning/list',
    GET: (id) => `/api/planning/${id}`,
    MAX_NO: (companyId) => `/api/planning/max-no/${companyId}`,
    SAVE: '/api/planning/save',
    UPDATE: '/api/planning/update',
    DELETE: (id) => `/api/planning/${id}`,
    UPDATE_DATES: '/api/planning/update-dates',
    SEARCH: '/api/planning/search',
    SORT: '/api/planning/sort',
    PUSH_RTI: '/api/planning/push-rti',
  },

  // Vessel Planning
  VESSEL_PLANNING: {
    SELECT: '/VESSELPLANING/SelectVESSELPLANING',
    SELECT_BY_ID: '/VESSELPLANING/SelectVESSELPLANINGById',
    MAX_NO: '/VESSELPLANING/MaxVESSELPLANINGNo',
    SAVE: '/VESSELPLANING/SaveVESSELPLANING',
    DELETE: '/VESSELPLANING/DeleteVESSELPLANING',
  },

  // Vessel Planning Sale Order Actions
  VESSEL_SALE_ORDER: {
    SEARCH_PLANNING: '/SaleOrder/SearchSaleOrdersForPlanning',
    UPDATE_DETAILS: '/SaleOrder/UpdateSaleOrderDetails',
  },
};

