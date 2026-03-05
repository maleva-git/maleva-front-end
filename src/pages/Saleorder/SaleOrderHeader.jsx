import { useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, FileText, FileCheck, Save, Send } from 'lucide-react';
import ComboBox from "../../components/common/Customercombo";
import SearchableSelect from "../../components/common/SearchableSelect";
import { useJobNumber } from './useSaleOrderQueries';

export const SaleOrderHeader = ({
  formData,
  handleChange,
  countryOptions,
  customerOptions,
  customers = [],
  jobTypeOptions,
  statusOptions,
  onView,
  onPO,
  onQuote,
  onSave
}) => {
  const navigate = useNavigate();
  const [showCustomerPopup, setShowCustomerPopup] = useState(false);

  const companyId = 6;
  const { data: jobNumberData } = useJobNumber(companyId, formData.jobCategory);

  useEffect(() => {
    console.log('Job Number Data:', jobNumberData);
    if (jobNumberData?.ok && jobNumberData?.No) {
      console.log('Setting Job No:', jobNumberData.No);
      handleChange('jobNo')({ target: { value: jobNumberData.No } });
    }
  }, [jobNumberData]);

  const selectedCustomer = useMemo(() => {
    const selectedId = String(formData.customerId ?? '');
    if (!selectedId) return null;

    return customers.find((cust) => {
      const custId = String(cust.id ?? cust.customerId ?? cust.accountCode ?? '');
      return custId === selectedId;
    }) ?? null;
  }, [customers, formData.customerId]);

  const getFirstValue = (obj, keys, fallback = '-') => {
    for (const key of keys) {
      const value = obj?.[key];
      if (value !== undefined && value !== null && String(value).trim() !== '') {
        return String(value);
      }
    }
    return fallback;
  };

  const customerDetails = {
    name: getFirstValue(selectedCustomer, ['customerName', 'name']),
    customerCode: getFirstValue(selectedCustomer, ['customerCode', 'customerNo', 'accountCode', 'customerId']),
    address: getFirstValue(selectedCustomer, ['address', 'billingAddress', 'address1', 'street']),
    phone: getFirstValue(selectedCustomer, ['mobileNo', 'phone', 'telephoneNo']),
    code: getFirstValue(selectedCustomer, ['accountCode', 'companyCode', 'code']),
    terms: getFirstValue(selectedCustomer, ['termsName', 'terms', 'paymentTerms'])
  };

  return (
    <div className="bg-white mb-4 rounded-lg shadow-md border border-blue-600">
      <div className="px-3 sm:px-4 py-3">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-12 gap-2 sm:gap-3">
          {/* Job No */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <label className="block text-[13px] font-semibold text-gray-600 mb-1 uppercase">Job No</label>
            <input 
              type="text" 
              value={formData.jobNo || ''} 
              readOnly
              className="w-full h-8 px-3 bg-gray-50 border border-gray-300 rounded-lg text-xs font-semibold text-gray-800"
            />
          </div>

          {/* Job Date */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <label className="block text-[13px] font-semibold text-gray-600 mb-1 uppercase">
              Job Date <span className="text-red-500">*</span>
            </label>
            <input 
              type="date" 
              value={formData.jobDate} 
              onChange={handleChange('jobDate')}
              className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Job Category */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <label className="block text-[13px] font-semibold text-gray-600 mb-1 uppercase">
              Type of Job <span className="text-red-500">*</span>
            </label>
            <select 
              value={formData.jobCategory} 
              onChange={handleChange('jobCategory')}
              className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 cursor-pointer"
            >
              <option value="">Select Category</option>
              {countryOptions.map(opt => <option key={opt.value || opt.label} value={opt.label}>{opt.label}</option>)}
            </select>
          </div>

          {/* Sale Type */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <label className="block text-[13px] font-semibold text-gray-600 mb-1 uppercase">
              Sale Type <span className="text-red-500">*</span>
            </label>
            <select 
              value={formData.saleType || 'CASH'} 
              onChange={handleChange('saleType')}
              className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 cursor-pointer"
            >
              <option value="CASH">CASH</option>
              <option value="CREDIT">CREDIT</option>
            </select>
          </div>

          {/* Reference */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <label className="block text-[13px] font-semibold text-gray-600 mb-1 uppercase">Reference</label>
            <input 
              type="text" 
              value={formData.reference || ''}
              onChange={handleChange('reference')}
              placeholder="Reference"
              className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 placeholder-gray-400"
            />
          </div>

        

          {/* Action Buttons */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2 flex flex-wrap gap-1">
            <button 
              onClick={() => navigate('/sale-order/view')}
              className="flex-1 min-w-[45px] h-8 px-1.5 sm:px-2 bg-white border border-gray-300 rounded-lg text-[9px] sm:text-[10px] font-semibold text-gray-700 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600 transition-all flex items-center justify-center gap-0.5 sm:gap-1"
            >
              <Eye className="w-3 h-3" />
              <span className="hidden sm:inline">View</span>
            </button>
            <button 
              onClick={onPO}
              className="flex-1 min-w-[45px] h-8 px-1.5 sm:px-2 bg-white border border-gray-300 rounded-lg text-[9px] sm:text-[10px] font-semibold text-gray-700 hover:bg-purple-50 hover:border-purple-400 hover:text-purple-600 transition-all flex items-center justify-center gap-0.5 sm:gap-1"
            >
              <FileText className="w-3 h-3" />
              <span className="hidden sm:inline">NoPO</span>
            </button>
            <button 
              onClick={onQuote}
              className="flex-1 min-w-[45px] h-8 px-1.5 sm:px-2 bg-white border border-gray-300 rounded-lg text-[9px] sm:text-[10px] font-semibold text-gray-700 hover:bg-orange-50 hover:border-orange-400 hover:text-orange-600 transition-all flex items-center justify-center gap-0.5 sm:gap-1"
            >
              <FileCheck className="w-3 h-3" />
              <span className="hidden sm:inline">Quote</span>
            </button>
            <button 
              onClick={onSave}
              className="flex-1 min-w-[45px] h-8 px-1.5 sm:px-2 bg-blue-600 text-white rounded-lg text-[9px] sm:text-[10px] font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-0.5 sm:gap-1 shadow-sm"
            >
              <Save className="w-3 h-3" />
              <span className="hidden sm:inline">Save</span>
            </button>
            <button 
              onClick={onSave}
              className="flex-1 min-w-[45px] h-8 px-1.5 sm:px-2 bg-green-600 text-white rounded-lg text-[9px] sm:text-[10px] font-bold hover:bg-green-700 transition-all flex items-center justify-center gap-0.5 sm:gap-1 shadow-sm"
            >
              <Send className="w-3 h-3" />
              <span className="hidden sm:inline">Push PO</span>
            </button>
          </div>

          {/* Customer Name */}
          <ComboBox
            label="Customer Name"
            required={true}
            value={formData.customerId}
            onChange={handleChange("customerId")}
            options={customerOptions}
            placeholder="Select Customer"
            endAdornment={(
              <button
                type="button"
                onClick={() => setShowCustomerPopup(true)}
                disabled={!selectedCustomer}
                title={selectedCustomer ? "View customer details" : "Select customer first"}
                className="h-6 w-6 rounded-md border border-gray-300 bg-white text-gray-600 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <Eye className="w-3.5 h-3.5" />
              </button>
            )}
          />

          {/* Job Type */}
          <SearchableSelect
            label="Job Type"
            required={true}
            value={formData.jobType}
            onChange={handleChange("jobType")}
            options={jobTypeOptions}
            containerClassName="col-span-2 sm:col-span-2 lg:col-span-2"
            placeholder="Select Job Type"
          />

          {/* Job Status */}
          <SearchableSelect
            label="Status"
            required={true}
            value={formData.status}
            onChange={handleChange("status")}
            options={statusOptions}
            containerClassName="col-span-2 sm:col-span-2 lg:col-span-2"
            placeholder="Select Status"
          />

          {/* Remarks */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <label className="block text-[13px] font-semibold text-gray-600 mb-1 uppercase">Remarks</label>
            <input 
              type="text" 
              value={formData.remarks || ''}
              onChange={handleChange('remarks')}
              placeholder="Remarks"
              className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 placeholder-gray-400"
            />
          </div>

            {/* Total Amount */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <label className="block text-[13px] font-semibold text-gray-600 mb-1 text-center uppercase">Total</label>
            <div className="h-8 px-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-400 rounded-lg flex items-center justify-center">
              <span className="text-base sm:text-lg font-bold text-green-700">RM {formData.totalAmount}</span>
            </div>
          </div>

          {/* DO Description */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <label className="block text-[13px] font-semibold text-gray-600 mb-1 uppercase">DO Description</label>
            <textarea 
              value={formData.doDescription || ''}
              onChange={handleChange('doDescription')}
              placeholder="Description"
              className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-xs bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 placeholder-gray-400 resize-none"
              rows={1}
            />
          </div>
        </div>
      </div>



      {showCustomerPopup && (
        <div
          className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
          onClick={() => setShowCustomerPopup(false)}
        >
          <div
            className="w-full max-w-2xl bg-white rounded-lg shadow-xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-800 uppercase">Customer Details</h3>
              <button
                type="button"
                onClick={() => setShowCustomerPopup(false)}
                className="text-xs font-semibold text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </div>
            <div className="p-4 space-y-2 text-xs text-gray-800">
              <p><span className="font-semibold">NAME :</span> {customerDetails.name}</p>
              <p><span className="font-semibold">Customer Code :</span> {customerDetails.customerCode}</p>
              <p><span className="font-semibold">ADDRESS :</span> {customerDetails.address}</p>
              <p><span className="font-semibold">PHONE :</span> {customerDetails.phone}</p>
              <p><span className="font-semibold">Code :</span> {customerDetails.code}</p>
              <p><span className="font-semibold">Terms :</span> {customerDetails.terms}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

