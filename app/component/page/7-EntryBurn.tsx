import { useEffect } from "react";
import { FaWrench } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import MissionControlPrompt from "../elements/MissionControlPrompt/MissionControlPrompt";

export default function EntryBurn({
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
        previousPageIndex === 7 ? 8 : previousPageIndex,
      );
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setPageIndex]);

  return (
    <div className="flex flex-col w-full h-full font-inconsolata text-white pointer-events-none">
      <MissionControlPrompt status="RE-ENTRY BURN">
        <div className="flex flex-col gap-2">
          <h4 className="text-sky-300 font-bold">// Mission Control:</h4>
          <p>Entry burn start.</p>
          <p>Engines ramping - thrust vector stable. </p>
          <p>Guidance is tracking nominal descent profile.</p>
          <p>Throttle is responsive - rate of descent decreasing.</p>
          <p>Vehicle is landing.</p>
        </div>
        <div className="w-4/5 h-px border-b border-white/30"></div>
        <div className="flex flex-col gap-2">
          <h4 className="text-sky-200 font-bold">// Vincent AI:</h4>
          <p>
            I am actively enhancing and debugging the application. I will also
            refine structural processes as needed to meet evolving requirements.
          </p>
          <div className="flex flex-row items-start justify-around gap-3 bg-black/40 p-4 rounded-lg border border-solid border-white/20">
            <div className="flex flex-col items-start h-full">
              <FaWrench size={32} />
              <p>Hotfixes, patches, and rapid iteration</p>
            </div>
            <p className="flex items-center justify-center h-full">→</p>
            <div className="flex flex-col items-start h-full">
              <FaMagnifyingGlass size={32} />
              <p>Identify technical debt</p>
            </div>
            <p className="flex items-center justify-center h-full">→</p>
            <div className="flex flex-col items-start h-full">
              <FaBookOpen size={32} />
              <p>Documentation</p>
            </div>
          </div>
        </div>
      </MissionControlPrompt>
    </div>
  );
}
