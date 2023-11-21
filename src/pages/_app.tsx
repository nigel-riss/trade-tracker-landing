/* eslint-disable react/jsx-props-no-spreading */
import '@/styles/main.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';


export default function App(props: AppProps) {
  const {
    Component,
    pageProps,
  } = props;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="
            width=device-width,
            initial-scale=1.0,
            maximum-scale=1.0,
            user-scalable=no,
          "
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png?v=2" />
        <link rel="manifest" href="/favicon/site.webmanifest?v=2" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg?v=2" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon/favicon.ico?v=2" />
        <meta name="msapplication-TileColor" content="#131313" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml?v=2" />
        <meta name="theme-color" content="#161616" />
        <title>Atlantes.io – coming soon</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
