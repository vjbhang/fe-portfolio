"use client";

import { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex flex-col gap-1.5 p-2 hover:bg-gray-100 rounded-lg transition"
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-gray-800 transition-all ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-gray-800 transition-all ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-gray-800 transition-all ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* {isOpen && (
                <nav className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-48">
                    <ul className="space-y-2">
                        <li><a href="#" className="block hover:text-blue-600">Home</a></li>
                        <li><a href="#" className="block hover:text-blue-600">About</a></li>
                        <li><a href="#" className="block hover:text-blue-600">Projects</a></li>
                        <li><a href="#" className="block hover:text-blue-600">Contact</a></li>
                    </ul>
                </nav>
            )} */}
    </div>
  );
}
