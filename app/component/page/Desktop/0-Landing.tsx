import { useEffect } from "react";
import Image from "next/image";
import KeypadEnter from "../../elements/Keypads/KeypadEnter";
import LandingCategoryRotator from "../../elements/LandingCategoryRotator";
export default function Landing({
  setPageIndex,
}: {
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Enter") {
        return;
      }

      setPageIndex((previousPageIndex) =>
        previousPageIndex === 0 ? 1 : previousPageIndex,
      );
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setPageIndex]);

  return (
    <div className="flex flex-col w-full h-full justify-center gap-12 font-inconsolata">
      <div className="flex flex-col gap-6 mb-auto">
        <h1 className="text-5xl text-white">I build Digital Spaceships</h1>
        <div className="flex gap-12 items-center">
          <h4 className="text-xl text-white font-bold flex items-center gap-2">
            <span className="text-xs">▶</span> Freelancer // Software Engineer &
            AI Systems Integrator
          </h4>
        </div>
        <LandingCategoryRotator />
        <div className="flex flex-col bg-black/50 items-center justify-center w-100 h-70 rounded-lg gap-4">
          <div className="flex flex-col justify-center flex-1">
            <button
              className="mt-4 gap-4 flex pointer-events-auto"
              onClick={() => setPageIndex(1)}
            >
              <p className="text-sky-400 px-1 py-0.5 font-bold text-xl font-inconsolata border border-solid rounded border-sky-400/15 hover:border-sky-400/80 transition hover:cursor-pointer animate-pulse hover:animate-none">
                Initiate Launch Sequence
              </p>
              <KeypadEnter setPageIndex={setPageIndex} />
            </button>
            <code className="text-sm/tight text-commentgreen mt-1">
              {"// An interactive walkthrough of the"}
            </code>
            <code className="text-sm/tight text-commentgreen">
              {"// key processes behind building a"}
            </code>
            <code className="text-sm/tight text-commentgreen">
              {"// web/mobile application"}
            </code>
          </div>
          <div className="w-75 h-1 border-b border-white/20 border-solid" />
          <div className="flex flex-col items-center gap-1 text-center text-white text-lg flex-[1.4]">
            <p className="text-white text-sm">To navigate:</p>
            <div className="flex justify-center items-center flex-row gap-6">
              <div className="flex flex-col items-center gap-1 justify-center w-40">
                <Image
                  src="/scrollmouseSVG.svg"
                  alt="scroll mouse"
                  width={62}
                  height={127}
                  className="w-10 h-10"
                />
                <p className="text-sm">Scroll down</p>
              </div>
              <p>or</p>
              <div className="flex flex-col items-center gap-1 justify-center w-40">
                <div className="flex flex-row items-center gap-1 h-10">
                  <Image
                    src="/arrow-left-keypad.svg"
                    alt="left arrow key"
                    width={62}
                    height={127}
                    className="w-6 h-6"
                  />
                  <Image
                    src="/arrow-right-keypad.svg"
                    alt="right arrow key"
                    width={62}
                    height={127}
                    className="w-6 h-6"
                  />
                </div>
                <p className="text-sm">
                  Press left/right
                  <br />
                  arrow keys
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
