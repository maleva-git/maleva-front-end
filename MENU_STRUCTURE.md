# Menu Structure & Routes Documentation

## Overview
This document outlines the complete menu structure and routing configuration based on the HTML menu provided.

## Menu Categories

### 1. FAVOURITES
Quick access to frequently used features:
- Sales Order → `/SaleOrder`
- Quotation → `/Quotation`
- Sales Invoice → `/SaleInvoice`
- PLANING → `/PLANING`
- VESSEL PLANING → `/VESSELPLANING`
- RTI → `/RTI`
- ENQUIRY → `/EnquiryMaster`
- ENQUIRYTR → `/EnquiryMaster/EnquiryMasterTR`
- Pre Alert Report → `/Report/PreAlertRerport`

### 2. MASTER
#### Sales Master
- Company → `/CompanySetting`
- Agent Company Master → `/AgentCompanyMaster`
- Agent Master → `/AgentMaster`
- Address Master → `/AddressMaster`
- PaymentTerms Master → `/PaymentTermsMaster`
- Symbol Master → `/SymbolMaster`
- JobType Master → `/JobTypeMaster`
- JobType Details → `/JobTypeDetails`
- JobStatus Master → `/JobStatusMaster`
- JobStatus Details → `/JobStatusDetails`
- Item Master → `/ItemMaster`
- Product Master → `/ProductMaster`
- Tax Master → `/TaxMaster`
- UOM → `/UOMMaster`
- Customer → `/CustomerMaster`
- Payment Receipt → `/paymentReceiptInfo`
- Customer Quotation → `/CustomerQuotation`
- Supplier → `/SupplierMaster`
- Employee Master → `/EmployeeMaster`
- Driver Master → `/DriverMaster`
- Truck Master → `/TruckMaster`
- Location Master → `/LocationMaster`
- Port Master → `/PortMaster`
- PaymentReceiptInfo → `/PaymentReceiptInfo`

#### Accounts Master
- Bank Master → `/BankMaster`
- Expense Master → `/ExpenseMaster`
- Sub Expense Master → `/SubExpenseMaster`
- Chart of Accounts → `/AccountsGroupMaster`

### 3. TRANSACTION
#### Sales
- Sales Order → `/SaleOrder`
- Quotation → `/Quotation`
- Sales Invoice → `/SaleInvoice`
- PLANING → `/PLANING`
- VESSEL PLANING → `/VESSELPLANING`
- RTI → `/RTI`
- ENQUIRY → `/EnquiryMaster`
- ENQUIRYTR → `/EnquiryMaster/EnquiryMasterTR`

#### Accounts → Receivable
- Receipt → `/Receipt`
- Sale Credit Note → `/SaleCredit`

#### Other
- EmailInbox → `/EmployeeMaster/EmployeeMailData`
- GoogleReview → `/EmployeeMaster/GoogleReview`

### 4. CRYSTAL REPORT
#### Master Reports
- Address Report → `/Report/AddressReport`
- Agent Report → `/Report/AgentReport`
- Item Report → `/Report/ItemReport`
- Product Report → `/Report/ProductReport`
- Truck Report → `/Report/TruckReport`
- Driver Report → `/Report/DriverReport`
- Employee Report → `/Report/EmployeeReport`

#### Transaction Master
- Pre Alert Report → `/Report/PreAlertRerport`
- Expense Report → `/Report/ExpenseReport`
- Renewal Report → `/Report/RenewalReport`
- Salary Report → `/Report/SalaryReport`
- Driver RTI Report → `/Report/DriverRTIReport`
- Payment Voucher Report → `/Report/PaymentVoucherReport`
- Toll Voucher Report → `/Report/TollReport`
- Fuel Report → `/Report/FuelReport`

#### Sales Report
- Sale Consolidate → `/Report/SaleReport`
- Sale Detail Report → `/Report/SaleDetailedReport`
- SaleCredit Report → `/Report/SaleCreditReport`
- SaleCredit Detailed Report → `/Report/SaleCreditDetailedReport`

#### Supplier Report
- Supplier List → `/Report/SupplierReport`
- Supplier Balance → `/Report/SupplierBalance`
- Supplier Payments → `/Report/SupplierPayment`
- Supplier Payments Due Report → `/Report/SupplierPaymentDue`
- Supplier Statement → `/Report/SupplierStatement`

#### Purchase Report
- Purchase Report → `/Report/PurchaseReport`
- Purchase Detail Report → `/Report/PurchaseDetailedReport`
- Purchase History → `/Report/PurchaseItemWiseReport`

#### Customer Report
- Customer List → `/Report/CustomerReport`
- Customer Statement → `/Report/CustomerStatement`

### 5. UTILS
- Main Setting → `/Mainsetting`

### 6. PAYABLE
- Purchase Order → `/PurchaseOrderMaster`
- Spare Parts → `/PurchaseMaster`
- Bills Order → `/BillsOrderMaster`
- Bills → `/BillMaster`
- Pay Bills → `/Payment`
- Claim Voucher → `/ClaimVoucher`
- Expense Entry → `/ExpenseEntry`
- Renewal Entry → `/RenewalEntry`
- Salary Entry → `/SalaryEntry`
- Fuel Entry → `/FuelEntry`
- Toll Entry → `/TollEntry`
- Levi Entry → `/LeviEntry`
- Payment Voucher → `/PaymentVoucher`

