/**
 * Notify kind type.
 */
export enum notifyKind {
  ERROR = 'error',
  SUCCESS = 'success'
}


/**
 * Notify state interface.
 */
export interface INotifyState {
  detail?: string
  kind?: notifyKind
  title?: string
}


/**
 * Notify slice name.
 */
export const NAME = 'notify';
