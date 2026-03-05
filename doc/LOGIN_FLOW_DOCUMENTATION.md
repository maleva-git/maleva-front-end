# 🔐 MALEVA FRONTEND - LOGIN AUTHENTICATION FLOW

**Project:** Maleva Logistics Platform  
**Tech Stack:** React + Vite + Redux + Axios + JWT  
**Backend API:** http://localhost:8080/api/auth/login  
**Date:** 2024

---

## 📋 TABLE OF CONTENTS

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Complete Login Flow](#complete-login-flow)
4. [File Structure](#file-structure)
5. [Code Implementation](#code-implementation)
6. [API Specifications](#api-specifications)
7. [Security Features](#security-features)
8. [Error Handling](#error-handling)

---

## 1. OVERVIEW

### Purpose
This document explains the complete authentication flow in the Maleva Frontend application, from user login to protected route access.

### Key Features
- JWT token-based authentication
- Redux state management for auth
- Automatic token injection in API calls
- Protected route implementation
- Secure token storage
- Comprehensive error handling

---

## 2. ARCHITECTURE

### Technology Stack

| Component | Technology |
|-----------|-----------|
| Frontend Framework | React 18 |
| Build Tool | Vite |
| State Management | Redux Toolkit |
| HTTP Client | Axios |
| Routing | React Router v6 |
| Form Validation | React Hook Form + Yup |
| Authentication | JWT (JSON Web Token) |

### Folder Structure

```
src/
├── api/
│   ├── axios.js              # Axios instance with interceptors
│   ├── endpoints.js          # API endpoint constants
│   └── addressapi.js         # Address-related APIs
├── app/
│   ├── App.jsx              # Root component
│   ├── routes.jsx           # Route definitions
│   └── store.js             # Redux store configuration
├── components/
│   └── auth/
│       ├── ProtectedRoute.jsx    # Route guard component
│       ├── AuthRightPanel.jsx    # Login page right panel
│       └── BrandHeader.jsx       # Brand header component
├── features/
│   └── auth/
│       ├── Login.jsx         # Login page component
│       ├── authApi.js        # Login API function
│       ├── authSlice.js      # Redux slice for auth
│       ├── authStorage.js    # localStorage utilities
│       └── schema.js         # Validation schema
└── pages/
    └── Dashboard/
        └── Dashboard.jsx     # Protected dashboard page
```

---

## 3. COMPLETE LOGIN FLOW

### Step-by-Step Process

#### **STEP 1: User Interaction**
```
User opens application → Lands on Login page (/)
User enters username and password
User clicks "Sign In" button
```

#### **STEP 2: Form Validation**
```
React Hook Form validates inputs using Yup schema
✓ Username: Required field
✓ Password: Required field, minimum length
If validation fails → Show error messages
If validation passes → Proceed to Step 3
```

#### **STEP 3: Redux Action Dispatch**
```
Login.jsx calls: dispatch(login({ username, password }))
Redux Toolkit creates async thunk
State changes: loading = true, error = null
```

#### **STEP 4: API Call Execution**
```
authSlice.js calls loginApi()
authApi.js sends POST request to backend
Request: POST http://localhost:8080/api/auth/login
Body: { "userName": "...", "password": "..." }
Headers: { "Content-Type": "application/json" }
```

#### **STEP 5: Backend Response**
```
Success (200): { "token": "eyJhbGc...", "roleId": 1 }
Error (401): Invalid credentials
Error (400): Missing fields
Error (Network): Connection failed
```

#### **STEP 6: Token Storage**
```
authStorage.setAuth(token, roleId)
localStorage.setItem('token', token)
localStorage.setItem('roleId', roleId)
```

#### **STEP 7: Redux State Update**
```
Redux state updated:
{
  auth: {
    user: { token: "eyJhbGc...", roleId: 1 },
    loading: false,
    error: null
  }
}
```

#### **STEP 8: Automatic Navigation**
```
useEffect in Login.jsx detects user exists
navigate("/dashboard", { replace: true })
Browser URL changes to /dashboard
```

#### **STEP 9: Route Protection Check**
```
ProtectedRoute component checks Redux state
user exists? → Render Dashboard
user null? → Redirect to /
```

#### **STEP 10: Token Injection**
```
All subsequent API calls automatically include:
Authorization: Bearer eyJhbGc...
(via Axios interceptor)
```

---

## 4. FILE STRUCTURE

### Core Authentication Files

| File | Purpose | Lines of Code |
|------|---------|---------------|
| `Login.jsx` | Login UI and form handling | ~100 |
| `authApi.js` | API call to backend | ~20 |
| `authSlice.js` | Redux state management | ~50 |
| `authStorage.js` | localStorage utilities | ~15 |
| `ProtectedRoute.jsx` | Route guard | ~10 |
| `axios.js` | HTTP client configuration | ~15 |
| `endpoints.js` | API endpoint constants | ~5 |
| `routes.jsx` | Route definitions | ~120 |

---

## 5. CODE IMPLEMENTATION

### 5.1 API Endpoint Configuration

**File:** `src/api/endpoints.js`

```javascript
export const AUTH_ENDPOINTS = {
  LOGIN: '/api/auth/login',
};
```

---

### 5.2 Axios Configuration with Interceptor

**File:** `src/api/axios.js`

```javascript
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

// Automatically add token to all requests
api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
```

**Key Features:**
- Base URL from environment variable
- 10-second timeout
- Automatic token injection
- Bearer token format

---

### 5.3 Login API Function

**File:** `src/features/auth/authApi.js`

```javascript
import api from "../../api/axios";
import { AUTH_ENDPOINTS } from "../../api/endpoints";

export const loginApi = async ({ userName, password }) => {
  try {
    const response = await api.post(AUTH_ENDPOINTS.LOGIN, { userName, password });
    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error('Invalid username or password');
    }
    if (error.response?.status === 400) {
      throw new Error('Username and password are required');
    }
    throw new Error('Network error. Please try again');
  }
};
```

**Error Handling:**
- 401 → Invalid credentials
- 400 → Missing fields
- Network errors → Generic message

---

### 5.4 Local Storage Management

**File:** `src/features/auth/authStorage.js`

```javascript
export const authStorage = {
  setAuth(token, roleId) {
    localStorage.setItem('token', token);
    localStorage.setItem('roleId', roleId);
  },

  getToken() {
    return localStorage.getItem('token');
  },

  getRoleId() {
    return localStorage.getItem('roleId');
  },

  clear() {
    localStorage.removeItem('token');
    localStorage.removeItem('roleId');
  },
};
```

**Methods:**
- `setAuth()` → Store credentials
- `getToken()` → Retrieve token
- `getRoleId()` → Retrieve role
- `clear()` → Logout cleanup

---

### 5.5 Redux Authentication Slice

**File:** `src/features/auth/authSlice.js`

```javascript
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "./authApi";
import { authStorage } from "./authStorage";

// Async thunk for login
export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const data = await loginApi({ userName: username, password });
      
      authStorage.setAuth(data.token, data.roleId);
      return { token: data.token, roleId: data.roleId };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Redux slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: authStorage.getToken() 
      ? { token: authStorage.getToken(), roleId: authStorage.getRoleId() } 
      : null,
    loading: false,
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      authStorage.clear();
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
```

**State Structure:**
```javascript
{
  user: { token: string, roleId: number } | null,
  loading: boolean,
  error: string | null
}
```

---

### 5.6 Login Page Component

**File:** `src/features/auth/Login.jsx`

```javascript
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "./authSlice";
import { schema } from "./schema";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.auth);
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { username: "", password: "" },
  });

  // Auto-redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/dashboard", { replace: true });
    }
  }, [user, navigate]);

  const onSubmit = (data) => {
    dispatch(login({
      username: data.username,
      password: data.password,
    }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && <div className="error">{error}</div>}
      
      <input {...register("username")} placeholder="Username" />
      {errors?.username && <span>{errors.username.message}</span>}
      
      <input {...register("password")} type="password" placeholder="Password" />
      {errors?.password && <span>{errors.password.message}</span>}
      
      <button type="submit" disabled={loading}>
        {loading ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
}
```

**Key Features:**
- Form validation with Yup
- Redux state integration
- Auto-redirect on success
- Loading state handling
- Error display

---

### 5.7 Protected Route Component

**File:** `src/components/auth/ProtectedRoute.jsx`

```javascript
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user } = useSelector((state) => state.auth);
  
  return user ? children : <Navigate to="/" replace />;
}
```

**Logic:**
- Checks if `user` exists in Redux state
- If yes → Render protected component
- If no → Redirect to login page

---

### 5.8 Route Configuration

**File:** `src/app/routes.jsx`

```javascript
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Login from "../features/auth/Login";
import Dashboard from "../pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute><MainLayout /></ProtectedRoute>,
    children: [
      { index: true, element: <Dashboard /> },
    ],
  },
  // ... other protected routes
]);
```

**Protected Routes:**
- `/dashboard`
- `/customer`
- `/supplier`
- `/employee`
- `/agent-master`
- All wrapped with `<ProtectedRoute>`

---

## 6. API SPECIFICATIONS

### Login Endpoint

**URL:** `POST http://localhost:8080/api/auth/login`

**Request Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "userName": "string",
  "password": "string"
}
```

**Success Response (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "roleId": 1
}
```

**Error Response (401 - Unauthorized):**
```json
{
  "message": "Invalid credentials"
}
```

**Error Response (400 - Bad Request):**
```json
{
  "message": "Username and password are required"
}
```

---

## 7. SECURITY FEATURES

### 7.1 Token Storage
- **Method:** localStorage
- **Keys:** `token`, `roleId`
- **Format:** Plain text (JWT is already encrypted)

### 7.2 Token Transmission
- **Header:** `Authorization: Bearer <token>`
- **Protocol:** HTTPS (production)
- **Automatic:** Via Axios interceptor

### 7.3 Route Protection
- **Method:** React Router + Redux state check
- **Fallback:** Redirect to login
- **Persistence:** Token survives page refresh

### 7.4 Session Management
- **Duration:** Based on JWT expiration
- **Logout:** Clears localStorage and Redux state
- **Auto-logout:** Not implemented (can be added)

---

## 8. ERROR HANDLING

### 8.1 Network Errors
```javascript
catch (error) {
  if (!error.response) {
    return "Network error. Please try again";
  }
}
```

### 8.2 Authentication Errors
```javascript
if (error.response?.status === 401) {
  return "Invalid username or password";
}
```

### 8.3 Validation Errors
```javascript
if (error.response?.status === 400) {
  return "Username and password are required";
}
```

### 8.4 UI Error Display
```jsx
{error && (
  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
    {error}
  </div>
)}
```

---

## 9. FLOW DIAGRAM

```
┌─────────────────────────────────────────────────────────────┐
│                    USER OPENS APPLICATION                    │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              Login Page (/) - Login.jsx                      │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  [Username Input]                                    │   │
│  │  [Password Input]                                    │   │
│  │  [Sign In Button] ◄── USER CLICKS HERE              │   │
│  └─────────────────────────────────────────────────────┘   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│           Form Validation (React Hook Form + Yup)            │
│  ✓ Username required                                         │
│  ✓ Password required                                         │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│         dispatch(login({ username, password }))              │
│         Redux Action - authSlice.js                          │
│  State: loading = true, error = null                         │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              loginApi() - authApi.js                         │
│  POST http://localhost:8080/api/auth/login                   │
│  Body: { userName, password }                                │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    BACKEND RESPONSE                          │
│  Success: { token: "...", roleId: 1 }                        │
│  Error: 401 / 400 / Network                                  │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│         authStorage.setAuth(token, roleId)                   │
│  localStorage.setItem('token', token)                        │
│  localStorage.setItem('roleId', roleId)                      │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              Redux State Updated                             │
│  auth: {                                                     │
│    user: { token, roleId },                                  │
│    loading: false,                                           │
│    error: null                                               │
│  }                                                           │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│         useEffect Detects User Exists                        │
│  navigate("/dashboard", { replace: true })                   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│         ProtectedRoute.jsx Checks Auth                       │
│  user exists? → Render Dashboard                             │
│  user null? → Redirect to /                                  │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              DASHBOARD PAGE RENDERED                         │
│  All future API calls include:                               │
│  Authorization: Bearer <token>                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 10. TESTING CHECKLIST

### Manual Testing Steps

- [ ] **Valid Login**
  - Enter correct username and password
  - Click "Sign In"
  - Verify redirect to /dashboard
  - Check localStorage has token and roleId

- [ ] **Invalid Credentials**
  - Enter wrong username/password
  - Click "Sign In"
  - Verify error message displays
  - Verify no redirect occurs

- [ ] **Empty Fields**
  - Leave username or password empty
  - Click "Sign In"
  - Verify validation error messages

- [ ] **Network Error**
  - Disconnect internet
  - Try to login
  - Verify network error message

- [ ] **Protected Route Access**
  - Clear localStorage
  - Try to access /dashboard directly
  - Verify redirect to /

- [ ] **Token Persistence**
  - Login successfully
  - Refresh page
  - Verify still logged in

- [ ] **Logout**
  - Login successfully
  - Click logout
  - Verify localStorage cleared
  - Verify redirect to /

---

## 11. TROUBLESHOOTING

### Common Issues

**Issue:** Login button does nothing
- **Check:** Browser console for errors
- **Check:** Network tab for API call
- **Check:** Redux DevTools for state changes

**Issue:** Token not included in API calls
- **Check:** Axios interceptor configuration
- **Check:** localStorage has token
- **Check:** Token format is correct

**Issue:** Redirect loop
- **Check:** ProtectedRoute logic
- **Check:** useEffect dependencies
- **Check:** Route configuration

**Issue:** CORS errors
- **Solution:** Configure backend CORS headers
- **Solution:** Check API base URL

---

## 12. FUTURE ENHANCEMENTS

### Recommended Improvements

1. **Token Refresh**
   - Implement refresh token mechanism
   - Auto-refresh before expiration

2. **Remember Me**
   - Option to persist login longer
   - Use sessionStorage vs localStorage

3. **Multi-factor Authentication**
   - Add OTP verification
   - Email/SMS confirmation

4. **Session Timeout**
   - Auto-logout after inactivity
   - Warning before logout

5. **Password Reset**
   - Forgot password flow
   - Email verification

6. **Role-based Access**
   - Different dashboards per role
   - Feature-level permissions

---

## 13. CONCLUSION

This authentication system provides:
- ✅ Secure JWT-based authentication
- ✅ Clean separation of concerns
- ✅ Scalable architecture
- ✅ Comprehensive error handling
- ✅ Protected route implementation
- ✅ Persistent sessions

**Maintained by:** Maleva Development Team  
**Last Updated:** 2024  
**Version:** 1.0

---

**END OF DOCUMENT**
