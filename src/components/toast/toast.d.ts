/**
 * IMPORTS
 */
import { notifyKind as toastKind } from 'infra/notify';
import { IconType } from 'react-icons';


/**
 * Toast kind type.
 */
export { toastKind };


/**
 * Toast properties type.
 */
export interface IProps {
  detail?: string
  kind?: toastKind
  onClose?: any
  title?: string
}


/**
 * Toast default properties.
 */
export const defaultProps: IProps = {
  kind: toastKind.ERROR
};
