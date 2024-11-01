// src/store/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../firebase/config.js';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, // Importar createUserWithEmailAndPassword
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut 
} from 'firebase/auth';

// Acciones asincrónicas para login con email, Google y registro

export const loginEmailPassword = createAsyncThunk(
  'auth/loginEmailPassword',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const registerWithEmailPassword = createAsyncThunk(
  'auth/registerWithEmailPassword',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginWithGoogle = createAsyncThunk(
  'auth/loginWithGoogle',
  async (_, { rejectWithValue }) => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      return userCredential.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutAction = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await signOut(auth);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Casos para login con email y contraseña
      .addCase(loginEmailPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginEmailPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginEmailPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Casos para registro con email y contraseña
      .addCase(registerWithEmailPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerWithEmailPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerWithEmailPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Casos para login con Google
      .addCase(loginWithGoogle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Casos para logout
      .addCase(logoutAction.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;
