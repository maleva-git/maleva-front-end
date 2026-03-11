import { useQueries } from '@tanstack/react-query';
import { purchaseOrderApi } from '../api/purchaseOrderApi';

export const usePurchaseOrderData = (comid) => {
  const queries = useQueries({
    queries: [
      {
        queryKey: ['suppliers', comid],
        queryFn: () => purchaseOrderApi.getSuppliers(comid),
        staleTime: 5 * 60 * 1000,
        enabled: !!comid,
      },
      {
        queryKey: ['paymentTerms', comid],
        queryFn: () => purchaseOrderApi.getPaymentTerms(comid),
        staleTime: 10 * 60 * 1000,
        enabled: !!comid,
      },
      {
        queryKey: ['drivers', comid],
        queryFn: () => purchaseOrderApi.getDrivers(comid),
        staleTime: 5 * 60 * 1000,
        enabled: !!comid,
      },
      {
        queryKey: ['trucks', comid],
        queryFn: () => purchaseOrderApi.getTrucks(comid),
        staleTime: 5 * 60 * 1000,
        enabled: !!comid,
      },
      {
        queryKey: ['products', comid],
        queryFn: () => purchaseOrderApi.getProducts(comid),
        staleTime: 5 * 60 * 1000,
        enabled: !!comid,
      },
      {
        queryKey: ['employees', comid],
        queryFn: () => purchaseOrderApi.getEmployees(comid),
        staleTime: 10 * 60 * 1000,
        enabled: !!comid,
      },
    ],
  });

  const [suppliersQuery, paymentTermsQuery, driversQuery, trucksQuery, productsQuery, employeesQuery] = queries;

  return {
    suppliers: suppliersQuery.data || [],
    paymentTerms: paymentTermsQuery.data || [],
    drivers: driversQuery.data || [],
    trucks: trucksQuery.data || [],
    products: productsQuery.data || [],
    employees: employeesQuery.data || [],
    loading: queries.some(q => q.isLoading),
    error: queries.find(q => q.error)?.error,
    refetch: () => queries.forEach(q => q.refetch()),
  };
};
