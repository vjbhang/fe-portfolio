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
  const buttonGroupOptions = [
    "Launch",
    "Systems nominal",
    "Good telemetry",
    "Vehicle is super sonic!",
    "We're in orbit",
    "Prepare for re-entry",
    "Entry interface",
    "Entry burn start",
    "Touchdown!",
  ];
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
    console.log("index:", index);
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

  function partitioner(index: number): { [key: string]: string }[] {
    if (index === 0) {
      return [
        { width: "50%" },
        { width: "12%" },
        { width: "10%" },
        { width: "8%" },
        { width: "6.5%" },
        { width: "5%" },
        { width: "3.5%" },
        { width: "2.5%" },
        { width: "1.5%" },
        { width: "1%" },
      ];
    } else if (index === 1) {
      return [
        { width: "38%" },
        { width: "12%" },
        { width: "12%" },
        { width: "12%" },
        { width: "9%" },
        { width: "7%" },
        { width: "4%" },
        { width: "3%" },
        { width: "2%" },
        { width: "1%" },
      ];
    } else if (index === 2) {
      return [
        { width: "26%" },
        { width: "12%" },
        { width: "12%" },
        { width: "9%" },
        { width: "8%" },
        { width: "7%" },
        { width: "7%" },
        { width: "7%" },
        { width: "6%" },
        { width: "6%" },
      ];
    } else if (index === 3) {
      return [
        { width: "14%" },
        { width: "12%" },
        { width: "12%" },
        { width: "12%" },
        { width: "11%" },
        { width: "9%" },
        { width: "8%" },
        { width: "8%" },
        { width: "7%" },
        { width: "7%" },
      ];
    } else if (index === 4) {
      return [
        { width: "10%" },
        { width: "10%" },
        { width: "10%" },
        { width: "10%" },
        { width: "10%" },
        { width: "10%" },
        { width: "10%" },
        { width: "10%" },
        { width: "10%" },
        { width: "10%" },
      ];
    } else if (index === 5) {
      return [
        { width: "6%" },
        { width: "7%" },
        { width: "9%" },
        { width: "9%" },
        { width: "9%" },
        { width: "10%" },
        { width: "12%" },
        { width: "12%" },
        { width: "12%" },
        { width: "14%" },
      ];
    } else if (index === 6) {
      return [
        { width: "6%" },
        { width: "6%" },
        { width: "7%" },
        { width: "7%" },
        { width: "8%" },
        { width: "8%" },
        { width: "8%" },
        { width: "17%" },
        { width: "17%" },
        { width: "16%" },
      ];
    } else if (index === 7) {
      return [
        { width: "6%" },
        { width: "6%" },
        { width: "6%" },
        { width: "6%" },
        { width: "6%" },
        { width: "6%" },
        { width: "7%" },
        { width: "7%" },
        { width: "25%" },
        { width: "25%" },
      ];
    } else if (index === 8) {
      return [
        { width: "6%", transform: "scaleY(0)" },
        { width: "6%", transform: "scaleY(0)" },
        { width: "6%", transform: "scaleY(0)" },
        { width: "6%", transform: "scaleY(0)" },
        { width: "6%", transform: "scaleY(0)" },
        { width: "6%", transform: "scaleY(0)" },
        { width: "7%", transform: "scaleY(0)" },
        { width: "7%", transform: "scaleY(0)" },
        { width: "25%" },
        { width: "25%" },
      ];
    } else {
      return [
        { width: "10%" },
        { width: "10%" },
        { width: "10%" },
        { width: "10%" },
        { width: "10%" },
        { width: "10%" },
        { width: "10%" },
        { width: "10%" },
        { width: "10%" },
        { width: "10%" },
      ];
    }
  }

  return (
    <div className="flex flex-col min-w-screen min-h-screen  font-sans bg-white mx-auto px-[3vw] sm:px-[3vw] lg:px-[3vw] py-4 sm:py-6 lg:py-8">
      <div className="absolute top-0 left-0 w-full h-full z-6">
        <AnimatedBG />
      </div>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-5"
      >
        <source src={"/bgvid.webm"} type="video/webm" />
        <source src={"/bgvid.mp4"} type="video/mp4" />
      </video>
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        ref={containerRef}
        className="flex flex-1 w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide z-8"
      >
        <div className="shrink-0 min-w-full w-full snap-start">
          <Landing />
        </div>
        <div className="shrink-0 min-w-full w-full snap-start">
          <div></div>
        </div>
        <div className="shrink-0 min-w-full w-full snap-start">
          <div></div>
        </div>
        <div className="shrink-0 min-w-full w-full snap-start">
          <div></div>
        </div>
        <div className="shrink-0 min-w-full w-full snap-start">
          <div></div>
        </div>
        <div className="shrink-0 min-w-full w-full snap-start">
          <div></div>
        </div>
        <div className="shrink-0 min-w-full w-full snap-start">
          <div></div>
        </div>
        <div className="shrink-0 min-w-full w-full snap-start">
          <div></div>
        </div>
        <div className="shrink-0 min-w-full w-full snap-start">
          <About />
        </div>
        <div className="fixed bottom-[15vh] left-[50%] w-[94vw] bg-white z-9 transform -translate-x-1/2">
          <div className="border-3 border-solid border-white" />
          <img
            src="/trackerSVG.svg"
            alt="scroll tracker"
            className={`w-12 h-12 absolute top-1/2 left-1/2 transform ${index === 8 ? "ml-[25%]" : ""} -translate-x-1/2 -translate-y-1/2 z-10 transition-[margin] ease-in-out duration-1000`}
          />
          <div className="flex items-center justify-center absolute top-1/2 w-full transform -translate-y-full">
            {partitioner(index).map((style, i) => (
              <div
                key={i}
                className={`h-[70vh] ${i === partitioner(index).length - 1 ? "border-r-transparent" : "border-r-2 border-dashed transition-all transform-[scaleY(1)] origin-bottom ease-in-out duration-1000"}`}
                style={style}
              ></div>
            ))}
            {/* <div className="min-w-[50%] h-24 border-r-2 border-solid"></div>
            <div className="min-w-[12%] h-24 border-r-2 border-solid"></div>
            <div className="min-w-[10%] h-24 border-r-2 border-solid"></div>
            <div className="min-w-[8%] h-24 border-r-2 border-solid"></div>
            <div className="min-w-[6.5%] h-24 border-r-2 border-solid"></div>
            <div className="min-w-[5%] h-24 border-r-2 border-solid"></div>
            <div className="min-w-[3.5%] h-24 border-r-2 border-solid"></div>
            <div className="min-w-[2.5%] h-24 border-r-2 border-solid"></div>
            <div className="min-w-[1.5%] h-24 border-r-2 border-solid"></div>
            <div className="min-w-[1%] h-24 border-r-2 border-transparent"></div> */}
          </div>
        </div>
      </div>

      <div className="w-full z-9">
        <p>Filler</p>
      </div>
      {/* <div className="z-8">
        <ButtonGroup
          options={buttonGroupOptions}
          selected={selectedButton}
          onSelect={setSelectedButton}
        />
      </div> */}
    </div>
  );
}
