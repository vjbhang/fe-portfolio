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
            className={`absolute top-1/2 left-1/2 transform ${index === 8 ? "ml-[25%]" : ""} -translate-x-1/2 -translate-y-1/2 z-10 transition-[margin] ease-in-out duration-700`}
          />
          <div className="absolute top-1/2 w-full transform -translate-y-full">
            {(() => {
              const partitionData = partitioner(index);
              let leftOffsets: number[] = [];
              let acc = 0;
              for (let i = 0; i < partitionData.length; i++) {
                if (i === partitionData.length - 1) {
                  leftOffsets.push(100 - partitionData[i].scale * 100);
                  break;
                }
                leftOffsets.push(acc);
                acc += partitionData[i].scale * 100;
              }
              // Animated bars (no border)
              const bars = partitionData.map((style, i) => (
                <div
                  key={i}
                  className="absolute bottom-0 h-[70vh] transition-[left,transform] duration-700 linear will-change-transform "
                  style={{
                    width: "100%",
                    left: `${leftOffsets[i]}%`,
                    transform: `scaleX(${style.scale})`,
                    transformOrigin: "left",
                    overflow: "hidden",
                    background: "transparent",
                    zIndex: 1,
                  }}
                />
              ));

              // Overlay borders (not scaled, always crisp)
              const sequenceMarker = partitionData.slice(0, -1).map((_, i) => (
                <div
                  key={`border-${i}`}
                  className="absolute bottom-0 h-[70vh] transition-[left] duration-700 linear border-r-1 border-dashed pointer-events-none"
                  style={{
                    left: `${leftOffsets[i + 1]}%`,
                    width: 0,
                    zIndex: 2,
                  }}
                />
              ));

              const accent = partitionData.slice(0, -1).map((_, i) =>
                i == 0 ? (
                  <img
                    src={index > 0 ? `Filled-MD.svg` : `/Hollow-MD.svg`}
                    alt="scroll tracker"
                    className="absolute bottom-0 transition-[left] duration-700 linear pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${leftOffsets[i + 1]}%`,
                      zIndex: 2,
                    }}
                  />
                ) : i == 2 ? (
                  <img
                    src={index > 2 ? `Filled-SM.svg` : `/Hollow-SM.svg`}
                    alt="scroll tracker"
                    className="absolute bottom-0 transition-[left] duration-700 linear pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${leftOffsets[i + 1]}%`,
                      zIndex: 2,
                    }}
                  />
                ) : i == 4 ? (
                  <img
                    src={index > 4 ? `Filled-MD.svg` : `/Hollow-MD.svg`}
                    alt="scroll tracker"
                    className="absolute bottom-0 transition-[left] duration-700 linear pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${leftOffsets[i + 1]}%`,
                      zIndex: 2,
                    }}
                  />
                ) : i == 6 ? (
                  <img
                    src={index > 6 ? `Filled-SM.svg` : `/Hollow-SM.svg`}
                    alt="scroll tracker"
                    className="absolute bottom-0 transition-[left] duration-700 linear pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${leftOffsets[i + 1]}%`,
                      zIndex: 2,
                    }}
                  />
                ) : i == 8 ? (
                  <img
                    src={index > 8 ? `Filled-MD.svg` : `/Hollow-MD.svg`}
                    alt="scroll tracker"
                    className="absolute bottom-0 transition-[left] duration-700 linear pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${leftOffsets[i + 1]}%`,
                      zIndex: 2,
                    }}
                  />
                ) : null,
              );

              const filledAccent = partitionData.slice(0, -1).map((_, i) =>
                (i == 2 && index > 2) || (i == 6 && index > 6) ? (
                  <img
                    src="/Filled-SM.svg"
                    alt="scroll tracker"
                    className="absolute bottom-0 transition-[left] duration-700 linear pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${leftOffsets[i + 1]}%`,
                      zIndex: 2,
                    }}
                  />
                ) : (i == 0 && index > 0) ||
                  (i == 4 && index > 4) ||
                  (i == 8 && index > 8) ? (
                  <img
                    src="/Filled-MD.svg"
                    alt="scroll tracker"
                    className="absolute bottom-0 transition-[left] duration-700 linear pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${leftOffsets[i + 1]}%`,
                      zIndex: 2,
                    }}
                  />
                ) : null,
              );

              return (
                <>
                  {bars}
                  {sequenceMarker}
                  {accent}
                </>
              );
            })()}
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
