"use client";

import { useState } from "react";
import Header from "./component/Header";
import Landing from "./component/page/landing";
import Work from "./component/page/work";
import About from "./component/page/about";
import { ButtonGroup } from "./component/ButtonGroup";

export default function Home() {
  const buttonGroupOptions = ["landing", "work", "about"];
  const [selectedButton, setSelectedButton] = useState<string>(
    buttonGroupOptions[0],
  );

  function PageSelector(selectedButton: string) {
    switch (selectedButton) {
      case "landing":
        return <Landing />;
      case "work":
        return <Work />;
      case "about":
        return <About />;
      default:
        return <Landing />;
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      <Header />
      {/* {PageSelector(selectedButton)} */}
      <div className="flex flex-1 w-full">
        <Landing />
        <Work />
        <About />
      </div>
      <ButtonGroup
        options={buttonGroupOptions}
        selected={selectedButton}
        onSelect={setSelectedButton}
      />
    </div>
  );
}
