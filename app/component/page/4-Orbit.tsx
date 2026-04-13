import { useEffect } from "react";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { SiBaremetrics } from "react-icons/si";
import { SiAlwaysdata } from "react-icons/si";
import MissionControlPrompt from "../elements/MissionControlPrompt/MissionControlPrompt";
import ProcessHighlightLayout from "../elements/ProcessHighlightLayout";

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
          <p>We are stable.</p>
        </div>
        <div className="w-full h-px border-b border-white/30 self-center"></div>
        <div className="flex flex-col gap-2 h-full">
          <h4 className="text-sky-200 font-bold">// Vincent AI:</h4>
          <p>
            The application is stable, performing reliably, and consistently
            delivering value. I will ensure robust observability is in place so
            we can act on meaningful insights.
          </p>
          <div className="flex flex-row items-center rounded-lg py-2 mt-auto">
            <ProcessHighlightLayout>
              <HiMiniRocketLaunch size={32} />
              <p>
                Stable
                <br />
                Release
              </p>
            </ProcessHighlightLayout>
            <div className="border border-b border-white/20 w-5" />
            <ProcessHighlightLayout>
              <SiBaremetrics size={32} />
              <p>
                Establish
                <br />
                Observability
              </p>
              <p className="text-xs text-white/70 mt-auto">
                logging, metrics, alerting
              </p>
            </ProcessHighlightLayout>
            <div className="border border-b border-white/20 w-5" />
            <ProcessHighlightLayout>
              <SiAlwaysdata size={32} />
              <p>
                Get
                <br />
                Meaningful Data
              </p>
            </ProcessHighlightLayout>
          </div>
        </div>
      </MissionControlPrompt>
    </div>
  );
}
