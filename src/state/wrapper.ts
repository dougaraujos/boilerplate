/**
 * IMPORTS
 */
import { createWrapper } from 'next-redux-wrapper';
import createStore from 'state/store';


/**
 * I am a redux wrapper.
 */
const wrapper = createWrapper(createStore);


/**
 * EXPORTS
 */
export default wrapper;
