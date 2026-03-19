"use client";

interface HamburgerIconProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HamburgerIcon({
  isOpen,
  setIsOpen,
}: HamburgerIconProps) {
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
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
    </div>
  );
}
