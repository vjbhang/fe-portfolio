import { useEffect } from "react";
import Image from "next/image";
import KeypadEnter from "../elements/Keypads/KeypadEnter";
import LandingCategoryRotator from "../elements/LandingCategoryRotator";
import Link from "next/link";
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
    <div className="flex flex-col w-full h-full md:justify-center gap-12 font-inconsolata">
      <div className="flex flex-col md:gap-6 gap-3 md:mb-auto md:h-fit h-full md:pb-0 pb-10">
        <h1 className="md:text-7xl text-6xl md:px-0 px-2 text-white">
          <span className="md:hidden inline">I build Digital Spaceships</span>
          <span className="md:inline hidden">
            I build Digital <br />
            Spaceships
          </span>
        </h1>
        <div className="flex gap-12 items-center">
          <h4 className="text-xl text-white font-bold flex md:flex-row flex-col items-center md:px-0 px-2 md:gap-2 md:pt-0 pt-1">
            <p className="md:m-0 mr-auto text-energyblue">
              <span className="text-xs md:inline hidden">▶</span> Freelancer //
            </p>
            <span className="md:inline hidden text-energyblue">
              Software Engineer & AI Systems Integrator
            </span>
            <span className="md:hidden text-energyblue">
              Software Engineer
              <br />
              AI Systems Integrator
            </span>
          </h4>
        </div>
        <LandingCategoryRotator />
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-solid border-white/20 bg-black/50 md:-mt-3 mt-auto md:h-70 md:w-100 md:pb-0 w-full h-fit pb-4">
          <div className="flex flex-col justify-center flex-1 md:mt-0 -mt-2">
            <button
              className="mt-4 gap-4 flex pointer-events-auto md:w-fit w-full px-1"
              onClick={() => setPageIndex(1)}
            >
              <Link
                href={"/initiate"}
                className="text-sky-400 text-start md:px-1 md:py-0.5 font-bold text-xl font-inconsolata border border-solid rounded border-sky-400/15 hover:border-sky-400/80 transition hover:cursor-pointer md:animate-pulse hover:animate-none md:w-fit w-full"
              >
                <p className="md:inline hidden">Initiate Launch Sequence</p>
                <p className="md:hidden inline text-2xl">
                  /initiate
                  <span className="text-white/40 ml-2 text-sm">(click)</span>
                </p>
              </Link>
              <div className="md:inline hidden">
                <KeypadEnter setPageIndex={setPageIndex} />
              </div>
            </button>
            <code className="text-sm/tight text-commentgreen mt-1">
              {"// An interactive walkthrough of"}
            </code>
            <code className="text-sm/tight text-commentgreen">
              {"// the processes behind building a"}
            </code>
            <code className="text-sm/tight text-commentgreen">
              {"// web/mobile application"}
            </code>
          </div>
          <div className="w-75 h-1 border-b border-white/20 border-solid md:inline hidden" />
          <div className="flex-col items-center gap-1 text-center text-white text-lg flex-[1.4] md:flex hidden">
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
