import api from '../../api/axios';
import { API_ENDPOINTS } from '../../api/endpoints';

export const DEFAULT_CUSTOMER_FILTERS = Object.freeze({
  companyId: 6,
  startIndex: -1,
  pageCount: 2000,
  keyword: '',
  column: 'All',
});
export function buildCustomerSelectPayload(filters = {}) {
  const merged = { ...DEFAULT_CUSTOMER_FILTERS, ...filters };

  return {
    companyId: Number(merged.companyId),
    startIndex: Number(merged.startIndex),
    pageCount: Number(merged.pageCount),
    keyword: String(merged.keyword ?? '').trim(),
    column: String(merged.column ?? 'All'),
  };
}

function normalizeCustomerRow(row = {}) {
  return {
    ...row,
    id: row.id ?? row.customerId ?? row.accountCode,
    customerName: row.customerName ?? '',
    accountCode: row.accountCode ?? '',
    companyCode: row.companyCode ?? '',
    mobileNo: row.mobileNo ?? row.phone ?? '',
    city: row.city ?? '',
    sName: row.sName ?? '',
    termsName: row.termsName ?? '',
    active: Number(row.active) === 1 ? 1 : 0,
  };
}

function extractCustomerRows(responseData) {
  const rows = responseData?.data;
  if (!Array.isArray(rows)) {
    return [];
  }

  return rows.map(normalizeCustomerRow);
}

export const customerApi = {
  fetchList: async (filters = {}) => {
    const payload = buildCustomerSelectPayload(filters);
    const { data } = await api.post(API_ENDPOINTS.CUSTOMER.SELECT, payload);
    return extractCustomerRows(data);
  },

  softDelete: async (customerId) => {
    const { data } = await api.put(API_ENDPOINTS.CUSTOMER.SOFT_DELETE(customerId));
    return data;
  },

  fetchAll: async (name) => {
    const { data } = await api.get(API_ENDPOINTS.CUSTOMER.LIST, {
      params: { ...(name && { name }) }
    });
    return data;
  },

  getById: async (id) => {
    const { data } = await api.get(API_ENDPOINTS.CUSTOMER.GET(id));
    return data;
  },

  create: async (customerDto) => {
    const { data } = await api.post(API_ENDPOINTS.CUSTOMER.CREATE, customerDto);
    return data;
  },

  update: async (id, customerDto) => {
    const { data } = await api.put(API_ENDPOINTS.CUSTOMER.UPDATE(id), customerDto);
    return data;
  },
};





// Backward-compatible exports
export const fetchCustomers = (filters) => customerApi.fetchList(filters);
export const deleteCustomer = (customerId) => customerApi.softDelete(customerId);
