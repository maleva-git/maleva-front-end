import api from '../../../api/axios';
import { API_ENDPOINTS } from '../../../api/endpoints';

/**
 * Sale Order View API — endpoints for the sale order list view and actions.
 * Uses centralized API_ENDPOINTS — no hard-coded strings.
 */
export const saleOrderViewApi = {
  /** Fetch sale orders for the view list with filters */
  getList: async (filters) => {
    const { data } = await api.post(API_ENDPOINTS.SALE_ORDER_VIEW.GET_VIEW, filters);
    return data?.data ?? data;
  },

  /** Update the job status of a sale order */
  updateJobStatus: async (id, jobStatusId) => {
    const { data } = await api.post(API_ENDPOINTS.SALE_ORDER_VIEW.UPDATE_JOB_STATUS, {
      Id: id,
      JobStatusId: jobStatusId,
    });
    return data?.data ?? data;
  },

  /** Convert a sale order to a Delivery Order */
  convertToDO: async (soId, comid) => {
    const { data } = await api.post(API_ENDPOINTS.SALE_ORDER_VIEW.CONVERT_TO_DO, {
      SoId: soId,
      Comid: comid,
    });
    return data?.data ?? data;
  },

  /** Convert a sale order to an Invoice */
  convertToInvoice: async (soId, comid) => {
    const { data } = await api.post(API_ENDPOINTS.SALE_ORDER_VIEW.CONVERT_TO_INVOICE, {
      SoId: soId,
      Comid: comid,
    });
    return data?.data ?? data;
  },
};
