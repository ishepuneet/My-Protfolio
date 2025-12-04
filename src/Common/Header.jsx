import React, { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed top-6 left-1/2 -translate-x-1/2 
                 flex items-center justify-between
                 bg-gray-500/20 backdrop-blur-md
                 text-white px-6 py-3 rounded-full
                 hover:border-b shadow-2xl hover:shadow-white/20
                 w-[90%] max-w-5xl z-50"
    >
      {/* Logo + Location */}
      <a href="/" >
        <h1 className="text-2xl font-semibold cursor-pointer">Puneet</h1>
        <span className="text-sm flex items-center gap-1">
          <SlLocationPin className="text-lg" />
          Jalandhar
        </span>
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex">
        <ul className="flex gap-3 sm:gap-6 md:gap-10">
          <li>
            <a
              href="#about"
              className="text-lg hover:bg-white/10 transition rounded-2xl px-4 py-2"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Skills"
              className="text-lg hover:bg-white/10 transition rounded-2xl px-4 py-2"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-lg hover:bg-white/10 transition rounded-2xl px-4 py-2"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="text-lg hover:bg-white/10 transition rounded-2xl px-4 py-2"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-3xl focus:outline-none"
      >
        {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
      </button>

      {/* Mobile Menu (dropdown) */}
      {isOpen && (
        <div
          className="absolute top-full mt-3 right-0 w-56
                     backdrop-blur-md rounded-2xl
                      p-4 flex flex-col items-start gap-5
                     md:hidden "
        >
          <a
            href="#about"
            className="w-full text-left text-lg border border-white/10 backdrop-blur-md bg-teal-600/80 shadow-white/20 shadow-lg px-4 py-2 rounded-xl"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#Skills"
            className="w-full text-left text-lg border border-white/10 backdrop-blur-md bg-teal-600/80 shadow-white/20 shadow-lg px-4 py-2 rounded-xl"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="w-full text-left text-lg border border-white/10 backdrop-blur-md bg-teal-600/80 shadow-white/20 shadow-lg px-4 py-2 rounded-xl"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="w-full text-left text-lg border border-white/10 backdrop-blur-md bg-teal-600/80 shadow-white/20 shadow-lg px-4 py-2 rounded-xl"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
