/**
 * IMPORTS
 */
import { AppProps } from 'next/app';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { persistor } from 'state/store';
import wrapper from 'state/wrapper';
import GlobalStyle from 'styles/global';
import theme from 'styles/theme';


/**
 * I override the application component default.
 */
const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </PersistGate>
  );
};

// wrap application with redux
const WrappedApp = wrapper.withRedux(App);


/**
 * EXPORTS
 */
export default WrappedApp;
