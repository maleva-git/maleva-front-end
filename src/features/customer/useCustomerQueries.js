import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../../lib/queryClient';
import {
  buildCustomerSelectPayload,
  customerApi,
  DEFAULT_CUSTOMER_FILTERS,
} from './CustomerApi';

export function getCustomerId(customer) {
  return customer?.id ?? customer?.customerId ?? customer?.accountCode ?? null;
}

export function useCustomers(filters = {}, options = {}) {
  const payload = buildCustomerSelectPayload({
    ...DEFAULT_CUSTOMER_FILTERS,
    ...filters,
  });

  return useQuery({
    queryKey: queryKeys.customers.list(payload),
    queryFn: () => customerApi.fetchList(payload),
    staleTime: 1000 * 60 * 5,
    ...options,
  });
}

export function useDeleteCustomer(options = {}) {
  const queryClient = useQueryClient();
  const { onSuccess, onError, onSettled, ...mutationOptions } = options;

  return useMutation({
    mutationFn: customerApi.softDelete,
    ...mutationOptions,
    onSuccess: async (data, customerId, context) => {
      await queryClient.invalidateQueries({ queryKey: queryKeys.customers.lists() });
      await queryClient.invalidateQueries({ queryKey: queryKeys.customers.detail(customerId) });
      onSuccess?.(data, customerId, context);
    },
    onError: (error, customerId, context) => {
      onError?.(error, customerId, context);
    },
    onSettled: (data, error, customerId, context) => {
      onSettled?.(data, error, customerId, context);
    },
  });
}
