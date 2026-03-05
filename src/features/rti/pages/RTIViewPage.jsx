import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { rtiApi } from '../api/rtiApi';
import { useDriverDropdown, useTruckDropdown } from '../../../hooks/useDropdownLoader';
import { DataTable } from '../../../components/common/DataTable';

const RTIViewPage = () => {
  const navigate = useNavigate();
  const comid = localStorage.getItem('Comid');
  const employeeRefId = localStorage.getItem('EmployeeRefid') || 0;

  const [filters, setFilters] = useState({
    fromDate: new Date(),
    toDate: new Date(),
    driverId: null,
    truckId: null,
    rtiNo: '',
    employeeOnly: true,
  });

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const drivers = useDriverDropdown(comid);
  const trucks = useTruckDropdown(comid);

  const loadData = async () => {
    setLoading(true);
    try {
      const params = {
        fromdate: formatDate(filters.fromDate),
        todate: formatDate(filters.toDate),
        DId: filters.driverId || 0,
        TId: filters.truckId || 0,
        Comid: comid,
        Employeeid: filters.employeeOnly ? employeeRefId : 0,
        Search: filters.rtiNo,
      };
      
      const response = await rtiApi.getList(params);
      setData(response.data || []);
    } catch (error) {
      console.error('Error loading RTI list:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`;
  };

  const columns = [
    { header: 'RTI No', accessorKey: 'RTINo', size: 120 },
    { header: 'RTI Date', accessorKey: 'RTIDate', size: 120, cell: ({ getValue }) => new Date(getValue()).toLocaleDateString() },
    { header: 'Driver', accessorKey: 'DriverName', size: 200 },
    { header: 'Truck', accessorKey: 'TruckName', size: 150 },
    { header: 'Total Amount', accessorKey: 'TotalAmount', size: 120, cell: ({ getValue }) => `RM ${parseFloat(getValue()).toFixed(2)}` },
    {
      header: 'Actions',
      size: 100,
      cell: ({ row }) => (
        <button
          onClick={() => navigate(`/rti/edit/${row.original.Id}`)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Edit
        </button>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900">RTI List</h1>
          <p className="text-gray-500 mt-1">View and manage RTI records</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">From Date</label>
              <input
                type="date"
                value={filters.fromDate.toISOString().split('T')[0]}
                onChange={(e) => setFilters({ ...filters, fromDate: new Date(e.target.value) })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">To Date</label>
              <input
                type="date"
                value={filters.toDate.toISOString().split('T')[0]}
                onChange={(e) => setFilters({ ...filters, toDate: new Date(e.target.value) })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Driver</label>
              <select
                value={filters.driverId || ''}
                onChange={(e) => setFilters({ ...filters, driverId: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Drivers</option>
                {drivers.options.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Truck</label>
              <select
                value={filters.truckId || ''}
                onChange={(e) => setFilters({ ...filters, truckId: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Trucks</option>
                {trucks.options.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">RTI No</label>
              <input
                type="text"
                value={filters.rtiNo}
                onChange={(e) => setFilters({ ...filters, rtiNo: e.target.value })}
                placeholder="Search RTI No"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="mt-4 flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.employeeOnly}
                onChange={(e) => setFilters({ ...filters, employeeOnly: e.target.checked })}
                className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">Employee Only</span>
            </label>
            
            <button
              onClick={loadData}
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'View'}
            </button>
            
            <button
              onClick={() => navigate('/rti')}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              New RTI
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <DataTable
            data={data}
            columns={columns}
            editable={false}
          />
          
          {data.length === 0 && !loading && (
            <div className="text-center py-12 text-gray-500">
              No RTI records found. Click "View" to load data.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RTIViewPage;
