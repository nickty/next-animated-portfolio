"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <Link href={link.url} key={link.title}>
            {link.title}
          </Link>
        ))}
      </div>
      <div className="md:hidden lg:flex justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Mizan</span>
          <span className="w-12 h-8 bg-white rounded flex items-center justify-center">
            .Dev
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="#">
          <Image src="/github.png" alt="mizan github" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image
            src="/dribbble.png"
            alt="mizan dribbble"
            width={24}
            height={24}
          />
        </Link>
        <Link href="#">
          <Image
            src="/instagram.png"
            alt="mizan instagram"
            width={24}
            height={24}
          />
        </Link>
        <Link href="#">
          <Image
            src="/facebook.png"
            alt="mizan facebook"
            width={24}
            height={24}
          />
        </Link>
        <Link href="#">
          <Image
            src="/pinterest.png"
            alt="mizan pinterest"
            width={24}
            height={24}
          />
        </Link>
        <Link href="#">
          <Image
            src="/linkedin.png"
            alt="mizan linkedin"
            width={24}
            height={24}
          />
        </Link>
      </div>
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {open && (
          <div className="absolute bg-black top-0 left-0 w-screen h-screen text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
