"use client";

import { JSX, useEffect, useState } from "react";
import Image from "next/image";
import MouseScroll from "./MouseScroll/MouseScroll";
import ShakyText from "./ShakyText";
import KeypadEnter from "./Keypads/KeypadEnter";

type PartitionSegment = { scale: number };
type AccentMarker = {
  accentIndex: number;
  targetPageIndex: number;
  filledSrc: string;
  hollowSrc: string;
  width: number;
  height: number;
};

/** Pad / upright (perpendicular). */
const ROCKET_PAD_DEG = -45;
/** Tilt after “launch” before recovery (steps 0–5). */
const ROCKET_CRUISE_DEG = 45;
/** Extra translateY at apogee (step 6); negative = higher. Steps 0 and 8 use 0 (landed). */
const ROCKET_VERTICAL_PEAK_REM = -22;

/** Orbital bound arc: larger `bottom` = higher in the sequence strip; smaller = lower (“low peak”). */
const ORBITAL_BOTTOM_HIGH_REM = 30;
const ORBITAL_BOTTOM_LOW_REM = 10;
const LAST_PAGE_INDEX = 8;
const SEQUENCE_MESSAGES = [
  "We are go for launch",
  "Lift off!",
  "All systems nominal",
  "Vehicle is super sonic!",
  "We're in orbit!",
  "Prepare for re-entry",
  "Entry interface",
  "Entry burn start",
  "Touch down!",
];
const ACCENT_MARKERS: AccentMarker[] = [
  {
    accentIndex: 0,
    targetPageIndex: 0,
    filledSrc: "/Filled-MD.svg",
    hollowSrc: "/Hollow-MD.svg",
    width: 30,
    height: 30,
  },
  {
    accentIndex: 2,
    targetPageIndex: 2,
    filledSrc: "/Filled-SM.svg",
    hollowSrc: "/Hollow-SM.svg",
    width: 20,
    height: 20,
  },
  {
    accentIndex: 4,
    targetPageIndex: 4,
    filledSrc: "/Filled-MD.svg",
    hollowSrc: "/Hollow-MD.svg",
    width: 30,
    height: 30,
  },
  {
    accentIndex: 6,
    targetPageIndex: 6,
    filledSrc: "/Filled-SM.svg",
    hollowSrc: "/Hollow-SM.svg",
    width: 20,
    height: 20,
  },
  {
    accentIndex: 8,
    targetPageIndex: 8,
    filledSrc: "/Filled-MD.svg",
    hollowSrc: "/Hollow-MD.svg",
    width: 30,
    height: 30,
  },
];

function clampPageIndex(pageIndex: number): number {
  return Math.min(Math.max(pageIndex, 0), LAST_PAGE_INDEX);
}

function crescent(value: number): number {
  return (1 - Math.cos(value * Math.PI)) / 2;
}

function rocketRotationDeg(pageIndex: number): number {
  const clampedPageIndex = clampPageIndex(pageIndex);

  if (clampedPageIndex <= 5) {
    return (
      ROCKET_PAD_DEG +
      (ROCKET_CRUISE_DEG - ROCKET_PAD_DEG) * crescent(clampedPageIndex / 5)
    );
  }

  if (clampedPageIndex === 6) return -120;
  if (clampedPageIndex === 7) return -90;
  return ROCKET_PAD_DEG;
}

function rocketVerticalLiftRem(pageIndex: number): number {
  const clampedPageIndex = clampPageIndex(pageIndex);

  if (clampedPageIndex <= 6) {
    return ROCKET_VERTICAL_PEAK_REM * crescent(clampedPageIndex / 5);
  }

  const progress = (clampedPageIndex - 6) / 2;
  return ROCKET_VERTICAL_PEAK_REM * (1 - crescent(progress));
}

function orbitalBoundOpacity(pageIndex: number): number {
  const clampedPageIndex = clampPageIndex(pageIndex);
  return clampedPageIndex < 2 || clampedPageIndex >= LAST_PAGE_INDEX ? 0 : 1;
}

function orbitalBoundBottomRem(pageIndex: number): number {
  const clampedPageIndex = clampPageIndex(pageIndex);

  if (clampedPageIndex <= 2) {
    return ORBITAL_BOTTOM_HIGH_REM;
  }

  if (clampedPageIndex <= 4) {
    const progress = (clampedPageIndex - 2) / 2;
    return (
      ORBITAL_BOTTOM_HIGH_REM +
      (ORBITAL_BOTTOM_LOW_REM - ORBITAL_BOTTOM_HIGH_REM) * crescent(progress)
    );
  }

  if (clampedPageIndex < LAST_PAGE_INDEX) {
    const progress = (clampedPageIndex - 4) / 4;
    return (
      ORBITAL_BOTTOM_LOW_REM +
      (ORBITAL_BOTTOM_HIGH_REM - ORBITAL_BOTTOM_LOW_REM) * crescent(progress)
    );
  }

  return ORBITAL_BOTTOM_HIGH_REM;
}

