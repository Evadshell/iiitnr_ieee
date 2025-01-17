"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null; // Prevent rendering until hydration
  }

  return (
    <header className="w-full border-b bg-white">
      {/* Top bar */}
      <div className="h-10 bg-[#00629B]">
        <div className="container mx-auto flex h-full items-center justify-between px-4 lg:px-6">
          <nav className="hidden items-center gap-6 md:flex">
            {[
              "IEEE.org",
              "IEEE Xplore Digital Library",
              "IEEE Standards",
              "IEEE Spectrum",
              "More Sites",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[13px] font-medium text-white transition-colors hover:text-blue-200"
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center">
            <select className="bg-transparent text-[13px] text-white focus:outline-none">
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-6">
        <Link href="/" className="flex items-center">
          <h1 className="text-lg font-bold text-[#00629B] md:text-2xl">
            IEEE Site Template
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hover:bg-gray-100">
            <Search className="h-5 w-5" />
          </Button>
          <Image
            width="150"
            height="20"
            src="/logo-ieee.svg"
            alt="IEEE Logo"
            className="h-8"
          />
          {/* Mobile Menu Toggle */}
          <button
            className="ml-2 block md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#00629B]" />
            ) : (
              <Menu className="h-6 w-6 text-[#00629B]" />
            )}
          </button>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`bg-[#00629B] md:block ${
          isMenuOpen ? "block" : "hidden"
        } transition-all`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <nav className="flex flex-col md:flex-row md:h-14">
            {[
              "HOME TEMPLATE 1",
              "HOME TEMPLATE 2",
              "HOW TO EMBED FORMS",
              "MEDIA GALLERY",
              "CONTACT",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className="flex items-center px-4 py-2 text-[13px] font-bold text-white transition-colors hover:bg-[#0077be]"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
