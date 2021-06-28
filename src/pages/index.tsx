/**
 * IMPORTS
 */
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { userIsLogged } from 'features/user/selectors';
import { withBanner } from 'layouts/splitcontainer';
import { Login } from 'templates/login';


/**
 * I am a index page.
 */
const IndexPage = (): React.ReactElement => {
  // check if user is loading
  const isLogged = useSelector(userIsLogged);

  // use router
  const router = useRouter();

  // redirect user to home when logged
  useEffect(() => {
    if (isLogged === true) {
      router.push('/home', null, { shallow: true });
    }
  }, [isLogged]);

  // render login
  return <Login />;
};


/**
 * EXPORTS
 */
export default withBanner(IndexPage);
