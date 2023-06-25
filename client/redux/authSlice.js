import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000', // Update this URL
});

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await instance.post('/api/auth', credentials);
      return response.data.token;
    } catch (error) {
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data.errors);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await instance.post('/api/users', credentials);
      return response.data.token;
    } catch (error) {
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data.errors);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await instance.post('/api/logout');
  } catch (error) {
    throw new Error(error.response.data.errors);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    error: null,
    token: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = true;
        state.token = action.payload; // save JWT token for storage
        state.error = null; // Clear any previous errors
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = true;
        state.token = action.payload;
        state.error = null; // Clear any previous errors
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.error = null; // Clear any previous errors
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { clearError } = authSlice.actions;

export default authSlice.reducer;
