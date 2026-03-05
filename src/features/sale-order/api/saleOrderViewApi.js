import api from '../../../api/axios';

export const saleOrderViewApi = {
  getList: async (filters) => {
    const response = await api.post('/SaleOrder/GetSaleOrderView', filters);
    return response.data;
  },

  updateJobStatus: async (id, jobStatusId) => {
    const response = await api.post('/SaleOrder/UpdateJobStatus', { Id: id, JobStatusId: jobStatusId });
    return response.data;
  },

  convertToDO: async (soId, comid) => {
    const response = await api.post('/SaleOrder/DoConvert', { SoId: soId, Comid: comid });
    return response.data;
  },

  convertToInvoice: async (soId, comid) => {
    const response = await api.post('/SaleOrder/InvoiceConvert', { SoId: soId, Comid: comid });
    return response.data;
  }
};
