import { IoMdOpen } from "react-icons/io";
import Gradient from "./components/Gradient";
import HeroGradient from "@static/hero.svg";
import Image from "next/image";
import LinkButton from "./components/LinkButton";
import clsx from "clsx";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <div
      className={clsx(
        "relative z-[2] mt-[6rem] flex w-full flex-col gap-12 px-[1rem] md:mt-[10rem] xl:mt-[14rem]",
        "items-center text-center"
      )}
    >
      <Gradient
        src={HeroGradient}
        className="absolute -top-[200px] -right-0 -z-[1] hidden w-full min-w-[800px] lg:-right-[300px]"
      />
      <h1
        className={clsx(
          "font-bold leading-[1.1]",
          "text-5xl min-[360px]:text-6xl sm:text-7xl md:text-5xl lg:text-7xl xl:text-8xl"
        )}
      >
        W
        <br className="md:hidden" />
        <span
          className={clsx(
            "text-gradient mx-1 bg-gradient-to-r from-blue-400 via-green-300 to-blue-400",
            styles["animated-gradient"]
          )}
        >
          3
        </span>
        <br className="md:hidden" />
        IDN
      </h1>
      <h2 className="heading-md text-secondary max-w-[450px] md:max-w-[650px] lg:text-3xl">
      Advancing blockchain education, research, resources and development Web3 Indonesia.
      </h2>
      <Buttons />
      <div className="mt=[3rem] flex w-full flex-col gap-5 md:mt-[4rem]">
        <p className="text-secondary mb-3 text-lg font-semibold md:mb-4">
          Family & Community
        </p>
        <div
          className={clsx(
            "overflow-hidden",
            "max-md:[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
          )}
        >
          <div className={clsx(styles.servers, "inline-block max-md:w-max")}>
            <Servers />
            <Servers secondary />
          </div>
        </div>
      </div>
    </div>
  );
}

function Buttons() {
  const bn = "text-lg font-bold sm:text-xl rounded-md w-full px-6 py-3 sm:px-8";

  return (
    <div className="grid w-full max-w-[500px] grid-cols-1 gap-3 sm:w-fit sm:grid-cols-2">
      <LinkButton href="/blog" className={clsx(bn, styles["rainbow-border"])}>
        Blog
      </LinkButton>
      <LinkButton
        href="/docs"
        className={clsx(bn, styles["rainbow-border"])}
      >
        {/* <IoMdOpen /> */}
        Docs
      </LinkButton>
      <LinkButton
        href="/learn"
        className={clsx(bn, styles["rainbow-border"])}
      >
        {/* <IoMdOpen /> */}
        Learn
      </LinkButton>
    </div>
  );
}

function Servers({ secondary }: { secondary?: boolean }) {
  return (
    <div
      className={clsx(
        "inline-flex flex-row justify-center",
        "md:max-w-[64rem] md:flex-wrap",
        secondary && "md:hidden"
      )}
    >
      <Server img="/home/partners/blockdev-id.svg" name="BlockdevID" />
      <Server img="/home/partners/coindesk-indonesia.svg" name="CoindeskID" />
      <Server img="/home/partners/coinvestasi.svg" name="Coinvestasi" transparent />
      <Server img="/home/partners/airdropfinder.png" name="AirdropFinder" transparent />
      <Server img="/home/partners/cryptoiz-research-logo.png" name="Cryptoiz" transparent />
      
    </div>
  );
}

function Server({
  img,
  name,
  transparent,
}: {
  img: string;
  name: string;
  transparent?: boolean;
}) {
  return (
    <div className="h-stack mx-4 my-1 flex-shrink-0 gap-3 text-black dark:text-white">
      <Image
        alt={name}
        src={img}
        width="45"
        height="45"
        className={clsx(
          "rounded-full grayscale",
          transparent && "brightness-[0%] dark:brightness-100"
        )}
      />
      <h3 className="heading-md">{name}</h3>
    </div>
  );
}
