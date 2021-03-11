/**
 * IMPORTS
 */
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import reducer from './reducer';


/**
 * I am a redux store creator.
 */
const createStore = (): EnhancedStore => configureStore({ reducer });


/**
 * EXPORTS
 */
export default createStore;
