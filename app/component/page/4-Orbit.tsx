import { useEffect } from "react";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { SiBaremetrics } from "react-icons/si";
import { SiAlwaysdata } from "react-icons/si";
import MissionControlPrompt from "../elements/MissionControlPrompt/MissionControlPrompt";
import AnimatedPageTranscript from "../elements/AnimatedPageTranscript/AnimatedPageTranscript";
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
        <AnimatedPageTranscript
          missionControlLines={[
            "Flight, we have SECO (Second Engine Cutoff).",
            "Orbital velocity achieved - parameters look good.",
            "Vehicle is in orbit.",
            "We are stable.",
          ]}
          vincentAiLines={[
            "The application is stable, performing reliably, and consistently delivering value. I will ensure observability is in place so we can act on meaningful insights.",
          ]}
          processHighlights={
            <>
              <ProcessHighlightLayout>
                <HiMiniRocketLaunch size={32} />
                <p>
                  Stable
                  <br />
                  Release
                </p>
                <p className="text-xs text-white/70 mt-auto">
                  deploy version that
                  <br />
                  meets quality benchmarks
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
                  logging, metrics,
                  <br />
                  alerting
                </p>
              </ProcessHighlightLayout>
              <div className="border border-b border-white/20 w-5" />
              <ProcessHighlightLayout>
                <SiAlwaysdata size={32} />
                <p>
                  Get
                  <br />
                  Insight
                </p>
                <p className="text-xs text-white/70 mt-auto">
                  collect and analyze data to understand user behavior,
                  <br />
                  application performance
                </p>
              </ProcessHighlightLayout>
            </>
          }
        />
      </MissionControlPrompt>
    </div>
  );
}
