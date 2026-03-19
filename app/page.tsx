"use client";

import { useState, useRef, useEffect } from "react";
import Header from "./component/elements/Header";
import Landing from "./component/page/landing";
import Work from "./component/page/work";
import About from "./component/page/about";
import { ButtonGroup } from "./component/elements/ButtonGroup";
import AnimatedBG from "./component/elements/AnimatedBG/AnimatedBG";
import HamburgerMenu from "./component/elements/HamburgerMenu/HamburgerMenu";

export default function Home() {
  const buttonGroupOptions = ["landing", "work", "about"];
  const [selectedButton, setSelectedButton] = useState<string>(
    buttonGroupOptions[0],
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const index = buttonGroupOptions.indexOf(selectedButton);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const child = containerRef.current.children[index] as HTMLElement;
    child?.scrollIntoView({ behavior: "smooth", inline: "start" });
  }, [index]);

  const SCROLL_THRESHOLD = 500; // 5 scroll triggers (with my mouse..)
  const scrollDeltaY = useRef(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      scrollDeltaY.current += e.deltaY;

      console.log("scrollDeltaY:", scrollDeltaY.current);

      if (Math.abs(scrollDeltaY.current) < SCROLL_THRESHOLD) {
        console.log("threshold not reached, ignoring scroll event");
        return;
      }

      setSelectedButton((prev) => {
        const i = buttonGroupOptions.indexOf(prev);
        scrollDeltaY.current = 0; // reset after page change
        if (e.deltaY > 0 && i < buttonGroupOptions.length - 1)
          return buttonGroupOptions[i + 1];
        if (e.deltaY < 0 && i > 0) return buttonGroupOptions[i - 1];
        return prev;
      });
    };

    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, [buttonGroupOptions]);

  return (
    <div className="flex flex-col min-w-screen min-h-screen  font-sans bg-black mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      <div className="absolute top-0 left-0 w-full h-full z-5">
        <AnimatedBG />
      </div>
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        ref={containerRef}
        className="flex flex-1 w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide z-8"
      >
        <div className="flex-shrink-0 min-w-full w-full snap-start">
          <Landing />
        </div>
        <div className="flex-shrink-0 min-w-full w-full snap-start">
          <Work />
        </div>
        <div className="flex-shrink-0 min-w-full w-full snap-start">
          <About />
        </div>
      </div>
      <div className="z-8">
        <ButtonGroup
          options={buttonGroupOptions}
          selected={selectedButton}
          onSelect={setSelectedButton}
        />
      </div>
    </div>
  );
}
