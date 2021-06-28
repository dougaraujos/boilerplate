/**
 * IMPORTS
 */
import { createSlice, Slice } from '@reduxjs/toolkit';
import { IUserState, NAME } from './index.d';
import { initialState } from './initialstate';


/**
 * I am an user slice.
 */
const slice: Slice<IUserState> = createSlice({
  name: NAME,
  initialState,
  reducers: {}
});


/**
 * EXPORTS
 */
export default slice;
