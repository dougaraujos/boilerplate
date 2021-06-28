/**
 * IMPORTS
 */
import { INotifyState, notifyKind } from './index.d';


/**
 * Notify handler type.
 */
export type IHandler = () => any;


/**
 * Use notify type.
 */
export type IUseNotify = (
  map: Map<string, INotifyState>,
  key?: string,
  kind?: notifyKind | undefined
) => [INotifyState?, IHandler?]