## Directory Structure Recommendations

```
src/
├── features/
│   ├── sales/
│   │   ├── pages/
│   │   │   ├── SaleOrderPage.jsx
│   │   │   ├── QuotationPage.jsx
│   │   │   └── SaleInvoicePage.jsx
│   │   ├── components/
│   │   └── services/
│   ├── planning/
│   │   ├── pages/
│   │   │   ├── PlanningPage.jsx
│   │   │   └── RTIPage.jsx
│   │   └── services/
│   ├── vessel-planning/
│   │   ├── pages/
│   │   │   ├── VesselPlanningListPage.jsx
│   │   │   └── VesselPlanningViewPage.jsx
│   │   └── services/
│   ├── enquiry/
│   │   ├── pages/
│   │   │   ├── EnquiryPage.jsx
│   │   │   └── EnquiryTRPage.jsx
│   │   └── services/
│   ├── master/
│   │   ├── sales-master/
│   │   │   ├── pages/
│   │   │   │   ├── CompanySettingPage.jsx
│   │   │   │   ├── AgentCompanyPage.jsx
│   │   │   │   ├── AgentMasterPage.jsx
│   │   │   │   ├── AddressMasterPage.jsx
│   │   │   │   ├── PaymentTermsPage.jsx
│   │   │   │   ├── SymbolMasterPage.jsx
│   │   │   │   ├── JobTypePage.jsx
│   │   │   │   ├── ItemMasterPage.jsx
│   │   │   │   ├── ProductMasterPage.jsx
│   │   │   │   ├── TaxMasterPage.jsx
│   │   │   │   ├── UOMPage.jsx
│   │   │   │   ├── CustomerPage.jsx
│   │   │   │   ├── SupplierPage.jsx
│   │   │   │   ├── EmployeePage.jsx
│   │   │   │   ├── DriverPage.jsx
│   │   │   │   ├── TruckPage.jsx
│   │   │   │   ├── LocationPage.jsx
│   │   │   │   └── PortPage.jsx
│   │   │   └── services/
│   │   └── accounts-master/
│   │       ├── pages/
│   │       │   ├── BankMasterPage.jsx
│   │       │   ├── ExpenseMasterPage.jsx
│   │       │   ├── SubExpensePage.jsx
│   │       │   └── ChartOfAccountsPage.jsx
│   │       └── services/
│   ├── transaction/
│   │   ├── receivable/
│   │   │   ├── pages/
│   │   │   │   ├── ReceiptPage.jsx
│   │   │   │   └── SaleCreditPage.jsx
│   │   │   └── services/
│   │   └── other/
│   │       └── pages/
│   │           ├── EmailInboxPage.jsx
│   │           └── GoogleReviewPage.jsx
│   ├── reports/
│   │   ├── master-reports/
│   │   │   └── pages/
│   │   ├── transaction-reports/
│   │   │   └── pages/
│   │   ├── sales-reports/
│   │   │   └── pages/
│   │   ├── supplier-reports/
│   │   │   └── pages/
│   │   ├── purchase-reports/
│   │   │   └── pages/
│   │   └── customer-reports/
│   │       └── pages/
│   ├── payable/
│   │   ├── pages/
│   │   │   ├── PurchaseOrderPage.jsx
│   │   │   ├── SparePartsPage.jsx
│   │   │   ├── BillsOrderPage.jsx
│   │   │   ├── BillsPage.jsx
│   │   │   ├── PayBillsPage.jsx
│   │   │   ├── ClaimVoucherPage.jsx
│   │   │   ├── ExpenseEntryPage.jsx
│   │   │   ├── RenewalEntryPage.jsx
│   │   │   ├── SalaryEntryPage.jsx
│   │   │   ├── FuelEntryPage.jsx
│   │   │   ├── TollEntryPage.jsx
│   │   │   ├── LeviEntryPage.jsx
│   │   │   └── PaymentVoucherPage.jsx
│   │   └── services/
│   └── utils/
│       └── pages/
│           └── MainSettingPage.jsx
```

## Implementation Status

### ✅ Implemented
- Dashboard routes
- Customer Master (existing)
- Supplier Master (existing)
- Employee Master (existing)
- Agent Company Master (existing)
- Agent Master (existing)
- Address Master (existing)
- Sale Order (existing)
- Planning (existing)
- Vessel Planning (existing)

### 🚧 Pending Implementation (Using UnderDevelopment placeholder)
All other routes are configured but pointing to the UnderDevelopment component.

## Next Steps

1. Create feature directories for each module
2. Implement page components for each route
3. Create service layers for API integration
4. Add form validation schemas
5. Implement role-based access control
6. Add unit tests for each feature

## Notes

- All routes are protected with authentication
- Legacy routes maintained for backward compatibility
- UnderDevelopment component used as placeholder for pending features
- Menu configuration supports nested subcategories
