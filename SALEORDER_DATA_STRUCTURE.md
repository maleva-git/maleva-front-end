# Sale Order Data Structure Documentation

## Overview
This document explains how to properly structure Sale Order data for backend insertion, including Forwarding, Pickup, and Delivery details.

## Database Tables

### 1. SaleOrderMaster (Main Table)
- Stores main sale order information
- Contains Quantity and TotalWeight at job level

### 2. ForwardingDetails Table
```
Columns:
- Id (PK)
- SaleOrderMasterRefId (FK)
- ForwardingDate
- ForwardingName
- EnterRef
- SMKNo
- SealByRefId
- SealAmount
- BreakSealByRefId
- BreakSealAmount
- ExitRef
- Quantity
- S1
- S2
- RowNumber
- CreatedDate
- ModifiedDate
```

### 3. PickupDetails Table
```
Columns:
- Id (PK)
- SaleOrderMasterRefId (FK)
- PickupAddress
- PickupTime
- PickupWeaight
- PickupQuantity
- CreatedDate
```

### 4. DeliveryDetails Table
```
Columns:
- Id (PK)
- SaleOrderMasterRefId (FK)
- DeliveryAddress
- DeliveryTime
- DeliveryWeight
- DeliveryQuantity
- CreatedDate
```

## JSON Payload Structure

```json
{
  "Id": 0,
  "CompanyRefId": 1,
  "CustomerRefId": 123,
  "JobMasterRefId": 5,
  "SaleDate": "2024-01-15",
  "Quantity": "100",
  "TotalWeight": "500",
  "GrossAmount": "5000.00",
  "Amount": "5000.00",
  "Remarks": "Test order",
  
  "SaleDetails": [
    {
      "ProductCode": "PROD001",
      "ProductName": "Product 1",
      "ItemQty": 10,
      "SalesRate": 100,
      "Amount": 1000
    }
  ],
  
  "ForwardingDetails": [
    {
      "ForwardingDate": "2024-01-16T10:00:00",
      "ForwardingName": "Forwarding Company 1",
      "EnterRef": "REF001",
      "SMKNo": "SMK001",
      "SealByRefId": 10,
      "SealAmount": 50.00,
      "BreakSealByRefId": 11,
      "BreakSealAmount": 30.00,
      "ExitRef": "EXIT001",
      "Quantity": 100,
      "S1": "S1 Value",
      "S2": "S2 Value",
      "RowNumber": 1
    },
    {
      "ForwardingDate": "2024-01-17T10:00:00",
      "ForwardingName": "Forwarding Company 2",
      "EnterRef": "REF002",
      "SMKNo": "SMK002",
      "SealByRefId": 12,
      "SealAmount": 60.00,
      "BreakSealByRefId": 13,
      "BreakSealAmount": 40.00,
      "ExitRef": "EXIT002",
      "Quantity": 150,
      "S1": "S1 Value 2",
      "S2": "S2 Value 2",
      "RowNumber": 2
    }
  ],
  
  "PickupDetails": [
    {
      "PickupAddress": "123 Main St, City",
      "PickupTime": "2024-01-15T08:00:00",
      "PickupWeaight": 200,
      "PickupQuantity": 50
    },
    {
      "PickupAddress": "456 Oak Ave, Town",
      "PickupTime": "2024-01-15T09:00:00",
      "PickupWeaight": 300,
      "PickupQuantity": 50
    }
  ],
  
  "DeliveryDetails": [
    {
      "DeliveryAddress": "789 Pine Rd, Village",
      "DeliveryTime": "2024-01-16T14:00:00",
      "DeliveryWeight": 250,
      "DeliveryQuantity": 60
    },
    {
      "DeliveryAddress": "321 Elm St, City",
      "DeliveryTime": "2024-01-16T16:00:00",
      "DeliveryWeight": 250,
      "DeliveryQuantity": 40
    }
  ]
}
```

## Key Points

1. **Forwarding Data**: Up to 3 forwarding entries per sale order
2. **Pickup Data**: Multiple pickup addresses with individual quantities and weights
3. **Delivery Data**: Multiple delivery addresses with individual quantities and weights
4. **Master Quantity/Weight**: Stored at SaleOrderMaster level
5. **Detail Quantities**: Each pickup/delivery can have its own quantity

## Usage in Code

```javascript
import { useSaleOrderSave } from './useSaleOrderSave';

const { saveSaleOrder } = useSaleOrderSave();

const formData = {
  // ... collect all form fields
  pickupAddresses: ['Address 1', 'Address 2'],
  pickupQuantities: [50, 50],
  pickupWeights: [200, 300],
  // ... etc
};

const result = await saveSaleOrder(formData);
```
