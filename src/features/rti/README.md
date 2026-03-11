# RTI Module - Complete Migration Documentation

## Overview
Complete migration of legacy jQuery/jqxGrid RTI module to modern React architecture with 100% business logic preservation.

## Architecture

### Feature-Based Structure
```
src/features/rti/
├── api/              # API layer
├── services/         # Business logic
├── hooks/            # React hooks
├── components/       # UI components
├── model/            # Constants & types
└── pages/            # Route pages
```

## Key Changes

### 1. Routing (F5 Behavior)
**Old:** F5 opened jqxWindow popup
**New:** F5 navigates to `/rti/view` full page

```javascript
// Navigate programmatically
navigate('/rti/view');

// Or open in new tab
window.open('/rti/view', '_blank');
```

### 2. Dropdown System
**Old:** 50+ repeated AJAX functions in loadcombobox.js
**New:** Single reusable hook

```javascript
// Usage
const drivers = useDriverDropdown(comid);
const trucks = useTruckDropdown(comid);

// Access
drivers.data      // Raw data
drivers.options   // Formatted {label, value}
drivers.loading   // Loading state
drivers.refetch() // Reload
```

### 3. Grid System
**Old:** jqxGrid with complex jQuery manipulation
**New:** TanStack Table with React state

```javascript
// Editable cells
<RTIGrid
  data={gridData}
  onCellEdit={updateGridRow}
  onRowDelete={deleteGridRow}
  fillItemsByJobNo={fillItemsByJobNo}
/>
```

### 4. State Management
**Old:** Global variables and DOM manipulation
**New:** React hooks with clean state

```javascript
const rtiState = useRTIState();

// Update field
rtiState.updateField('driverRefId', value);

// Update grid
rtiState.updateGridRow(rowIndex, 'Salary', value);

// Calculate
rtiState.calculate();
```

### 5. Business Logic Preservation

#### Calculations
All calculation logic preserved in `calculationService.js`:
- Sleeping allowance
- Empty pickup/delivery
- Add pickup/drop
- Manpower
- Total amount

#### Validations
All validation logic preserved in `validationService.js`:
- Truck license expiry check
- Form validation
- Duplicate job number check
- Employee login validation

#### Operations
All operations preserved in `rtiService.js`:
- Load RTI by ID
- Save RTI
- Delete RTI
- Revise from Sale Order
- Fill items by Job No

## Keyboard Shortcuts

All shortcuts preserved:
- **F1**: Save
- **F5**: View list
- **F9**: Delete
- **F10**: Clear
- **Enter**: Navigate/Submit
- **Delete**: Delete row

## API Mapping

### Legacy → New
```javascript
// Old
$.ajax({ url: '/RTI/SelectRTI', ... })

// New
await rtiApi.getList(params)
```

All endpoints centralized in `api/endpoints.js`

## Component Breakdown

### RTIPage.jsx
Main page with:
- Form fields
- Grid
- Action buttons
- Modals
- Keyboard shortcuts

### RTIViewPage.jsx
List/view page with:
- Filters
- Data table
- Navigation to edit

### RTIFormFields.jsx
All form inputs with:
- Dropdowns
- Checkboxes
- Text inputs
- Date pickers

### RTIGrid.jsx
Editable grid with:
- Inline editing
- Row deletion
- Job number lookup
- Keyboard navigation

## Hooks

### useRTIState
Manages all form and grid state

### useRTIOperations
Handles all business operations:
- Load, save, delete
- Revise, fill items
- Truck validation

### useRTIModals
Manages all modals:
- Password
- Employee login
- Confirm
- Alert

### useDropdownLoader
Reusable dropdown loader with caching

### useKeyboardShortcuts
Global keyboard shortcut handler

## Services

### RTIService
Main business logic:
- Data transformation
- API calls
- Date formatting

### RTICalculationService
All calculation logic:
- Amount calculations
- Rounding
- Validation

### RTIValidationService
All validation logic:
- Form validation
- License expiry
- Duplicate checks

## Styling

### 2026 Premium UI
- Gradient backgrounds
- Soft shadows
- Rounded corners (12px)
- Smooth transitions
- Glass effects
- Professional typography
- Hover animations

### Tailwind Classes
```javascript
// Card
className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"

// Button
className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"

// Input
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
```

## Migration Checklist

✅ All business logic preserved
✅ All calculations working
✅ All validations working
✅ All keyboard shortcuts working
✅ All API endpoints mapped
✅ Dropdown system reusable
✅ Grid fully functional
✅ F5 navigation to full page
✅ Modals working
✅ Premium UI design
✅ Production-ready code
✅ Fully modular
✅ Easy to extend

## Usage

### Create New RTI
```javascript
navigate('/rti');
```

### Edit Existing RTI
```javascript
navigate(`/rti/edit/${id}`);
```

### View RTI List
```javascript
navigate('/rti/view');
```

### Keyboard Shortcuts
- Press F1 to save
- Press F5 to view list
- Press F9 to delete
- Press F10 to clear

## Extension Guide

### Add New Field
1. Add to `initialState.js`
2. Add to `RTIFormFields.jsx`
3. Add to `prepareSaveData()` in `rtiService.js`

### Add New Calculation
1. Add logic to `calculationService.js`
2. Call `calculate()` in component

### Add New Validation
1. Add logic to `validationService.js`
2. Call in `validateForm()`

### Add New Dropdown
1. Add endpoint to `endpoints.js`
2. Create hook in `useDropdownLoader.js`
3. Use in component

## Performance

- Dropdown caching
- Lazy loading
- Optimized re-renders
- Debounced calculations
- Memoized components

## Security

- Password validation
- Employee authentication
- Permission checks
- Input sanitization
- XSS prevention

## Testing

All business logic testable:
```javascript
import { RTICalculationService } from './services/calculationService';

test('calculates total correctly', () => {
  const result = RTICalculationService.calculate(state, gridData);
  expect(result.totalAmount).toBe(expected);
});
```

## Deployment

1. Build: `npm run build`
2. Test: `npm run test`
3. Deploy: Standard React deployment

## Support

For issues or questions:
1. Check this documentation
2. Review service layer logic
3. Check console for errors
4. Verify API responses

---

**Migration Status**: ✅ Complete
**Business Logic**: ✅ 100% Preserved
**UI Quality**: ✅ 2026 Premium Enterprise
**Production Ready**: ✅ Yes
