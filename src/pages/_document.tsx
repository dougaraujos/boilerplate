/**
 * IMPORTS
 */
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';


/**
 * I override the document component default.
 */
class MyDocument extends Document {
  // enables server-side rendering
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    // get styled components
    const sheet = new ServerStyleSheet();

    // get original render page
    const originalRenderPage = ctx.renderPage;

    // override render page properties
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      // get initial properties
      const initialProps = await Document.getInitialProps(ctx);

      // return page properties
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  // render document
  render(): React.ReactElement {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link href="https://rocketseat.com.br/favicon.ico" rel="icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700&family=Roboto&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}


/**
 * EXPORTS
 */
export default MyDocument;
