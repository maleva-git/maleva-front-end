# Handling NULL Values for ETA, ETB, ETD Dates

## Problem
When date fields (ETA, ETB, ETD) are empty or unchecked, they should be sent as `null` to the backend, not as empty strings or undefined.

## Solution

### 1. Date Handler Utility (`dateHandlers.js`)

```javascript
import { formatDateForBackend, prepareDateFields } from '../utils/dateHandlers';

// This function handles NULL properly:
// - If checkbox is unchecked → returns null
// - If date is empty → returns null  
// - If date has value → returns the date
```

### 2. Form State Structure

Your form state should include:
- Date value fields: `eta`, `etb`, `etd`
- Checkbox fields: `etaChecked`, `etbChecked`, `etdChecked`

```javascript
const formData = {
  // Date values
  eta: '2024-01-15T10:00',
  etb: '',
  etd: '2024-01-16T14:00',
  
  // Checkboxes (controls if date should be sent)
  etaChecked: true,   // Will send ETA value
  etbChecked: false,  // Will send NULL for ETB
  etdChecked: true    // Will send ETD value
};
```

### 3. What Gets Sent to Backend

```javascript
{
  "ETA": "2024-01-15T10:00",  // ✅ Sent because checked and has value
  "ETB": null,                 // ✅ NULL because unchecked
  "ETD": "2024-01-16T14:00",  // ✅ Sent because checked and has value
  "OETA": null,                // ✅ NULL because not checked
  "OETB": null,                // ✅ NULL because not checked
  "OETD": null                 // ✅ NULL because not checked
}
```

### 4. All Date Fields Handled

The `prepareDateFields()` function handles ALL date fields:

**Main Vessel:**
- ETA, ETB, ETD

**Off Vessel:**
- OETA, OETB, OETD

**Forwarding:**
- ForwardingDate, Forwarding2Date, Forwarding3Date

**Pickup & Delivery:**
- PickupDate, DeliveryDate

**Warehouse:**
- WareHouseEnterDate, WareHouseExitDate

**Flight:**
- FlighTime

### 5. Usage in Your Component

```javascript
import { useSaleOrderSave } from './useSaleOrderSaveComplete';

const MyComponent = () => {
  const [formData, setFormData] = useState({
    eta: '',
    etaChecked: false,
    etb: '',
    etbChecked: false,
    // ... other fields
  });

  const { saveSaleOrder } = useSaleOrderSave();

  const handleSave = async () => {
    // The hook automatically handles NULL values
    const result = await saveSaleOrder(formData);
  };

  return (
    <div>
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={formData.etaChecked}
        onChange={(e) => setFormData(prev => ({
          ...prev,
          etaChecked: e.target.checked
        }))}
      />
      
      {/* Date Input */}
      <input
        type="datetime-local"
        value={formData.eta}
        onChange={(e) => setFormData(prev => ({
          ...prev,
          eta: e.target.value
        }))}
        disabled={!formData.etaChecked}
      />
    </div>
  );
};
```

### 6. Logic Flow

```
User Action → Form State → prepareDateFields() → Backend
─────────────────────────────────────────────────────────
Checkbox OFF  → etaChecked: false → ETA: null → NULL in DB
Checkbox ON   → etaChecked: true  → ETA: "2024-01-15" → Date in DB
Empty Date    → eta: ''           → ETA: null → NULL in DB
```

### 7. Key Points

✅ **Checkbox controls everything** - If unchecked, always sends NULL
✅ **Empty dates = NULL** - Empty string becomes NULL
✅ **Automatic handling** - No manual NULL checks needed
✅ **All date fields** - Works for all 15+ date fields
✅ **Type safe** - Proper null handling, no undefined

### 8. Testing

```javascript
// Test Case 1: Checkbox unchecked
formData = { eta: '2024-01-15', etaChecked: false }
Result: ETA = null ✅

// Test Case 2: Checkbox checked, no date
formData = { eta: '', etaChecked: true }
Result: ETA = null ✅

// Test Case 3: Checkbox checked, has date
formData = { eta: '2024-01-15', etaChecked: true }
Result: ETA = "2024-01-15" ✅
```

## Summary

The solution automatically handles NULL values for all date fields. You just need to:
1. Include checkbox state in your form
2. Use the `useSaleOrderSaveComplete` hook
3. The rest is handled automatically! 🎯
