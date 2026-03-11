import { useState } from 'react';
import { X, Plus, Trash2, MapPin } from 'lucide-react';

const AddressListModal = ({ isOpen, onClose, type = 'pickup', addresses = [], onSave }) => {
  const [localAddresses, setLocalAddresses] = useState(addresses);

  const handleAddRow = () => {
    setLocalAddresses([...localAddresses, { address: '', quantity: '', dateTime: '' }]);
  };

  const handleDeleteRow = (index) => {
    setLocalAddresses(localAddresses.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const updated = [...localAddresses];
    updated[index][field] = value;
    setLocalAddresses(updated);
  };

  const handleSave = () => {
    onSave(localAddresses.filter(addr => addr.address.trim()));
    onClose();
  };

  if (!isOpen) return null;

  const title = type === 'pickup' ? 'Pickup Addresses' : 'Delivery Addresses';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl mx-4 max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-3">
            {localAddresses.map((addr, index) => (
              <div key={index} className="flex gap-2 items-start bg-gray-50 p-3 rounded-lg">
                <div className="flex-1 grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Address</label>
                    <textarea
                      value={addr.address}
                      onChange={(e) => handleChange(index, 'address', e.target.value)}
                      rows={2}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500"
                      placeholder="Enter address"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Quantity</label>
                    <input
                      type="number"
                      value={addr.quantity}
                      onChange={(e) => handleChange(index, 'quantity', e.target.value)}
                      className="w-full h-8 px-2 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500"
                      placeholder="Qty"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Date & Time</label>
                    <input
                      type="datetime-local"
                      value={addr.dateTime}
                      onChange={(e) => handleChange(index, 'dateTime', e.target.value)}
                      className="w-full h-8 px-2 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteRow(index)}
                  className="mt-6 p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={handleAddRow}
            className="mt-3 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Row
          </button>
        </div>

        <div className="flex justify-end gap-2 p-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressListModal;
