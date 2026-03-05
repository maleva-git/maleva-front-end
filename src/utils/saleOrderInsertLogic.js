// ============================================
// SIMPLE SALE ORDER INSERT LOGIC
// ============================================

/**
 * Format date to ISO 8601 format (YYYY-MM-DDTHH:mm:ss)
 */
const formatDateISO = (date) => {
  if (!date) return null;
  const d = new Date(date);
  if (isNaN(d.getTime())) return null;
  return d.toISOString().slice(0, 19);
};

const INT_MAX = 2147483647;

const toSafeIntId = (value) => {
  if (!value) return 0;
  const parsed = Number(value);
  return (Number.isInteger(parsed) && parsed > 0 && parsed <= INT_MAX) ? parsed : 0;
};

const mapDetailsArray = (items, type, masterRefId) => {
  return (items || []).map((item, index) => {
    const base = {
      id: toSafeIntId(item.id),
      saleOrderMasterRefId: toSafeIntId(masterRefId),
      rowNumber: index + 1
    };

    if (type === 'pickup') {
      return {
        ...base,
        pickupAddress: item.address || item.pickupAddress || "",
        pickupTime: formatDateISO(item.datetime || item.pickupTime),
        pickupWeight: item.weight || item.pickupWeight || "",
        pickupQuantity: item.quantity || item.pickupQuantity || ""
      };
    }

    if (type === 'delivery') {
      return {
        ...base,
        deliveryAddress: item.address || item.deliveryAddress || "",
        deliveryTime: formatDateISO(item.datetime || item.deliveryTime),
        deliveryWeight: item.weight || item.deliveryWeight || "",
        deliveryQuantity: item.quantity || item.deliveryQuantity || ""
      };
    }

    if (type === 'forwarding') {
      return {
        ...base,
        forwardingDate: formatDateISO(item.createdDate),
        forwardingName: item.fw || null,
        enterRef: item.rNo || "",
        smkNo: item.smkNo || "",
        sealByRefId: item.sealBy ? parseInt(item.sealBy) : null,
        sealAmount: parseFloat(item.sealAmount) || 0.0,
        breakSealByRefId: item.bSealBy ? parseInt(item.bSealBy) : null,
        breakSealAmount: parseFloat(item.bSealAmount) || 0.0,
        exitRef: item.releaseNc || "",
        quantity: item.fQ || "",
        s1: item.s1 || "",
        s2: item.s2 || ""
      };
    }

    return base;
  });
};

/**
 * Build Sale Order Master payload
 */
