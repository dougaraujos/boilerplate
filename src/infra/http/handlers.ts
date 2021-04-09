/**
 * IMPORTS
 */
import { actions } from 'infra/notify';


/**
 * I handle a request error.
 */
const handleError =
  async (exception, data, dispatch): Promise<unknown> => {
    // data available: notify and return
    if (data !== undefined) {
      return dispatch(actions.error(data));
    }

    try {
      // get error details
      const error = await exception.json();

      // dispatch action to notify error
      dispatch(actions.error(error));
    } catch (e) {
      // dispatch action to notify failed request
      dispatch(actions.error({
        title: process.env.NEXT_PUBLIC_ERROR_REQUEST_FAILED
      }));
    }
  };


/**
 * I handle a request success.
 */
const handleSuccess = (data, dispatch): void => {
  // no data: do nothing
  if (data === undefined) return;

  // dispatch action to notify success
  dispatch(actions.success(data));
};


/**
 * EXPORTS
 */
export { handleError, handleSuccess };
