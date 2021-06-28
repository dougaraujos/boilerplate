/**
 * IMPORTS
 */
import { INotifyState, notifyKind } from './index.d';


/**
 * I am an error reducer.
 */
const error = (_, action): INotifyState => ({
  ...action.payload,
  kind: notifyKind.ERROR
});


/**
 * I am a reset reducer.
 */
const reset = (): INotifyState => ({});


/**
 * I am a success reducer.
 */
const success = (_, action): INotifyState => ({
  ...action.payload,
  kind: notifyKind.SUCCESS
});


/**
 * EXPORTS
 */
export { error, reset, success };
