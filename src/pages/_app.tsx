import Head from "next/head";
import type { AppProps } from "next/app";
import "./index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;500&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
      </body>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
