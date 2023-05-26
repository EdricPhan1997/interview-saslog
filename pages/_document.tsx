import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link href="/favicons/favicon.png" rel="shortcut icon" />
        <link href="/static/favicons/site.webmanifest" rel="manifest" />
        <link href="/static/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link
          href="/static/favicons/favicon-v1-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/static/favicons/favicon-v1-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <title>Interview-SASLog</title>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
