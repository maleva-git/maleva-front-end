import { useState } from 'react';
import { X, Calendar, Save } from 'lucide-react';

const UpdateSaleOrderModal = ({ isOpen, onClose, jobNo, jobNoId, onUpdate }) => {
  const [formData, setFormData] = useState({
    pickupDate: '',
    deliveryDate: '',
    warehouseEnterDate: '',
    warehouseExitDate: '',
    warehouseAddress: '',
    pickupDateEnabled: true,
    deliveryDateEnabled: true,
    warehouseEnterEnabled: true,
    warehouseExitEnabled: true
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleUpdate = async (type) => {
    const payload = {
      Id: jobNoId,
      Type: type,
      PickupDate: formData.pickupDateEnabled ? formData.pickupDate : null,
      DeliveryDate: formData.deliveryDateEnabled ? formData.deliveryDate : null,
      WareHouseEnterDate: formData.warehouseEnterEnabled ? formData.warehouseEnterDate : null,
      WareHouseExitDate: formData.warehouseExitEnabled ? formData.warehouseExitDate : null,
      WareHouseAddress: formData.warehouseAddress
    };
    await onUpdate(payload);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-800">Update Sale Order</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Job No</label>
            <input
              type="text"
              value={jobNo}
              readOnly
              className="w-full h-9 px-3 border border-gray-300 rounded-lg text-sm bg-gray-50"
            />
          </div>

          <div className="grid grid-cols-12 gap-3 items-center">
            <div className="col-span-8">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Pickup Date</label>
              <input
                type="datetime-local"
                value={formData.pickupDate}
                onChange={(e) => handleChange('pickupDate', e.target.value)}
                className="w-full h-9 px-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="col-span-2 flex items-end">
              <input
                type="checkbox"
                checked={formData.pickupDateEnabled}
                onChange={(e) => handleChange('pickupDateEnabled', e.target.checked)}
                className="w-4 h-4"
              />
            </div>
            <div className="col-span-2 flex items-end">
              <button
                onClick={() => handleUpdate(1)}
                className="w-full px-3 py-2 bg-yellow-500 text-white rounded-lg text-xs font-semibold hover:bg-yellow-600"
              >
                <Save className="w-4 h-4 mx-auto" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-3 items-center">
            <div className="col-span-8">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Delivery Date</label>
              <input
                type="datetime-local"
                value={formData.deliveryDate}
                onChange={(e) => handleChange('deliveryDate', e.target.value)}
                className="w-full h-9 px-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="col-span-2 flex items-end">
              <input
                type="checkbox"
                checked={formData.deliveryDateEnabled}
                onChange={(e) => handleChange('deliveryDateEnabled', e.target.checked)}
                className="w-4 h-4"
              />
            </div>
            <div className="col-span-2 flex items-end">
              <button
                onClick={() => handleUpdate(2)}
                className="w-full px-3 py-2 bg-yellow-500 text-white rounded-lg text-xs font-semibold hover:bg-yellow-600"
              >
                <Save className="w-4 h-4 mx-auto" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-3 items-center">
            <div className="col-span-8">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Warehouse Enter Date</label>
              <input
                type="datetime-local"
                value={formData.warehouseEnterDate}
                onChange={(e) => handleChange('warehouseEnterDate', e.target.value)}
                className="w-full h-9 px-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="col-span-2 flex items-end">
              <input
                type="checkbox"
                checked={formData.warehouseEnterEnabled}
                onChange={(e) => handleChange('warehouseEnterEnabled', e.target.checked)}
                className="w-4 h-4"
              />
            </div>
            <div className="col-span-2 flex items-end">
              <button
                onClick={() => handleUpdate(3)}
                className="w-full px-3 py-2 bg-yellow-500 text-white rounded-lg text-xs font-semibold hover:bg-yellow-600"
              >
                <Save className="w-4 h-4 mx-auto" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-3 items-center">
            <div className="col-span-8">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Warehouse Exit Date</label>
              <input
                type="datetime-local"
                value={formData.warehouseExitDate}
                onChange={(e) => handleChange('warehouseExitDate', e.target.value)}
                className="w-full h-9 px-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="col-span-2 flex items-end">
              <input
                type="checkbox"
                checked={formData.warehouseExitEnabled}
                onChange={(e) => handleChange('warehouseExitEnabled', e.target.checked)}
                className="w-4 h-4"
              />
            </div>
            <div className="col-span-2 flex items-end">
              <button
                onClick={() => handleUpdate(4)}
                className="w-full px-3 py-2 bg-yellow-500 text-white rounded-lg text-xs font-semibold hover:bg-yellow-600"
              >
                <Save className="w-4 h-4 mx-auto" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-3 items-center">
            <div className="col-span-10">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Warehouse Address</label>
              <textarea
                value={formData.warehouseAddress}
                onChange={(e) => handleChange('warehouseAddress', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="col-span-2 flex items-end">
              <button
                onClick={() => handleUpdate(5)}
                className="w-full px-3 py-2 bg-yellow-500 text-white rounded-lg text-xs font-semibold hover:bg-yellow-600"
              >
                <Save className="w-4 h-4 mx-auto" />
              </button>
            </div>
          </div>

          <button
            onClick={() => handleUpdate(0)}
            className="w-full px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700"
          >
            SAVE ALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateSaleOrderModal;
