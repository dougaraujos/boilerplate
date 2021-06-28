/**
 * IMPORTS
 */
import { combineReducers } from 'redux';
import { persistConfig, persistReducer } from './persist';


/**
 * I create a root reducer.
 */
const reducer = combineReducers({});


/**
 * I create a persisted root reducer.
 */
const persistedReducer = persistReducer(persistConfig, reducer);


/**
 * EXPORTS
 */
export { persistedReducer, reducer };
