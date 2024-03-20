import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

export const createTodo = createAsyncThunk(
  '@@todos/create-todo',
  async (title, { dispatch, }) => {
    dispatch({ type: 'SET_LOADING' })

    const res = await fetch('', {
      metod: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, completed: false })
    })
    const data = res.json()
    dispatch(addTodo(data))
  }
)


const todoSlice = createSlice({
  name: '@@todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      console.log(state)
      return state.push(action.payload)
      // reducer: (state, action) => {
      //   state.push(action.payload)
      // },
      // prepare: (title) => ({
      //   payload: {
      //     title,
      //     id: nanoid(),
      //     completed: false
      //   }
      // })
    },
    removeTodo: (state, action) => {
      const id = action.payload
      return state.filter((todo) => todo.id !== id)
    },
    toggleTodo: (state, action) => {
      const id = action.payload
      const todo = state.find((todo) => todo.id === id)
      todo.completed = !todo.completed
    },
  },
  extraReducers: (builder) => {
    builder
    // .addCase(resetToDefault, (state, action) => {
    //   // state - это тот что выше, общий - initialState: []
    //   return []
    // })
  }
})

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;