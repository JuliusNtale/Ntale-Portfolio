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
  { url: "/blog", title: "Blog" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
      y: 0,
    },
    opened: {
      rotate: 45,
      y: 3,
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
      scale: 1,
    },
    opened: {
      opacity: 0,
      scale: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
      y: 0,
    },
    opened: {
      rotate: -45,
      y: -3,
    },
  };

  const listVariants = {
    closed: {
      x: "100%",
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const listItemVariants = {
    closed: {
      x: 20,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <div className="sticky top-0 z-[90] h-16 flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 text-xl bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
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
      <div className="lg:hidden flex items-center gap-2 ml-auto">
        <ThemeToggle />
        {/* MENU BUTTON */}
        <button
          className="w-12 h-12 flex flex-col justify-center items-center z-[102] relative ml-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg touch-manipulation"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
            <motion.div
              variants={topVariants}
              animate={open ? "opened" : "closed"}
              className="w-6 h-0.5 bg-foreground rounded-full origin-center"
              style={{ transformOrigin: "center" }}
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={open ? "opened" : "closed"}
              className="w-6 h-0.5 bg-foreground rounded-full"
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={open ? "opened" : "closed"}
              className="w-6 h-0.5 bg-foreground rounded-full origin-center"
              style={{ transformOrigin: "center" }}
            ></motion.div>
          </div>
        </button>
      </div>
    </div>

    {/* MOBILE MENU OVERLAY - OUTSIDE NAVBAR CONTAINER */}
    {open && (
      <>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          onClick={() => setOpen(false)}
        />
        
        {/* Mobile Menu Panel */}
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="fixed top-0 right-0 w-full max-w-sm h-full bg-background border-l border-border/50 shadow-2xl z-[101] overflow-y-auto"
        >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/50">
                <h2 className="text-xl font-bold text-foreground">Menu</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="px-6 py-4">
                <nav className="space-y-2">
                  {links.map((link, index) => (
                    <motion.div
                      key={link.title}
                      variants={listItemVariants}
                      custom={index}
                      className="relative"
                    >
                      <Link
                        href={link.url}
                        onClick={() => setOpen(false)}
                        className={`
                          group flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 
                          hover:bg-primary/10 hover:text-primary active:scale-95
                          ${link.url === '/services' ? 
                            'bg-gradient-to-r from-yellow-400/10 to-orange-400/10 text-yellow-600 dark:text-yellow-400 border border-yellow-400/20' : 
                            'text-foreground/80 hover:text-foreground'
                          }
                        `}
                      >
                        {/* Icon for each page */}
                        <span className="mr-3 text-lg">
                          {link.url === '/' && '🏠'}
                          {link.url === '/about' && '👨‍💻'}
                          {link.url === '/portfolio' && '💼'}
                          {link.url === '/services' && '⚡'}
                          {link.url === '/blog' && '📝'}
                          {link.url === '/contact' && '📧'}
                        </span>
                        
                        <span className="flex-1">{link.title}</span>
                        
                        {/* Special indicator for Services */}
                        {link.url === '/services' && (
                          <span className="ml-2 px-2 py-1 bg-yellow-400/20 text-yellow-600 dark:text-yellow-400 text-xs rounded-full font-bold">
                            50% OFF
                          </span>
                        )}
                        
                        {/* Arrow indicator */}
                        <svg 
                          className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Social Links Section */}
              <div className="px-6 py-4 border-t border-border/50 mt-auto">
                <h3 className="text-sm font-semibold text-foreground/60 mb-4 uppercase tracking-wider">
                  Connect With Me
                </h3>
                <motion.div 
                  variants={listItemVariants}
                  className="grid grid-cols-4 gap-3"
                >
                  <Link 
                    href="https://github.com/JuliusNtale" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={() => analytics.socialClick('GitHub')}
                  >
                    <Image 
                      src="/github.png" 
                      alt="GitHub" 
                      width={24} 
                      height={24} 
                      className="group-hover:scale-110 transition-transform duration-200 dark:filter dark:invert" 
                    />
                    <span className="text-xs mt-1 text-foreground/60">GitHub</span>
                  </Link>
                  
                  <Link 
                    href="https://www.instagram.com/am.jhey" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={() => analytics.socialClick('Instagram')}
                  >
                    <Image 
                      src="/instagram.png" 
                      alt="Instagram" 
                      width={24} 
                      height={24} 
                      className="group-hover:scale-110 transition-transform duration-200"
                    />
                    <span className="text-xs mt-1 text-foreground/60">Instagram</span>
                  </Link>
                  
                  <Link 
                    href="https://www.facebook.com/julius.ntale.18/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={() => analytics.socialClick('Facebook')}
                  >
                    <Image 
                      src="/facebook.png" 
                      alt="Facebook" 
                      width={24} 
                      height={24} 
                      className="group-hover:scale-110 transition-transform duration-200"
                    />
                    <span className="text-xs mt-1 text-foreground/60">Facebook</span>
                  </Link>
                  
                  <Link 
                    href="https://www.linkedin.com/in/julius-ntale-aa08902b6/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={() => analytics.socialClick('LinkedIn')}
                  >
                    <Image 
                      src="/linkedin.png" 
                      alt="LinkedIn" 
                      width={24} 
                      height={24} 
                      className="group-hover:scale-110 transition-transform duration-200"
                    />
                    <span className="text-xs mt-1 text-foreground/60">LinkedIn</span>
                  </Link>
                </motion.div>
              </div>

              {/* Footer Info */}
              <div className="px-6 py-4 border-t border-border/50 bg-gray-50/50 dark:bg-gray-900/50">
                <div className="text-center">
                  <p className="text-sm text-foreground/60 mb-1">
                    Julius Peter Ntale
                  </p>
                  <p className="text-xs text-foreground/40">
                    Full-Stack Developer & Media Producer
                  </p>
                  <p className="text-xs text-foreground/40 mt-1">
                    📍 Dar es Salaam, Tanzania
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
    </>
  );
};

export default Navbar;