import { configureStore, createAction } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
// reducers
import { todoReducer } from './Tests/test-slice'
import { registerReducer } from './Register/register-slice'
import { contentReducer } from './Content/content-slice'

const rootReducer = combineReducers({
  todos: todoReducer,
  register: registerReducer,
  content: contentReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDeafaultMiddleware) => getDeafaultMiddleware({
    serializableCheck: {
      ignoreActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
      ]
    }
  }),
})

export const persistor = persistStore(store)