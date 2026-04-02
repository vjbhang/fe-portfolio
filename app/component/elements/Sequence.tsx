import MouseScroll from "./MouseScroll/MouseScroll";

/** Pad / upright (perpendicular). */
const ROCKET_PAD_DEG = -45;
/** Tilt after “launch” before recovery (steps 0–5). */
const ROCKET_CRUISE_DEG = 45;
/** Extra translateY at apogee (step 6); negative = higher. Steps 0 and 8 use 0 (landed). */
const ROCKET_VERTICAL_PEAK_REM = -22;

/** Orbital bound arc: larger `bottom` = higher in the sequence strip; smaller = lower (“low peak”). */
const ORBITAL_BOTTOM_HIGH_REM = 30;
const ORBITAL_BOTTOM_LOW_REM = 10;
/** Module-level component so React keeps the same DOM node across `pageIndex` updates (CSS transitions work). */

function SequenceRocket({ pageIndex }: { pageIndex: number }) {
  const deg = rocketRotationDeg(pageIndex) ?? ROCKET_PAD_DEG;
  const liftRem = rocketVerticalLiftRem(pageIndex);
  const translateYRem = 0.5 + liftRem;
  const transform = `translate(-50%, ${translateYRem}rem) rotate(${deg}deg)`;
  function rocketRotationDeg(pageIndex: number): number | undefined {
    const i = Math.min(Math.max(pageIndex, 0), 8);

    if (i <= 5) {
      const t = i / 5;
      const eased = (1 - Math.cos(t * Math.PI)) / 2;
      return ROCKET_PAD_DEG + (ROCKET_CRUISE_DEG - ROCKET_PAD_DEG) * eased;
    }

    if (i === 6) {
      return -120;
    }

    if (i === 7) {
      return -90;
    }

    if (i === 8) {
      return -45;
    }

    return undefined;
  }

  function rocketVerticalLiftRem(pageIndex: number): number {
    const i = Math.min(Math.max(pageIndex, 0), 8);
    const crescent = (u: number) => (1 - Math.cos(u * Math.PI)) / 2;

    if (i <= 6) {
      return ROCKET_VERTICAL_PEAK_REM * crescent(i / 5);
    }
    const u = (i - 6) / 2;
    return ROCKET_VERTICAL_PEAK_REM * (1 - crescent(u));
  }

  return (
    <img
      src="/rocketSVG.svg"
      alt="rocket"
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
  function orbitalBoundOpacity(pageIndex: number): number {
    const i = Math.min(Math.max(pageIndex, 0), 8);
    if (i < 2 || i >= 8) return 0;
    return 1;
  }

  function orbitalBoundBottomRem(pageIndex: number): number {
    const i = Math.min(Math.max(pageIndex, 0), 8);
    const crescent = (u: number) => (1 - Math.cos(u * Math.PI)) / 2;

    if (i <= 2) {
      return ORBITAL_BOTTOM_HIGH_REM;
    }
    if (i <= 4) {
      const t = (i - 2) / 2;
      return (
        ORBITAL_BOTTOM_HIGH_REM +
        (ORBITAL_BOTTOM_LOW_REM - ORBITAL_BOTTOM_HIGH_REM) * crescent(t)
      );
    }
    if (i < 8) {
      const t = (i - 4) / 4;
      return (
        ORBITAL_BOTTOM_LOW_REM +
        (ORBITAL_BOTTOM_HIGH_REM - ORBITAL_BOTTOM_LOW_REM) * crescent(t)
      );
    }
    return ORBITAL_BOTTOM_HIGH_REM;
  }

  return (
    <img
      src="/orbitalBoundSVG.svg"
      alt=""
      className="pointer-events-none absolute left-0 w-full z-1"
      style={{
        bottom: `${orbitalBoundBottomRem(pageIndex)}rem`,
        opacity: orbitalBoundOpacity(pageIndex),
        transition: "opacity 700ms ease-in-out, bottom 700ms ease-in-out",
      }}
    />
  );
}

function SequenceMessage({ pageIndex }: { pageIndex: number }) {
  const liftRem = rocketVerticalLiftRem(pageIndex);
  const translateYRem = 0.5 + liftRem;
  const transform = `translate(-50%, ${translateYRem}rem)`;

  function rocketVerticalLiftRem(pageIndex: number): number {
    const i = Math.min(Math.max(pageIndex, 0), 8);
    const crescent = (u: number) => (1 - Math.cos(u * Math.PI)) / 2;

    if (i <= 6) {
      return ROCKET_VERTICAL_PEAK_REM * crescent(i / 5);
    }
    const u = (i - 6) / 2;
    return ROCKET_VERTICAL_PEAK_REM * (1 - crescent(u));
  }
  const messages = [
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
  // const messagesOffset = [{x:}]
  return (
    <div
      className="w-32 h-28 absolute left-[42%] bottom-3"
      style={{
        transform,
        marginLeft: pageIndex === 8 ? "25%" : "0%",
        transition:
          "transform 700ms ease-in-out, margin-left 700ms ease-in-out",
      }}
    >
      {pageIndex === 1 ? (
        <p
          className={`text-amber-500 font-bold text-xl font-inconsolata text-center`}
        >
          {messages[pageIndex]}
        </p>
      ) : pageIndex === 3 ? (
        <p className={`text-white text-xl font-inconsolata text-center`}>
          {messages[pageIndex].split(" ")[0]}{" "}
          {messages[pageIndex].split(" ")[1]}{" "}
          <span className="text-sky-500 font-bold">
            {messages[pageIndex].split(" ")[2]}{" "}
            {messages[pageIndex].split(" ")[3]}
          </span>
        </p>
      ) : pageIndex === 5 ? (
        <p className={`text-white text-xl font-inconsolata text-center`}>
          {messages[pageIndex].split(" ")[0]}{" "}
          {messages[pageIndex].split(" ")[1]}{" "}
          <span className="text-red-600 font-bold">
            {messages[pageIndex].split(" ")[2]}
          </span>
        </p>
      ) : pageIndex === 8 ? (
        <p
          className={`text-white font-bold text-xl font-inconsolata text-center`}
        >
          {messages[pageIndex]}
        </p>
      ) : (
        <p className="text-white text-xl font-inconsolata text-center">
          {messages[pageIndex]}
        </p>
      )}
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
  partitioner: (index: number) => { [key: string]: number }[];
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="fixed bottom-[14.4vh] left-[50%] w-[94vw] bg-white z-8 transform -translate-x-1/2">
      <div className="border-3 border-solid border-white" />
      <img
        src="/trackerSVG.svg"
        alt="scroll tracker"
        className={`absolute top-1/2 left-1/2 transform ${pageIndex === 8 ? "ml-[25%]" : ""} -translate-x-1/2 -translate-y-1/2 z-10 transition-[margin] ease-in-out duration-700`}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-9">
        <MouseScroll scrollDeltaYState={scrollDeltaYState} />
      </div>
      <div className="absolute top-1/2 w-full transform -translate-y-full">
        <SequenceRocket pageIndex={pageIndex} />
        <SequenceOrbitalBound pageIndex={pageIndex} />
        <SequenceMessage pageIndex={pageIndex} />
        {(() => {
          const partitionData = partitioner(pageIndex);
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
            <div key={`border-${i}`}>
              <div
                className="absolute bottom-0 h-[70vh] transition-[left] duration-700 linear border-white border-r border-dashed pointer-events-none"
                style={{
                  left: `${leftOffsets[i + 1]}%`,
                  width: 0,
                  zIndex: 2,
                }}
              />
              <div
                className="absolute bottom-0 h-8 transition-[left] duration-700 linear border-white border-r border-solid pointer-events-none translate-y-4"
                style={{
                  left: `${leftOffsets[i + 1]}%`,
                  width: 0,
                  zIndex: 2,
                }}
              />
            </div>
          ));

          const accent = partitionData.slice(0, -1).map((_, i) =>
            i == 0 ? (
              <button
                key={`accent-${i}`}
                className="block z-2 absolute transition-[left] duration-700 linear hover:cursor-pointer transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${leftOffsets[i + 1]}%`,
                }}
                onClick={() => setPageIndex(0)}
              >
                <img
                  src={pageIndex > 0 ? `Filled-MD.svg` : `/Hollow-MD.svg`}
                  alt="scroll tracker"
                />
              </button>
            ) : i == 2 ? (
              <button
                key={`accent-${i}`}
                className="block z-2 absolute transition-[left] duration-700 linear hover:cursor-pointer transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${leftOffsets[i + 1]}%`,
                }}
                onClick={() => setPageIndex(2)}
              >
                <img
                  src={pageIndex > 2 ? `Filled-SM.svg` : `/Hollow-SM.svg`}
                  alt="scroll tracker"
                />
              </button>
            ) : i == 4 ? (
              <button
                key={`accent-${i}`}
                className="block z-2 absolute transition-[left] duration-700 linear hover:cursor-pointer transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${leftOffsets[i + 1]}%`,
                }}
                onClick={() => setPageIndex(4)}
              >
                <img
                  src={pageIndex > 4 ? `Filled-MD.svg` : `/Hollow-MD.svg`}
                  alt="scroll tracker"
                />
              </button>
            ) : i == 6 ? (
              <button
                key={`accent-${i}`}
                className="block z-2 absolute transition-[left] duration-700 linear hover:cursor-pointer transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${leftOffsets[i + 1]}%`,
                }}
                onClick={() => setPageIndex(6)}
              >
                <img
                  src={pageIndex > 6 ? `Filled-SM.svg` : `/Hollow-SM.svg`}
                  alt="scroll tracker"
                />
              </button>
            ) : i == 8 ? (
              <button
                key={`accent-${i}`}
                className="block z-2 absolute transition-[left] duration-700 linear hover:cursor-pointer transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${leftOffsets[i + 1]}%`,
                }}
                onClick={() => setPageIndex(8)}
              >
                <img
                  src={pageIndex > 8 ? `Filled-MD.svg` : `/Hollow-MD.svg`}
                  alt="scroll tracker"
                />
              </button>
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
  );
}
