import { Plus, Trash2, Search } from 'lucide-react';
import { useState } from 'react';
import { AddressSearchModal } from '../common/AddressSearchModal';
import { useActiveAddresses } from '../../features/sale-order/hooks/useSaleOrderQueries';

export const MultiAddressManager = ({ type, addresses, onAddressChange, commonLocation, onCommonLocationChange }) => {
  const title = type === 'pickup' ? 'Pickup Addresses' : 'Delivery Addresses';
  const headerColor = type === 'pickup' ? 'bg-blue-600' : 'bg-green-600';
  const accentColor = type === 'pickup' ? 'blue' : 'green';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const companyId = 6;
  const { data: addressData } = useActiveAddresses(companyId);

  const addAddress = () => {
    onAddressChange([...addresses, { id: Date.now(), address: '', datetime: '', weight: '', quantity: '', dateRequired: true }]);
  };

  const removeAddress = (id) => {
    onAddressChange(addresses.filter(addr => addr.id !== id));
  };

  const updateAddress = (id, field, value) => {
    onAddressChange(addresses.map(addr => addr.id === id ? { ...addr, [field]: value } : addr));
  };

  const openAddressModal = (addressId) => {
    setSelectedAddressId(addressId);
    setIsModalOpen(true);
  };

  const handleAddressSelect = (selectedAddress) => {
    if (selectedAddressId) {
      updateAddress(selectedAddressId, 'address', selectedAddress);
    }
  };

  const getTotalWeight = () => addresses.reduce((sum, addr) => sum + (parseFloat(addr.weight) || 0), 0);
  const getTotalQuantity = () => addresses.reduce((sum, addr) => sum + (parseFloat(addr.quantity) || 0), 0);

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
      {/* Header */}
      <div className={`${headerColor} px-4 py-2.5 flex items-center justify-between`}>
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-bold text-white">{title}</h3>
          <span className="text-xs text-black bg-white bg-opacity-20 px-2 py-0.5 rounded">
            {getTotalWeight().toFixed(2)} kg | {getTotalQuantity()} pkg
          </span>
        </div>
        <button 
          onClick={addAddress}
          className="px-3 py-1.5 bg-white text-gray-700 rounded text-xs font-semibold hover:bg-gray-50 flex items-center gap-1.5"
        >
          <Plus className="w-3.5 h-3.5" /> Add
        </button>
      </div>

      {/* Common Location */}
      <div className="px-4 py-2.5 bg-gray-50 border-b">
        <label className="text-xs font-semibold text-gray-700 mb-1 block">
          {type === 'pickup' ? 'Origin' : 'Destination'}
        </label>
        <input
          type="text"
          value={commonLocation || ''}
          onChange={(e) => onCommonLocationChange(e.target.value)}
          placeholder={type === 'pickup' ? 'Origin location' : 'Destination location'}
          className="w-full h-8 px-3 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100 bg-white"
        />
      </div>

      {/* Addresses List */}
      <div className="p-3 space-y-2.5">
        {addresses.length === 0 ? (
          <div className="text-center py-6 text-gray-400">
            <p className="text-xs">No addresses added</p>
          </div>
        ) : (
          addresses.map((addr, index) => (
            <div key={addr.id} className="border border-gray-300 rounded-lg p-3 bg-gray-50">
              {/* Header */}
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-bold text-${accentColor}-600`}>#{index + 1}</span>
                <button
                  onClick={() => removeAddress(addr.id)}
                  className="text-red-500 hover:text-red-700 text-xs"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Address */}
              <div className="mb-2">
                <div className="relative">
                  <input
                    value={addr.address}
                    onChange={(e) => updateAddress(addr.id, 'address', e.target.value)}
                    placeholder="Address"
                    className="w-full px-2 py-1.5 pr-8 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100 bg-white"
                  />
                  <button
                    onClick={() => openAddressModal(addr.id)}
                    className="absolute right-1 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-blue-600 rounded"
                  >
                    <Search className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Fields */}
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[10px] font-semibold text-gray-600">Date/Time</label>
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={addr.dateRequired || false}
                        onChange={(e) => updateAddress(addr.id, 'dateRequired', e.target.checked)}
                        className="w-3 h-3 rounded"
                      />
                      <span className="text-[9px] text-gray-500">{addr.dateRequired ? 'Req' : 'Opt'}</span>
                    </label>
                  </div>
                  <input
                    type="datetime-local"
                    value={addr.datetime}
                    onChange={(e) => updateAddress(addr.id, 'datetime', e.target.value)}
                    disabled={!addr.dateRequired}
                    className={`w-full h-8 px-1.5 border rounded text-[10px] focus:outline-none ${
                      addr.dateRequired ? 'border-gray-300 bg-white' : 'border-gray-200 bg-gray-100 opacity-60'
                    }`}
                  />
                </div>
                <div>
                  <label className="text-[10px] font-semibold text-gray-600 mb-1 block">Weight (kg)</label>
                  <input
                    type="text"
                    value={addr.weight}
                    onChange={(e) => updateAddress(addr.id, 'weight', e.target.value)}
                    placeholder="0.00"
                    className="w-full h-8 px-2 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500 bg-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-semibold text-gray-600 mb-1 block">Quantity</label>
                  <input
                    type="text"
                    value={addr.quantity}
                    onChange={(e) => updateAddress(addr.id, 'quantity', e.target.value)}
                    placeholder="0"
                    className="w-full h-8 px-2 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500 bg-white"
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <AddressSearchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        addresses={addressData?.data || []}
        onSelect={handleAddressSelect}
      />
    </div>
  );

};
