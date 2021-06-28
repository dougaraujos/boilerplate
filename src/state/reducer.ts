/**
 * IMPORTS
 */
import { combineReducers } from 'redux';
import { user } from 'features/user';
import { notify } from 'infra/notify';
import { persistConfig, persistReducer } from './persist';


/**
 * I create a root reducer.
 */
const reducer = combineReducers({
  [notify.name]: notify.reducer,
  [user.name]: user.reducer
});


/**
 * I create a persisted root reducer.
 */
const persistedReducer = persistReducer(persistConfig, reducer);


/**
 * EXPORTS
 */
export { persistedReducer, reducer };
