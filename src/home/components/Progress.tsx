import { twMerge } from "tailwind-merge";

export function Progress({ track }: { track: string }) {
  return (
    <div className="h-[12px] w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
      <div
        className={twMerge(
          "h-full bg-gradient-to-r from-green-500 to-cyan-400",
          track
        )}
      />
    </div>
  );
}
