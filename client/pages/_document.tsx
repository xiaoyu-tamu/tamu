import React from 'react';
import Document, { Head, Main, NextScript, NextDocumentContext } from 'next/document';

class MyDocument extends Document {
  static getInitialProps(ctx: NextDocumentContext) {
    let pageContext: any;

    const page = ctx.renderPage((Component) => (props) => {
      pageContext = props.pageContext;
      return <Component {...props} />;
    });

    return {
      ...page,
      pageContext,
    };
  }
  render() {
    const { pageContext } = this.props;

    return (
      <html lang="en" dir="ltr">
        <Head>
          <title> Aggie Portal</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height"
          />

          <meta name="theme-color" content={pageContext.theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <style
            id="jss-server-side"
            dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
