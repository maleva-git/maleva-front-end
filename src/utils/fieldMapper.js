/**
 * Maps your formState field names to backend expected field names
 * Handles NULL values properly
 */
export const mapFormStateToBackend = (formState) => {
  return {
    // Basic Info
    Id: formState.Id || 0,
    SpotId: formState.SpotId || 0,
    CompanyRefId: formState.CompanyRefId,
    UserRefId: formState.UserRefId || null,
    EmployeeRefId: formState.EmployeeRefId || 0,
    
    // Customer & Job
    CustomerRefId: formState.CustomerRefId,
    JobMasterRefId: formState.JobTypeRefId || formState.JobMasterRefId,
    SaleDate: formState.JobDate || formState.SaleDate,
    SaleType: formState.SaleType || '',
    
    // Status
    JStatus: formState.StatusRefId || formState.JStatus || null,
    OStatus: 0,
    
    // Amounts
    GrossAmount: formState.TotalAmount || formState.GrossAmount || 0,
    TaxAmount: formState.TotalTax || formState.TaxAmount || 0,
    Amount: formState.GrandTotal || formState.Amount || 0,
    ActualNetAmount: formState.GrandTotal || formState.ActualNetAmount || 0,
    CurrencyValue: formState.CurrencyConversion || formState.CurrencyValue || 1,
    SymbolRefId: formState.SymbolRefId || null,
    
    // Remarks & Description
    Remarks: formState.Remarks || '',
    Remarks1: formState.Remarks1 || '',
    DODescription: formState.Description || formState.DODescription || '',
    
    // Document Numbers
    AWBNo: formState.AWBNo || '',
    BLCopy: formState.BLCopy || '',
    PTW: formState.PTWNo || formState.PTW || '',
    BillType: formState.BillType || '',
    
    // Quantity & Weight
    Quantity: formState.Quantity || '',
    TotalWeight: formState.Weight || formState.TotalWeight || '',
    TruckSize: formState.TruckSize || '',
    
    // Cargo & Commodity
    Cargo: formState.CargoRefId || formState.Cargo || '',
    Commodity: formState.CommodityRefId || formState.Commodity || '',
    
    // Loading Vessel (Main Vessel)
    Loadingvesselname: formState.LoadingVesselName || formState.Loadingvesselname || '',
    SPort: formState.LoadingPortRefId || formState.SPort || '',
    Vessel: formState.LoadingVesselTypeRefId || formState.Vessel || '',
    AgentCompanyRefId: formState.LoadingShippingAgentRefId || formState.AgentCompanyRefId || null,
    AgentMasterRefId: formState.LoadingAgentRefId || formState.AgentMasterRefId || null,
    ETA: formState.LoadingETA || null,
    ETB: formState.LoadingETB || null,
    ETD: formState.LoadingETD || null,
    LSCN: formState.LoadingSCN || formState.LSCN || '',
    LPTW: formState.LoadingPTWNo || formState.LPTW || '',
    LBoardingOfficerRefid: formState.LoadingBoardingOfficer1RefId || null,
    LBoardingOfficer1Refid: formState.LoadingBoardingOfficer2RefId || null,
    LBoardingAmount: formState.LoadingBoardingAmount1 || '',
    LBoardingAmount1: formState.LoadingBoardingAmount2 || '',
    LPortChargesRef: formState.LoadingPortChargesRef || '',
    LPortCharges: formState.LoadingPortChargesAmount || '',
    Zb: formState.LoadingZBRefId || formState.Zb || '',
    ZbRef: formState.LoadingZBRef || formState.ZbRef || '',
    
    // Off Vessel
    Offvesselname: formState.OffVesselName || formState.Offvesselname || '',
    OPort: formState.OffPortRefId || formState.OPort || '',
    OVessel: formState.OffVesselTypeRefId || formState.OVessel || '',
    OAgentCompanyRefId: formState.OffShippingAgentRefId || formState.OAgentCompanyRefId || null,
    OAgentMasterRefId: formState.OffAgentRefId || formState.OAgentMasterRefId || null,
    OETA: formState.OffETA || null,
    OETB: formState.OffETB || null,
    OETD: formState.OffETD || null,
    SCN: formState.OffSCN || formState.SCN || '',
    OPTW: formState.OffPTWNo || formState.OPTW || '',
    OBoardingOfficerRefid: formState.OffBoardingOfficer1RefId || null,
    OBoardingOfficer1Refid: formState.OffBoardingOfficer2RefId || null,
    OBoardingAmount: formState.OffBoardingAmount1 || '',
    OBoardingAmount1: formState.OffBoardingAmount2 || '',
    OPortChargesRef: formState.OffPortChargesRef || '',
    OPortCharges: formState.OffPortChargesAmount || '',
    Zb2: formState.OffZBRefId || formState.Zb2 || '',
    ZbRef2: formState.OffZBRef || formState.ZbRef2 || '',
    
    // Flight Time
    FlighTime: formState.FlightTime || null,
    
    // Boarding Officers (Main)
    BoardingOfficerRefid: formState.BoardingOfficer1RefId || null,
    BoardingOfficer1Refid: formState.BoardingOfficer2RefId || null,
    BoardingAmount: formState.BoardingAmount1 || '',
    BoardingAmount1: formState.BoardingAmount2 || '',
    PortChargesRef: formState.PortChargesRef || '',
    PortCharges: formState.PortChargesAmount || '',
    
    // Pickup & Delivery
    PickupAddress: formState.PickupAddress || '',
    PickupDate: formState.PickupDate || null,
    DeliveryAddress: formState.DeliveryAddress || '',
    DeliveryDate: formState.DeliveryDate || null,
    
    // Warehouse
    WareHouseAddress: formState.WarehouseAddress || formState.WareHouseAddress || '',
    WareHouseEnterDate: formState.WarehouseEnterDate || null,
    WareHouseExitDate: formState.WarehouseExitDate || null,
    
    // Origin & Destination
    Origin: formState.Origin || '',
    Destination: formState.Destination || '',
    
    // Forwarding Details (from array)
    ForwardingDetails: formState.ForwardingDetails || [],
    
    // Pickup Address List (from array)
    PickupDetails: formState.PickupAddressList || [],
    
    // Delivery Address List (from array)
    DeliveryDetails: formState.DeliveryAddressList || [],
    
    // Sale Order Details (Products)
    SaleDetails: formState.SaleOrderDetails || [],
    
    // Port Charges Flags
    Notportchagre: formState.Notportchagre || 0,
    NotBoatCPop: formState.NotBoatCPop || 0,
    NotBoatCPop1: formState.NotBoatCPop1 || 0,
    NotPFPPCPop1: formState.NotPFPPCPop1 || 0,
    NotForwardingCPop: formState.NotForwardingCPop || 0,
    NotPermitCPop: formState.NotPermitCPop || 0,
    NotLevyChares: formState.NotLevyChares || 0,
    NotMMHECPop: formState.NotMMHECPop || 0,
    NotAFpoCPop: formState.NotAFpoCPop || 0,
    NotSFWpoCPop: formState.NotSFWpoCPop || 0,
    NotSFEWpoCPop: formState.NotSFEWpoCPop || 0,
    PortCPop: formState.PortCPop || 0,
    ForwardingCPop: formState.ForwardingCPop || 0,
    BoatCPop: formState.BoatCPop || 0,
    rbtportchagdeop: formState.rbtportchagdeop || 0,
    PermitCPop: formState.PermitCPop || 0,
    LiveCPop: formState.LiveCPop || 0,
    MMHECPop: formState.MMHECPop || 0,
    AFpoCPop: formState.AFpoCPop || 0,
    PFPPCPop1: formState.PFPPCPop1 || 0,
    SFWpoCPop: formState.SFWpoCPop || 0,
    BoatCPop1: formState.BoatCPop1 || 0,
    SFEWpoCPop: formState.SFEWpoCPop || 0,
    PlusAmount: 0,
    MinusAmount: 0,
    CNumberDisplay: 0,
    CNumber: 0,
    Coinage: 0,
    sportsaleorderid: 0,
    DiscountAmount: 0,
    DOCNo: null,
    InvoiceNo: null,
    TruckRefid: null,
    DriverRefid: null,
    ForkliftbyRefid: null,
    SealbyRefid: null,
    SealbreakbyRefid: null,
    SealbyRefid2: null,
    SealbreakbyRefid2: null,
    SealbyRefid3: null,
    SealbreakbyRefid3: null,
    ForwardingEnterRef: '',
    ForwardingExitRef: '',
    ForwardingEnterRef2: '',
    ForwardingExitRef2: '',
    ForwardingEnterRef3: '',
    ForwardingQuantity: '',
    ForwardingQuantity2: '',
    ForwardingQuantity3: '',
    ForwardingExitRef3: '',
    ForwardingSMKNo: '',
    ForwardingSMKNo2: '',
    ForwardingSMKNo3: '',
    SealAmount: '',
    BreakSealAmount: '',
    SealAmount2: '',
    BreakSealAmount2: '',
    SealAmount3: '',
    BreakSealAmount3: '',
    pickupQuantityList: '',
    DeliveryQuantityList: '',
    Quantitylist: '',
    Forwarding: '',
    Forwarding2: '',
    Forwarding3: '',
    Forwarding1S1: '',
    Forwarding1S2: '',
    Forwarding2S1: '',
    Forwarding2S2: '',
    Forwarding3S1: '',
    Forwarding3S2: '',
    ForwardingDate: null,
    Forwarding2Date: null,
    Forwarding3Date: null,
    trucksize2: null,
    OriginRefId: null,
    DestinationRefId: null
  };
};
