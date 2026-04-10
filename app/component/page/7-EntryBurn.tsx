import { useEffect } from "react";
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
    <div className="flex flex-col w-full h-full font-inconsolata text-white">
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
        </div>
      </MissionControlPrompt>
    </div>
  );
}
