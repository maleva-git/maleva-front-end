import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "./authApi";
import { authStorage } from "./authStorage";

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const data = await loginApi({ userName: username, password });
      authStorage.setAuth(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: authStorage.getAuth(),
    token: authStorage.getToken(),
    roleName: authStorage.getAuth()?.rolename || null,
    roleId: authStorage.getAuth()?.roleId || null,
    userName: authStorage.getAuth()?.userName || null,
    userId: authStorage.getAuth()?.UserId || null,
    companyId: authStorage.getAuth()?.companyId || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.roleName = null;
      state.roleId = null;
      state.userName = null;
      state.userId = null;
      state.companyId = null;
      authStorage.clear();
    },
    clearError(state) {
      state.error = null;
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
        state.token = action.payload.token;
        state.roleName = action.payload.rolename;
        state.roleId = action.payload.roleId;
        state.userName = action.payload.userName;
        state.userId = action.payload.UserId;
        state.companyId = action.payload.companyId;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
