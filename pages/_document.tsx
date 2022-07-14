import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
          <Head>
              <link 
                  rel="shortcut icon"
                  href={"/favicon.ico"}
              />
              <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;600;700;800;900&family=Poppins:wght@400;600;700;800;900&family=Sora&display=swap" rel="stylesheet" />
          </Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000000" />
          <title>
            TeamApt ui/ux interview test
          </title>

        
        <body>
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
 
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({});

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {/* {sheets.getStyleElement()} */}
      </React.Fragment>
    ]
  };
};

export default MyDocument;