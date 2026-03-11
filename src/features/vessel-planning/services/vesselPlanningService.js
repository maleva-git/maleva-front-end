import { format } from 'date-fns';

export const vesselPlanningService = {
  formatDate: (date, formatStr = 'dd/MM/yyyy') => {
    if (!date) return '';
    try {
      return format(new Date(date), formatStr);
    } catch {
      return '';
    }
  },

  formatForApi: (date, formatStr = 'yyyy/MM/dd') => {
    if (!date) return null;
    try {
      return format(new Date(date), formatStr);
    } catch {
      return null;
    }
  },

  transformToForm: (apiData) => ({
    ...apiData,
    PlaningDate: apiData.PlaningDate ? new Date(apiData.PlaningDate) : new Date(),
    FromDate: apiData.FromDate ? new Date(apiData.FromDate) : new Date(),
    ToDate: apiData.ToDate ? new Date(apiData.ToDate) : new Date(),
    Details: apiData.Details?.map(d => ({
      ...d,
      ETA: d.ETA ? new Date(d.ETA) : null,
      ETB: d.ETB ? new Date(d.ETB) : null,
      ETD: d.ETD ? new Date(d.ETD) : null,
      OETA: d.OETA ? new Date(d.OETA) : null,
      OETB: d.OETB ? new Date(d.OETB) : null,
      OETD: d.OETD ? new Date(d.OETD) : null,
    })) || [],
  }),

  transformToApi: (formData, comId) => ({
    Id: formData.Id || 0,
    PlaningNo: formData.PlaningNo,
    PlaningDate: vesselPlanningService.formatForApi(formData.PlaningDate),
    Remarks: formData.Remarks || '',
    Comid: comId,
    Details: formData.Details.map(d => ({
      ...d,
      ETA: vesselPlanningService.formatForApi(d.ETA, 'yyyy/MM/dd HH:mm'),
      ETB: vesselPlanningService.formatForApi(d.ETB, 'yyyy/MM/dd HH:mm'),
      ETD: vesselPlanningService.formatForApi(d.ETD, 'yyyy/MM/dd HH:mm'),
      OETA: vesselPlanningService.formatForApi(d.OETA, 'yyyy/MM/dd HH:mm'),
      OETB: vesselPlanningService.formatForApi(d.OETB, 'yyyy/MM/dd HH:mm'),
      OETD: vesselPlanningService.formatForApi(d.OETD, 'yyyy/MM/dd HH:mm'),
    })),
  }),

  filterOrders: (orders, searchText, portFilter) => {
    let filtered = [...orders];
    if (searchText) {
      const terms = searchText.split(',').map(s => s.trim().toUpperCase());
      filtered = filtered.filter(o => 
        terms.some(t => 
          o.SPort?.toUpperCase().includes(t) ||
          o.Origin?.toUpperCase().includes(t) ||
          o.Destination?.toUpperCase().includes(t)
        )
      );
    }
    if (portFilter) {
      filtered = filtered.filter(o => 
        o.SPort?.toUpperCase().includes(portFilter.toUpperCase())
      );
    }
    return filtered;
  },

  calculateBoardingAmounts: (officer1, officer2) => {
    if (officer1 && officer2) return { amount1: 30, amount2: 30 };
    if (officer1 || officer2) return { amount1: 50, amount2: 0 };
    return { amount1: 0, amount2: 0 };
  },

  sortDetails: (details) => 
    [...details].sort((a, b) => (a.SortBy || 0) - (b.SortBy || 0)),
};
