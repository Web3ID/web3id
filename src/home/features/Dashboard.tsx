import clsx from "clsx";
import ChartSvg from "@static/home/chart.svg";
import Image from "next/image";
import {
  BsBarChartFill,
  BsEmojiAngryFill,
  BsMusicNoteBeamed,
} from "react-icons/bs";
import { RiSettings2Fill } from "react-icons/ri";
import { Progress } from "../components/Progress";
import { motion } from "framer-motion";

const card = clsx(
  "bg-slate-100 rounded-3xl p-5 shadow-xl flex flex-col",
  "dark:bg-slate-900"
);

export function Dashboard() {
  return (
    <div className="z-[2] mt-[5rem]">
      <div className="flex flex-col items-center gap-5 text-center">
        <div
          className={clsx(
            "h-[9rem] w-1 bg-gradient-to-b",
            "from-transparent via-purple-400 to-purple-600 dark:to-purple-100"
          )}
        />
        <h1 className="features-heading">Belajar Trading</h1>
        <h3 className="heading-md text-secondary">
          Diindustri Crypto、sangat penting untuk mempelajari signal 
          untuk memulai Trading
        </h3>
      </div>
      <div className="mt-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Chart />
        <Settings />

        <div className={card}>
          <div className="h-stack">
            <div className="rounded-xl bg-green-500 p-3 text-3xl text-white">
              <BsMusicNoteBeamed />
            </div>
            <div>
              <h3 className="heading-md">Music NFT</h3>
              <p className="text-secondary font-bold">Lagu berikutnya</p>
            </div>
          </div>
          <div className="h-stack mt-auto pt-2">
            <p>1:02</p>
            <Progress track="w-[36%]" />
            <p>3:20</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <motion.div
      className={`${card} gap-3`}
      whileInView={{ y: 0 }}
      initial={{ y: "10rem" }}
    >
      <div className="h-stack">
        <div className="rounded-xl bg-purple-500 p-3 text-3xl text-white">
          <RiSettings2Fill />
        </div>
        <div>
          <h3 className="heading-md">Jual Beli Asset</h3>
          <p className="text-secondary font-bold">Jual, Beli atau Hodl</p>
        </div>
      </div>
      <div
        className={clsx("h-full flex-1 grid-cols-3 gap-4", "hidden lg:grid")}
      >
        <RoleItem />
        <RoleItem />
        <RoleItem />
      </div>
      <button className="primary-button mt-auto rounded-xl from-purple-400 to-purple-600">
        Jadilah Expert
      </button>
    </motion.div>
  );
}

function RoleItem() {
  return (
    <div className="flex items-center justify-center rounded-xl bg-purple-200 p-3 text-white">
      <BsEmojiAngryFill className="text-3xl" />
    </div>
  );
}

function Chart() {
  return (
    <motion.div
      className={clsx("row-span-2", card)}
      whileInView={{ x: 0, opacity: 1 }}
      initial={{ x: "8rem", opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="h-stack">
        <div className="rounded-xl bg-blue-600 p-5 text-3xl text-white">
          <BsBarChartFill />
        </div>
        <div>
          <h3 className="heading-md">Asset Anda</h3>
          <p className="text-secondary font-bold">Analisis Harga Market</p>
        </div>
      </div>
      <Image src={ChartSvg} alt="chart" className="mt-auto rounded-3xl" />
    </motion.div>
  );
}
