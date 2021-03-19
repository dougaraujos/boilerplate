/**
 * I track the request status.
 */
const trackRequest = (builder, thunk) => {
  builder.addMatcher(
    (action) => action.type.endsWith('/pending'),
    (state, action) => {
      state._request = {
        id: action.meta.requestId,
        status: action.meta.requestStatus
      };
    });

  builder.addMatcher(
    (action) => action.type.endsWith('/fulfilled'),
    (state, action) => {
      state._request = {
        id: action.meta.requestId,
        error: action.error,
        status: action.meta.requestStatus
      };
    });

  builder.addMatcher(
    (action) => action.type.endsWith('/rejected'),
    (state, action) => {
      state._request = {
        id: action.meta.requestId,
        error: action.error,
        status: action.meta.requestStatus
      };
    });
};


/**
 * EXPORTS
 */
export { trackRequest };
