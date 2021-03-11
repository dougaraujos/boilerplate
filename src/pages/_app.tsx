/**
 * IMPORTS
 */
import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import wrapper from 'state/wrapper';
import GlobalStyle from 'styles/global';
import theme from 'styles/theme';


/**
 * I override the application component default.
 */
const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

// wrap application with redux
const WrappedApp = wrapper.withRedux(App);


/**
 * EXPORTS
 */
export default WrappedApp;
