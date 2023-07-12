import clsx from "clsx";
import { ReactNode } from "react";
import { RiCoinsFill, RiGithubFill } from "react-icons/ri";

export default function Sponsor() {
  return (
    <div
      className={clsx(
        "mt-[5rem] bg-white p-4 py-[6rem] dark:bg-zinc-900/50",
        "flex w-full flex-col items-center gap-3 text-center",
        "font-semibold"
      )}
    >
      <p className="text-lg tracking-widest text-purple-400">
        Donation
      </p>
      <h1 className="heading-xl">Support us</h1>
      <p className="text-secondary heading-md">
        Merawat dan Membuat konten edukasi sendiri sangat berat
        <span className="max-sm:hidden">, </span>
        <br className="sm:hidden" />
        Dukung kami dengan tindakan praktis
      </p>

      <div className="mt-5 grid w-full max-w-[60rem] grid-cols-1 gap-4 sm:grid-cols-2">
        <Card
          title="Contribute"
          text="Github"
          icon={<RiGithubFill />}
          href="https://github.com/Web3ID/web3id"
        >
          GM/GN
        </Card>
        <Card
          title="Grants"
          text="Gitcoin"
          icon={<RiCoinsFill />}
          href="https://github.com/Web3ID/web3id"
        >
          Wagmi
        </Card>
      </div>
    </div>
  );
}

function Card({
  title,
  text,
  icon,
  children,
  href,
}: {
  title: string;
  text: string;
  icon: ReactNode;
  children: string;
  href: string;
}) {
  return (
    <div className="card text-start">
      <div className="h-stack">
        <div className="rounded-md bg-purple-400 p-3 text-2xl text-white dark:bg-purple-500">
          {icon}
        </div>
        <div>
          <p className="heading-md">{title}</p>
          <p className="text-secondary">{text}</p>
        </div>
      </div>
      <a href={href} target="_blank" rel="noreferrer">
        <button
          className={clsx(
            "text-md mt-6 w-[8rem] rounded-xl py-1 font-bold text-white shadow-lg",
            "bg-purple-400 shadow-purple-300",
            "dark:bg-purple-500 dark:shadow-purple-700"
          )}
        >
          {children}
        </button>
      </a>
    </div>
  );
}
