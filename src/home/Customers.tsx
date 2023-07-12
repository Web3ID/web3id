import PinkWave from "@static/home/pink-wave.svg";
import Image from "next/image";
import LinkButton from "./components/LinkButton";
import clsx from "clsx";
import { motion, MotionValue, useTransform } from "framer-motion";
import formatter from "@utils/formatter";
import { useAnimatedCounter } from "./utils/use-animated-counter";

export function Customers({ usedBy }: { usedBy: number }) {
  const { count, start } = useAnimatedCounter(
    usedBy,
    Math.max(usedBy - 588, 0),
    1
  );

  return (
    <div className="relative z-[2] mt-[10rem]">
      <motion.div
        whileInView="show"
        onViewportEnter={() => start()}
        initial="hidden"
        transition={{
          duration: 0.5,
          delayChildren: 0.01,
        }}
        viewport={{ once: true }}
        variants={{
          show: {
            y: 0,
            opacity: 1,
          },
          hidden: {
            y: 20,
            opacity: 0,
          },
        }}
        className="flex flex-col items-center gap-5 text-center"
      >
        <h1 className="heading-xl">
          Jumlah Web3IDN
          <span className="text-gradient mx-2 block from-pink-600 to-orange-400 max-md:text-7xl md:inline">
            <ServerCount count={count} />
          </span>
          Builder
        </h1>
        <h3 className="heading-md text-secondary">
          Bergabung bersama kami sekarang!
        </h3>
        <div className="h-stack">
          <LinkButton
            href="https://discord.gg/aDaDw7DkYU"
            target="_blank"
            className="secondary-button shadow-lg backdrop-blur-lg"
          >
            GM
          </LinkButton>
        </div>
        <motion.div
          className="grid grid-cols-1 gap-4 text-start sm:grid-cols-2 md:mt-[4rem] lg:grid-cols-3"
          variants={{
            show: {
              opacity: 1,
            },
            hidden: {
              opacity: 0,
            },
          }}
        >
          <Comment
            icon="/blog/abraham-yusuf.png"
            author="Abraham Yusuf"
            title="Web3 Dev Jr"
            content="Saya percaya bahwa ekosistem Blockchain dan Web3 akan berkembang pesat di negri tercinta ini."
          />
          <Comment
            icon="/blog/money.jpg"
            author="dAppsID"
            title="dApps Builders"
            content="DAPP memiliki potensi untuk membuka beragam kasus penggunaan."
          />
          <Comment
            icon="/blog/nathan.jpg"
            author="Anon Crypto"
            title="Blockchain Enthusiast"
            content="Diperlukan pandangan baru tentang keterlibatan tingkat dalam dan berbagi pengetahuan dalam blockchain dan aset kripto. Di mana kolaborasi adalah intinya, ego dikesampingkan dan nilai sejati diambil mulai dari zaman kita."
          />
        </motion.div>
      </motion.div>
      <Image
        className={clsx(
          "custom relative -z-[1] -mt-[10rem] h-[300px] w-full object-cover md:-mt-[1rem]",
          "[mask-image:linear-gradient(to_right,_transparent,white_10%,white_70%,_transparent)]"
        )}
        alt="wave"
        src={PinkWave}
      />
    </div>
  );
}

function ServerCount({ count }: { count: MotionValue<number> }) {
  const rounded = useTransform(count, (v: number) =>
    formatter.format(Math.floor(v))
  );

  return <motion.span>{rounded}</motion.span>;
}

function Comment({
  icon,
  author,
  title,
  content,
}: {
  icon: string;
  author: string;
  title: string;
  content: string;
}) {
  return (
    <div
      className={clsx(
        "flex cursor-pointer flex-col gap-3 rounded-xl bg-white p-4 dark:bg-slate-900/70 dark:backdrop-blur-3xl",
        "shadow-2xl shadow-blue-800/30 dark:shadow-black/60",
        "border-[2px] border-gray-300 transition-colors dark:border-slate-800",
        "hover:dark:border-pink-400 hover:dark:bg-slate-900"
      )}
    >
      <div className="h-stack">
        <Image
          alt={author}
          src={icon}
          width="50"
          height="50"
          className="aspect-square rounded-full"
        />
        <div>
          <p className="font-semibold text-pink-700 dark:text-pink-300">
            {title}
          </p>
          <h3 className="heading-md text-black dark:text-white">{author}</h3>
        </div>
      </div>

      <p className="text-secondary dark:text-slate-300 md:text-lg">{content}</p>
    </div>
  );
}
