"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();
  
  // Special styling for priority links (like services)
  if (link.priority) {
    return (
      <Link 
        className={`rounded-lg px-4 py-2 font-semibold transition-all duration-300 ${
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
      className={`rounded p-1 transition-all duration-300 ${
        pathName === link.url 
          ? "bg-black text-white dark:bg-white dark:text-black" 
          : "hover:bg-gray-100 dark:hover:bg-gray-800"
      }`} 
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
