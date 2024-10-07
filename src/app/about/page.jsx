"use client"
import { motion } from "framer-motion";

const AboutPage = ()=>{
    return(
        <motion.div
        className="h-full" // Fixed typo here
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
   {/* CONTANER */}
   <div className="">
    {/* TEXT CONTAINER */}
    <div className="P-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
         {/* BIOGRAPHY CONTAINER */}
    <div className="">BIOGRAPHY</div>
         {/* SKILLS CONTAINER */}
         <div className="">SKILLS</div>
              {/* EXPERIENCE CONTAINER */}
    <div className="">EXPERIENCE</div>
    </div>
    {/* SVG CONTANER */}
    <div className="hidden"></div>
    </div>
        </motion.div>
    )
    }
    export default AboutPage;