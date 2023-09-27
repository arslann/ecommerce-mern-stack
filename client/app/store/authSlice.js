import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://ecommerce-mern-stack-b4r6.vercel.app/", // Backend URL
});

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await instance.post("/api/auth", credentials);

      // store user's token in local storage
      localStorage.setItem("userToken", response.data.token);

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
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await instance.post("/api/users", credentials);

      // store user's token in local storage
      localStorage.setItem("userToken", response.data.token);

      return response.data.token;
    } catch (error) {
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data.errors);
    }
  }
);

// initialize userToken from local storage

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: null,
    userInfo: null,
    token:
      typeof window !== "undefined"
        ? window.localStorage.getItem("userToken")
        : null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userToken"); // deletes token from storage
      state.user = null;
      state.token = null;
      state.error = null;
      state.userInfo = null;
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
      state.user = true;
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
      });
  },
});

export const { logout, setCredentials } = authSlice.actions;

export default authSlice.reducer;
