import MouseScroll from "./MouseScroll/MouseScroll";

export default function Sequence({
  pageIndex,
  scrollDeltaYState,
  partitioner,
}: {
  pageIndex: number;
  scrollDeltaYState: number;
  partitioner: (index: number) => { [key: string]: number }[];
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
                className="absolute bottom-0 h-[70vh] transition-[left] duration-700 linear border-r border-dashed pointer-events-none"
                style={{
                  left: `${leftOffsets[i + 1]}%`,
                  width: 0,
                  zIndex: 2,
                }}
              />
              <div
                className="absolute bottom-0 h-8 transition-[left] duration-700 linear border-r border-solid pointer-events-none translate-y-4"
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
              <img
                key={`accent-${i}`}
                src={pageIndex > 0 ? `Filled-MD.svg` : `/Hollow-MD.svg`}
                alt="scroll tracker"
                className="absolute bottom-0 transition-[left] duration-700 linear pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${leftOffsets[i + 1]}%`,
                  zIndex: 2,
                }}
              />
            ) : i == 2 ? (
              <img
                key={`accent-${i}`}
                src={pageIndex > 2 ? `Filled-SM.svg` : `/Hollow-SM.svg`}
                alt="scroll tracker"
                className="absolute bottom-0 transition-[left] duration-700 linear pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${leftOffsets[i + 1]}%`,
                  zIndex: 2,
                }}
              />
            ) : i == 4 ? (
              <img
                key={`accent-${i}`}
                src={pageIndex > 4 ? `Filled-MD.svg` : `/Hollow-MD.svg`}
                alt="scroll tracker"
                className="absolute bottom-0 transition-[left] duration-700 linear pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${leftOffsets[i + 1]}%`,
                  zIndex: 2,
                }}
              />
            ) : i == 6 ? (
              <img
                key={`accent-${i}`}
                src={pageIndex > 6 ? `Filled-SM.svg` : `/Hollow-SM.svg`}
                alt="scroll tracker"
                className="absolute bottom-0 transition-[left] duration-700 linear pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${leftOffsets[i + 1]}%`,
                  zIndex: 2,
                }}
              />
            ) : i == 8 ? (
              <img
                key={`accent-${i}`}
                src={pageIndex > 8 ? `Filled-MD.svg` : `/Hollow-MD.svg`}
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
  );
}
