
import { Plus, MapPin, ChevronRight } from 'lucide-react';
import PageHeader from '../../components/layout/PageHeader';
import AddnewitemTable from '../../components/table/addabletable';

import { AddressMasterColumns } from './AddressmasterColumn';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAddresses, deleteAddress } from '../../api/adressapi';

export default function AddressMaster() {

  const queryClient = useQueryClient();
  const { data = [], isLoading } = useQuery({
    queryKey: ['addresses'],
    queryFn: getAddresses
  });

    // ✅ DELETE (mock API)
    const deleteMutation = useMutation({
      mutationFn: deleteAddress,
      onSuccess: () => {
        queryClient.invalidateQueries(['addresses']);
      }
    });
  
    const onDelete = (id) => {
      deleteMutation.mutate(id);
    };
  
    if (isLoading) {
      return <div className="p-6">Loading...</div>;
    }


  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F9FC' }}>
      {/* Premium Header Section - Responsive */}
      <div className="bg-white shadow-sm border-b border-gray-100 px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
       

        {/* Header Content - Responsive */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-3 lg:space-x-4">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <MapPin className="text-white" size={20} />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900 tracking-tight">Address Master</h1>
              <p className="text-gray-500 mt-1 text-sm lg:text-base hidden sm:block">Manage agent addresses and locations</p>
            </div>
          </div>         
        </div>
      </div>

      {/* Main Content - Responsive */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <AddnewitemTable
          columns={AddressMasterColumns({ onDelete })}
          tableName="address"
          data={data}
          maxHeight="calc(100vh - 200px)"
        />
      </div>
    </div>
  );
} 