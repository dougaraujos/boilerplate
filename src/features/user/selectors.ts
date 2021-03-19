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
 * I check whether the user has a request is pending or not.
 */
const userIsLoading = (state): boolean => (
  selectSlice(state)._request?.status === 'pending'
);


/**
 * EXPORTS
 */
export { selectSlice, userIsLoading };
