import { useEffect } from "react";
import { LuListTodo } from "react-icons/lu";
import { RiGlobalFill } from "react-icons/ri";
import { MdArchitecture } from "react-icons/md";
import MissionControlPrompt from "../elements/MissionControlPrompt/MissionControlPrompt";
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
        <div className="flex flex-col gap-2">
          <h4 className="text-sky-300 font-bold">// Mission Control:</h4>
          <p>All stations, standby for deorbit sequence.</p>
          <p>Shutdown confirmed. Trajectory is on reentry corridor.</p>
          <p>Vehicle is committed to reentry.</p>
        </div>
        <div className="w-full h-px border-b border-white/30 self-center"></div>
        <div className="flex flex-col gap-2 h-full">
          <h4 className="text-sky-200 font-bold">// Vincent AI:</h4>
          <p>
            For the application to “re-enter” from orbit, the original concept
            must undergo disruptive evolution. While the application has
            demonstrated resilience, it now requires substantial changes to meet
            emerging requirements.
          </p>
          <div className="flex flex-row items-center rounded-lg py-2 mt-auto">
            <ProcessHighlightLayout>
              <LuListTodo size={32} />
              <p>Define Scope of Change</p>
              <p className="text-xs text-white/70 mt-auto">
                features, design, business-specific nuance
              </p>
            </ProcessHighlightLayout>
            <div className="border border-b border-white/20 w-5" />
            <ProcessHighlightLayout>
              <MdArchitecture size={32} />
              <p>Architectural Changes</p>
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
          </div>
        </div>
      </MissionControlPrompt>
    </div>
  );
}
