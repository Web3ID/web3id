import Gradient from "./components/Gradient";
import LinkButton from "./components/LinkButton";
import GreenGradient from "@static/home/green-gradient.svg";
import clsx from "clsx";
import { motion } from "framer-motion";

export function DAOSystem() {
  return (
    <motion.div
      className={clsx(
        "relative flex flex-col items-start gap-5 md:items-center",
        "z-[2] mt-[15rem]"
      )}
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: "5rem", opacity: 0 }}
    >
      <Background />

      <h1 className="heading-xl">
        <span className="text-gradient from-green-400 to-blue-400 dark:to-blue-200">
          DAO
        </span>
        System
      </h1>
      <h3 className="heading-md text-secondary">
        Decentralized Autonomous Organization
      </h3>
      <LinkButton
        href="/learn/"
        className="primary-button mt-4 bg-gradient-to-b from-green-400 to-green-600"
      >
        Learn Web3 Now!
      </LinkButton>
      <Jobs />
    </motion.div>
  );
}

function Background() {
  return (
    <Gradient
      src={GreenGradient}
      className="absolute -bottom-[100px] -z-[1] w-full min-w-[800px] opacity-80 lg:-bottom-[40%]"
    />
  );
}

function Jobs() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-3 text-start md:grid-cols-2 lg:grid-cols-3">
      <Job
        name="Learning"
        description="Belajar bersama basic Blockchain & Crypto"
      />
      <Job
        name="Involving"
        description="Mengajak berpartisipasi orang lokal"
      />
      <Job
        name="Improving"
        description="Memperbaiki Finansial, Problem Solving dengan Blockchain"
      />
      <Job
        name="Earning"
        description="Mendapatkan penghasilan tambahan"
        optional
      />
      <Job
        name="Building"
        description="🏢 Membangun dan berkontribusi"
      />
      <Job
        name="Sharing"
        description="Berbagi apa yang kami & kamu tau"
        optional
      />
      
    </div>
  );
}

function Job({
  name,
  description,
  optional,
}: {
  name: string;
  description: string;
  optional?: boolean;
}) {
  return (
    <div
      className={clsx(
        "card flex flex-col gap-3 bg-white/70 backdrop-blur-3xl dark:bg-[rgba(10,10,10,0.7)]",
        optional && "max-md:hidden"
      )}
    >
      <h3 className="heading-md">{name}</h3>
      <p className="text-secondary font-bold">{description}</p>
    </div>
  );
}
