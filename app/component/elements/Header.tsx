import React from "react";
import Clock from "./Clock";
import Timer from "./Timer";
import HamburgerIcon from "./HamburgerMenu/HamburgerIcon";

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = ({ isOpen, setIsOpen }) => {
  return (
    <header className="h-[87px] w-full bg-transparent z-9 font-inconsolata">
      <div className="w-full py-6 flex items-center gap-32">
        <p className="text-sm font-bold text-white font-jeju-hallasan">VINCENT JIWON BONG</p>
        <div className="flex gap-8">
          <Clock />
          <p className="text-sm font-bold text-white">(Los Angeles)</p>
        </div>
        <div className="ml-auto flex gap-8">
          <Timer />
          <HamburgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
