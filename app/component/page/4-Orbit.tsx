import { useEffect } from "react";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { SiBaremetrics } from "react-icons/si";
import { SiAlwaysdata } from "react-icons/si";
import MissionControlPrompt from "../elements/MissionControlPrompt/MissionControlPrompt";

export default function Orbit({
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
        previousPageIndex === 4 ? 5 : previousPageIndex,
      );
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setPageIndex]);

  return (
    <div className="flex flex-col w-full h-full font-inconsolata text-white pointer-events-none">
      <MissionControlPrompt status="ORBIT">
        <div className="flex flex-col gap-2">
          <h4 className="text-sky-300 font-bold">// Mission Control:</h4>
          <p>Flight, we have SECO (Second Engine Cutoff).</p>
          <p>Orbital velocity achieved - parameters look good.</p>
          <p>Vehicle is in orbit.</p>
          <p>Orbital parameters within tolerance.</p>
          <p>We are stable.</p>
        </div>
        <div className="w-4/5 h-px border-b border-white/30"></div>
        <div className="flex flex-col gap-2">
          <h4 className="text-sky-200 font-bold">// Vincent AI:</h4>
          <p>
            The application is stable, performing reliably, and consistently
            delivering value. It is operating in a self-sustaining state. I will
            ensure robust observability is in place so we can continue to
            generate and act on meaningful insights.
          </p>
          <div className="flex flex-row items-start justify-around gap-3 bg-black/40 p-4 rounded-lg border border-solid border-white/20">
            <div className="flex flex-col items-start h-full">
              <HiMiniRocketLaunch size={32} />
              <p>Stable Production Release</p>
            </div>
            <p className="flex items-center justify-center h-full">→</p>
            <div className="flex flex-col items-start h-full">
              <SiBaremetrics size={32} />
              <p>Establish Observability</p>
              <p className="text-xs text-white/70 mt-auto">
                logging, metrics, alerting
              </p>
            </div>
            <p className="flex items-center justify-center h-full">→</p>
            <div className="flex flex-col items-start h-full">
              <SiAlwaysdata size={32} />
              <p>Share meaningful emerging data</p>
            </div>
          </div>
        </div>
      </MissionControlPrompt>
    </div>
  );
}
