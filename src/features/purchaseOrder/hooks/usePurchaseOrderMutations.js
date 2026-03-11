import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from '../../../api/axios';

export const usePurchaseOrderList = (filters, enabled = false) => {
  return useQuery({
    queryKey: ['purchaseOrders', filters],
    queryFn: async () => {
      const response = await apiClient.post('/BillsOrderMaster/BillsOrderView', filters);
      return response.data;
    },
    enabled,
    staleTime: 2 * 60 * 1000,
  });
};

export const usePurchaseOrderById = (id) => {
  return useQuery({
    queryKey: ['purchaseOrder', id],
    queryFn: async () => {
      const response = await apiClient.post('/BillsOrderMaster/BillsOrderEdit', { Id: id });
      return response.data;
    },
    enabled: !!id && id !== 0,
    staleTime: 1 * 60 * 1000,
  });
};

export const useSavePurchaseOrder = (options = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiClient.post('/BillsOrderMaster/BillsOrderSave', data);
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['purchaseOrders'] });
      queryClient.invalidateQueries({ queryKey: ['purchaseOrder'] });
      options.onSuccess?.(data);
    },
    onError: (error) => {
      options.onError?.(error);
    },
  });
};

export const useDeletePurchaseOrder = (options = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const response = await apiClient.post('/BillsOrderMaster/BillsOrderDelete', { Id: id });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['purchaseOrders'] });
      options.onSuccess?.();
    },
    onError: (error) => {
      options.onError?.(error);
    },
  });
};

export const useUploadFiles = (options = {}) => {
  return useMutation({
    mutationFn: async (formData) => {
      const response = await apiClient.post('/BillsOrderMaster/UploadFiles', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      return response.data;
    },
    onSuccess: (data) => {
      options.onSuccess?.(data);
    },
    onError: (error) => {
      options.onError?.(error);
    },
  });
};

export const useSearchJob = (comid, options = {}) => {
  return useMutation({
    mutationFn: async (keyword) => {
      const response = await apiClient.post('/JobMaster/SearchJob', { Comid: comid, Keyword: keyword });
      return response.data;
    },
    onSuccess: (data) => {
      options.onSuccess?.(data);
    },
    onError: (error) => {
      options.onError?.(error);
    },
  });
};
