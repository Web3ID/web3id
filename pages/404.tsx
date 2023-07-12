import { IoMdHeartEmpty } from "react-icons/io";

export default function NotFound() {
  return (
    <div className="flex h-[100vh] w-full flex-col items-center justify-center gap-4 bg-white text-center dark:bg-black">
      <h2 className="text-3xl font-bold sm:text-4xl">404 page not found</h2>
      <span className="text-secondary text-xl">
        <IoMdHeartEmpty className="mr-2 inline" />
        Opps something wrong...
      </span>
    </div>
  );
}
