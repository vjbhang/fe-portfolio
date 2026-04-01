"use client";

import { useState, useRef, useEffect } from "react";
import Header from "./component/elements/Header";
import Landing from "./component/page/landing";
import Work from "./component/page/work";
import About from "./component/page/about";
import { ButtonGroup } from "./component/elements/ButtonGroup";
import AnimatedBG from "./component/elements/AnimatedBG/AnimatedBG";
import HamburgerMenu from "./component/elements/HamburgerMenu/HamburgerMenu";
import Sequence from "./component/elements/Sequence";

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

  const [pageIndex, setPageIndex] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const child = containerRef.current.children[pageIndex] as HTMLElement;
    child?.scrollIntoView({ behavior: "smooth", inline: "start" });
    console.log("index:", pageIndex);
  }, [pageIndex]);

  const SCROLL_THRESHOLD = 1200; // 5 scroll triggers (with my mouse..)
  const [scrollDeltaYState, setScrollDeltaYState] = useState(0);
  const scrollDeltaY = useRef(0);
  const scrollResetTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      scrollDeltaY.current += e.deltaY;
      setScrollDeltaYState(scrollDeltaY.current);

      // Reset scrollDeltaY after 300ms of inactivity
      if (scrollResetTimeout.current) clearTimeout(scrollResetTimeout.current);
      scrollResetTimeout.current = setTimeout(() => {
        scrollDeltaY.current = 0;
        setScrollDeltaYState(0);
      }, 900);

      console.log("scrollDeltaY:", scrollDeltaY.current);

      if (Math.abs(scrollDeltaY.current) < SCROLL_THRESHOLD) {
        console.log("threshold not reached, ignoring scroll event");
        return;
      }

      setPageIndex((prev) => {
        const i = prev;
        scrollDeltaY.current = 0; // reset after page change
        setScrollDeltaYState(0);
        if (e.deltaY > 0 && i < buttonGroupOptions.length - 1) return i + 1;
        if (e.deltaY < 0 && i > 0) return i - 1;
        return prev;
      });
    };

    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, [buttonGroupOptions]);

  // Partitioner now returns scaleX values (0-1) for each bar
  function partitioner(index: number): { [key: string]: number }[] {
    // Example scale arrays for each index, matching the original width proportions
    const scales = [
      [
        { scale: 0.5 },
        { scale: 0.12 },
        { scale: 0.1 },
        { scale: 0.08 },
        { scale: 0.065 },
        { scale: 0.05 },
        { scale: 0.035 },
        { scale: 0.025 },
        { scale: 0.015 },
        { scale: 0.01 },
      ], // index 0
      [
        { scale: 0.38 },
        { scale: 0.12 },
        { scale: 0.12 },
        { scale: 0.12 },
        { scale: 0.09 },
        { scale: 0.07 },
        { scale: 0.04 },
        { scale: 0.03 },
        { scale: 0.02 },
        { scale: 0.01 },
      ], // index 1
      [
        { scale: 0.26 },
        { scale: 0.12 },
        { scale: 0.12 },
        { scale: 0.09 },
        { scale: 0.08 },
        { scale: 0.07 },
        { scale: 0.07 },
        { scale: 0.07 },
        { scale: 0.06 },
        { scale: 0.06 },
      ], // index 2
      [
        { scale: 0.14 },
        { scale: 0.12 },
        { scale: 0.12 },
        { scale: 0.12 },
        { scale: 0.11 },
        { scale: 0.09 },
        { scale: 0.08 },
        { scale: 0.08 },
        { scale: 0.07 },
        { scale: 0.07 },
      ], // index 3
      [
        { scale: 0.1 },
        { scale: 0.1 },
        { scale: 0.1 },
        { scale: 0.1 },
        { scale: 0.1 },
        { scale: 0.1 },
        { scale: 0.1 },
        { scale: 0.1 },
        { scale: 0.1 },
        { scale: 0.1 },
      ], // index 4
      [
        { scale: 0.06 },
        { scale: 0.07 },
        { scale: 0.09 },
        { scale: 0.09 },
        { scale: 0.09 },
        { scale: 0.1 },
        { scale: 0.12 },
        { scale: 0.12 },
        { scale: 0.12 },
        { scale: 0.14 },
      ], // index 5
      [
        { scale: 0.06 },
        { scale: 0.06 },
        { scale: 0.07 },
        { scale: 0.07 },
        { scale: 0.08 },
        { scale: 0.08 },
        { scale: 0.08 },
        { scale: 0.17 },
        { scale: 0.17 },
        { scale: 0.16 },
      ], // index 6
      [
        { scale: 0.06 },
        { scale: 0.06 },
        { scale: 0.06 },
        { scale: 0.06 },
        { scale: 0.06 },
        { scale: 0.06 },
        { scale: 0.07 },
        { scale: 0.07 },
        { scale: 0.25 },
        { scale: 0.25 },
      ], // index 7
      [
        { scale: 0.06 },
        { scale: 0.06 },
        { scale: 0.06 },
        { scale: 0.06 },
        { scale: 0.06 },
        { scale: 0.06 },
        { scale: 0.07 },
        { scale: 0.07 },
        { scale: 0.25 },
        { scale: 0.25 },
      ], // index 8
    ];
    return (
      scales[index] || [
        { scale: 0.2 },
        { scale: 0.2 },
        { scale: 0.2 },
        { scale: 0.2 },
        { scale: 0.2 },
        { scale: 0.2 },
        { scale: 0.2 },
        { scale: 0.2 },
        { scale: 0.2 },
        { scale: 0.2 },
      ]
    );
  }

  const pages = [
    <Landing />,
    <div />,
    <div />,
    <div />,
    <div />,
    <div />,
    <div />,
    <div />,
    <About setPageIndex={setPageIndex} />,
  ];

  const snapPages = pages.map((page, i) => (
    <div
      key={`page-${i}`}
      className="shrink-0 min-w-full w-full snap-start z-9 mb-28"
    >
      {page}
    </div>
  ));

  return (
    <div className="flex flex-col min-w-screen min-h-screen  font-sans bg-white mx-auto px-[3vw] sm:px-[3vw] lg:px-[3vw] py-4 sm:py-6 lg:py-8">
      <div className="absolute top-0 left-0 w-full h-full z-7">
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
      <div className="absolute top-0 left-0 w-full h-full z-6 bg-black/65 backdrop-blur-sm" />
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        ref={containerRef}
        className="flex flex-1 w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide z-7"
      >
        {snapPages}

        <Sequence
          pageIndex={pageIndex}
          scrollDeltaYState={scrollDeltaYState}
          partitioner={partitioner}
          setPageIndex={setPageIndex}
        />
      </div>
    </div>
  );
}
