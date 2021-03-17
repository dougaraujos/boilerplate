/**
 * IMPORTS
 */
import { createAsyncThunk } from '@reduxjs/toolkit';
import http from 'infra/http';
import { ILoginRequest, ILoginResponse, types } from './actions.d';


/**
 * I log in an user.
 */
const login = createAsyncThunk<ILoginResponse, ILoginRequest>(
  types.LOGIN,

  // request login
  async ({ username, password }, { dispatch }) =>
    await http.post('login', {
      body: { username, password },
      dispatch
    })
);


/**
 * EXPORTS
 */
export { login };
