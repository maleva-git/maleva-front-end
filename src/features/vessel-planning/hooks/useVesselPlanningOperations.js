import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { vesselPlanningApi } from '../api/vesselPlanningApi';
import { vesselPlanningService } from '../services/vesselPlanningService';
import { toast } from 'react-toastify';

export const useVesselPlanningOperations = () => {
  const queryClient = useQueryClient();
  const comId = localStorage.getItem('Comid');

  const saveMutation = useMutation({
    mutationFn: (data) => vesselPlanningApi.save(vesselPlanningService.transformToApi(data, comId)),
    onSuccess: (response) => {
      if (response.data?.ok) {
        toast.success('Planning saved successfully');
        queryClient.invalidateQueries(['vessel-planning']);
      } else {
        toast.error(response.data?.message || 'Failed to save');
      }
    },
    onError: () => toast.error('An error occurred'),
  });

  const updateMutation = useMutation({
    mutationFn: (data) => vesselPlanningApi.update(data),
    onSuccess: (response) => {
      if (response.data?.ok) {
        toast.success('Updated successfully');
        queryClient.invalidateQueries(['vessel-planning']);
      } else {
        toast.error(response.data?.message || 'Failed to update');
      }
    },
    onError: () => toast.error('An error occurred'),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => vesselPlanningApi.delete(id),
    onSuccess: (response) => {
      if (response.data?.ok) {
        toast.success('Deleted successfully');
        queryClient.invalidateQueries(['vessel-planning']);
      } else {
        toast.error(response.data?.message || 'Failed to delete');
      }
    },
    onError: () => toast.error('An error occurred'),
  });

  return {
    saveMutation,
    updateMutation,
    deleteMutation,
  };
};

export const useVesselPlanningData = (id) => {
  return useQuery({
    queryKey: ['vessel-planning', id],
    queryFn: async () => {
      const response = await vesselPlanningApi.getById(id);
      return vesselPlanningService.transformToForm(response.data?.data || response.data);
    },
    enabled: !!id,
  });
};

export const useMaxPlaningNo = () => {
  return useQuery({
    queryKey: ['vessel-planning', 'max-no'],
    queryFn: async () => {
      const response = await vesselPlanningApi.getMaxNo();
      return response.data?.No || '';
    },
  });
};
