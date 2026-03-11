import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import toast from 'react-hot-toast';
import { PageHeader } from '../../../components/ui/FormLayout';
import { Button } from '../../../components/common/Button';
import SearchableDatatable from '../../../components/common/SearchableDatatable';
import { customerColumns } from './CustomerListColumns';
import { useConfirm } from '../../../hooks/useConfirm';
import {
  getCustomerId,
  useCustomers,
  useDeleteCustomer,
} from '../../../features/customer';

const CUSTOMER_LIST_FILTERS = {
  companyId: 6,
};


export default function CustomerList() {
  const navigate = useNavigate();
  const { confirm, ConfirmUI } = useConfirm();
  
  const {
    data: customers = [],
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  } = useCustomers(CUSTOMER_LIST_FILTERS);

  const deleteMutation = useDeleteCustomer({
    onSuccess: () => {
      toast.success('Customer deleted successfully');
    },
    onError: (deleteError) => {
      const message =
        deleteError?.response?.data?.message ||
        deleteError?.message ||
        'Unable to delete customer';
      toast.error(message);
    },
  });

  const handleView = (customer) => {

  };

  const handleEdit = (customer) => {

  };

  const handleDelete = async (customer) => {
    const confirmed = await confirm('delete');
    if (!confirmed) {
      return;
    }

    const customerId = getCustomerId(customer);
    if (!customerId) {
      toast.error('Invalid customer id');
      return;
    }

    deleteMutation.mutate(customerId);
  };

  const handleAddCustomer = () => {
     navigate('/customer');
  };

  const columns = customerColumns(handleView, handleEdit, handleDelete);

  return (
    <>
      {ConfirmUI}
      <div style={{ backgroundColor: 'var(--color-background)', padding: 'var(--spacing-6)' }}>
      <PageHeader 
        title="Customer Management" 
        subtitle="Manage and view all customer records"
        actions={
          <div className="flex items-center gap-2">
            {isError && (
              <Button variant="outline" onClick={() => refetch()}>
                Retry
              </Button>
            )}
           
            <Button variant="primary" onClick={handleAddCustomer} leftIcon={<Plus className="w-4 h-4" />}>
              Add Customer
            </Button>
          </div>
        }
      />

      <SearchableDatatable
      title  ="Customer List"
        columns={columns}
        data={customers}
        loading={isLoading || isFetching}
        searchPlaceholder="Search by name, code, email..."
        emptyMessage="No customers found"
      />
      {isError && (
        <p className="mt-3 text-sm" style={{ color: 'var(--color-danger)' }}>
          {error?.message || 'Failed to load customers'}
        </p>
      )}
      </div>
    </>
  );
}
