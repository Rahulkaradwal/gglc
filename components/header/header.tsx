// components/Header.tsx
"use client";
import React, { useState } from "react";
import Logo from "../logo";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Our Services", href: "/services" },
  { name: "Contact Support", href: "/support" },
  { name: "About Us", href: "/about" },
  { name: "Join Us", href: "/join-us" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b shadow-sm bg-white top-0 left-0 z-50">
      <div className="flex items-center justify-between mx-6 md:mx-16 py-4">
        <Logo />

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10 text-gray-800 font-semibold text-lg">
          {links.map((link) => (
            <li key={link.name} className="group relative cursor-pointer">
              <Link
                href={link.href}
                className="hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </Link>
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-800 cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <ul className="flex flex-col items-start px-6 md:hidden bg-white shadow-md border-t">
          {links.map((link) => (
            <li key={link.name} className="w-full py-3 border-b">
              <Link
                href={link.href}
                className="block w-full text-sm font-medium text-gray-800 hover:text-primary transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Header;
