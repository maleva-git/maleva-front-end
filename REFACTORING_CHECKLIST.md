# Project Refactoring Checklist - Production Ready

## ✅ Completed

### Planning Module
- [x] Created hooks/planning/ with proper state management
- [x] Separated business logic from UI
- [x] Added comprehensive documentation
- [x] Removed console.log statements (dev-only logs)
- [x] Reused PORT_OPTIONS from constants/dropdownOptions.js
- [x] Created proper constants structure
- [x] Added proper error handling

## 🔄 To Refactor (150+ Files)

### Priority 1: Core Modules
- [ ] **Saleorder Module** (6 files)
  - [ ] Saleorderadd.jsx - Extract hooks, reuse components
  - [ ] useSaleOrder.js - Add documentation
  - [ ] useSaleOrderQueries.js - Error handling
  - [ ] useSaleOrderSave.js - Clean console logs
  - [ ] saleOrder.options.js - Already good
  - [ ] saleOrder.validation.js - Add JSDoc

- [ ] **Customer Module** (4 files)
  - [ ] Customer.jsx - Extract state to hooks
  - [ ] CustomerForm.jsx - Reuse UI components
  - [ ] customer.initialState.js - Add documentation
  - [ ] customer.validation.js - Add JSDoc

- [ ] **Employee Module** (3 files)
  - [ ] Employee.jsx - Extract hooks
  - [ ] EmployeeForm.jsx - Reuse components
  - [ ] Employee.initialState.js - Documentation

### Priority 2: API Layer
- [ ] **api/ folder** (8 files)
  - [ ] planningApi.js - Add JSDoc, error handling
  - [ ] truckApi.js - Add JSDoc
  - [ ] employeeApi.js - Standardize responses
  - [ ] adressapi.js - Fix typo, add docs
  - [ ] sequenceApi.js - Add error handling
  - [ ] jobConfigApi.js - Add JSDoc
  - [ ] endpoints.js - Document all endpoints
  - [ ] axios.js - Add interceptors documentation

