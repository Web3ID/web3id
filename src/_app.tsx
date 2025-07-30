import { AppProps } from "next/app";
import { ReactElement } from "react";
import { Inter } from "next/font/google";
import { AdsProvider } from "./adsense";

import Script from "next/script";

const noto = Inter({
  variable: "--font-noto",
  preload: true,
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      
      <style jsx global>{`
        html {
          --font-noto: ${noto.style.fontFamily};
        }
      `}</style>
      <Script
        src="https://betteruptime.com/widgets/announcement.js"
        data-id="161215"
        type="text/javascript"
        strategy="lazyOnload"
        async
      />
      
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
      />
      <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GA_MEASUREMENT_ID}', {
          page_path: window.location.pathname,
          });
          `,
          }}
        />
      <AdsProvider>
        <Component {...pageProps} />
      </AdsProvider>
    </>
  );
}
