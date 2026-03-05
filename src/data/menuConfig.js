// Menu Configuration - Based on HTML Menu Structure
import { 
  Star, Grid, Chrome, FileText, Lock, Airplay,
  Building2, Handshake, User, MapPin, CreditCard, Hash, Wrench, FileCheck, Package,
  ShoppingBag, Banknote, Ruler, UserCheck, Building, UserCog,
  Truck, Map, Anchor, FileSpreadsheet, Calculator, ShoppingCart, Nut,
  ClipboardList, Receipt, Ticket, RefreshCw, Fuel, PieChart, TicketCheck,
  DollarSign, Calendar, Ship, TrendingUp, Search, Mail, MessageSquare, Settings
} from 'lucide-react';

export const menuConfig = [
  {
    category: 'FAVOURITES',
    icon: Star,
    items: [
      { name: 'Sales Order', icon: FileText, path: '/SaleOrder' },
      { name: 'Quotation', icon: DollarSign, path: '/Quotation' },
      { name: 'Sales Invoice', icon: Receipt, path: '/SaleInvoice' },
      { name: 'PLANING', icon: Calendar, path: '/PLANING' },
      { name: 'VESSEL PLANING', icon: Ship, path: '/VESSELPLANING' },
      { name: 'RTI', icon: TrendingUp, path: '/RTI' },
      { name: 'ENQUIRY', icon: Search, path: '/EnquiryMaster' },
      { name: 'ENQUIRYTR', icon: Search, path: '/EnquiryMaster/EnquiryMasterTR' },
      { name: 'Pre Alert Report', icon: FileText, path: '/Report/PreAlertRerport' }
    ]
  },
  {
    category: 'MASTER',
    icon: Grid,
    subCategories: [
      {
        name: 'Sales Master',
        items: [
          { name: 'Company', icon: Building2, path: '/CompanySetting' },
          { name: 'Agent Company Master', icon: Handshake, path: '/AgentCompanyMaster' },
          { name: 'Agent Master', icon: User, path: '/AgentMaster' },
          { name: 'Address Master', icon: MapPin, path: '/AddressMaster' },
          { name: 'PaymentTerms Master', icon: CreditCard, path: '/PaymentTermsMaster' },
          { name: 'Symbol Master', icon: Hash, path: '/SymbolMaster' },
          { name: 'JobType Master', icon: Wrench, path: '/JobTypeMaster' },
          { name: 'JobType Details', icon: FileCheck, path: '/JobTypeDetails' },
          { name: 'JobStatus Master', icon: TrendingUp, path: '/JobStatusMaster' },
          { name: 'JobStatus Details', icon: FileCheck, path: '/JobStatusDetails' },
          { name: 'Item Master', icon: Package, path: '/ItemMaster' },
          { name: 'Product Master', icon: ShoppingBag, path: '/ProductMaster' },
          { name: 'Tax Master', icon: Banknote, path: '/TaxMaster' },
          { name: 'UOM', icon: Ruler, path: '/UOMMaster' },
          { name: 'Customer', icon: UserCheck, path: '/CustomerMaster' },
          { name: 'Payment Receipt', icon: Receipt, path: '/paymentReceiptInfo' },
          { name: 'Customer Quotation', icon: DollarSign, path: '/CustomerQuotation' },
          { name: 'Supplier', icon: Building, path: '/SupplierMaster' },
          { name: 'Employee Master', icon: UserCog, path: '/EmployeeMaster' },
          { name: 'Driver Master', icon: Truck, path: '/DriverMaster' },
          { name: 'Truck Master', icon: Truck, path: '/TruckMaster' },
          { name: 'Location Master', icon: Map, path: '/LocationMaster' },
          { name: 'Port Master', icon: Anchor, path: '/PortMaster' },
          { name: 'PaymentReceiptInfo', icon: FileSpreadsheet, path: '/PaymentReceiptInfo' }
        ]
      },
      {
        name: 'Accounts Master',
        items: [
          { name: 'Bank Master', icon: Building2, path: '/BankMaster' },
          { name: 'Expense Master', icon: Calculator, path: '/ExpenseMaster' },
          { name: 'Sub Expense Master', icon: Calculator, path: '/SubExpenseMaster' },
          { name: 'Chart of Accounts', icon: FileSpreadsheet, path: '/AccountsGroupMaster' }
        ]
      }
    ]
  },
  {
    category: 'TRANSACTION',
    icon: Chrome,
    subCategories: [
      {
        name: 'Sales',
        items: [
          { name: 'Sales Order', icon: FileText, path: '/SaleOrder' },
          { name: 'Quotation', icon: DollarSign, path: '/Quotation' },
          { name: 'Sales Invoice', icon: Receipt, path: '/SaleInvoice' },
          { name: 'PLANING', icon: Calendar, path: '/PLANING' },
          { name: 'VESSEL PLANING', icon: Ship, path: '/VESSELPLANING' },
          { name: 'RTI', icon: TrendingUp, path: '/RTI' },
          { name: 'ENQUIRY', icon: Search, path: '/EnquiryMaster' },
          { name: 'ENQUIRYTR', icon: Search, path: '/EnquiryMaster/EnquiryMasterTR' }
        ]
      },
      {
        name: 'Accounts',
        subCategories: [
          {
            name: 'Receivable',
            items: [
              { name: 'Receipt', icon: Receipt, path: '/Receipt' },
              { name: 'Sale Credit Note', icon: FileText, path: '/SaleCredit' }
            ]
          }
        ]
      }
    ],
    items: [
      { name: 'EmailInbox', icon: Mail, path: '/EmployeeMaster/EmployeeMailData' },
      { name: 'GoogleReview', icon: MessageSquare, path: '/EmployeeMaster/GoogleReview' }
    ]
  },
  {
    category: 'CRYSTAL REPORT',
    icon: FileText,
    subCategories: [
      {
        name: 'Master Reports',
        items: [
          { name: 'Address Report', icon: MapPin, path: '/Report/AddressReport' },
          { name: 'Agent Report', icon: User, path: '/Report/AgentReport' },
          { name: 'Item Report', icon: Package, path: '/Report/ItemReport' },
          { name: 'Product Report', icon: ShoppingBag, path: '/Report/ProductReport' },
          { name: 'Truck Report', icon: Truck, path: '/Report/TruckReport' },
          { name: 'Driver Report', icon: Truck, path: '/Report/DriverReport' },
          { name: 'Employee Report', icon: UserCog, path: '/Report/EmployeeReport' }
        ]
      },
      {
        name: 'Transaction Master',
        items: [
          { name: 'Pre Alert Report', icon: FileText, path: '/Report/PreAlertRerport' },
          { name: 'Expense Report', icon: Calculator, path: '/Report/ExpenseReport' },
          { name: 'Renewal Report', icon: RefreshCw, path: '/Report/RenewalReport' },
          { name: 'Salary Report', icon: Banknote, path: '/Report/SalaryReport' },
          { name: 'Driver RTI Report', icon: Truck, path: '/Report/DriverRTIReport' },
          { name: 'Payment Voucher Report', icon: Receipt, path: '/Report/PaymentVoucherReport' },
          { name: 'Toll Voucher Report', icon: Ticket, path: '/Report/TollReport' },
          { name: 'Fuel Report', icon: Fuel, path: '/Report/FuelReport' }
        ]
      },
      {
        name: 'Sales Report',
        items: [
          { name: 'Sale Consolidate', icon: FileText, path: '/Report/SaleReport' },
          { name: 'Sale Detail Report', icon: FileText, path: '/Report/SaleDetailedReport' },
          { name: 'SaleCredit Report', icon: FileText, path: '/Report/SaleCreditReport' },
          { name: 'SaleCredit Detailed Report', icon: FileText, path: '/Report/SaleCreditDetailedReport' }
        ]
      },
      {
        name: 'Supplier Report',
        items: [
          { name: 'Supplier List', icon: Building, path: '/Report/SupplierReport' },
          { name: 'Supplier Balance', icon: Calculator, path: '/Report/SupplierBalance' },
          { name: 'Supplier Payments', icon: Receipt, path: '/Report/SupplierPayment' },
          { name: 'Supplier Payments Due Report', icon: FileText, path: '/Report/SupplierPaymentDue' },
          { name: 'Supplier Statement', icon: FileSpreadsheet, path: '/Report/SupplierStatement' }
        ]
      },
      {
        name: 'Purchase Report',
        items: [
          { name: 'Purchase Report', icon: ShoppingCart, path: '/Report/PurchaseReport' },
          { name: 'Purchase Detail Report', icon: FileText, path: '/Report/PurchaseDetailedReport' },
          { name: 'Purchase History', icon: FileSpreadsheet, path: '/Report/PurchaseItemWiseReport' }
        ]
      },
      {
        name: 'Customer Report',
        items: [
          { name: 'Customer List', icon: UserCheck, path: '/Report/CustomerReport' },
          { name: 'Customer Statement', icon: FileSpreadsheet, path: '/Report/CustomerStatement' }
        ]
      }
    ]
  },
  {
    category: 'UTILS',
    icon: Lock,
    items: [
      { name: 'Main Setting', icon: Settings, path: '/Mainsetting' }
    ]
  },
  {
    category: 'PAYABLE',
    icon: Airplay,
    items: [
      { name: 'Purchase Order', icon: ShoppingCart, path: '/PurchaseOrderMaster' },
      { name: 'Spare Parts', icon: Nut, path: '/PurchaseMaster' },
      { name: 'Bills Order', icon: ClipboardList, path: '/BillsOrderMaster' },
      { name: 'Bills', icon: Receipt, path: '/BillMaster' },
      { name: 'Pay Bills', icon: Banknote, path: '/Payment' },
      { name: 'Claim Voucher', icon: Ticket, path: '/ClaimVoucher' },
      { name: 'Expense Entry', icon: Calculator, path: '/ExpenseEntry' },
      { name: 'Renewal Entry', icon: RefreshCw, path: '/RenewalEntry' },
      { name: 'Salary Entry', icon: Banknote, path: '/SalaryEntry' },
      { name: 'Fuel Entry', icon: Fuel, path: '/FuelEntry' },
      { name: 'Toll Entry', icon: Ticket, path: '/TollEntry' },
      { name: 'Levi Entry', icon: PieChart, path: '/LeviEntry' },
      { name: 'Payment Voucher', icon: TicketCheck, path: '/PaymentVoucher' }
    ]
  }
];