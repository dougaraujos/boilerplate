/**
 * IMPORTS
 */
import { createSlice, Slice } from '@reduxjs/toolkit';
import { INotifyState, NAME } from './index.d';
import { error, reset, success } from './reducers';


/**
 * I am a notify slice.
 */
const slice: Slice<INotifyState> = createSlice({
  name: NAME,
  initialState: {},
  reducers: { error, reset, success }
});


/**
 * EXPORTS
 */
export default slice;
