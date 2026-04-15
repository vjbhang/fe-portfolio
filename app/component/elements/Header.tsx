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
    <header className="h-21.75 w-full bg-transparent z-9 font-inconsolata">
      <div className="w-full md:py-6 flex md:items-center items-start md:gap-32 justify-between">
        <p className="text-sm font-bold text-white font-jeju-hallasan md:p-0 pt-1">
          VINCENT JIWON BONG
        </p>
        <div className="flex md:flex-row flex-col md:gap-8 gap-1 md:items-center items-end">
          <Clock />
          <p className="md:text-sm text-xs font-bold text-white">
            (Los Angeles)
          </p>
        </div>
        <div className="ml-auto md:flex hidden items-center gap-8">
          <Timer />
          {/* <HamburgerIcon isOpen={isOpen} setIsOpen={setIsOpen} /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
