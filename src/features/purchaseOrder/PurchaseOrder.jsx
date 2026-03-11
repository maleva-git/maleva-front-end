import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Plus, Save, Eye, Upload, FileText, Receipt } from 'lucide-react';
import toast from 'react-hot-toast';
import SearchableSelect from '../../components/common/SearchableSelect';
import CompactSelect from '../../components/ui/CompactSelect';
import { usePurchaseOrderData } from './hooks/usePurchaseOrderData';
import { useSavePurchaseOrder } from './hooks/usePurchaseOrderMutations';
import PurchaseOrderGrid from './components/PurchaseOrderGrid';

import FileUploadModal from './components/FileUploadModal';
import { billStatusOptions, billDescriptionOptions } from './model/constants';
import { useRoleAccess } from '../../hooks/useRoleAccess';

const ALLOWED_ROLES = ['SUPERADMIN', 'ADMIN', 'PAYABLE', 'RECEIVABLE', 'CUSTOMER SERVICE'];

export default function PurchaseOrder() {
  const { userName, comid } = useRoleAccess(ALLOWED_ROLES);
  
  const { suppliers, paymentTerms, drivers, trucks, products } = usePurchaseOrderData(comid);
  
  const saveMutation = useSavePurchaseOrder({
    onSuccess: (data) => {
      if (data.ok) {
        toast.success('Purchase Order saved successfully!');
        if (data.Id || data.data?.Id) {
          const savedId = data.Id || data.data.Id;
          setEditId(savedId);
          setShowUploadModal(true);
        }
      } else {
        toast.error(data.message || 'Failed to save');
      }
    },
    onError: (error) => {
      toast.error(error.message || 'Error saving purchase order');
    },
  });
  
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(0);

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [dueDate, setDueDate] = useState('');

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      poNo: '',
      poDate: new Date().toISOString().split('T')[0],
      invoiceNo: '',
      invoiceDate: new Date().toISOString().split('T')[0],
      supplierId: '',
      description: '',
      paymentTermId: '',
      truckId: '',
      driverId: '',
      jobNo: '',
      remarks: '',
      status: 'ASSIGNED',
      payTo: '',
    }
  });

  const watchInvoiceDate = watch('invoiceDate');
  const watchSupplierId = watch('supplierId');

  useEffect(() => {
    calculateTotal();
  }, [items]);

  useEffect(() => {
    if (watchInvoiceDate && watchSupplierId) {
      const supplier = suppliers.find(s => s.Id === parseInt(watchSupplierId));
      if (supplier?.DueDays) {
        const date = new Date(watchInvoiceDate);
        date.setDate(date.getDate() + supplier.DueDays);
        setDueDate(date.toLocaleDateString('en-GB'));
      }
    }
  }, [watchInvoiceDate, watchSupplierId, suppliers]);

  const calculateTotal = () => {
    const total = items.reduce((sum, item) => sum + (parseFloat(item.Amount) || 0), 0);
    setTotalAmount(total.toFixed(2));
  };

  const onSubmit = async (data) => {
    const payload = {
      Id: editId,
      Comid: comid,
      BillsOrderNo: data.poNo,
      BillsOrderDate: data.poDate,
      InvoiceNo: data.invoiceNo,
      InvoiceDate: data.invoiceDate,
      SupplierRefId: data.supplierId,
      Description: data.description,
      PaymentTermId: data.paymentTermId,
      TruckRefId: data.truckId,
      DriverRefId: data.driverId,
      JobNo: data.jobNo,
      Remarks: data.remarks,
      Status: data.status,
      PayTo: data.payTo,
      TotalAmount: totalAmount,
      Items: items,
    };

    saveMutation.mutate(payload);
  };

  const handleFilesSelected = (files) => {
    setSelectedFiles(files);
  };

  const handleAddItem = () => {
    setItems([...items, {
      Id: 0,
      ProductRefId: '',
      ProductCode: '',
      ProductName: '',
      Quantity: 0,
      SalesRate: 0,
      TaxPercent: 0,
      TaxAmount: 0,
      Amount: 0,
      SerialNo: '',
      RemarksD: '',
    }]);
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;

    if (field === 'Quantity' || field === 'SalesRate' || field === 'TaxPercent') {
      const qty = parseFloat(newItems[index].Quantity) || 0;
      const rate = parseFloat(newItems[index].SalesRate) || 0;
      const taxPer = parseFloat(newItems[index].TaxPercent) || 0;
      
      const subtotal = qty * rate;
      const taxAmt = (subtotal * taxPer) / 100;
      const total = subtotal + taxAmt;

      newItems[index].TaxAmount = taxAmt.toFixed(2);
      newItems[index].Amount = total.toFixed(2);
    }

    setItems(newItems);
  };

  const handleDeleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-6">
      <div className="max-w-[98%] mx-auto space-y-4">
        {/* Premium Header */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white tracking-wide">PURCHASE ORDER</h1>
                  <p className="text-blue-100 text-xs mt-0.5">Logged in as: {userName}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => alert('View functionality')} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-semibold hover:bg-white/20 transition-all duration-200 border border-white/20">
                  <Eye className="w-4 h-4" />
                  VIEW
                </button>
                <button type="button" onClick={() => setShowUploadModal(true)} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-semibold hover:bg-white/20 transition-all duration-200 border border-white/20">
                  <Upload className="w-4 h-4" />
                  UPLOAD
                </button>
                <button type="button" onClick={() => {
                  if (editId) {
                    localStorage.setItem('PUSHPI', JSON.stringify([{ id: editId, jobno: watch('poNo') }]));
                    window.location.href = '/BillMaster?Push=1';
                  }
                }} disabled={!editId} className="flex items-center gap-2 px-4 py-2 bg-violet-500 text-white rounded-lg text-sm font-semibold hover:bg-violet-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg">
                  <FileText className="w-4 h-4" />
                  BILLS
                </button>
                <button type="button" onClick={() => {
                  if (editId) {
                    localStorage.setItem('PaymentOpen', 'true');
                    localStorage.setItem('PUSHPI', JSON.stringify([{ id: editId, jobno: watch('poNo') }]));
                    window.location.href = '/PaymentVoucher?Push=1';
                  }
                }} disabled={!editId} className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm font-semibold hover:bg-indigo-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg">
                  <Receipt className="w-4 h-4" />
                  PV
                </button>
                <button type="button" onClick={handleSubmit(onSubmit)} disabled={saveMutation.isPending} className="flex items-center gap-2 px-5 py-2 bg-emerald-500 text-white rounded-lg text-sm font-semibold hover:bg-emerald-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg">
                  <Save className="w-4 h-4" />
                  {saveMutation.isPending ? 'SAVING...' : 'SAVE'}
                </button>
              </div>
            </div>
          </div>

          {/* Premium Form Grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              <Controller name="poNo" control={control} render={({ field }) => (
                <div className="group">
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">PO No</label>
                  <input {...field} type="text" disabled className="w-full h-9 px-3 border-2 border-slate-200 rounded-lg text-sm bg-slate-50 text-slate-500 focus:outline-none transition-all" />
                </div>
              )} />
              <Controller name="poDate" control={control} render={({ field }) => (
                <div className="group">
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">PO Date</label>
                  <input {...field} type="date" className="w-full h-9 px-3 border-2 border-slate-200 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" />
                </div>
              )} />
              <Controller name="description" control={control} render={({ field }) => (
                <div className="group">
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">Description</label>
                  <select {...field} className="w-full h-9 px-3 border-2 border-slate-200 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white">
                    <option value="">Select</option>
                    {billDescriptionOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                  </select>
                </div>
              )} />
              <Controller name="invoiceNo" control={control} render={({ field }) => (
                <div className="group">
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">Invoice No</label>
                  <input {...field} type="text" className="w-full h-9 px-3 border-2 border-slate-200 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" />
                </div>
              )} />
              <Controller name="invoiceDate" control={control} render={({ field }) => (
                <div className="group">
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">Invoice Date</label>
                  <input {...field} type="date" className="w-full h-9 px-3 border-2 border-slate-200 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" />
                </div>
              )} />
              <Controller name="paymentTermId" control={control} render={({ field }) => (
                <SearchableSelect {...field} label="Payment Term" options={paymentTerms.map(pt => ({ value: pt.Id, label: pt.TermsName }))} placeholder="Select" containerClassName="" maxHeight="max-h-40" />
              )} />
              <Controller name="supplierId" control={control} render={({ field }) => (
                <SearchableSelect {...field} label="Supplier" required options={suppliers.map(s => ({ value: s.Id, label: s.AccountName }))} placeholder="Select" containerClassName="lg:col-span-2" maxHeight="max-h-40" />
              )} />
              <Controller name="truckId" control={control} render={({ field }) => (
                <SearchableSelect {...field} label="Truck" options={trucks.map(t => ({ value: t.Id, label: t.AccountName }))} placeholder="Select" containerClassName="" maxHeight="max-h-40" />
              )} />
              <Controller name="driverId" control={control} render={({ field }) => (
                <SearchableSelect {...field} label="Driver" options={drivers.map(d => ({ value: d.Id, label: d.AccountName }))} placeholder="Select" containerClassName="" maxHeight="max-h-40" />
              )} />
              <Controller name="jobNo" control={control} render={({ field }) => (
                <div className="group">
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">Job No</label>
                  <input {...field} type="text" className="w-full h-9 px-3 border-2 border-slate-200 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" />
                </div>
              )} />
              <Controller name="remarks" control={control} render={({ field }) => (
                <div className="group">
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">Remarks</label>
                  <input {...field} type="text" className="w-full h-9 px-3 border-2 border-slate-200 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" />
                </div>
              )} />
              <div className="group">
                <label className="block text-xs font-semibold text-rose-600 mb-1.5 uppercase tracking-wide">Total Amount</label>
                <div className="w-full h-9 px-3 border-2 border-rose-200 bg-rose-50 rounded-lg text-sm flex items-center font-bold text-rose-700">{totalAmount}</div>
              </div>
              {dueDate && (
                <div className="group">
                  <label className="block text-xs font-semibold text-rose-600 mb-1.5 uppercase tracking-wide">Due Date</label>
                  <div className="w-full h-9 px-3 border-2 border-rose-200 bg-rose-50 rounded-lg text-sm flex items-center font-bold text-rose-700">{dueDate}</div>
                </div>
              )}
              <Controller name="status" control={control} render={({ field }) => (
                <div className="group">
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">Status</label>
                  <select {...field} className="w-full h-9 px-3 border-2 border-slate-200 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white">
                    {billStatusOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                  </select>
                </div>
              )} />
              <Controller name="payTo" control={control} render={({ field }) => (
                <SearchableSelect {...field} label="Pay To" options={suppliers.map(s => ({ value: s.Id, label: s.AccountName }))} placeholder="Select" containerClassName="" maxHeight="max-h-40" />
              )} />
            </div>
          </div>
        </div>

        {/* Premium Items Grid */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-6 py-3 flex items-center justify-between">
            <h2 className="text-base font-bold text-white tracking-wide">ORDER ITEMS</h2>
            <button type="button" onClick={handleAddItem} className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-all duration-200 shadow-lg">
              <Plus className="w-4 h-4" />
              Add Item
            </button>
          </div>
          <div className="p-6">
            <PurchaseOrderGrid items={items} products={products} onItemChange={handleItemChange} onDeleteItem={handleDeleteItem} />
          </div>
        </div>

        {showUploadModal && <FileUploadModal onClose={() => setShowUploadModal(false)} orderId={editId} onFilesSelected={handleFilesSelected} selectedFiles={selectedFiles} />}
      </div>
    </div>
  )}