"use client";

import React, { useState, useEffect } from "react";
import Logo from "../logo";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
// import LogoutForm from "./logout-form";

const dashboardLinks = [
  { name: "Home", href: "/" },
  { name: "Join Requests", href: "/dashboard/join-requests" },
  { name: "Quote Requests", href: "/dashboard/quote-requests" },
  { name: "Support Requests", href: "/dashboard/support-requests" },
];

const underlineClass =
  "absolute left-0 bottom-0 w-full h-[2px] bg-primary origin-left transition-transform duration-300";

const HeaderNavLinks = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <nav
      className="w-screen -ml-10  border-b shadow-sm bg-gradient-to-r from-slate-50 to-green-50 top-0 left-0 z-50"
      role="navigation"
    >
      <div className="flex items-center justify-between mx-6 md:mx-16 py-4">
        <Link href="/dashboard">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-gray-800 font-semibold text-lg">
          {dashboardLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.name} className="group relative cursor-pointer">
                <Link
                  href={link.href}
                  className={`transition-colors duration-300 ${
                    isActive ? "text-primary" : "hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
                <span
                  className={`${underlineClass} ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </li>
            );
          })}
          {/* <LogoutForm /> */}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-800 cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <ul className="flex flex-col items-start px-6 md:hidden bg-white shadow-md border-t">
          {dashboardLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name} className="w-full">
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block w-full text-sm font-medium px-3 py-3 transition-colors duration-200 rounded-md ${
                    isActive
                      ? "bg-green-100 text-primary"
                      : "text-gray-800 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default HeaderNavLinks;
