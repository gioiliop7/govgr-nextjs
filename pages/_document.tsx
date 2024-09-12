import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const themeScript = `
  (function() {
    const theme = window.localStorage.getItem('theme') || 'light';
    document.documentElement.className = theme;
  })();
`;

  return (
    <Html lang="el">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
