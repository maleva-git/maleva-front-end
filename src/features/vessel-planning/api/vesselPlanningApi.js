import api from '../../../api/axios';

export const vesselPlanningApi = {
  getList: (params) => 
    api.post('/VESSELPLANING/SelectVESSELPLANING', params),

  getById: (id) => 
    api.post('/VESSELPLANING/SelectVESSELPLANINGById', { 
      Id: id, 
      Comid: localStorage.getItem('Comid') 
    }),

  getMaxNo: () => 
    api.post('/VESSELPLANING/MaxVESSELPLANINGNo', { 
      Comid: localStorage.getItem('Comid'), 
      BillType: '' 
    }),

  searchSaleOrders: (params) => 
    api.post('/SaleOrder/SearchSaleOrdersForPlanning', params),

  save: (data) => 
    api.post('/VESSELPLANING/SaveVESSELPLANING', data),

  update: (data) => 
    api.post('/SaleOrder/UpdateSaleOrderDetails', data),

  delete: (id) => 
    api.post('/VESSELPLANING/DeleteVESSELPLANING', { 
      Id: id, 
      Comid: localStorage.getItem('Comid') 
    }),
};
