"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait"> {/* Fixed mode typo */}
      <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
        {/* Top Transition */}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* Center text transition */}
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>

        {/* Bottom Transition */}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />

        {/* Navbar */}
        <header className="h-24"> {/* Replaced div with header */}
          <Navbar />
        </header>

        {/* Page Content */}
        <main className="h-[calc(100vh-6rem)]"> {/* Replaced div with main */}
          {children}
        </main>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
