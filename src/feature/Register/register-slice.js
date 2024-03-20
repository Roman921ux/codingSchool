import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { DOMEN } from "../config";
// localStorage.removeItem('persist:root');

// v1/admin/register/
// v1/user/profession/
// /api/v1/user/
// https://417d-87-251-77-162.ngrok-free.app
export const loadInfoUser = createAsyncThunk(
  '@@register/components-user',
  async (token) => {
    try {
      console.log('Token in userload', token);
      const response = await axios.get(`${DOMEN}/api/v1/user/me/`, {
        headers: {
          Authorization: `Bearer ${token}`
          // 'Content-Type': 'application/json',
        }
      });
      console.log('Answer from server userload', response);
      return response.data;
    } catch (error) {
      console.error('Error while registering competents:', error);
      throw error;
    }
  }
);
export const loadCompetents = createAsyncThunk(
  '@@register/components-user',
  async (token) => {
    try {
      console.log('Token in thunk', token);
      const response = await axios.get(`${DOMEN}/api/v1/admin/competence/`, {
        headers: {
          Authorization: `Bearer ${token}`
          // 'Content-Type': 'application/json',
        }
      });
      console.log('Answer from server competents', response);
      return response.data;
    } catch (error) {
      console.error('Error while registering competents:', error);
      throw error;
    }
  }
);

export const registerUser = createAsyncThunk(
  '@@egister/register-user',
  async (value) => {
    try {
      console.log('Data', value);
      const response = await axios.post(`${DOMEN}/api/v1/admin/register/`, value, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log('Answer from server', response);
      return response.data;
    } catch (error) {
      console.error('Error while registering user:', error);
      throw error;
    }
  }
);

export const loginUser = createAsyncThunk(
  '@@egister/login-user',
  async (value) => {
    try {
      console.log('Data', value);
      const response = await axios.post(`${DOMEN}/api/v1/auth/jwt/create/`, value, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log('Answer from server login', response.data);
      return response.data;
    } catch (error) {
      console.error('Error while registering user:', error);
      throw error;
    }
  }
);


const registerSlice = createSlice({
  name: '@@register',
  initialState: {
    entities: ['Register'],
    token: {},
    user: {},
    loading: 'idle',
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      // .addCase(resetToDefault, (state, action) => {
      //   return {
      //     ...state,
      //     entities: [],
      //   }
      // })
      .addCase(registerUser.pending, (state) => {
        state.loading = 'loading';
        state.error = null;
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = 'idle';
        state.error = 'Something went wrong!';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log('Register', action.payload)
        state.entities.push(action.payload)
      })
      // end
      .addCase(loginUser.pending, (state) => {
        state.loading = 'loading';
        state.error = null;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = 'idle';
        state.error = 'Something went wrong!';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log('Register', action.payload)
        state.token = (action.payload)
      })
      .addCase(loadInfoUser.fulfilled, (state, action) => {
        console.log('User in state:', action.payload)
        state.user = (action.payload)
      })
    // /// addMatcher
    // .addMatcher(action => action.type.endsWith('/pending'),
    //   (state, action) => {
    //     state.loading = 'loadinG';
    //     state.error = null;
    //   })
    // .addMatcher(action => action.type.endsWith('/rejected'),
    //   (state, action) => {
    //     state.loading = 'idle';
    //     state.error = 'Error';
    //   })
    // .addMatcher(action => action.type.endsWith('/fulfilled'),
    //   (state, action) => {
    //     state.loading = 'idle';
    //   })
  }
})


export const registerReducer = registerSlice.reducer;


// export const registerUser = createAsyncThunk(
//   '@@egister/register-user',
//   async (value) => {
//     try {
//       console.log('Data', value);
//       const response = await axios.get('http://89.111.152.248:1235/api/v1/user/profession/', {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       console.log('Answer from server', response.data);
//       return response.data;
//     } catch (error) {
//       console.error('Error while registering user:', error);
//       throw error;
//     }
//   }
// );

// export const registerUser = createAsyncThunk(
//   '@@egister/register-user',
//   async (value) => {
//     console.log('Data', value)
//     const res = await fetch('http://89.111.152.248:1235/api/v1/user/profession/', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       // body: JSON.stringify(value),
//     })
//     const data = await res.json()
//     console.log('Answer in server', data)
//     return data
//   }
// )


// export const loadTodos = createAsyncThunk(
//   '@@todos/load-all',
//   async () => {
//     const res = await fetch('http://localhost:3001/posts');
//     const data = await res.json();
//     return data
//   },
//   {
//     condition: (_, { getState, extra }) => {
//       const { loading } = getState().todos;
//       if (loading === 'loading') {
//         return false
//       }
//     }
//   }
// )

// export const createTodo = createAsyncThunk(
//   '@@todos/create-todo',
//   async (title) => {

//     const res = await fetch('http://localhost:3001/posts', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ title: title, completed: false }),
//     })
//     const data = await res.json()
//     console.log(data)
//     return data
//   }
// )
// export const toggleTodo = createAsyncThunk(
//   '@@todos/toggle-todo',
//   async (id, { getState }) => {
//     const todo = getState().todos.entities.find(item => item.id === id);

//     const res = await fetch('http://localhost:3001/posts/' + id, {
//       method: 'PATCH',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ completed: !todo.completed }),
//     })
//     const data = await res.json()
//     console.log(data)
//     return id
//   }
// )
// export const removeTodo = createAsyncThunk(
//   '@@todos/remove-todo',
//   async (id) => {
//     const res = await fetch('http://localhost:3001/posts/' + id, {
//       method: 'DELETE',
//       headers: { 'Content-Type': 'application/json' },
//     })
//     await res.json()
//     return id
//   }
// )
