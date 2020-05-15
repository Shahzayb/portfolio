import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="font-sans">
        <Head>
          <meta
            name="description"
            content="Hi, I'm Shahzaib Sarwar. I'm a full-stack web developer working in node.js, react.js and mongodb"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body className="bg-palette-bg-1 text-palette-text-2">
          <div id="overlay"></div>
          <div id="error"></div>
          <div id="success"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
