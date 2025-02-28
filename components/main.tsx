import { AnimatePresence } from "framer-motion";
import { forwardRef } from "react";

type Props = {
  children?: React.ReactNode;
};

export default forwardRef<HTMLDivElement, Props>(function Main(
  { children },
  ref
) {

  return (
    <main className="h-screen w-screen flex flex-col font-serif overflow-hidden">
      <nav className="h-10 p-2 bg-white border-b-2 border-gray-900 flex justify-between">
        <div className="flex items-center">
          <span className="shadow-purple-200 text-shadow text-purple-500/70 bg-clip-text bg-bottom bg-[url('/glitter.gif')]">
            brennim
          </span>
        </div>
        <div className="flex items-center">
          <span>17:38</span>
        </div>
      </nav>

      <div
        className="relative bg-cyan-100 flex-1 p-2 flex flex-col flex-wrap items-start"
        ref={ref}
      >
        <AnimatePresence exitBeforeEnter initial={false}>{children}</AnimatePresence>
      </div>
    </main>
  );
});
