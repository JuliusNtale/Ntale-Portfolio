"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation

const Navlink = ({ link }) => {
  const pathName = usePathname(); // Get the current pathname
  
  // Check if the current path matches the link's URL
  const isActive = pathName === link.url;

  return (
    <Link 
      className={`${isActive ? "bg-black rounded p-0.2 text-white" : "text-gray-500"} font-semibold`} 
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default Navlink;
