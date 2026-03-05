export const saleOrderInitialState = {
  // Header fields
  jobNo: '',
  jobDate: new Date().toISOString().split('T')[0],
  jobCategory: 'MY',
  billType: 'MY',
  saleType: 'CASH',
  status: 'pending',
  statusRefId: null,
  totalAmount: '0.00',
  taxAmount: '0.00',
  customerId: '',
  customerName: '',
  jobType: '',
  jobTypeRefId: '',
  doDescription: '',
  remarks: '',
  remarks1: '',
  referenceNo: '',
  awbNo: '',
  blCopy: '',
  cargo: '',
  commodityType: '',
  commodity: '',
  weight: '',
  quantity: '',
  truckSize: '',

  // Common Functions tab
  lPort: '',
  oPort: '',

  // Loading Vessel tab
  loadingEta: '',
  loadingEtb: '',
  loadingEtd: '',
  loadingShippingAgent: '',
  loadingAgent: '',
  loadingScn: '',
  loadingVesselName: '',
  loadingVesselType: '',
  loadingPortChargesRef: '',
  loadingPtwNo: '',
  loadingPortCharges: '',
  loadingOfficer1: '',
  loadingOfficer2: '',
  loadingAmt1: '0.00',
  loadingAmt2: '0.00',
  loadingZb1: '',
  loadingZbRef1: '',
  loadingFlightTime: '',

  // Off Vessel tab
  offEta: '',
  offEtb: '',
  offEtd: '',
  offShippingAgent: '',
  offAgent: '',
  offScn: '',
  offVesselName: '',
  offVesselType: '',
  offPortChargesRef: '',
  offPtwNo: '',
  offPortCharges: '',
  offOfficer1: '',
  offOfficer2: '',
  offAmt1: '0.00',
  offAmt2: '0.00',
  offZb2: '',
  offZbRef2: '',

  // Boarding Officers (main)
  officer1: '',
  officer2: '',
  amt1: '0.00',
  amt2: '0.00',

  // Agent fields
  agentCompanyRefId: null,
  agentId: null,
  oAgentCompanyRefId: null,
  oAgentId: null,

  // Forwarding Details Array
  forwardingDetails: [],

  // Pickup Details Array
  pickupDetails: [],

  // Delivery Details Array
  deliveryDetails: [],

  // Sale Details Array
  saleDetails: []
};
