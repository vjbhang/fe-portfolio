import { useEffect } from "react";
import MissionControlPrompt from "../elements/MissionControlPrompt/MissionControlPrompt";

export default function ReEntry({
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
        previousPageIndex === 5 ? 6 : previousPageIndex,
      );
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setPageIndex]);

  return (
    <div className="flex flex-col w-full h-full font-inconsolata text-white">
      <MissionControlPrompt status="DE-ORBIT">
        <div className="flex flex-col gap-2">
          <h4 className="text-sky-300 font-bold">// Mission Control:</h4>
          <p>All stations, standby for deorbit sequence.</p>
          <p>Shutdown confirmed. Trajectory is on reentry corridor.</p>
          <p>Vehicle is committed to reentry.</p>
        </div>
        <div className="w-4/5 h-px border-b border-white/30"></div>
        <div className="flex flex-col gap-2">
          <h4 className="text-sky-200 font-bold">// Vincent AI:</h4>
          <p>
            For the application to “re-enter” from orbit, the original concept
            must undergo disruptive evolution. While the application has
            demonstrated resilience, it now requires substantial changes to meet
            emerging requirements.
          </p>
        </div>
      </MissionControlPrompt>
    </div>
  );
}
