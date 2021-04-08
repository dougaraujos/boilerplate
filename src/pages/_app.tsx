/**
 * IMPORTS
 */
import { AppProps } from 'next/app';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { actions } from 'infra/notify';
import { persistor } from 'state/store';
import wrapper from 'state/wrapper';
import GlobalStyle from 'styles/global';
import theme from 'styles/theme';
import { AnimatePresence, motion } from 'framer-motion';


/**
 * I override the application component default.
 */
const App = ({ Component, pageProps, router }: AppProps): React.ReactElement => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.route}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
        <GlobalStyle />
      </ThemeProvider>
    </PersistGate>
  );
};

// get initial properties
App.getInitialProps = async ({ ctx }) => {
  // dispatch action to notify reset
  ctx.store.dispatch(actions.reset({}));

  // return properties
  return {};
};

// wrap application with redux
const WrappedApp = wrapper.withRedux(App);



/**
 * EXPORTS
 */
export default WrappedApp;
