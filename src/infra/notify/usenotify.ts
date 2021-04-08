/**
 * IMPORTS
 */
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './';
import { selectSlice } from './selectors';
import { IHandler, IUseNotify } from './usenotify.d';


/**
 * I am a hook to get all notifiable messages from a map.
 */
const useNotify: IUseNotify = (map, key = 'title', kind = undefined) => {
  // get dispatch
  const dispatch = useDispatch();

  // get message
  let message = useSelector(selectSlice);

  // no message: return nothing
  if (Object.keys(message).length === 0) return [{}];

  // message kind and filtered kind does not match: return nothing
  if (kind && message.kind !== kind) return [{}];

  // set reset handler
  const handler: IHandler = () => dispatch(actions.reset({}));

  // get message key
  const messageKey = message[key];

  // has message in map: get override message
  if (map.has(messageKey) === true) {
    message = map.get(messageKey);
  }

  // return message and reset handler
  return [message, handler];
};


/**
 * EXPORTS
 */
export { useNotify };
