"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { analytics } from "@/lib/analytics";

const FloatingServicesButton = () => {
  const pathname = usePathname();
  
  // Don't show on services page itself
  if (pathname === "/services") {
    return null;
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 2 // Show after 2 seconds
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Link href="/services">
        <button
          className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white rounded-full w-16 h-16 md:w-20 md:h-20 shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group border border-white/20"
          onClick={() => analytics.buttonClick('Floating Services Button', pathname)}
          aria-label="View Services & Pricing"
        >
          <motion.div
            className="text-2xl md:text-3xl font-bold"
            animate={{ 
              scale: [1, 1.1, 1] 
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            �
          </motion.div>
        </button>
      </Link>
      
      {/* Tooltip */}
      <motion.div
        className="absolute bottom-full right-0 mb-2 bg-black text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0, y: 0 }}
        whileHover={{ opacity: 1, y: -5 }}
      >
        View Services & Pricing
        <div className="absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingServicesButton;
