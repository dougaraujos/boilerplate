/**
 * I am a login errors map.
 */
const loginErrors = new Map();


/**
 * Conflict error.
 */
loginErrors.set(process.env.NEXT_PUBLIC_ERROR_CONFLICT, {
  title: 'Usuário ou senha não conferem',
  detail: 'Verifique seus dados e tente novamente'
});


/**
 * Internal server error.
 */
loginErrors.set(process.env.NEXT_PUBLIC_ERROR_INTERNAL_SERVER, {
  title: 'Ops, algo deu errado!',
  detail: 'Tente fazer o login novamente'
});


/**
 * Invalid parameters error.
 */
loginErrors.set(process.env.NEXT_PUBLIC_ERROR_INVALID_PARAMS, {
  title: 'Usuário ou senha não conferem',
  detail: 'Verifique seus dados e tente novamente'
});


/**
 * Request failed error.
 */
loginErrors.set(process.env.NEXT_PUBLIC_ERROR_REQUEST_FAILED, {
  title: 'Ops, algo deu errado!',
  detail: 'Tente fazer o login novamente'
});


/**
 * Unauthorized error.
 */
loginErrors.set(process.env.NEXT_PUBLIC_ERROR_UNAUTHORIZED, {
  title: 'Usuário ou senha não conferem',
  detail: 'Verifique seus dados e tente novamente'
});


/**
 * EXPORTS
 */
export { loginErrors };
