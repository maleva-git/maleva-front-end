import { useMemo, useState, useRef } from 'react';
import { Settings, Ship, MapPin, Send, Bell } from 'lucide-react';
import { SaleOrderHeader } from '../components/SaleOrderHeader';
import { Tabs } from '../../../components/ui/Tabs';
import { DataTable } from '../../../components/ui/DataTable';
import { ProductLookupModal } from '../../../components/ui/ProductLookupModal';
import { TaxLookupModal } from '../../../components/ui/TaxLookupModal';
import { FormField, FormRow } from '../../../components/ui/FormField';
import { MultiAddressManager } from '../../../components/ui/MultiAddressManager';
import { ForwardingManager } from '../components/ForwardingManager';
import SearchableSelect from '../../../components/common/SearchableSelect';
import { saleOrderOptions } from '../model/saleOrder.options';
import { useSaleOrder } from '../hooks/useSaleOrder';
import { useCustomers } from '../../customer';
import { useJobTypes } from '../../jobType';
import { useAgentCompanies, useAgents } from '../../agentCompany';
import { useEmployeesByCompanyAndRoles } from '../../employee';
import { useProducts } from '../../product';
import { usePorts } from '../../port';
import { useTaxList } from '../../tax/useTax';
import { useAuth } from '../../../hooks/useAuth';

