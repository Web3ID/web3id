import { AppProps } from "next/app";
import { ReactElement } from "react";
import { Analytics } from "@vercel/analytics/react";
import { AdsProvider } from "./adsense";

import Script from "next/script";

// Google Fonts - will be loaded via link in theme.config.tsx head
// to avoid build-time network requirements in sandboxed environments

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Analytics />
      <style jsx global>{`
        html {
          --font-noto: Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          font-family: var(--font-noto);
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
