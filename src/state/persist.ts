/**
 * IMPORTS
 */
import { persistReducer, persistStore, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import { notify } from 'infra/notify';


/**
 * I configure a persisted redux store.
 */
const persistConfig: PersistConfig<unknown> = {
  blacklist: [notify.name],
  key: 'onlydiamonds',
  storage
};


/**
 * EXPORTS
 */
export { persistConfig, persistReducer, persistStore };
