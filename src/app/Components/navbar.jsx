"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Use Image from next/image
import NavLink from "./navLink";

const links = [
  { title: "Home", url: "/" },  
  { title: "About", url: "/about" },
  { title: "Portfolio", url: "/portfolio" },
  { title: "Contact", url: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-20 xl:px-48 text-l">
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
          <Image src="/github.png" alt="GitHub" width={24} height={24} />
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
          onClick={() => setOpen(!open)}
        >
          <div className="w-9 h-1 bg-white rounded"></div>
          <div className="w-9 h-1 bg-white rounded"></div>
          <div className="w-9 h-1 bg-white rounded"></div>
        </button>

        {/* MENU LIST */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title} onClick={() => setOpen(false)}>
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