const SaleOrderAdd = () => {
  const { user, companyId: authCompanyId } = useAuth();
  
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [taxModalOpen, setTaxModalOpen] = useState(false);
  const [activeRowIdx, setActiveRowIdx] = useState(null);
  const tableRef = useRef(null);

  const { data: customers = [] } = useCustomers();
  const companyId = useMemo(() => {
    const rawCompanyId = authCompanyId ?? user?.companyId ?? user?.companyRefId ?? user?.CompanyId ?? 6;
    const parsed = Number(rawCompanyId);
    return Number.isInteger(parsed) && parsed > 0 ? parsed : 6;
  }, [authCompanyId, user]);

  const { data: jobTypeRows = [] } = useJobTypes(companyId);
  const { data: agentCompanies = [] } = useAgentCompanies(companyId);
  const { data: employees = [] } = useEmployeesByCompanyAndRoles(companyId, 500, 500);
  const { data: products = [] } = useProducts(companyId);
  const { portOptions: dynamicPortOptions = [] } = usePorts(companyId);
  const { data: taxData } = useTaxList(companyId);

  const taxes = useMemo(() => {
    return taxData || [];
  }, [taxData]);

  const jobTypeOptions = useMemo(() => {
    const rows = Array.isArray(jobTypeRows) ? jobTypeRows : [];
    const dynamicOptions = rows
      .filter((row) => Number(row.active) === 1)
      .map((row) => ({
        value: String(row.id ?? ''),
        label: String(row.name ?? '').trim(),
      }))
      .filter((opt) => opt.value && opt.label);

    if (dynamicOptions.length === 0) {
      return saleOrderOptions.jobTypeOptions;
    }

    return [{ value: '', label: 'Select Job Type' }, ...dynamicOptions];
  }, [jobTypeRows]);

  const {
    formData,
    handleChange,
    handleView,
    handleGeneratePO,
    handleGenerateQuote,
    handleSave,
    tableData,
    pickupAddresses,
    deliveryAddresses,
    commonOrigin,
    commonDestination,
    warehouseAddress,
    forwardingRows,
    statusOptions: dynamicStatusOptions,
    setPickupAddresses,
    setDeliveryAddresses,
    setCommonOrigin,
    setCommonDestination,
    setWarehouseAddress,
    setForwardingRows,
    handleAddItem,
    handleDeleteItem,
    handleCellChange
  } = useSaleOrder(companyId, dynamicPortOptions, jobTypeOptions);

  const { data: loadingAgents = [] } = useAgents(companyId, formData.loadingShippingAgent);
  const { data: offAgents = [] } = useAgents(companyId, formData.offShippingAgent);

  const shippingAgentOptions = useMemo(() => {
    if (!Array.isArray(agentCompanies)) return [];
    return agentCompanies.map(agent => ({
      value: agent.id || agent.agentId,
      label: agent.companyName || agent.name
    })).filter(opt => opt.value && opt.label);
  }, [agentCompanies]);

  const loadingAgentOptions = useMemo(() => {
    if (!Array.isArray(loadingAgents)) return [];
    return loadingAgents.map(agent => ({
      value: agent.id,
      label: agent.Name || agent.name
    })).filter(opt => opt.value && opt.label);
  }, [loadingAgents]);

  const offAgentOptions = useMemo(() => {
    if (!Array.isArray(offAgents)) return [];
    return offAgents.map(agent => ({
      value: agent.id,
      label: agent.Name || agent.name
    })).filter(opt => opt.value && opt.label);
  }, [offAgents]);

  const officerOptions = useMemo(() => {
    if (!Array.isArray(employees)) return [];
    return employees.map(emp => ({
      value: emp.id,
      label: emp.name || emp.employeeName
    })).filter(opt => opt.value && opt.label);
  }, [employees]);

  const handleLookup = (rowIdx, field) => {
    setActiveRowIdx(rowIdx);
    if (field === 'productCode') {
      setProductModalOpen(true);
    } else if (field === 'taxCode') {
      setTaxModalOpen(true);
    }
  };

  const handleProductSelect = (product) => {
    if (activeRowIdx !== null) {
      handleCellChange(activeRowIdx, 'productId', product.id);
      handleCellChange(activeRowIdx, 'productCode', product.productCode);
      handleCellChange(activeRowIdx, 'description', product.productName);
      handleCellChange(activeRowIdx, 'rate', product.saleRate || 0);
      handleCellChange(activeRowIdx, 'taxPercentage', 0);
    }
    setProductModalOpen(false);
    if (tableRef.current) {
        tableRef.current.focusCell(activeRowIdx, 'qty');
    }
    setActiveRowIdx(null);
  };

  const handleTaxSelect = (tax) => {
    if (activeRowIdx !== null) {
      handleCellChange(activeRowIdx, 'taxRefId', tax.id);
      handleCellChange(activeRowIdx, 'taxCode', tax.code);
      handleCellChange(activeRowIdx, 'taxPercentage', tax.tax || 0);
    }
    setTaxModalOpen(false);
    if (tableRef.current) {
        tableRef.current.focusNextEditable(activeRowIdx, 'taxCode');
    }
    setActiveRowIdx(null);
  };

  const {
 
    countryOptions,
    cargoTypeOptions,
    commodityOptions,
    
    vesselTypeOptions,
    zbOptions
  } = saleOrderOptions;



  const portOptions = useMemo(() => dynamicPortOptions, [dynamicPortOptions]);

  const customerOptions = customers.map((cust) => ({
    value: cust.id ?? cust.customerId ?? '',
    label: cust.customerName ?? cust.name ?? ''
  })).filter((opt) => opt.value && opt.label);

  const selectedJobTypeLabel = useMemo(() => {
    const selectedValue = String(formData.jobType ?? '');
    if (!selectedValue) return '';

    const selectedOption = jobTypeOptions.find(
      (option) => String(option.value) === selectedValue
    );

    return String(selectedOption?.label ?? '')
      .replace(/\s+/g, ' ')
      .trim()
      .toUpperCase();
  }, [formData.jobType, jobTypeOptions]);

  const hideOffVesselTab = useMemo(() => {
    const label = selectedJobTypeLabel;
    return label === 'AIR FREIGHT IMPORT' || label === 'AIR FRIEGHT IMPORT' ||
           label === 'SEA FREIGHT IMPORT' || label === 'SEA FRIEGHT IMPORT' ||
           label === 'LAND TRANSPORT ONBOARD' || label === 'PARCEL LOADING' ||
           label === 'GENARAL CARGO' || label === 'BOLD SEAL LOADING' ||
           label === 'FORWADING AND HANDLING' || label === 'WHARFMARK';
  }, [selectedJobTypeLabel]);

  const hideLoadingVesselTab = useMemo(() => {
    const label = selectedJobTypeLabel;
    return label === 'AIR FREIGHT EXPORT' || label === 'AIR FRIEGHT EXPORT' ||
           label === 'SEA FREIGHT EXPORT' || label === 'SEA FRIEGHT EXPORT' ||
           label === 'OFF LAND TRANSPORT' || label === 'GENARAL CARGO' ||
           label === 'PARCEL OFFLINE' || label === 'BOLD SEAL OFFLINE';
  }, [selectedJobTypeLabel]);

  const hideBLCopy = useMemo(() => {
    const label = selectedJobTypeLabel;
    return label === 'AIR FREIGHT IMPORT' || label === 'AIR FRIEGHT IMPORT' ||
           label === 'AIR FREIGHT EXPORT' || label === 'AIR FRIEGHT EXPORT' ||
           label === 'LAND TRANSPORT ONBOARD' || label === 'OFF LAND TRANSPORT' ||
           label === 'PARCEL LOADING' || label === 'GENARAL CARGO' ||
           label === 'VESSEL TO VESSEL' || label === 'PARCEL OFFLINE' ||
           label === 'BOLD SEAL LOADING' || label === 'FORWADING AND HANDLING' ||
           label === 'WHARFMARK' || label === 'BOLD SEAL OFFLINE';
  }, [selectedJobTypeLabel]);

  const hideOPort = useMemo(() => {
    const label = selectedJobTypeLabel;
    return label === 'AIR FREIGHT IMPORT' || label === 'AIR FRIEGHT IMPORT' ||
           label === 'SEA FREIGHT IMPORT' || label === 'SEA FRIEGHT IMPORT' ||
           label === 'LAND TRANSPORT ONBOARD' || label === 'PARCEL LOADING' ||
           label === 'GENARAL CARGO' || label === 'BOLD SEAL LOADING' ||
           label === 'FORWADING AND HANDLING' || label === 'WHARFMARK';
  }, [selectedJobTypeLabel]);

  const hideLPort = useMemo(() => {
    const label = selectedJobTypeLabel;
    return label === 'AIR FREIGHT EXPORT' || label === 'AIR FRIEGHT EXPORT' ||
           label === 'SEA FREIGHT EXPORT' || label === 'SEA FRIEGHT EXPORT' ||
           label === 'OFF LAND TRANSPORT' || label === 'GENARAL CARGO' ||
           label === 'PARCEL OFFLINE' || label === 'BOLD SEAL OFFLINE';
  }, [selectedJobTypeLabel]);

  const hideAWBNo = useMemo(() => {
    const label = selectedJobTypeLabel;
    return label === 'SEA FREIGHT EXPORT' || label === 'SEA FRIEGHT EXPORT' ||
           label === 'LAND TRANSPORT ONBOARD' || label === 'OFF LAND TRANSPORT' ||
           label === 'GENARAL CARGO' || label === 'VESSEL TO VESSEL' ||
           label === 'PARCEL OFFLINE' || label === 'BOLD SEAL LOADING' ||
           label === 'FORWADING AND HANDLING' || label === 'WHARFMARK' ||
           label === 'BOLD SEAL OFFLINE';
  }, [selectedJobTypeLabel]);

  const tableColumns = [
    { label: 'S.No', field: 'sno', editable: false },
    { label: 'Product Code', field: 'productCode', editable: true, type: 'lookup' },
    { label: 'Description', field: 'description', editable: true },
    { label: 'Remarks', field: 'remarks', editable: true },
    { label: 'Qty', field: 'qty', editable: true, type: 'number' },
    { label: 'Rate', field: 'rate', editable: true, type: 'number' },
    { label: 'TaxCode', field: 'taxCode', editable: true, type: 'lookup' },
    { label: 'Tax%', field: 'taxPercentage', editable: true, type: 'number' },
    { label: 'GST Amount', field: 'gstAmount', editable: false },
    { label: 'Amount', field: 'amount', editable: false }
  ];

  const tabs = useMemo(() => [
    {
      label: 'Common Functions',
      icon: <Settings className="w-4 h-4" />,
      content: (
        <div className="space-y-3">
          <FormRow columns={5}>
            {!hideAWBNo && (
              <FormField label="AWB No">
                <input type="text" value={formData.awbNo || ''} onChange={handleChange('awbNo')} className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
              </FormField>
            )}
            <FormField label="Weight">
              <input type="text" value={formData.weight || ''} onChange={handleChange('weight')} className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            </FormField>
            <SearchableSelect label="Commodity Type" value={formData.commodityType} onChange={handleChange('commodityType')} options={commodityOptions} containerClassName="" placeholder="Select Commodity" />
            {!hideBLCopy && (
              <FormField label="BL Copy">
                <input type="text" value={formData.blCopy || ''} onChange={handleChange('blCopy')} className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
              </FormField>
            )}
            <FormField label="Quantity">
              <input type="text" value={formData.quantity || ''} onChange={handleChange('quantity')} className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            </FormField>
          </FormRow>
          <FormRow columns={5}>
            <FormField label="Truck Size">
              <input type="text" value={formData.truckSize || ''} onChange={handleChange('truckSize')} placeholder="Enter Truck Size" className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            </FormField>
            <SearchableSelect label="Cargo" value={formData.cargo} onChange={handleChange('cargo')} options={cargoTypeOptions} containerClassName="" placeholder="Select Cargo" />
            {!hideLPort && (
              <SearchableSelect label="L Port" value={formData.lPort} onChange={handleChange('lPort')} options={portOptions} containerClassName="" placeholder="Select Port" />
            )}
            {!hideOPort && (
              <SearchableSelect label="O Port" value={formData.oPort} onChange={handleChange('oPort')} options={portOptions} containerClassName="" placeholder="Select Port" />
            )}
          </FormRow>
        </div>
      )
    },
    {
      label: 'Loading Vessel',
      icon: <Ship className="w-4 h-4" />,
      content: (
        <div className="space-y-3">
          <FormRow columns={5}>
            <FormField label="ETA">
              <input type="datetime-local" value={formData.loadingEta || ''} onChange={handleChange('loadingEta')} className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            </FormField>
            <FormField label="ETB">
              <input type="datetime-local" value={formData.loadingEtb || ''} onChange={handleChange('loadingEtb')} className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            </FormField>
            <FormField label="ETD">
              <input type="datetime-local" value={formData.loadingEtd || ''} onChange={handleChange('loadingEtd')} className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            </FormField>
            <SearchableSelect label="Shipping Agent" value={formData.loadingShippingAgent} onChange={handleChange('loadingShippingAgent')} options={shippingAgentOptions} containerClassName="" placeholder="Select Shipping Agent" />
            <SearchableSelect label="Agent" value={formData.loadingAgent} onChange={handleChange('loadingAgent')} options={loadingAgentOptions} containerClassName="" placeholder="Select Agent" />
          </FormRow>
          {!hideOffVesselTab && (
            <FormRow columns={5}>
              <FormField label="SCN">
                <input type="text" value={formData.loadingScn || ''} onChange={handleChange('loadingScn')} className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
              </FormField>
              <FormField label="Vessel Name">
                <input type="text" value={formData.loadingVesselName || ''} onChange={handleChange('loadingVesselName')} className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
              </FormField>
              <SearchableSelect label="Vessel Type" value={formData.loadingVesselType} onChange={handleChange('loadingVesselType')} options={vesselTypeOptions} containerClassName="" placeholder="Select Vessel Type" />
             
            </FormRow>
          )}
          <FormRow columns={5}>
            <FormField label="Amount 1">
              <input type="number" value={formData.loadingAmt1 || ''} readOnly className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs bg-gray-50" />
            </FormField>
            
            <FormField label="Amount 2">
              <input type="number" value={formData.loadingAmt2 || ''} readOnly className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs bg-gray-50" />
            </FormField>
            <FormField label="Port Charges Ref">
              <input type="text" value={formData.loadingPortChargesRef || ''} onChange={handleChange('loadingPortChargesRef')} className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            </FormField>
          <FormField label="PTW No">
              <input type="text" value={formData.loadingPtwNo || ''} onChange={handleChange('loadingPtwNo')} className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            </FormField>
          
            <FormField label="Port Charges">
              <input type="number" value={formData.loadingPortCharges || ''} onChange={handleChange('loadingPortCharges')} className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            </FormField>

          </FormRow>
          <FormRow columns={5}>
             <SearchableSelect label="Boarding Officer 1" value={formData.loadingOfficer1} onChange={handleChange('loadingOfficer1')} options={officerOptions} containerClassName="" placeholder="Select Officer" />
              <SearchableSelect label="Boarding Officer 2" value={formData.loadingOfficer2} onChange={handleChange('loadingOfficer2')} options={officerOptions} containerClassName="" placeholder="Select Officer" />
            <SearchableSelect label="ZB 1" value={formData.loadingZb1} onChange={handleChange('loadingZb1')} options={zbOptions} containerClassName="" placeholder="Select ZB" />
            <FormField label="ZB Ref 1">
              <input type="text" value={formData.loadingZbRef1 || ''} onChange={handleChange('loadingZbRef1')} className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            </FormField>
            <FormField label="Flight Time">
              <input type="datetime-local" value={formData.loadingFlightTime || ''} onChange={handleChange('loadingFlightTime')} className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            </FormField>
          </FormRow>
        </div>
      )
    },
    {
      label: 'Off Vessel',
      icon: <Ship className="w-4 h-4" />,
      content: (
        <div className="space-y-3">
          <FormRow columns={5}>
            <FormField label="ETA">
              <input type="datetime-local" value={formData.offEta || ''} onChange={handleChange('offEta')} className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            </FormField>
            <FormField label="ETB">
              <input type="datetime-local" value={formData.offEtb || ''} onChange={handleChange('offEtb')} className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            </FormField>
            <FormField label="ETD">
              <input type="datetime-local" value={formData.offEtd || ''} onChange={handleChange('offEtd')} className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            </FormField>
            <SearchableSelect label="Shipping Agent" value={formData.offShippingAgent} onChange={handleChange('offShippingAgent')} options={shippingAgentOptions} containerClassName="" placeholder="Select Shipping Agent" />
            <SearchableSelect label="Agent" value={formData.offAgent} onChange={handleChange('offAgent')} options={offAgentOptions} containerClassName="" placeholder="Select Agent" />
          </FormRow>
          <FormRow columns={5}>
            <FormField label="SCN">
              <input type="text" value={formData.offScn || ''} onChange={handleChange('offScn')} className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            </FormField>
            <FormField label="Vessel Name">
              <input type="text" value={formData.offVesselName || ''} onChange={handleChange('offVesselName')} className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            </FormField>
            <SearchableSelect label="Vessel Type" value={formData.offVesselType} onChange={handleChange('offVesselType')} options={vesselTypeOptions} containerClassName="" placeholder="Select Vessel Type" />
           
            <SearchableSelect label="Boarding Officer 1" value={formData.offOfficer1} onChange={handleChange('offOfficer1')} options={officerOptions} containerClassName="" placeholder="Select Officer" />
               <SearchableSelect label="Boarding Officer 2" value={formData.offOfficer2} onChange={handleChange('offOfficer2')} options={officerOptions} containerClassName="" placeholder="Select Officer" />
          </FormRow>
          <FormRow columns={5}>
            <FormField label="Amount 1">
              <input type="number" value={formData.offAmt1 || ''} readOnly className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs bg-gray-50" />
            </FormField>
            <FormField label="Port Charges Ref">
              <input type="text" value={formData.offPortChargesRef || ''} onChange={handleChange('offPortChargesRef')} className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            </FormField>
             <FormField label="PTW No">
              <input type="text" value={formData.offPtwNo || ''} onChange={handleChange('offPtwNo')} className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            </FormField>
         
            <FormField label="Amount 2">
              <input type="number" value={formData.offAmt2 || ''} readOnly className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs bg-gray-50" />
            </FormField>
            <FormField label="Port Charges">
              <input type="number" value={formData.offPortCharges || ''} onChange={handleChange('offPortCharges')} className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            </FormField>
             <SearchableSelect label="Boarding Officer 1" value={formData.offOfficer1} onChange={handleChange('offOfficer1')} options={officerOptions} containerClassName="" placeholder="Select Officer" />
               <SearchableSelect label="Boarding Officer 2" value={formData.offOfficer2} onChange={handleChange('offOfficer2')} options={officerOptions} containerClassName="" placeholder="Select Officer" />
          </FormRow>
          <FormRow columns={5}>
            <SearchableSelect label="ZB 2" value={formData.offZb2} onChange={handleChange('offZb2')} options={zbOptions} containerClassName="" placeholder="Select ZB" />
            <FormField label="ZB Ref 2">
              <input type="text" value={formData.offZbRef2 || ''} onChange={handleChange('offZbRef2')} className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            </FormField>
          </FormRow>
        </div>
      )
    },
    {
      label: 'Address',
      icon: <MapPin className="w-4 h-4" />,
      content: (
        <div className="space-y-4">
          <MultiAddressManager
            type="pickup"
            addresses={pickupAddresses}
            onAddressChange={setPickupAddresses}
            commonLocation={commonOrigin}
            onCommonLocationChange={setCommonOrigin}
            totalWeight={formData.weight}
            totalQuantity={formData.quantity}
          />
          
          <MultiAddressManager
            type="delivery"
            addresses={deliveryAddresses}
            onAddressChange={setDeliveryAddresses}
            commonLocation={commonDestination}
            onCommonLocationChange={setCommonDestination}
            totalWeight={formData.weight}
            totalQuantity={formData.quantity}
          />
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h4 className="text-sm font-bold text-gray-800 mb-3">Warehouse Address</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-[10px] font-semibold text-gray-600 mb-1 uppercase">Address</label>
                <textarea
                  value={warehouseAddress.address}
                  onChange={(e) => setWarehouseAddress({...warehouseAddress, address: e.target.value})}
                  rows={2}
                  placeholder="Enter warehouse address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-semibold text-gray-600 mb-1 uppercase">Enter Date</label>
                  <input
                    type="date"
                    value={warehouseAddress.enterDate}
                    onChange={(e) => setWarehouseAddress({...warehouseAddress, enterDate: e.target.value})}
                    className="w-full h-8 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-gray-600 mb-1 uppercase">Exit Date</label>
                  <input
                    type="date"
                    value={warehouseAddress.exitDate}
                    onChange={(e) => setWarehouseAddress({...warehouseAddress, exitDate: e.target.value})}
                    className="w-full h-8 px-3 border border-blue-200 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      label: 'Forwarding',
      icon: <Send className="w-4 h-4" />,
      content: (
        <div className="space-y-3 relative z-10 min-h-[400px] overflow-visible">
        <ForwardingManager 
          forwardingRows={forwardingRows}
          onForwardingChange={setForwardingRows}
          officerOptions={officerOptions}
        />
      </div>
      )
    },
    {
      label: 'Notify',
      icon: <Bell className="w-4 h-4" />,
      content: (
        <div className="space-y-3">
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-xs font-semibold text-gray-700">All Email</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-xs font-semibold text-gray-700">All Whatsapp</span>
            </label>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700">
            Edit
          </button>
        </div>
      )
    }
  ], [hideOffVesselTab, hideLoadingVesselTab, hideBLCopy, hideOPort, hideLPort, hideAWBNo, formData, shippingAgentOptions, loadingAgentOptions, offAgentOptions, officerOptions, commodityOptions, cargoTypeOptions, portOptions, vesselTypeOptions, zbOptions, pickupAddresses, deliveryAddresses, commonOrigin, commonDestination, warehouseAddress, forwardingRows, handleChange, setPickupAddresses, setDeliveryAddresses, setCommonOrigin, setCommonDestination, setWarehouseAddress, setForwardingRows]);

  const visibleTabs = useMemo(() => {
    let filtered = tabs;
    if (hideOffVesselTab) {
      filtered = filtered.filter((tab) => tab.label !== 'Off Vessel');
    }
    if (hideLoadingVesselTab) {
      filtered = filtered.filter((tab) => tab.label !== 'Loading Vessel');
    }
    return filtered;
  }, [hideOffVesselTab, hideLoadingVesselTab, tabs]);

  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8">
      <div className="w-full max-w-[98%] mx-auto space-y-4">
        <SaleOrderHeader
          formData={formData}
          handleChange={handleChange}
          countryOptions={countryOptions}
          customerOptions={customerOptions}
          customers={customers}
          jobTypeOptions={jobTypeOptions}
          statusOptions={dynamicStatusOptions}
          onView={handleView}
          onPO={handleGeneratePO}
          onQuote={handleGenerateQuote}
          onSave={handleSave}
        />

        <Tabs tabs={visibleTabs} defaultTab={0} />

        <DataTable
          ref={tableRef}
          columns={tableColumns}
          data={tableData}
          onAddRow={handleAddItem}
          onDeleteRow={handleDeleteItem}
          onCellChange={handleCellChange}
          onLookup={handleLookup}
        />

        <ProductLookupModal
          isOpen={productModalOpen}
          onClose={() => {
            setProductModalOpen(false);
            setActiveRowIdx(null);
          }}
          onSelect={handleProductSelect}
          products={products}
        />

        <TaxLookupModal
          isOpen={taxModalOpen}
          onClose={() => {
            setTaxModalOpen(false);
            setActiveRowIdx(null);
          }}
          onSelect={handleTaxSelect}
          taxes={taxes}
        />
      </div>
    </div>
  );
};

export default SaleOrderAdd;
