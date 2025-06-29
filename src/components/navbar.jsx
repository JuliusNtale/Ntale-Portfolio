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
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl bg-background/95 backdrop-blur-md border-b border-border/50">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-gradient-to-r from-primary to-accent rounded-lg p-2 font-bold flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <span className="text-white mr-1">Julius</span>
          <span className="w-12 h-8 rounded bg-background/20 backdrop-blur-sm text-black flex items-center justify-center">
            NTALE
          </span>
        </Link>
      </div>

      {/* SOCIAL & THEME TOGGLE */}
      <div className="hidden md:flex gap-4 w-1/3 justify-end items-center">
        <ThemeToggle />
        <Link href="https://github.com/JuliusNtale" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/github.png" 
            alt="GitHub" 
            width={24} 
            height={24} 
            priority 
            className="hover:opacity-80 transition-opacity cursor-pointer" 
            onClick={() => analytics.socialClick('GitHub')}
          />
        </Link>
        <Link href="https://www.instagram.com/am.jhey" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/instagram.png" 
            alt="Instagram" 
            width={24} 
            height={24} 
            className="hover:opacity-80 transition-opacity cursor-pointer"
            onClick={() => analytics.socialClick('Instagram')}
          />
        </Link>
        <Link href="https://www.facebook.com/julius.ntale.18/" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/facebook.png" 
            alt="Facebook" 
            width={24} 
            height={24} 
            className="hover:opacity-80 transition-opacity cursor-pointer"
            onClick={() => analytics.socialClick('Facebook')}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/julius-ntale-aa08902b6/" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/linkedin.png" 
            alt="LinkedIn" 
            width={24} 
            height={24} 
            className="hover:opacity-80 transition-opacity cursor-pointer"
            onClick={() => analytics.socialClick('LinkedIn')}
          />
        </Link>
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden flex items-center gap-2">
        <ThemeToggle />
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
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

        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-gradient-to-br from-primary via-accent to-secondary text-white flex flex-col items-center justify-center gap-8 text-4xl z-40 backdrop-blur-md"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} className="hover:scale-110 transition-transform duration-300" key={link.title}>
                <Link href={link.url} onClick={() => setOpen(false)} className="hover:text-accent-foreground transition-colors">{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