export function buildSaleOrderPayload(formState, companyId, employeeRefId) {
  
  const masterId = toSafeIntId(formState.id);

  const SaleOrderDetails = (formState.saleOrderDetails || []).map((item, index) => ({
    id: toSafeIntId(item.id),
    saleOrderMasterRefId: masterId,
    itemMasterRefId: toSafeIntId(item.productId),
    mrp: 0,
    purchaseRate: 0,
    itemQty: parseFloat(item.qty) || 0,
    discPer: 0,
    discAmount: 0,
    landingCost: 0,
    taxPercent: parseFloat(item.taxPercentage) || 0,
    taxAmount: parseFloat(item.gstAmount) || 0,
    salesRate: parseFloat(item.rate) || 0,
    netSalesRate: 0,
    amount: parseFloat(item.amount) || 0,
    currencyValue: parseFloat(item.currencyValue) || parseFloat(formState.currencyValue) || 0,
    actualAmount: parseFloat(item.actualAmount) || parseFloat(item.amount) || 0,
    sdRemarks: item.remarks || "",
    taxRefId: toSafeIntId(item.taxRefId)
  }));

  const pickupDetails = mapDetailsArray(formState.pickupDetails, 'pickup', masterId);
  const deliveryDetails = mapDetailsArray(formState.deliveryDetails, 'delivery', masterId);
  const forwardingDetails = mapDetailsArray(formState.forwardingDetails, 'forwarding', masterId);

  const payload = {
    id: masterId,
    spotId: formState.spotId || null,
    companyRefId: parseInt(companyId) || 0,
    userRefId: null,
    employeeRefId: parseInt(employeeRefId) || 0,
    agentCompanyRefId: formState.agentCompanyRefId || null,
    agentMasterRefId: formState.agentId || null,
    oAgentCompanyRefId: formState.oAgentCompanyRefId || null,
    oAgentMasterRefId: formState.oAgentId || null,
    customerRefId: formState.customerId || null,
    jobMasterRefId: toSafeIntId(formState.jobTypeRefId),
    saleDate: formatDateISO(formState.jobDate),
    saleType: formState.saleType || "",
    cNumberDisplay: "0",
    cNumber: 0,
    coinage: formState.coinage || 0.0,
    sportSaleOrderId: formState.spotSaleOrderId || null,
    grossAmount: formState.totalAmount || 0.0,
    taxAmount: formState.taxAmount || 0.0,
    discountAmount: 0,
    remarks: formState.remarks || "",
    remarks1: formState.remarks1 || "",
    plusAmount: 0,
    minusAmount: 0,
    doDescription: formState.doDescription || "",
    amount: formState.totalAmount || 0,
    offVesselName: formState.offVesselName || "",
    loadingVesselName: formState.loadingVesselName || "",
    billType: formState.billType || "",
    sPort: formState.sPort || null,
    oPort: formState.oPort || null,
    vessel: formState.loadingVesselType || null,
    oVessel: formState.offVesselType || null,
    commodity: formState.commodity || null,
    cargo: formState.cargo || null,
    eta: formatDateISO(formState.loadingEta),
    etb: formatDateISO(formState.loadingEtb),
    etd: formatDateISO(formState.loadingEtd),
    oEta: formatDateISO(formState.offEta),
    oEtb: formatDateISO(formState.offEtb),
    oEtd: formatDateISO(formState.offEtd),
    docNo: null,
    invoiceNo: null,
    truckRefId: formState.vehicleId || null,
    driverRefId: formState.driverId || null,
    awbNo: formState.awbNo || "",
    ptw: formState.ptwNo || "",
    lptw: formState.lPtwNo || "",
    optw: formState.oPtwNo || "",
    blCopy: formState.blCopy || "",
    quantity: formState.quantity || "",
    totalWeight: formState.weight || "",
    truckSize: formState.truckSize || "",
    jStatus: formState.statusRefId || null,
    oStatus: 0,
    boardingOfficerRefId: formState.officer1 || null,
    boardingOfficer1RefId: formState.officer2 || null,
    boardingAmount: formState.amt1 || null,
    boardingAmount1: formState.amt2 || null,
    origin: formState.origin || "",
    destination: formState.destination || "",
    currencyValue: formState.currencyValue || 0,
    symbolRefId: formState.symbolRefId || 0,
    actualNetAmount: formState.actualNetAmount || 0,
    flightTime: formatDateISO(formState.loadingFlightTime),
    SaleOrderDetails: SaleOrderDetails,
    pickupDetails: pickupDetails,
    deliveryDetails: deliveryDetails,
    forwardingDetails: forwardingDetails
  };

  return payload;
}

/**
 * Entry point called from useSaleOrder.js handleSave
 * Accepts the combined save params object and delegates to buildSaleOrderPayload
 */
export function handleSaveSaleOrder({
  formData,
  tableData = [],
  pickupAddresses = [],
  deliveryAddresses = [],
  commonOrigin = '',
  commonDestination = '',
  warehouseAddress = '',
  warehouseEnterDate = '',
  warehouseExitDate = '',
  forwardingRows = [],
  companyId,
  employeeRefId
}) {
  const formState = {
    ...formData,
    saleOrderDetails: tableData,
    pickupDetails: pickupAddresses,
    deliveryDetails: deliveryAddresses,
    forwardingDetails: forwardingRows,
    origin: commonOrigin,
    destination: commonDestination,
    warehouseAddress: warehouseAddress,
    warehouseEnterDate: warehouseEnterDate,
    warehouseExitDate: warehouseExitDate,
  };

  return buildSaleOrderPayload(formState, companyId, employeeRefId);
}
