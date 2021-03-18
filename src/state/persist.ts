/**
 * IMPORTS
 */
import { persistReducer, persistStore, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';


/**
 * I configure a persisted redux store.
 */
const persistConfig: PersistConfig<unknown> = {
  key: 'onlydiamonds',
  storage
};


/**
 * EXPORTS
 */
export { persistConfig, persistReducer, persistStore };
