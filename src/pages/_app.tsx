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
      </Head>
      <Component {...pageProps} />
    </>
  );
}
