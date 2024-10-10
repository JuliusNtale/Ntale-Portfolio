"use client";
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full" // Fixed typo here
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/ntale.png" alt="Hero Image" fill className="object-contain" />
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
            Crafting Digital 
            Experieces, Designing 
            Tomorrow.
          </h1>
          
          <p className="mb-6 md:text-xl">
            I specialize in creating engaging and visually stunning websites and
            applications. Feel free to reach out if you have any projects in
            mind or need help with your digital needs.
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
