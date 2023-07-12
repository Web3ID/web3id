import { AiFillCaretDown } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState } from "react";
import clsx from "clsx";

type AccordionProps = {
  title: string;
  children?: ReactNode;
};
export function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setOpen] = useState(false);

  return (
    <motion.header
      className={clsx(
        "mt-4 rounded-xl border border-gray-200 bg-white shadow-xl shadow-gray-100",
        "dark:border-neutral-800 dark:bg-background/50 dark:shadow-background"
      )}
    >
      <div
        className="h-stack cursor-pointer justify-between p-4 text-black dark:text-white"
        onClick={() => setOpen((prev) => !prev)}
      >
        <p className="heading-md">{title}</p>
        <motion.div
          animate={isOpen ? "open" : "collapsed"}
          variants={{
            open: { rotateZ: 180 },
            collapsed: { rotateZ: 0 },
          }}
        >
          <AiFillCaretDown />
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{
              duration: 0.4,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
            className="text-secondary"
          >
            <div className="px-4 pb-4">{children}</div>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
