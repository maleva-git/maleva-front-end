# Sale Order View - Modern React Architecture

## Structure

```
src/features/sale-order/
├── api/
│   └── saleOrderViewApi.js          # API calls
├── components/
│   └── SaleOrderViewColumns.jsx     # Table column definitions
├── hooks/
│   ├── useSaleOrderViewState.js     # State management
│   └── useJobStatuses.js            # Job status data
├── pages/
│   └── SaleOrderView.jsx            # Main view page
├── services/                         # Business logic (if needed)
├── model/
│   └── constants.js                 # Constants
└── index.js                         # Exports
```

## Features

✅ Modern React with hooks
✅ Clean filter UI
✅ Single row selection with highlight
✅ Double-click to edit
✅ Copy-paste support (native browser)
✅ Keyboard navigation
✅ Responsive design
✅ Reusable components
✅ Follows vessel-planning architecture

## Usage

```javascript
import { SaleOrderView } from './features/sale-order';

<Route path="/sale-order/view" element={<SaleOrderView />} />
```

## Key Features

1. **Row Selection**: Click to select, double-click to edit
2. **Filters**: Date range, customer, employee, status, job type, vessel names
3. **ETA Filters**: Off ETA, Loading ETA, All ETA, None
4. **Checkboxes**: Pickup, Loading Employee, Invoice
5. **Remarks Filter**: All, With, Without
6. **Export**: Excel export functionality
7. **Summary**: Total amount and count display

## API Integration

Replace dummy API calls in `saleOrderViewApi.js` with actual endpoints.

## Styling

- Tailwind CSS
- Gradient backgrounds
- Hover effects
- Selected row highlighting
- Professional spacing
