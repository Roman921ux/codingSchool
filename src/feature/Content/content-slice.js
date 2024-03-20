import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { DOMEN } from "../config";
// localStorage.removeItem('persist:root');

// v1/admin/register/
// v1/user/profession/
// /api/v1/user/
// https://417d-87-251-77-162.ngrok-free.app
export const loadProfessions = createAsyncThunk(
  '@@professions/professions',
  async () => {
    try {
      const response = await axios.get(`${DOMEN}/api/v1/user/profession/`, {
        headers: {
          // Authorization: `Bearer ${token}`
          'Content-Type': 'application/json',
        }
      });
      console.log('Answer from server professions', response);
      return response.data;
    } catch (error) {
      console.error('Error while registering professions:', error);
      throw error;
    }
  }
);
export const loadProfession = createAsyncThunk(
  '@@professions/profession',
  async (name) => {
    try {
      const response = await axios.get(`${DOMEN}/api/v1/user/profession/detail/${name}`, {
        headers: {
          // Authorization: `Bearer ${token}`
          'Content-Type': 'application/json',
        }
      });
      console.log('Answer from server professions', response);
      return response.data;
    } catch (error) {
      console.error('Error while registering professions:', error);
      throw error;
    }
  }
);


const contentSlice = createSlice({
  name: '@@professions',
  initialState: {
    entities: ['Content'],
    professions: [],
    profession: {},
    loading: 'idle',
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProfessions.fulfilled, (state, action) => {
        console.log('Professions:', action.payload)
        state.professions = (action.payload)
      })
      // load profassion
      .addCase(loadProfession.fulfilled, (state, action) => {
        console.log('Profession:', action.payload)
        const difficultyMap = {
          1: { label: 'easy', color: '#98ff9d' },
          2: { label: 'middle', color: '#7ee7cd' },
          3: { label: 'hard', color: '#ff85c2' }
        };

        const { difficult } = action.payload;
        const selectedDifficulty = difficultyMap[difficult];

        state.profession = {
          ...action.payload,
          difficult: selectedDifficulty.label,
          color: selectedDifficulty.color
        };
      })
      // addMatcher
      .addMatcher(action => action.type.endsWith('/pending'),
        (state, action) => {
          state.loading = 'loadinG';
          state.error = null;
        })
      .addMatcher(action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = 'idle';
          state.error = 'Error';
        })
      .addMatcher(action => action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.loading = 'idle';
        })
  }
})


export const contentReducer = contentSlice.reducer;