### Priority 3: Components
- [ ] **components/common/** (12 files)
  - [ ] Button.jsx - Already good ✓
  - [ ] SearchableSelect.jsx - Already good ✓
  - [ ] Customercombo.jsx - Add JSDoc
  - [ ] SelectComboBox.jsx - Standardize props
  - [ ] Badge.jsx - Add variants documentation
  - [ ] Card.jsx - Add JSDoc
  - [ ] ConfirmDialog.jsx - Add examples
  - [ ] EmptyState.jsx - Add JSDoc
  - [ ] IconButton.jsx - Document props
  - [ ] LoadingSpinner.jsx - Add variants
  - [ ] SearchableDatatable.jsx - Extract logic
  - [ ] AddressSearchModal.jsx - Clean console

- [ ] **components/modals/** (3 files)
  - [ ] TruckSelectModal.jsx - Clean console logs
  - [ ] AddressListModal.jsx - Add validation
  - [ ] UpdateSaleOrderModal.jsx - Error handling

- [ ] **components/table/** (8 files)
  - [ ] UltraPremiumTable.jsx - Already good ✓
  - [ ] DataTable.jsx - Add JSDoc
  - [ ] EditableCell.jsx - Add validation
  - [ ] ActionButton.jsx - Standardize
  - [ ] DeleteButton.jsx - Add confirmation
  - [ ] StatusToggle.jsx - Add JSDoc
  - [ ] addabletable.jsx - Rename to AddableTable.jsx
  - [ ] AddressModal.jsx - Clean up

- [ ] **components/ui/** (20 files)
  - [ ] TextInput.jsx - Already good ✓
  - [ ] CompactButton.jsx - Merge with Button?
  - [ ] CompactCheckbox.jsx - Standardize
  - [ ] CompactSelect.jsx - Merge with SearchableSelect?
  - [ ] CompactTextArea.jsx - Add JSDoc
  - [ ] AnimatedButton.jsx - Document animations
  - [ ] AnimatedInputs.jsx - Add examples
  - [ ] AnimatedLogo.jsx - Optimize
  - [ ] Alert.jsx - Add variants
  - [ ] Checkbox.jsx - Standardize
  - [ ] FormField.jsx - Add validation
  - [ ] FormLayout.jsx - Add examples
  - [ ] Loading.jsx - Add variants
  - [ ] ModernButton.jsx - Merge with Button?
  - [ ] SearchInput.jsx - Standardize
  - [ ] Tabs.jsx - Add JSDoc
  - [ ] Breadcrumb.jsx - Add navigation
  - [ ] Accordin.jsx - Fix typo to Accordion
  - [ ] DataTable.jsx - Deduplicate
  - [ ] MultiAddressManager.jsx - Extract logic

### Priority 4: Features
- [ ] **features/auth/** (5 files)
  - [ ] authApi.js - Add JSDoc
  - [ ] authSlice.js - Add comments
  - [ ] authStorage.js - Secure storage
  - [ ] Login.jsx - Extract hooks
  - [ ] schema.js - Add validation docs

- [ ] **features/customer/** (3 files)
  - [ ] CustomerApi.js - Standardize
  - [ ] useCustomerQueries.js - Add JSDoc
  - [ ] index.js - Export documentation

- [ ] **features/employee/** (2 files)
  - [ ] useEmployees.js - Add JSDoc
  - [ ] index.js - Documentation

- [ ] **features/agentCompany/** (5 files)
  - [ ] agentCompanyApi.js - Add JSDoc
  - [ ] agentsApi.js - Standardize
  - [ ] useAgentCompanies.js - Documentation
  - [ ] useAgents.js - Add error handling
  - [ ] index.js - Export docs

- [ ] **features/jobType/** (3 files)
  - [ ] jobTypeApi.js - Add JSDoc
  - [ ] useJobTypeQueries.js - Documentation
  - [ ] index.js - Export docs

- [ ] **features/product/** (3 files)
  - [ ] productApi.js - Add JSDoc
  - [ ] useProducts.js - Documentation
  - [ ] index.js - Export docs

### Priority 5: Utils & Helpers
- [ ] **utils/** (11 files)
  - [ ] dateUtils.js - Add JSDoc, examples
  - [ ] validationUtils.js - Add test cases
  - [ ] storageUtils.js - Secure storage
  - [ ] formatters.js - Add JSDoc
  - [ ] helpers.js - Split into specific files
  - [ ] constants.js - Move to constants/
  - [ ] boardingCalculations.js - Add JSDoc
  - [ ] saleOrderInsertLogic.js - Extract to service
  - [ ] roleHierarchy.js - Add documentation
  - [ ] userRoles.js - Merge with roles.js?

### Priority 6: Pages
- [ ] **pages/Dashboard/** (9 files)
  - [ ] All dashboard files - Extract common logic
  
- [ ] **pages/Address/** (2 files)
  - [ ] AddressMaster.jsx - Extract hooks
  - [ ] AddressmasterColumn.jsx - Add JSDoc

- [ ] **pages/AgentMaster/** (3 files)
  - [ ] AgentMaster.jsx - Extract state
  - [ ] Agentmasterform.jsx - Reuse components
  - [ ] Agentmaster.initialState.js - Documentation

- [ ] **pages/Supplier/** (4 files)
  - [ ] Supplier.jsx - Extract hooks
  - [ ] SupplierForm.jsx - Reuse components
  - [ ] Supplier.initialState.js - Documentation
  - [ ] Supplier.Validation.js - Add JSDoc

### Priority 7: Configuration
- [ ] **constants/** (2 files)
  - [ ] dropdownOptions.js - Already good ✓
  - [ ] formOptions.js - Add JSDoc

- [ ] **config/** (2 files)
  - [ ] roleMenuConfig.js - Add documentation
  - [ ] roles.js - Add JSDoc

## 📋 Refactoring Standards

For each file:
1. Add file-level JSDoc comment
2. Remove console.log (use dev-only if needed)
3. Extract business logic to hooks/services
4. Reuse existing components
5. Reuse existing constants
6. Add proper error handling
7. Add loading states
8. Clean up imports
9. Add meaningful variable names
10. Add inline comments for complex logic only

## 🎯 Success Criteria

- Zero console.log in production
- All constants reused from central location
- All API calls in api/ folder
- All business logic in hooks/services
- All UI in components
- Proper error handling everywhere
- Loading states for all async operations
- JSDoc for all functions
- Readable by junior and senior developers
- Scalable architecture
