"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { ThemeToggle } from "./theme-toggle";
import { motion } from "framer-motion";
import { analytics } from "@/lib/analytics";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/services", title: "Services" },
  { url: "/gallery", title: "Gallery" },
  { url: "/blog", title: "Blog" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    opened: {
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
      transition: { ease: "easeInOut", duration: 0.5 },
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="sticky top-0 z-50 h-16 flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 text-xl bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm relative">
      {/* LEFT NAVIGATION LINKS */}
      <div className="hidden lg:flex gap-2 xl:gap-4 flex-1 justify-start">
        {links.slice(0, 4).map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* CENTERED LOGO */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex-shrink-0">
        <Link
          href="/"
          className="text-sm bg-gradient-to-r from-primary to-accent rounded-lg p-2 font-bold flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative z-10"
        >
          <span className="text-white mr-1 text-xs sm:text-sm">Julius</span>
          <span className="w-10 sm:w-12 h-6 sm:h-8 rounded bg-background/20 backdrop-blur-sm text-black flex items-center justify-center text-xs sm:text-sm font-bold">
            NTALE
          </span>
        </Link>
      </div>

      {/* RIGHT NAVIGATION LINKS */}
      <div className="hidden lg:flex gap-2 xl:gap-4 flex-1 justify-end">
        {links.slice(4).map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* DESKTOP SOCIAL & THEME TOGGLE */}
      <div className="hidden md:flex gap-3 items-center ml-4 flex-shrink-0">
        <ThemeToggle />
        <div className="flex gap-2">
          <Link href="https://github.com/JuliusNtale" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/github.png" 
              alt="GitHub" 
              width={20} 
              height={20} 
              priority 
              className="hover:opacity-80 transition-opacity cursor-pointer" 
              onClick={() => analytics.socialClick('GitHub')}
            />
          </Link>
          <Link href="https://www.instagram.com/am.jhey" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/instagram.png" 
              alt="Instagram" 
              width={20} 
              height={20} 
              className="hover:opacity-80 transition-opacity cursor-pointer"
              onClick={() => analytics.socialClick('Instagram')}
            />
          </Link>
          <Link href="https://www.facebook.com/julius.ntale.18/" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/facebook.png" 
              alt="Facebook" 
              width={20} 
              height={20} 
              className="hover:opacity-80 transition-opacity cursor-pointer"
              onClick={() => analytics.socialClick('Facebook')}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/julius-ntale-aa08902b6/" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/linkedin.png" 
              alt="LinkedIn" 
              width={20} 
              height={20} 
              className="hover:opacity-80 transition-opacity cursor-pointer"
              onClick={() => analytics.socialClick('LinkedIn')}
            />
          </Link>
        </div>
      </div>

      {/* MOBILE LOGO - CENTERED */}
      <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2">
        <Link
          href="/"
          className="text-sm bg-gradient-to-r from-primary to-accent rounded-lg p-2 font-bold flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative z-10"
        >
          <span className="text-white mr-1 text-xs sm:text-sm">Julius</span>
          <span className="w-10 sm:w-12 h-6 sm:h-8 rounded bg-background/20 backdrop-blur-sm text-black flex items-center justify-center text-xs sm:text-sm font-bold">
            NTALE
          </span>
        </Link>
      </div>

      {/* MOBILE/TABLET MENU */}
      <div className="md:hidden flex items-center gap-2 ml-auto">
        <ThemeToggle />
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative ml-2"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-foreground rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-foreground rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-foreground rounded origin-left"
          ></motion.div>
        </button>

        {/* MOBILE MENU OVERLAY */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-primary via-accent to-secondary text-white flex flex-col items-center justify-center gap-8 text-3xl sm:text-4xl z-40 backdrop-blur-md"
          >
            <div className="flex flex-col items-center gap-6">
              {links.map((link) => (
                <motion.div 
                  variants={listItemVariants} 
                  className="hover:scale-110 transition-transform duration-300" 
                  key={link.title}
                >
                  <Link 
                    href={link.url} 
                    onClick={() => setOpen(false)} 
                    className={`hover:text-accent-foreground transition-colors ${
                      link.url === '/services' ? 'text-yellow-300 font-bold text-4xl sm:text-5xl' : ''
                    }`}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Social Links */}
              <motion.div 
                variants={listItemVariants}
                className="flex gap-4 mt-8"
              >
                <Link href="https://github.com/JuliusNtale" target="_blank" rel="noopener noreferrer">
                  <Image 
                    src="/github.png" 
                    alt="GitHub" 
                    width={32} 
                    height={32} 
                    className="hover:opacity-80 transition-opacity cursor-pointer filter invert" 
                    onClick={() => analytics.socialClick('GitHub')}
                  />
                </Link>
                <Link href="https://www.instagram.com/am.jhey" target="_blank" rel="noopener noreferrer">
                  <Image 
                    src="/instagram.png" 
                    alt="Instagram" 
                    width={32} 
                    height={32} 
                    className="hover:opacity-80 transition-opacity cursor-pointer"
                    onClick={() => analytics.socialClick('Instagram')}
                  />
                </Link>
                <Link href="https://www.facebook.com/julius.ntale.18/" target="_blank" rel="noopener noreferrer">
                  <Image 
                    src="/facebook.png" 
                    alt="Facebook" 
                    width={32} 
                    height={32} 
                    className="hover:opacity-80 transition-opacity cursor-pointer"
                    onClick={() => analytics.socialClick('Facebook')}
                  />
                </Link>
                <Link href="https://www.linkedin.com/in/julius-ntale-aa08902b6/" target="_blank" rel="noopener noreferrer">
                  <Image 
                    src="/linkedin.png" 
                    alt="LinkedIn" 
                    width={32} 
                    height={32} 
                    className="hover:opacity-80 transition-opacity cursor-pointer"
                    onClick={() => analytics.socialClick('LinkedIn')}
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;