/* eslint-disable @next/next/no-img-element */
import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import Script from 'next/script';


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* Yandex Metrika */}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/96727791"
              style={{
                position: 'absolute',
                left: '-9999px',
              }}
              alt=""
            />
          </div>
        </noscript>
        <Main />
        <NextScript />

        {/* Google Tag Manager */}
        <Script
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-3ERTQKH3JL"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3ERTQKH3JL');
          `}
        </Script>

        {/* Yander Metrika */}
        <Script
          strategy="beforeInteractive"
          id="yandex-metrika"
        >
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date(); for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(96727791, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });
          `}
        </Script>
      </body>
    </Html>
  );
}
