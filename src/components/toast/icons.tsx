/**
 * IMPORTS
 */
import { RiCheckLine, RiErrorWarningLine } from 'react-icons/ri';
import { toastKind } from './toast.d';


/**
 * I am a toast icons map.
 */
const icons = new Map();

// set error icon
icons.set(toastKind.ERROR, RiErrorWarningLine);

// set success icon
icons.set(toastKind.SUCCESS, RiCheckLine);


/**
 * EXPORTS
 */
export { icons };
