// Example usage of AddnewitemTable with status toggle

import AddnewitemTable from './components/table/addabletable';

// Example columns configuration
const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'address', label: 'Address', modalEdit: true }, // Opens modal on Enter
  { key: 'status', label: 'Status', type: 'status' }, // Status toggle column
];

// Example data
const sampleData = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: '123 Main St',
    status: 'active'
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '098-765-4321',
    address: '456 Oak Ave',
    status: 'inactive'
  }
];

function ExampleUsage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Employee Management</h1>
      
      <AddnewitemTable
        columns={columns}
        tableName="employees"
        data={sampleData}
      />
    </div>
  );
}

export default ExampleUsage;