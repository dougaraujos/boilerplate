/**
 * IMPORTS
 */
import {
  configureStore,
  EnhancedStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist';
import { persistStore } from './persist';
import { persistedReducer } from './reducer';


/**
 * I am a redux store.
 */
const store = configureStore({
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE]
    }
  }),
  reducer: persistedReducer
});


/**
 * I create a redux store.
 */
const createStore = (): EnhancedStore => store;


/**
 * I an redux store persistor.
 */
const persistor = persistStore(store);


/**
 * EXPORTS
 */
export { createStore, persistor, store };
