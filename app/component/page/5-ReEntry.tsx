import { useEffect } from "react";
import { LuListTodo } from "react-icons/lu";
import { RiGlobalFill } from "react-icons/ri";
import { MdArchitecture } from "react-icons/md";
import MissionControlPrompt from "../elements/MissionControlPrompt/MissionControlPrompt";
import AnimatedPageTranscript from "../elements/AnimatedPageTranscript/AnimatedPageTranscript";
import ProcessHighlightLayout from "../elements/ProcessHighlightLayout";

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
    <div className="flex flex-col w-full h-full font-inconsolata text-white pointer-events-none">
      <MissionControlPrompt status="DE-ORBIT">
        <AnimatedPageTranscript
          missionControlLines={[
            "All stations, standby for deorbit sequence.",
            "Shutdown confirmed. Trajectory is on reentry corridor.",
            "Vehicle is committed to reentry.",
          ]}
          vincentAiLines={[
            "In space flight, 're-entry' is riskier than the initial launch. While the application has demonstrated stability, the situation now requires change to meet emerging requirements.",
          ]}
          processHighlights={
            <>
              <ProcessHighlightLayout>
                <LuListTodo size={32} />
                <p>
                  Re-define
                  <br />
                  Scope of Change
                </p>
                <p className="text-xs text-white/70 mt-auto">
                  features, design, business-specific nuance
                </p>
              </ProcessHighlightLayout>
              <div className="border border-b border-white/20 w-5" />
              <ProcessHighlightLayout>
                <MdArchitecture size={32} />
                <p>Architectural Changes</p>
                <p className="text-xs text-white/70 mt-auto">
                  modify systems
                  <br />
                  for scalability
                </p>
              </ProcessHighlightLayout>
              <div className="border border-b border-white/20 w-5" />
              <ProcessHighlightLayout>
                <RiGlobalFill size={32} />
                <p>
                  Plan for
                  <br />
                  Scaling
                </p>
                <p className="text-xs text-white/70 mt-auto">
                  multi-region, microservices, risk modelling, etc.
                </p>
              </ProcessHighlightLayout>
            </>
          }
        />
      </MissionControlPrompt>
    </div>
  );
}
