import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://youtube.com/" />
          <title>Some Company</title>
          <meta name="description" content="Some company is a some company" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="/" />
          <meta property="og:title" content="Some company" />
          <meta
            property="og:image"
            content="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg"
          />
          <meta property="og:description" content="Some company is a some company" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Some company" />
          <meta name="twitter:description" content="Some company is a some company" />
          <meta
            name="twitter:image"
            content="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
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
}
