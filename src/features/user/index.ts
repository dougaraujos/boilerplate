/**
 * IMPORTS
 */
import user from './slice';


/**
 * I merge slice actions with async actions.
 */
const actions = {
  ...user.actions
};


/**
 * EXPORTS
 */
export { actions, user };