function getLeftOffsets(partitionData: PartitionSegment[]): number[] {
  const leftOffsets: number[] = [];
  let accumulatedOffset = 0;

  for (let index = 0; index < partitionData.length; index += 1) {
    if (index === partitionData.length - 1) {
      leftOffsets.push(100 - partitionData[index].scale * 100);
      break;
    }

    leftOffsets.push(accumulatedOffset);
    accumulatedOffset += partitionData[index].scale * 100;
  }

  return leftOffsets;
}

function renderSequenceMessage(
  pageIndex: number,
  setPageIndex: React.Dispatch<React.SetStateAction<number>>,
): JSX.Element {
  const message = SEQUENCE_MESSAGES[pageIndex];

  if (pageIndex === 1) {
    return (
      <p className="text-amber-500 font-bold text-xl font-inconsolata text-center">
        <ShakyText content={message} />
      </p>
    );
  }

  if (pageIndex === 3) {
    const [firstWord, secondWord, ...highlightedWords] = message.split(" ");

    return (
      <p className="text-white text-xl font-inconsolata text-center">
        {firstWord} {secondWord}{" "}
        <span className="text-sky-500 font-bold">
          <ShakyText content={highlightedWords.join(" ")} />
        </span>
      </p>
    );
  }

  if (pageIndex === 5) {
    const [firstWord, secondWord, highlightedWord] = message.split(" ");

    return (
      <p className="text-white text-xl font-inconsolata text-center">
        {firstWord} {secondWord}{" "}
        <span className="text-red-600 font-bold">
          <ShakyText content={highlightedWord} />
        </span>
      </p>
    );
  }

  if (pageIndex === LAST_PAGE_INDEX) {
    return (
      <div className="flex flex-col justify-center items-center gap-4 ">
        <p className="text-white font-bold text-xl font-inconsolata text-center">
          {message}
        </p>
        <div className="flex flex-row gap-2 items-center font-inconsolata">
          <button
            className="flex flex-row items-center justify-center gap-1 pointer-events-auto hover:cursor-pointer border-2 border-solid border-white/70 rounded px-2 h-8.25 text-white hover:border-white transition duration-300 group opacity-0 animate-fadeInUp"
            onClick={() => setPageIndex(0)}
            style={{ animationDelay: "1s" }}
          >
            <p className="text-sm">Replay</p>
            <Image
              src="/replay.svg"
              alt="replay"
              width={10}
              height={10}
              className="inline-block opacity-70 group-hover:opacity-100 transition duration-300"
            />
          </button>
          <div
            onClick={() => setPageIndex(0)}
            className="pointer-events-auto hover:pointer-cursor w-9 h-8.25 hover:cursor-pointer flex flex-col items-center justify-center text-white/60 border border-solid rounded border-white/60 transition duration-300 group opacity-0 animate-fadeInUp"
            style={{ animationDelay: "1s" }}
          >
            <p className="text-xs/tight">R</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <p className="text-white text-xl font-inconsolata text-center">{message}</p>
  );
}

function SequenceRocket({ pageIndex }: { pageIndex: number }) {
  const deg = rocketRotationDeg(pageIndex);
  const liftRem = rocketVerticalLiftRem(pageIndex);
  const translateYRem = 0.5 + liftRem;
  const transform = `translate(-50%, ${translateYRem}rem) rotate(${deg}deg)`;

  return (
    <Image
      src="/rocketSVG.svg"
      alt="rocket"
      width={130}
      height={130}
      className="w-24 h-24 absolute bottom-10 left-1/2"
      style={{
        transform,
        transformOrigin: "center center",
        marginLeft: pageIndex === 8 ? "25%" : "0%",
        transition:
          "transform 700ms ease-in-out, margin-left 700ms ease-in-out",
      }}
    />
  );
}

function SequenceOrbitalBound({ pageIndex }: { pageIndex: number }) {
  return (
    <Image
      src="/orbitalBoundSVG.svg"
      alt=""
      width={1799}
      height={39}
      className="pointer-events-none absolute left-0 w-full z-1"
      style={{
        bottom: `${orbitalBoundBottomRem(pageIndex)}rem`,
        opacity: orbitalBoundOpacity(pageIndex),
        transition: "opacity 700ms ease-in-out, bottom 700ms ease-in-out",
      }}
    />
  );
}

function SequenceMessage({
  pageIndex,
  setPageIndex,
}: {
  pageIndex: number;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const liftRem = rocketVerticalLiftRem(pageIndex);
  const translateYRem = 0.5 + liftRem;
  const transform = `translate(-50%, ${translateYRem}rem)`;

  return (
    <div
      className="w-32 h-28 absolute left-[42%] bottom-3 z-2"
      style={{
        transform,
        marginLeft: pageIndex === LAST_PAGE_INDEX ? "25%" : "0%",
        transition:
          "transform 700ms ease-in-out, margin-left 700ms ease-in-out",
      }}
    >
      {renderSequenceMessage(pageIndex, setPageIndex)}
    </div>
  );
}

export default function Sequence({
  pageIndex,
  scrollDeltaYState,
  partitioner,
  setPageIndex,
}: {
  pageIndex: number;
  scrollDeltaYState: number;
  partitioner: (index: number) => PartitionSegment[];
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [leftArrowActive, setLeftArrowActive] = useState(false);
  const [rightArrowActive, setRightArrowActive] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setLeftArrowActive(true);
        setPageIndex((prev) => clampPageIndex(prev - 1));
      }

      if (e.key === "ArrowRight") {
        setRightArrowActive(true);
        setPageIndex((prev) => clampPageIndex(prev + 1));
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setLeftArrowActive(false);
      }

      if (e.key === "ArrowRight") {
        setRightArrowActive(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [setPageIndex]);

  const partitionData = partitioner(pageIndex);
  const leftOffsets = getLeftOffsets(partitionData);

  const handleLeftArrowClick = () => {
    setLeftArrowActive(true);
    setPageIndex((prev) => clampPageIndex(prev - 1));
    setTimeout(() => setLeftArrowActive(false), 100);
  };

  const handleRightArrowClick = () => {
    setRightArrowActive(true);
    setPageIndex((prev) => clampPageIndex(prev + 1));
    setTimeout(() => setRightArrowActive(false), 100);
  };

  return (
    <div className="fixed bottom-[14.4vh] left-[50%] w-[94vw] bg-white z-8 transform -translate-x-1/2 pointer-events-none">
      <div className="border-3 border-solid border-white" />
      <Image
        src="/trackerSVG.svg"
        alt="scroll tracker"
        width={42}
        height={42}
        className={`absolute top-1/2 left-1/2 transform ${pageIndex === LAST_PAGE_INDEX ? "ml-[25%]" : ""} -translate-x-1/2 -translate-y-1/2 z-10 transition-[margin] ease-in-out duration-700`}
      />
      <div className="mt-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-9 w-full">
        <div className="flex items-center justify-between w-full h-8.25">
          <button
            onClick={handleLeftArrowClick}
            className={`pointer-events-auto pl-4 transition-opacity duration-500 hover:cursor-pointer ${leftArrowActive ? "opacity-100" : "opacity-70"}`}
          >
            <Image
              src={"./arrow-left-keypad.svg"}
              alt="arrow left keypad"
              width={28}
              height={28}
            />
          </button>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <MouseScroll scrollDeltaYState={scrollDeltaYState} />
          </div>
          <button
            onClick={handleRightArrowClick}
            className={`pointer-events-auto flex flex-row gap-2 pr-4 transition-opacity duration-500 hover:cursor-pointer ${rightArrowActive ? "opacity-100" : "opacity-70"}`}
          >
            {pageIndex === 1 ||
            pageIndex === 2 ||
            pageIndex === 3 ||
            pageIndex === 4 ||
            pageIndex === 5 ||
            pageIndex === 6 ||
            pageIndex === 7 ? (
              <div
                style={{ animationDelay: "0.5s" }}
                className="animate-fadeInUp duration-300 group opacity-0"
              >
                <KeypadEnter setPageIndex={setPageIndex} />
              </div>
            ) : null}
            <Image
              src={"./arrow-right-keypad.svg"}
              alt="arrow right keypad"
              width={28}
              height={28}
            />
          </button>
        </div>
      </div>
      <div className="absolute top-1/2 w-full transform -translate-y-full">
        <SequenceRocket pageIndex={pageIndex} />
        <SequenceOrbitalBound pageIndex={pageIndex} />
        <SequenceMessage pageIndex={pageIndex} setPageIndex={setPageIndex} />
        {partitionData.map((segment, index) => (
          <div
            key={`bar-${index}`}
            className="absolute bottom-0 h-[70vh] transition-[left,transform] duration-700 linear will-change-transform"
            style={{
              width: "100%",
              left: `${leftOffsets[index]}%`,
              transform: `scaleX(${segment.scale})`,
              transformOrigin: "left",
              overflow: "hidden",
              background: "transparent",
              zIndex: 1,
            }}
          />
        ))}
        {partitionData.slice(0, -1).map((_, index) => (
          <div key={`border-${index}`}>
            <div
              className="absolute bottom-0 h-[70vh] transition-[left] duration-700 linear border-white border-r border-dashed pointer-events-none"
              style={{
                left: `${leftOffsets[index + 1]}%`,
                width: 0,
                zIndex: 2,
              }}
            />
            <div
              className="absolute bottom-0 h-8 transition-[left] duration-700 linear border-white border-r border-solid pointer-events-none translate-y-4"
              style={{
                left: `${leftOffsets[index + 1]}%`,
                width: 0,
                zIndex: 2,
              }}
            />
          </div>
        ))}
        {ACCENT_MARKERS.map((marker) => (
          <button
            key={`accent-${marker.accentIndex}`}
            className="pointer-events-auto block z-2 absolute transition-[left] duration-700 linear hover:cursor-pointer transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${leftOffsets[marker.accentIndex + 1]}%`,
            }}
            onClick={() => setPageIndex(marker.targetPageIndex)}
          >
            <Image
              src={
                pageIndex > marker.targetPageIndex
                  ? marker.filledSrc
                  : marker.hollowSrc
              }
              alt="scroll tracker"
              width={marker.width}
              height={marker.height}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
