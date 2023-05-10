import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@600;800&family=Just+Me+Again+Down+Here&family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;700&display=swap"
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
