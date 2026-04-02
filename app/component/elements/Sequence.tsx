import MouseScroll from "./MouseScroll/MouseScroll";

/** Pad / upright (perpendicular). */
const ROCKET_PAD_DEG = -45;
/** Tilt after “launch” before recovery (steps 0–5). */
const ROCKET_CRUISE_DEG = 45;
/** Extra translateY at apogee (step 6); negative = higher. Steps 0 and 8 use 0 (landed). */
const ROCKET_VERTICAL_PEAK_REM = -22;

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
  const Rocket = ({ pageIndex }: { pageIndex: number }) => {
    function rocketRotationDeg(pageIndex: number): number | undefined {
      const i = Math.min(Math.max(pageIndex, 0), 8);

      if (i <= 5) {
        const t = i / 5;
        const eased = (1 - Math.cos(t * Math.PI)) / 2;
        return ROCKET_PAD_DEG + (ROCKET_CRUISE_DEG - ROCKET_PAD_DEG) * eased;
      }

      if (i == 6) {
        return -120;
      }

      if (i == 7) {
        return -90;
      }

      if (i == 8) {
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

    const deg = rocketRotationDeg(pageIndex) ?? ROCKET_PAD_DEG;
    const liftRem = rocketVerticalLiftRem(pageIndex);
    const transform = `translate(-50%, calc(0.5rem + ${liftRem}rem)) rotate(${deg}deg)`;

    return (
      <img
        src="/rocketSVG.svg"
        alt="rocket"
        className="w-24 h-24 absolute bottom-10 left-1/2 transition-transform duration-700 ease-out"
        style={{ transform }}
      />
    );
  };
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
              <Rocket pageIndex={pageIndex} />
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
