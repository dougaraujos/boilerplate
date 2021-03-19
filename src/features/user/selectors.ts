/**
 * PORTS
 */
import { user } from './';
import { IUserState } from './index.d';


/**
 * I select the user slice from state.
 */
const selectSlice = (state): IUserState => state[user.name];


/**
 * EXPORTS
 */
export { selectSlice };
