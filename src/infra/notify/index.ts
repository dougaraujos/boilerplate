/**
 * IMPORTS
 */
import { notifyKind } from './index.d';
import notify from './slice';
import { useNotify } from './usenotify';


// get the slice actions
const { actions } = notify;


/**
 * EXPORTS
 */
export { actions, notify, notifyKind, useNotify };
