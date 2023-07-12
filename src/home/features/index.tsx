import { IndoUI } from "./IndoUI";
import { Dashboard } from "./Dashboard";
import { Music } from "./Music";
import { Games } from "./Games";

export function Features() {
  return (
    <>
      <div className="mt-[10rem] flex flex-col gap-5 sm:mt-[15rem] sm:text-center">
        <h1 className="heading-xl max-[420px]:text-4xl lg:text-6xl xl:text-7xl">
          <span className="heading-lg sm:heading-xl block">Mau belajar</span>
          <span className="text-gradient from-orange-400 to-red-500">
            Web3 
          </span>
            &Crypto?
        </h1>
        <h2 className="heading-md text-secondary">
          Belajar bersama kami, berkembang dan bertumbuh bersama
          <br />
          Learning, Improving, Envolving and Building Together!
        </h2>
      </div>
      <IndoUI />
      <Games />
      <Music />
      <Dashboard />
    </>
  );
}
