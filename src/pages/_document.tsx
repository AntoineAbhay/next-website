import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Bitter&family=Trispace:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body className="dark:bg-slate-900 dark:text-slate-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
