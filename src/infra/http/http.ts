/**
 * IMPORTS
 */
import { actions } from 'infra/notify';
import { handleError, handleSuccess } from './handlers';
import { defaultHeaders, methods } from './http.d';
import { setAuthHeader } from './token';


/**
 * I execute a http request.
 */
const doFetch = async<P>(url: string, config?): Promise<P> => {
  // url not available: throw error
  if (url === undefined) throw new Error('You must specify a url');

  // get options
  const {
    bodyType = 'json',
    dispatch,
    errorData,
    successData,
    ...options
  } = config;

  // execute request
  try {
    // is json request: stringify body
    if (config.method !== methods.GET && bodyType === 'json') {
      options.body = JSON.stringify(options.body);
    }

    // merge headers options
    options.headers = {
      ...defaultHeaders,
      ...options.headers,
      ...(setAuthHeader())
    };

    // make request
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}${url}`,
      options
    );

    // response failed: throw error
    if (response.ok === false) {
      throw response;
    }

    // no content: handle success and return
    if (response.headers.get('Content-Length') === '0') {
      handleSuccess(successData, dispatch);
      return;
    }

    // get data from json response
    const data = await response.json();

    // handle success
    handleSuccess(successData, dispatch);

    // return data
    return data;
  } catch (exception) {
    // handle error
    handleError(exception, errorData, dispatch);

    // throw error
    throw new Error(exception);
  }
};


/**
 * I execute a delete request.
 */
const $delete = <P>(url: string, config?): Promise<P> => (
  doFetch(url, { ...config, method: methods.DELETE })
);


/**
 * I execute a get request.
 */
const get = <P>(url: string, config?): Promise<P> => (
  doFetch(url, { ...config, method: methods.GET })
);


/**
 * I execute a patch request.
 */
const patch = <P>(url: string, config?): Promise<P> => (
  doFetch(url, { ...config, method: methods.PATCH })
);


/**
 * I execute a post request.
 */
const post = <P>(url: string, config?): Promise<P> => (
  doFetch(url, { ...config, method: methods.POST })
);


/**
 * I execute a put request.
 */
const put = <P>(url: string, config?): Promise<P> => (
  doFetch(url, { ...config, method: methods.PUT })
);


/**
 * EXPORTS
 */
export default { delete: $delete, get, patch, post, put };
