"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Portfolio", url: "/portfolio" },
  { title: "Contact", url: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Clean-up on unmount
    };
  }, [open]);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
  };

  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };

  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
  };

  const listVariants = {
    closed: { x: "100vw", transition: { ease: "easeIn", duration: 0.5 } },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        ease: "easeOut",
        staggerChildren: 0.2,
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
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-l">
      {/* Links for larger screens */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
          aria-label="Home"
        >
          <span className="text-white mr-1">JULIUS</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            NTALE
          </span>
        </Link>
      </div>

      {/* Social Links */}
      <div className="hidden md:flex gap-4 w-1/3 justify-end">
        <Link href="https://github.com/JuliusNtale" passHref>
          <Image
            src="/github.png"
            alt="GitHub"
            width={24}
            height={24}
            priority // Prioritize loading GitHub icon
          />
        </Link>
        <Link href="https://www.instagram.com/natchy_.p" passHref>
          <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        </Link>
        <Link href="https://www.facebook.com/julius.ntale.18/" passHref>
          <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/julius-ntale-aa08902b6/" passHref>
          <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
        </Link>
      </div>

      {/* Responsive menu for smaller screens */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={open ? "true" : "false"} // Accessibility improvement
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          />
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          />
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          />
        </button>

        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                key={link.title}
                className=""
              >
                <Link href={link.url} onClick={toggleMenu}>
                  <span>{link.title}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
