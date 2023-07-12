import clsx from "clsx";
import { motion } from "framer-motion";
import Step from "../components/Step";
import styles from "./games.module.css";
import { RiGameFill, RiSwordFill } from "react-icons/ri";
import LinkButton from "../components/LinkButton";
import { ReactNode } from "react";
import { BsBarChartFill, BsPencilFill } from "react-icons/bs";

const grid = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.2 } },
};

export function Games() {
  return (
    <div
      className={clsx(
        "z-[2] min-h-[190vh] w-full pr-8 pt-[10rem] pb-10 sm:min-h-[140vh] md:min-h-[140vh] lg:min-h-[136vh]",
        styles["steps-container"]
      )}
    >
      <motion.div
        className="sticky top-[20vh] gap-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Step
          icon={{
            className:
              "bg-gradient-to-br from-orange-400 to-pink-600 shadow-purple-400",
            children: <RiGameFill className="inline" />,
          }}
          className={clsx(
            "flex flex-col-reverse gap-5 rounded-2xl",
            "w-full lg:flex-row lg:justify-between"
          )}
        >
          <div>
            <h1 className="features-heading mb-2">Bukan hanya platform belajar</h1>
            <h3 className="heading-md text-secondary">
              kami juga membuat Discord
              agar mudah saat bertanya，berdiskusi dan berbagi
            </h3>
            <LinkButton
              className="primary-button mt-6 from-orange-400 to-pink-500"
              href="https://discord.gg/aDaDw7DkYU"
            >
              Gabung Discord
            </LinkButton>
            <motion.div
              className="mt-8 grid grid-cols-2 gap-5 min-[430px]:grid-cols-3"
              variants={grid}
              whileInView="show"
              initial="hidden"
            >
              <Item icon={<BsBarChartFill />}>Sistem pemungutan suara (DAO)</Item>
              <Item icon={<BsPencilFill />}>Bebas menulis</Item>
              <Item icon={<RiSwordFill />} active>
                Dapatkan NFT
              </Item>
            </motion.div>
          </div>

          <div
            className={clsx(
              "aspect-square w-[150px] rounded-md fill-black dark:fill-white max-[430px]:hidden",
              "mt-auto max-w-[20rem] border-b-4 border-black dark:border-white lg:w-full"
            )}
          >
            <DinoSvg />
          </div>
        </Step>
      </motion.div>
    </div>
  );
}

function Item({
  icon,
  children,
  active,
}: {
  icon: ReactNode;
  children: string;
  active?: boolean;
}) {
  return (
    <motion.div
      variants={item}
      className={clsx(
        `${styles["item-card"]} break-keep`,
        active && [
          "bg-gradient-to-br from-blue-600 to-purple-500",
          "text-white shadow-xl shadow-blue-400/40 max-[430px]:col-span-2 max-[430px]:row-start-1",
        ]
      )}
    >
      <div className="flex flex-col items-center justify-center text-3xl sm:text-6xl lg:text-7xl">
        {icon}
      </div>
      <p className="heading-md">{children}</p>
    </motion.div>
  );
}

function DinoSvg() {
  return (
    <svg
      viewBox="0 40 124 104"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,142L8,142L8,144L0,144L0,142ZM28,142L32,142L32,144L28,144L28,142ZM96,142L104,142L104,144L96,144L96,142ZM80,100L76,100L76,114L72,114L72,120L68,120L68,124L64,124L64,140L68,140L68,144L60,144L60,132L56,132L56,128L52,128L52,132L48,132L48,136L44,136L44,140L48,140L48,144L40,144L40,128L36,128L36,124L32,124L32,120L28,120L28,116L24,116L24,112L20,112L20,88L24,88L24,96L28,96L28,100L32,100L32,104L40,104L40,100L44,100L44,96L50,96L50,92L56,92L56,88L60,88L60,62L64,62L64,58L96,58L96,62L100,62L100,80L80,80L80,84L92,84L92,88L76,88L76,96L84,96L84,104L80,104L80,100ZM82,140L84,140L84,142L82,142L82,140ZM12,136L20,136L20,138L12,138L12,136ZM110,134L116,134L116,136L110,136L110,134ZM0,128L32,128L32,130L0,130L0,128ZM72,128L128,128L128,130L72,130L72,128ZM68,64L68,68L72,68L72,64L68,64Z"
        stroke="none"
      />
    </svg>
  );
}
