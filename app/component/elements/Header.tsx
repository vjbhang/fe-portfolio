import React from "react";
import Clock from "./Clock";
import Timer from "./Timer";
import HamburgerMenu from "./Hamburger Menu";

export const Header: React.FC = () => {
  return (
    <header className="h-[87px] w-full bg-transparent z-10">
      <div className="w-full py-6 flex items-center gap-32">
        <p className="text-sm font-bold text-white">VINCENT JIWON BONG</p>
        <div className="flex gap-8">
          <Clock />
          <p className="text-sm font-bold text-white">(Los Angeles)</p>
        </div>
        <div className="ml-auto flex gap-8">
          <Timer />
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
