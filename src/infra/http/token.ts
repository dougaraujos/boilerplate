/**
 * IMPORTS
 */
import { selectToken } from 'features/user/selectors';
import { store } from 'state/store';


/**
 * I set a authorization header.
 */
const setAuthHeader = () => {
  // get token from user state
  const token = selectToken(store.getState());

  // token unavailable: return empty options
  if (!token) return {};

  // return options with authorization header
  return { Authorization: `Bearer ${token}` };
};


/**
 * EXPORTS
 */
export { setAuthHeader };
