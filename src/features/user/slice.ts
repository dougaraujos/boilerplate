/**
 * IMPORTS
 */
import { createSlice, Slice } from '@reduxjs/toolkit';
import { trackRequest } from 'state/utils/';
import { login } from './actions';
import { IUserState, NAME } from './index.d';
import { initialState } from './initialstate';
import { buildLogin } from './reducers';


/**
 * I am an user slice.
 */
const slice: Slice<IUserState> = createSlice({
  name: NAME,
  initialState,
  reducers: {},
  extraReducers: builder => {
    // build reducers
    buildLogin(builder);

    // track requests
    trackRequest(builder, login);
  }
});


/**
 * EXPORTS
 */
export default slice;
