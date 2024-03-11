/* eslint-disable react/jsx-props-no-spreading */
import '@/styles/main.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function App(props: AppProps) {
  const {
    Component,
    pageProps,
  } = props;

  useEffect(() => {
    AOS.init({
      disable: 'mobile',
      duration: 1000,
    });
    AOS.refresh();
    window.addEventListener('resize', AOS.refresh);
    return () => window.removeEventListener('resize', AOS.refresh);
  });

  return (
    <>
      <Head>
        <meta
          name="viewport"
          // initial-scale=1.0,
          content="
            width=device-width,
            maximum-scale=1.0,
            user-scalable=no,
          "
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png?v=3" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png?v=3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png?v=3" />
        <link rel="manifest" href="/favicon/site.webmanifest?v=3" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg?v=3" color="#2fe82b" />
        <link rel="shortcut icon" href="/favicon/favicon.ico?v=3" />
        <meta name="msapplication-TileColor" content="#131313" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml?v=3" />
        <meta name="theme-color" content="#161616" />
        <title>Atlantes.io</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
