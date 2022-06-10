import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import TodosReducer from './TodosRedux';

const persistConfig = {
  key: 'TodosList',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, TodosReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const AppDispatch = () => useDispatch<AppDispatchType>() //

export let persistor = persistStore(store)

