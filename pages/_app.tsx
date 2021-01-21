import Head from "next/head";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import "./index.scss";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/static/favicon_icon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;500&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@500;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
      </body>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
