# RTI Module Migration - Complete Structure

```
src/
├── api/
│   ├── axios.js (existing)
│   └── endpoints.js (NEW)
│
├── components/
│   ├── common/
│   │   ├── DataTable.jsx
│   │   ├── ConfirmModal.jsx
│   │   ├── PasswordModal.jsx
│   │   ├── EmployeeLoginModal.jsx
│   │   ├── Dropdown.jsx
│   │   ├── DateTimeField.jsx
│   │   ├── PageHeader.jsx
│   │   ├── SkeletonLoader.jsx
│   │   └── ActionToolbar.jsx
│
├── hooks/
│   ├── useDropdownLoader.js
│   ├── useKeyboardShortcuts.js
│   ├── usePermission.js
│   ├── useCalculationEngine.js
│   └── useAuth.js
│
├── features/
│   └── rti/
│       ├── api/
│       │   └── rtiApi.js
│       ├── services/
│       │   ├── rtiService.js
│       │   ├── calculationService.js
│       │   └── validationService.js
│       ├── hooks/
│       │   ├── useRTIState.js
│       │   ├── useRTIOperations.js
│       │   ├── useRTIModals.js
│       │   └── useRTICalculations.js
│       ├── components/
│       │   ├── RTIColumns.jsx
│       │   ├── RTIFormFields.jsx
│       │   ├── RTIActionButtons.jsx
│       │   └── RTIGrid.jsx
│       ├── model/
│       │   ├── constants.js
│       │   ├── initialState.js
│       │   └── types.js
│       ├── pages/
│       │   ├── RTIPage.jsx
│       │   └── RTIViewPage.jsx
│       └── index.js
│
├── utils/
│   ├── validation.js
│   ├── formatting.js
│   ├── calculations.js
│   └── storage.js
│
└── App.jsx
```
