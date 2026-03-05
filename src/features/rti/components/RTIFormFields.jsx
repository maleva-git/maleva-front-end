import React from 'react';
import Card from '../../../components/common/Card';
import SearchableSelect from '../../../components/common/SearchableSelect';
import SelectComboBox from '../../../components/common/SelectComboBox';

const RTIFormFields = ({ state, updateField, calculate, drivers = [], trucks = [], agentCompanies = [], agents = [], validateTruckLicense, onAgentCompanyChange }) => {
  
  const handleTruckChange = (e) => {
    const value = e.target.value;
    updateField('truckRefId', value);
    if (value && !state.editId) {
      validateTruckLicense(value);
    }
  };

  const handlePickupChange = (e) => {
    const value = e.target.value;
    updateField('pickup', value);
    if (value === 'NO') updateField('pickupCount', '');
    calculate();
  };

  const handleDropChange = (e) => {
    const value = e.target.value;
    updateField('addDrop', value);
    if (value === 'NO') updateField('dropCount', '');
    calculate();
  };

  return (
    <>
      {/* Card 1: RTI Overview */}
      <Card padding="sm" className="border-2 border-blue-400">
        <div className="grid grid-cols-6 gap-3">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">RTI No</label>
            <input type="text" value={state.rtiNo || ''} disabled className="w-full h-8 px-2 text-xs bg-gray-50 border border-gray-200 rounded text-gray-600 font-medium" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">RTI Date</label>
            <input type="date" value={state.rtiDate || new Date().toISOString().split('T')[0]} onChange={(e) => updateField('rtiDate', e.target.value)} className="w-full h-8 px-2 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <SearchableSelect
            label="Driver Name"
            value={state.driverRefId || ''}
            onChange={(e) => updateField('driverRefId', e.target.value)}
            options={[{ value: '', label: 'Select Driver' }, ...drivers.map(d => ({ value: d.Id, label: d.AccountName || d.DriverName }))]}
            containerClassName=""
            placeholder="Select Driver"
          />
          <SearchableSelect
            label="Vehicle Number"
            value={state.truckRefId || ''}
            onChange={(e) => { updateField('truckRefId', e.target.value); if (e.target.value && !state.editId) validateTruckLicense(e.target.value); }}
            options={[{ value: '', label: 'Select Vehicle' }, ...trucks.map(t => ({ value: t.Id, label: t.AccountName || t.TruckName }))]}
            containerClassName=""
            placeholder="Select Vehicle"
          />
          <SelectComboBox
            label="Enter"
            value={state.eLink || '1ST LINK'}
            onChange={(e) => updateField('eLink', e.target.value)}
            options={[{ value: '1ST LINK', label: '1ST LINK' }, { value: '2ND LINK', label: '2ND LINK' }]}
            containerClassName=""
          />
          <SelectComboBox
            label="Exit"
            value={state.exLink || '2ND LINK'}
            onChange={(e) => updateField('exLink', e.target.value)}
            options={[{ value: '1ST LINK', label: '1ST LINK' }, { value: '2ND LINK', label: '2ND LINK' }]}
            containerClassName=""
          />
        </div>
      </Card>

      {/* Card 2: Service Options */}
      <Card padding="sm" className="border-2 border-blue-400">
        <div className="space-y-3">
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" checked={state.punctuality || false} onChange={(e) => updateField('punctuality', e.target.checked)} className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-all" />
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Punctuality</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" checked={state.documentSub || false} onChange={(e) => updateField('documentSub', e.target.checked)} className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-all" />
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Document Submission</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" checked={state.pckHandling || false} onChange={(e) => updateField('pckHandling', e.target.checked)} className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-all" />
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Multiple Pickup Handling</span>
            </label>
          </div>
          <div className="grid grid-cols-6 gap-3">
            <SelectComboBox
              label="Sleeping Allowance"
              value={state.sleeping || 'NO'}
              onChange={(e) => { updateField('sleeping', e.target.value); calculate(); }}
              options={[{ value: 'YES', label: 'YES' }, { value: 'NO', label: 'NO' }]}
              containerClassName=""
            />
            <SelectComboBox
              label="Empty Pickup"
              value={state.exitYN || 'NO'}
              onChange={(e) => { updateField('exitYN', e.target.value); calculate(); }}
              options={[{ value: 'NO', label: 'NO' }, { value: 'EMPTY 80', label: 'EMPTY 80' }, { value: 'EMPTY 50', label: 'EMPTY 50' }]}
              containerClassName=""
            />
            <SelectComboBox
              label="Empty Delivery"
              value={state.emptyDeliveryYN || 'NO'}
              onChange={(e) => { updateField('emptyDeliveryYN', e.target.value); calculate(); }}
              options={[{ value: 'NO', label: 'NO' }, { value: 'EMPTY 80', label: 'EMPTY 80' }, { value: 'EMPTY 50', label: 'EMPTY 50' }]}
              containerClassName=""
            />
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Add Pickup</label>
              <div className="flex gap-2">
                <SelectComboBox
                  value={state.pickup || 'NO'}
                  onChange={handlePickupChange}
                  options={[{ value: 'YES', label: 'YES' }, { value: 'NO', label: 'NO' }]}
                  containerClassName="flex-1"
                />
                {state.pickup === 'YES' && (
                  <input type="number" value={state.pickupCount || ''} onChange={(e) => { updateField('pickupCount', e.target.value); calculate(); }} className="w-14 h-8 px-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="#" />
                )}
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Add Drop</label>
              <div className="flex gap-2">
                <SelectComboBox
                  value={state.addDrop || 'NO'}
                  onChange={handleDropChange}
                  options={[{ value: 'YES', label: 'YES' }, { value: 'NO', label: 'NO' }]}
                  containerClassName="flex-1"
                />
                {state.addDrop === 'YES' && (
                  <input type="number" value={state.dropCount || ''} onChange={(e) => { updateField('dropCount', e.target.value); calculate(); }} className="w-14 h-8 px-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="#" />
                )}
              </div>
            </div>
            <SelectComboBox
              label="Manpower"
              value={state.manpw || 'NO'}
              onChange={(e) => { updateField('manpw', e.target.value); calculate(); }}
              options={[{ value: 'NO', label: 'NO' }, { value: '1', label: '1' }, { value: '2', label: '2' }]}
              containerClassName=""
            />
          </div>
        </div>
      </Card>

      {/* Card 3: Route & Seal Info */}
      <Card padding="sm" className="col-span-2 border-2 border-blue-400">
        <div className="grid grid-cols-4 gap-3 mb-3">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Destination</label>
            <input type="text" value={state.destination || ''} onChange={(e) => updateField('destination', e.target.value)} className="w-full h-9 px-3 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Seal By</label>
            <input type="text" value={state.sealBy || ''} onChange={(e) => updateField('sealBy', e.target.value)} className="w-full h-9 px-3 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Break Seal By</label>
            <input type="text" value={state.breakSealBy || ''} onChange={(e) => updateField('breakSealBy', e.target.value)} className="w-full h-9 px-3 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" />
          </div>
       
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Remarks</label>
            <textarea value={state.remarks || ''} onChange={(e) => updateField('remarks', e.target.value)} rows={2} className="w-full h-[40px] px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-all" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Comments</label>
            <textarea value={state.comments || ''} onChange={(e) => updateField('comments', e.target.value)} rows={2} className="w-full h-[40px] px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-all" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Total Amount</label>
            <div className="flex items-center justify-center gap-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg px-4 h-[40px] border-2 border-green-300 shadow-sm">
              <span className="text-sm font-bold text-green-700">MYR</span>
              <span className="text-3xl font-bold text-green-700">{state.totalAmount?.toFixed(2) || '0.00'}</span>
            </div>
          </div>
        </div>
      </Card>


 
      
    </>
  );
};

export default RTIFormFields;
