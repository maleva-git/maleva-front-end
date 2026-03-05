# MalevaFrontEnd - Production-Ready Architecture Guide

## 🏗️ Project Structure Philosophy

This project follows **Domain-Driven Design (DDD)** with **Feature-Based Architecture** for maximum scalability, maintainability, and reusability.

## 📁 Directory Structure

```
src/
├── api/                    # API layer - All backend communication
├── app/                    # Application core - Routes, Store
├── components/             # Shared UI components
│   ├── common/            # Reusable components (Button, Input, etc.)
│   ├── modals/            # Modal components
│   ├── table/             # Table components
│   └── ui/                # UI primitives
├── constants/             # Global constants and configurations
├── features/              # Feature modules (auth, customer, etc.)
├── hooks/                 # Custom React hooks
│   ├── planning/         # Planning-specific hooks
│   └── ...               # Other feature hooks
├── pages/                 # Page components (routes)
│   ├── Planning/         # Planning module
│   │   ├── components/   # Planning-specific components
│   │   ├── constants/    # Planning constants
│   │   ├── hooks/        # Planning hooks (if needed)
│   │   └── index.js      # Module exports
│   └── ...
├── services/              # Business logic services
├── utils/                 # Utility functions
└── styles/               # Global styles

```

## 🎯 Architecture Principles

### 1. **Separation of Concerns**
- **UI Components**: Pure presentational (no business logic)
- **Hooks**: State management and side effects
- **Services**: Business logic and API calls
- **Utils**: Pure functions for data transformation

### 2. **Single Responsibility Principle**
- Each file has ONE clear purpose
- Functions do ONE thing well
- Components render ONE concern

### 3. **DRY (Don't Repeat Yourself)**
- Reuse constants from `constants/`
- Share components from `components/`
- Extract common logic to `hooks/` and `utils/`

### 4. **Naming Conventions**
- **Components**: PascalCase (e.g., `PlanningList.jsx`)
- **Hooks**: camelCase with 'use' prefix (e.g., `usePlanningState.js`)
- **Utils**: camelCase (e.g., `dateUtils.js`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `PORT_OPTIONS`)

## 🔧 Code Standards

### API Calls
```javascript
// ✅ GOOD - Centralized in api/ folder
import { planningApi } from '../../api/planningApi';
const data = await planningApi.getPlanningList(params);

// ❌ BAD - Direct axios calls in components
const data = await axios.get('/api/planning');
```

### State Management
```javascript
// ✅ GOOD - Custom hooks
const { formData, updateFormField } = usePlanningState();

// ❌ BAD - Multiple useState in component
const [field1, setField1] = useState('');
const [field2, setField2] = useState('');
```

### Constants
```javascript
// ✅ GOOD - Import from constants
import { PORT_OPTIONS } from '../../constants/dropdownOptions';

// ❌ BAD - Hardcoded in component
const ports = ['COLOMBO', 'HAMBANTOTA'];
```

### Console Logs
```javascript
// ✅ GOOD - Only in development
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', data);
}

// ❌ BAD - Production console logs
console.log('Data:', data);
```

## 📦 Module Structure (Example: Planning)

```
Planning/
├── components/              # UI components
│   ├── PlanningFormFields.jsx
│   ├── PlanningActionButtons.jsx
│   └── planningColumns.jsx
├── constants/              # Module constants
│   └── planningConstants.js
├── PlanningList.jsx       # Main page
├── PlanningView.jsx       # View page
├── index.js               # Exports
└── README.md              # Documentation
```

## 🎨 Component Guidelines

### Reusable Components
- Must be in `components/` folder
- Should accept props for customization
- No hardcoded values
- Proper PropTypes or TypeScript

### Page Components
- In `pages/` folder
- Use custom hooks for logic
- Import reusable components
- Minimal inline logic

## 🔗 Import Order
```javascript
// 1. React and third-party
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// 2. Icons
import { Eye, Save } from 'lucide-react';

// 3. Hooks
import { useAuth } from '../../hooks/useAuth';
import { usePlanningState } from '../../hooks/planning';

// 4. API
import { planningApi } from '../../api/planningApi';

// 5. Components
import Button from '../../components/common/Button';

// 6. Constants
import { PORT_OPTIONS } from '../../constants/dropdownOptions';

// 7. Utils
import { formatDate } from '../../utils/dateUtils';
```

## 🚀 Best Practices

1. **Always use existing components** before creating new ones
2. **Reuse constants** from `constants/dropdownOptions.js`
3. **No console.log** in production code
4. **Proper error handling** with try-catch
5. **Loading states** for async operations
6. **Meaningful variable names** (no `x`, `temp`, `data1`)
7. **Comments** for complex logic only
8. **Clean up** useEffect dependencies

## 📝 Code Review Checklist

- [ ] No console.log statements
- [ ] Reused existing components
- [ ] Reused existing constants
- [ ] Proper error handling
- [ ] Loading states implemented
- [ ] Clean imports (no unused)
- [ ] Meaningful names
- [ ] Single responsibility
- [ ] Proper comments
- [ ] No hardcoded values

## 🎓 For Developers

**10-year experienced developer**: Will appreciate the clean architecture, separation of concerns, and scalability.

**2-year experienced developer**: Will easily understand the structure, find components, and add features without breaking existing code.

---

**Remember**: Write code that your future self (and team) will thank you for! 🙏
