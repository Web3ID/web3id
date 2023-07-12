import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import cn_styles from "./indo.module.css";
import Step from "../components/Step";
import Gradient from "../components/Gradient";

import { BsShieldFillCheck, BsTextCenter, BsTranslate } from "react-icons/bs";
import GardientSvg from "@static/home/purple-gradient.svg";
import { ReactNode } from "react";
import { RiMouseFill } from "react-icons/ri";

export function IndoUI() {
  return (
    <div
      className={clsx(
        "mt-20 min-h-[150vh] w-full pr-8 sm:min-h-[160vh] xl:min-h-[150vh]",
        cn_styles["steps-container"]
      )}
    >
      <motion.div
        className="sticky top-[20vh] flex flex-col gap-5"
        initial="hidden"
        whileInView="show"
        transition={{
          duration: 0.5,
          delayChildren: 0.2,
        }}
        variants={{
          show: { y: 0, opacity: 1 },
          hidden: {
            y: -20,
            opacity: 0,
          },
        }}
      >
        <Step
          icon={{
            className:
              "bg-gradient-to-br from-purple-400 to-purple-600 shadow-purple-400",
            children: <BsTranslate className="inline" />,
          }}
          className="relative z-[2]"
        >
          <h1 className="features-heading mb-2">Bahasa Indonesia</h1>
          <h3 className="heading-md text-secondary">
            kami menyediakan antarmuka dengan bahasa indonesia agar mudah dipahami oleh semua kalangan
          </h3>
          <Skeleton />
          <div
            className={clsx(
              "relative -ml-[1rem] -mt-[14rem] w-fit sm:-mt-[15rem] xl:-mt-[25rem] xl:mr-[14%] xl:ml-auto"
            )}
          >
            <Feature icon={<BsShieldFillCheck />}>Fungsi manajemen komunitas yang kaya</Feature>
            <Feature icon={<BsTextCenter />}>Blog & Dokumentasi yang sederhana</Feature>
            <Feature icon={<RiMouseFill />}>Tidak ada operasi yang rumit</Feature>
          </div>
        </Step>
        <Gradient
          src={GardientSvg}
          className={clsx(
            "absolute -z-[1] w-[50rem] max-w-none",
            "-max-xl:bottom-[14rem] max-xl:left-0",
            "xl:-right-[5rem] xl:-top-[14rem]"
          )}
        />
      </motion.div>
    </div>
  );
}

function Feature({ children, icon }: { children: string; icon: ReactNode }) {
  return (
    <motion.div
      className={clsx(
        "h-stack mt-4 h-fit rounded-xl bg-white p-4 dark:bg-slate-900 xl:pr-[4rem]",
        "shadow-2xl shadow-blue-800/30 dark:shadow-black/60"
      )}
      variants={{
        show: {
          y: 0,
          opacity: 1,
        },
        hidden: {
          opacity: 0,
          y: "5rem",
        },
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="rounded-full bg-purple-400 p-2 text-xl text-white dark:bg-purple-500 sm:text-2xl">
        {icon}
      </div>
      <p className="text-lg font-bold">{children}</p>
    </motion.div>
  );
}

function Skeleton() {
  const foreground = "bg-slate-300 dark:bg-slate-800 rounded-full";
  const skeleton = "rounded-full bg-slate-200 dark:bg-slate-800 h-7";
  const list: Variants = {
    show: { transition: { staggerChildren: 0.1, delayChildren: 0 } },
    hidden: {},
  };
  const item: Variants = {
    show: {
      scaleX: 1,
      opacity: 1,
    },
    hidden: {
      scaleX: 0,
      opacity: 0,
    },
  };

  return (
    <div
      className={clsx(
        "mt-8 aspect-[6/3] max-w-[45rem] flex-1 rounded-lg bg-slate-100 p-5 dark:bg-slate-900/70",
        "grid grid-cols-[0.5fr_1fr] gap-6",
        "relative shadow-xl",
        "min-h-[17rem] min-w-[26rem]"
      )}
    >
      <motion.div
        className="flex flex-1 flex-col gap-4 rounded-md bg-white p-4 dark:bg-slate-900/50"
        variants={list}
      >
        <motion.div
          className={skeleton}
          variants={item}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className={skeleton}
          variants={item}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className={skeleton}
          variants={item}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
      <motion.div
        className="flex flex-col gap-4 text-xl font-bold"
        variants={{
          show: {
            paddingRight: "0px",
            opacity: 1,
          },
          hidden: {
            paddingRight: "150px",
            opacity: 0,
          },
        }}
        transition={{ duration: 1 }}
      >
        <h2 className="heading-md">Sumber Belajar</h2>
        <div className={`${foreground} h-7`} />
        <div className={`${foreground} h-6 w-[70%]`} />
      </motion.div>
    </div>
  );
}
