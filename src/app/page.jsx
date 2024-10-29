"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link for navigation

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
       <div className="h-full overflow-scroll flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
       {/* IMAGE CONTAINER */}
        <div className="relative w-full h-1/2 lg:w-1/2 lg:h-full flex-shrink-0">
      <Image
        src="/julius-1.png"
        fill
        alt="Julius Ntale - Professional Portfolio"
        priority
        className="object-contain"
      />
    </div>
        {/* TEXT CONTAINER */}
        <div className="w-full h-1/2 flex z-10 flex-col gap-8  lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-white hover:text-black transition-colors duration-300">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-300">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
