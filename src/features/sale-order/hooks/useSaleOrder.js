import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { jobTypeApi } from '../../jobType/jobTypeApi';
import { saleOrderInitialState } from '../model/saleOrder.initialState';
import { handleSaveSaleOrder } from '../../../utils/saleOrderInsertLogic';
import { useAuth } from '../../../hooks/useAuth';
import { calculateAllBoardingAmounts } from '../../../utils/boardingCalculations';
import { saleOrderApi } from '../api/saleOrderApi';
import { currencyApi } from '../../../api/currencyApi';

export const useSaleOrder = (companyId, portOptions = [], jobTypeOptions = []) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState(saleOrderInitialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [statusOptions, setStatusOptions] = useState([{ value: '', label: 'Select Status' }]);
  const [currencyConversion, setCurrencyConversion] = useState(0);
  const [symbolId, setSymbolId] = useState(0);

  // Fetch job status options when jobType changes
  const { data: jobConfigData } = useQuery({
    queryKey: ['jobAllData', companyId, formData.jobType],
    queryFn: () => jobTypeApi.getJobAllData(companyId, formData.jobType),
    enabled: !!companyId && !!formData.jobType && formData.jobType !== '',
    staleTime: 5 * 60 * 1000,
  });

  // Update status options when job config data changes
  useEffect(() => {
    if (!jobConfigData) return;
    
    console.log('Job Config Data:', jobConfigData);
    
    const statusDetails = 
      jobConfigData?.jobStatusDetails || 
      jobConfigData?.data?.jobStatusDetails || 
      jobConfigData?.result?.jobStatusDetails ||
      (Array.isArray(jobConfigData) ? jobConfigData : []);
    
    console.log('Status Details:', statusDetails);
    
    if (statusDetails && Array.isArray(statusDetails) && statusDetails.length > 0) {
      const newStatusOptions = statusDetails.map(status => ({
        value: status.status || status.id || status.value,
        label: status.statusName || status.name || status.label
      }));
      console.log('New Status Options:', newStatusOptions);
      setStatusOptions([{ value: '', label: 'Select Status' }, ...newStatusOptions]);
    } else {
      console.warn('No status details found in response');
    }
  }, [jobConfigData]);


  const handleChange = (field) => async (e) => {
    const newValue = e.target.value;
    
    // Fetch currency when customer changes
    if (field === 'customerId' && newValue) {
      try {
        const response = await currencyApi.getCurrencyValue(companyId, newValue);
        if (response.success && response.data) {
          const newCurrency = response.data.currencyValue || 0;
          const newSymbol = response.data.symbolRefId || 0;
          setCurrencyConversion(newCurrency);
          setSymbolId(newSymbol);
          
          // Update all table rows with new currency
          setTableData(prev => prev.map(row => ({
            ...row,
            currencyValue: newCurrency,
            actualAmount: (parseFloat(row.amount) || 0) * newCurrency
          })));
        }
      } catch (error) {
        console.error('Error fetching currency:', error);
      }
    }
    
    // Special handling for jobType to capture both ID and name
    if (field === 'jobType') {
      setFormData(prev => ({ 
        ...prev, 
        jobType: newValue,
        jobTypeRefId: newValue // Store the ID
      }));
    } else if (field === 'jobCategory') {
      // When jobCategory changes, also update billType
      setFormData(prev => ({ 
        ...prev, 
        jobCategory: newValue,
        billType: newValue // Set billType to the same value as jobCategory
      }));
    } else if (field === 'saleType') {
      // Handle saleType changes (CASH/CREDIT)
      setFormData(prev => ({ 
        ...prev, 
        saleType: newValue
      }));
    } else {
      setFormData(prev => ({ ...prev, [field]: newValue }));
    }
    
    // Auto-calculate boarding amounts when officers change
    if (field === 'officer1' || field === 'officer2') {
      const updatedFormData = { ...formData, [field]: newValue };
      const amounts = calculateAllBoardingAmounts({
        boardingOfficer1: updatedFormData.officer1,
        boardingOfficer2: updatedFormData.officer2,
        loadingBoardingOfficer1: updatedFormData.loadingOfficer1,
        loadingBoardingOfficer2: updatedFormData.loadingOfficer2,
        offBoardingOfficer1: updatedFormData.offOfficer1,
        offBoardingOfficer2: updatedFormData.offOfficer2
      });
      setFormData(prev => ({ 
        ...prev, 
        amt1: amounts.boardingAmount1,
        amt2: amounts.boardingAmount2,
        loadingAmt1: amounts.loadingBoardingAmount1,
        loadingAmt2: amounts.loadingBoardingAmount2,
        offAmt1: amounts.offBoardingAmount1,
        offAmt2: amounts.offBoardingAmount2
      }));
    }
    else if (field === 'loadingOfficer1' || field === 'loadingOfficer2') {
      const updatedFormData = { ...formData, [field]: newValue };
      const amounts = calculateAllBoardingAmounts({
        boardingOfficer1: updatedFormData.officer1,
        boardingOfficer2: updatedFormData.officer2,
        loadingBoardingOfficer1: updatedFormData.loadingOfficer1,
        loadingBoardingOfficer2: updatedFormData.loadingOfficer2,
        offBoardingOfficer1: updatedFormData.offOfficer1,
        offBoardingOfficer2: updatedFormData.offOfficer2
      });
      setFormData(prev => ({ 
        ...prev, 
        amt1: amounts.boardingAmount1,
        amt2: amounts.boardingAmount2,
        loadingAmt1: amounts.loadingBoardingAmount1,
        loadingAmt2: amounts.loadingBoardingAmount2,
        offAmt1: amounts.offBoardingAmount1,
        offAmt2: amounts.offBoardingAmount2
      }));
    }
    else if (field === 'offOfficer1' || field === 'offOfficer2') {
      const updatedFormData = { ...formData, [field]: newValue };
      const amounts = calculateAllBoardingAmounts({
        boardingOfficer1: updatedFormData.officer1,
        boardingOfficer2: updatedFormData.officer2,
        loadingBoardingOfficer1: updatedFormData.loadingOfficer1,
        loadingBoardingOfficer2: updatedFormData.loadingOfficer2,
        offBoardingOfficer1: updatedFormData.offOfficer1,
        offBoardingOfficer2: updatedFormData.offOfficer2
      });
      setFormData(prev => ({ 
        ...prev, 
        amt1: amounts.boardingAmount1,
        amt2: amounts.boardingAmount2,
        loadingAmt1: amounts.loadingBoardingAmount1,
        loadingAmt2: amounts.loadingBoardingAmount2,
        offAmt1: amounts.offBoardingAmount1,
        offAmt2: amounts.offBoardingAmount2
      }));
    }
    
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleView = () => {

  };

  const handleGeneratePO = () => {

  };

  const handleGenerateQuote = () => {

  };

  const handleSave = async () => {
    try {
      // Validation
      if (!formData.customerId) {
        toast.error('Please select a Customer');
        return;
      }
      if (!formData.jobType || !formData.jobTypeRefId) {
        toast.error('Please select a Job Type');
        return;
      }
      
      setLoading(true);
      
      const employeeRefId = user?.userId ?? user?.UserId ?? 0;
      const resolvePortLabel = (portValue) => {
        if (portValue === null || portValue === undefined || portValue === '') return '';
        const selected = portOptions.find(
          (option) => String(option?.value) === String(portValue)
        );
        return selected?.label ?? String(portValue);
      };

      const formDataForSave = {
        ...formData,
        lPort: resolvePortLabel(formData.lPort),
        oPort: resolvePortLabel(formData.oPort),
      };
      







      
      // Filter out empty rows (rows with no productId)
      const filteredTableData = tableData.filter(row => row.productId && row.productId !== null && row.productId !== 0);
      
      const payload = handleSaveSaleOrder({
        formData: {
          ...formDataForSave,
          currencyValue: currencyConversion,
          symbolRefId: symbolId,
          totalAmount: totals.totalAmount,
          actualNetAmount: totals.totalActualAmount,
          taxAmount: totals.totalGst
        },
        tableData: filteredTableData,
        pickupAddresses,
        deliveryAddresses,
        commonOrigin,
        commonDestination,
        warehouseAddress: warehouseAddress.address,
        warehouseEnterDate: warehouseAddress.enterDate,
        warehouseExitDate: warehouseAddress.exitDate,
        forwardingRows,
        companyId,
        employeeRefId,
      });
      

      
      const result = await saleOrderApi.create(payload);
      
      toast.success('Order saved successfully!', { duration: 20000 });

    } catch (error) {
      console.error('Full Error:', error);
      console.error('Error Response:', error.response?.data);
      console.error('Error Status:', error.response?.status);
      
      const errorMsg = error.response?.data?.message || error.response?.data || error.message || 'Failed to save order';
      toast.error('Error: ' + errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const [tableData, setTableData] = useState([
    { sno: 1, productId: null, productCode: 'ADD DROP', description: 'ADDITIONAL DROP', remarks: '', qty: 0, rate: 0, taxCode: '', taxPercentage: 0, gstAmount: 0, amount: 0 }
  ]);

  const [pickupAddresses, setPickupAddresses] = useState([]);
  const [deliveryAddresses, setDeliveryAddresses] = useState([]);
  const [commonOrigin, setCommonOrigin] = useState('');
  const [commonDestination, setCommonDestination] = useState('');
  const [warehouseAddress, setWarehouseAddress] = useState({
    address: '',
    enterDate: '',
    exitDate: ''
  });

  const [forwardingRows, setForwardingRows] = useState([]);

  const handleAddItem = () => {
    const newItem = {
      sno: tableData.length + 1,
      productId: null,
      productCode: '',
      description: '',
      remarks: '',
      qty: 0,
      rate: 0,
      taxCode: '',
      taxPercentage: 0,
      gstAmount: 0,
      amount: 0
    };
    setTableData([...tableData, newItem]);
  };

  const handleDeleteItem = (index) => {
    setTableData(tableData.filter((_, i) => i !== index));
  };

  const handleCellChange = (rowIndex, field, value) => {
    setTableData(prevData => {
      const updatedData = [...prevData];
      updatedData[rowIndex][field] = value;
      
      // Calculate amounts when qty, rate, or tax changes
      if (field === 'qty' || field === 'rate' || field === 'taxPercentage') {
        const qty = parseFloat(updatedData[rowIndex].qty) || 0;
        const rate = parseFloat(updatedData[rowIndex].rate) || 0;
        const taxPercentage = parseFloat(updatedData[rowIndex].taxPercentage) || 0;
        
        const baseAmount = qty * rate;
        const gstAmount = (baseAmount * taxPercentage) / 100;
        const totalAmount = baseAmount + gstAmount;
        
        updatedData[rowIndex].gstAmount = gstAmount.toFixed(2);
        updatedData[rowIndex].amount = totalAmount.toFixed(2);
        updatedData[rowIndex].currencyValue = currencyConversion;
        updatedData[rowIndex].actualAmount = (totalAmount * currencyConversion).toFixed(2);
      }
      
      return updatedData;
    });
  };

  // Calculate totals
  const totals = {
    totalAmount: tableData.reduce((sum, row) => sum + (parseFloat(row.amount) || 0), 0).toFixed(2),
    totalActualAmount: tableData.reduce((sum, row) => sum + (parseFloat(row.actualAmount) || 0), 0).toFixed(2),
    totalGst: tableData.reduce((sum, row) => sum + (parseFloat(row.gstAmount) || 0), 0).toFixed(2),
    totalQty: tableData.reduce((sum, row) => sum + (parseFloat(row.qty) || 0), 0)
  };

  return {
    formData,
    errors,
    loading,
    tableData,
    pickupAddresses,
    deliveryAddresses,
    commonOrigin,
    commonDestination,
    warehouseAddress,
    forwardingRows,
    statusOptions,
    currencyConversion,
    symbolId,
    totals,
    setPickupAddresses,
    setDeliveryAddresses,
    setCommonOrigin,
    setCommonDestination,
    setWarehouseAddress,
    setForwardingRows,
    handleChange,
    handleView,
    handleGeneratePO,
    handleGenerateQuote,
    handleSave,
    handleAddItem,
    handleDeleteItem,
    handleCellChange
  };
};
