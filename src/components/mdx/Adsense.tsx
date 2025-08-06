import React, { useEffect } from "react";
import { useAdsContext } from "../../adsense";
import clsx from "clsx";

/**
 * Google Ads :)
 */
export function Adsense() {
  const { failed } = useAdsContext();

  useEffect(() => {
    if (failed) return;

    // try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      );
    // } catch (e) {}
  }, [failed]);

  if (failed)
    return (
    <h1 className="text-3xl font-bold underline">
      Matikan AdBlocker untuk membantu kami di lain hari
    </h1>
    );

  return (
    <div aria-label="ads">
      <p className="my-2 text-center text-sm text-gray-400">Advertising</p>
      <div
        className={clsx(
          "relative min-h-[280px] after:z-[-1] after:text-gray-500 after:content-['iklan dulu']",
          "after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:transform after:text-sm"
        )}
      >
        <ins
          className="adsbygoogle"
          aria-label="promote"
          style={{ display: "block" }}
          data-ad-client="ca-pub-8284519503817385"
          data-ad-slot="4429289625"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}

export default Adsense;
