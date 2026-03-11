# RTI Missing Logic - Complete List

## Critical Missing Features

### 1. **Password Modal** ❌ REMOVED
- Need to add back PasswordModal component
- Used for edit permissions (F9 delete)

### 2. **Employee Login Modal** ✅ EXISTS
- Already implemented

### 3. **Driver License Expiry Check** ✅ IMPLEMENTED
- Already in validateTruckLicense

### 4. **Truck License Expiry Check** ✅ IMPLEMENTED  
- Already in validateTruckLicense

### 5. **Agent Company → Agent Dropdown Dependency** ❌ MISSING
- When agent company selected, load agents for that company
- Need to add this logic to RTIFormFields

### 6. **Pickup/Drop Show/Hide Logic** ❌ MISSING
- When pickup = YES, show txtpickup input
- When drop = YES, show txtdrop input
- Currently missing this conditional rendering

### 7. **Grid Row Delete Confirmation** ✅ IMPLEMENTED
- Already in RTIGrid with Delete key

### 8. **F3 Search by RTI Number** ❌ MISSING
- Prompt for RTI number and load

### 9. **Load Button (Revise from Sale Order)** ✅ IMPLEMENTED
- Already in operations.revise

### 10. **WhatsApp Share** ❌ MISSING
- Share RTI PDF via WhatsApp
- Need RTIWhatsappShare function

### 11. **Print RTI Report** ❌ MISSING
- Generate and view PDF report
- Need RTIVIEW function

### 12. **Max RTI Number Generation** ❌ MISSING
- Auto-generate next RTI number on clear
- Need to call /RTI/MaxRTINo endpoint

### 13. **Employee Login on Page Load** ❌ MISSING
- If EmployeeRefid = 0, show employee login modal on mount

### 14. **Grid Nested Details** ❌ MISSING
- F5 view grid shows nested job details
- Need row expansion in RTIViewPage

### 15. **Calculation on Every Change** ⚠️ PARTIAL
- Need to trigger calculate() on ALL field changes
- Currently missing some triggers

## Implementation Priority

### HIGH PRIORITY (Must Have)
1. Add PasswordModal back to RTIPage
2. Add agent company → agent dependency
3. Add pickup/drop conditional inputs
4. Add employee login on mount if needed
5. Add Max RTI number generation

### MEDIUM PRIORITY (Should Have)
6. Add F3 search functionality
7. Add print RTI report
8. Add WhatsApp share
9. Add nested grid in F5 view

### LOW PRIORITY (Nice to Have)
10. Add more calculation triggers
11. Add grid validation messages
12. Add auto-scroll on grid navigation

## Files That Need Updates

1. **RTIPage.jsx** - Add PasswordModal, employee login check
2. **RTIFormFields.jsx** - Add agent dependency, pickup/drop conditional
3. **RTIViewPage.jsx** - Add nested grid, print, share buttons
4. **useRTIOperations.js** - Add F3 search, max number generation
5. **RTIActionButtons.jsx** - Add print and share buttons
6. **Modals.jsx** - Ensure PasswordModal is exported

## Next Steps
1. Fix PasswordModal import/export
2. Add missing conditional rendering
3. Add missing API calls
4. Add missing button handlers
