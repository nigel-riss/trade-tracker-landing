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
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#2fe82b" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
        <meta name="msapplication-TileColor" content="#131313" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#161616" />
        <meta name="yandex-verification" content="c3071bbd6bc9ce61" />
        <title>Atlantes.io</title>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://atlantes.io" />
        <meta property="og:title" content="TRADE smart earn EASY" />
        <meta property="og:description" content="Build Your Win: Use smart data to beat the market. Make sure you're one of the top traders with Atlantes" />
        <meta property="og:image" content="https://atlantes.io/og.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://atlantes.io" />
        <meta property="twitter:title" content="TRADE smart earn EASY" />
        <meta property="twitter:description" content="Build Your Win: Use smart data to beat the market. Make sure you're one of the top traders with Atlantes" />
        <meta property="twitter:image" content="" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
