"use client";

import { useState, useRef, useEffect } from "react";
import Header from "./component/elements/Header";
import Sequence from "./component/elements/Sequence";
import DynamicPages from "./component/DynamicPages/DynamicPages";
import MobilePages from "./component/MobilePages/MobilePages";

type PartitionSegment = { scale: number };

const PAGE_LABELS = [
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

const PARTITIONS = [
  [0.5, 0.12, 0.1, 0.08, 0.065, 0.05, 0.035, 0.025, 0.015, 0.01],
  [0.38, 0.12, 0.12, 0.12, 0.09, 0.07, 0.04, 0.03, 0.02, 0.01],
  [0.26, 0.12, 0.12, 0.09, 0.08, 0.07, 0.07, 0.07, 0.06, 0.06],
  [0.14, 0.12, 0.12, 0.12, 0.11, 0.09, 0.08, 0.08, 0.07, 0.07],
  [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
  [0.06, 0.07, 0.09, 0.09, 0.09, 0.1, 0.12, 0.12, 0.12, 0.14],
  [0.06, 0.06, 0.07, 0.07, 0.08, 0.08, 0.08, 0.17, 0.17, 0.16],
  [0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.07, 0.07, 0.25, 0.25],
  [0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.07, 0.07, 0.25, 0.25],
];

const DEFAULT_PARTITION = new Array(10).fill({ scale: 0.2 });
const SCROLL_THRESHOLD = 1200;
const MOBILE_BREAKPOINT = 1385;

export default function Home() {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT - 1}px)`,
    );

    const updateViewportMode = (event?: MediaQueryListEvent) => {
      setIsMobileViewport(event?.matches ?? mediaQuery.matches);
    };

    updateViewportMode();
    mediaQuery.addEventListener("change", updateViewportMode);

    return () => {
      mediaQuery.removeEventListener("change", updateViewportMode);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const pageWidth = container.offsetWidth;
    const scrollPosition = pageIndex * pageWidth;
    console.log("container width:", pageWidth);
    container.scrollTo({ left: scrollPosition, behavior: "smooth" });
    console.log("Page index changed:", pageIndex);
  }, [pageIndex]);

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

      if (Math.abs(scrollDeltaY.current) < SCROLL_THRESHOLD) {
        return;
      }

      setPageIndex((prev) => {
        scrollDeltaY.current = 0; // reset after page change
        setScrollDeltaYState(0);
        if (e.deltaY > 0 && prev < PAGE_LABELS.length - 1) return prev + 1;
        if (e.deltaY < 0 && prev > 0) return prev - 1;
        return prev;
      });
    };

    const keyHandler = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
      }
    };

    el.addEventListener("wheel", handler, { passive: false });

    el.addEventListener("keydown", keyHandler);
    return () => {
      el.removeEventListener("wheel", handler);
      el.removeEventListener("keydown", keyHandler);
    };
  }, []);

  function partitioner(index: number): PartitionSegment[] {
    return (PARTITIONS[index] ?? DEFAULT_PARTITION).map((scale) => ({ scale }));
  }

  return (
    <div className="flex min-h-screen min-w-screen flex-col font-sans">
      {/* <HamburgerMenu isOpen={isOpen} /> */}
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        ref={containerRef}
        className="mx-auto flex w-full flex-1 snap-x snap-mandatory overflow-x-auto px-[3vw] pt-15 scrollbar-hide md:pt-24 md:pb-10 sm:px-[3vw]"
      >
        <Sequence
          pageIndex={pageIndex}
          scrollDeltaYState={scrollDeltaYState}
          partitioner={partitioner}
          setPageIndex={setPageIndex}
        />
        {isMobileViewport ? (
          <MobilePages pageIndex={pageIndex} setPageIndex={setPageIndex} />
        ) : (
          <DynamicPages pageIndex={pageIndex} setPageIndex={setPageIndex} />
        )}
      </div>
    </div>
  );
}
