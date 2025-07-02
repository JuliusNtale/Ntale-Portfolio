"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();
  
  // Special styling for priority links (like services)
  if (link.priority) {
    return (
      <Link 
        className={`rounded-lg px-2 lg:px-3 xl:px-4 py-2 font-semibold transition-all duration-300 text-sm lg:text-base relative z-10 whitespace-nowrap ${
          pathName === link.url 
            ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white shadow-lg border border-white/20" 
            : "bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white hover:from-indigo-600 hover:via-purple-600 hover:to-blue-600 shadow-md hover:shadow-lg transform hover:scale-105 border border-white/10"
        }`} 
        href={link.url}
      >
        {link.title}
      </Link>
    );
  }

  return (
    <Link 
      className={`rounded px-2 lg:px-3 py-1 lg:py-2 transition-all duration-300 text-sm lg:text-base relative z-10 whitespace-nowrap hover:scale-105 ${
        pathName === link.url 
          ? "bg-primary text-primary-foreground font-semibold shadow-sm" 
          : "hover:bg-accent hover:text-accent-foreground"
      }`} 
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
