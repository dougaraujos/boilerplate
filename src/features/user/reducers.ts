/**
 * IMPORTS
 */
import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import * as actions from './actions';


/**
 * I am a login reducer.
 */
const login = (state, action) => {
  state.token = action.payload.token;
};


/**
 * I build a extra reducer to login.
 */
const buildLogin = (builder: ActionReducerMapBuilder<unknown>): void => {
  builder.addCase(actions.login.fulfilled, login);
};


/**
 * EXPORTS
 */
export { buildLogin };
