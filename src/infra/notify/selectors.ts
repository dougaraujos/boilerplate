/**
 * IMPORTS
 */
import { notify } from './';
import { INotifyState } from './index.d';


/**
 * I select the notify slice from state.
 */
const selectSlice = (state): INotifyState => state[notify.name];


/**
 * EXPORTS
 */
export { selectSlice };
