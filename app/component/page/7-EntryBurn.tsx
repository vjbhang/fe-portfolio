import { useEffect } from "react";
import { FaWrench } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import MissionControlPrompt from "../elements/MissionControlPrompt/MissionControlPrompt";
import AnimatedPageTranscript from "../elements/AnimatedPageTranscript/AnimatedPageTranscript";
import ProcessHighlightLayout from "../elements/ProcessHighlightLayout";

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
        <AnimatedPageTranscript
          missionControlLines={[
            "Entry burn start.",
            "Engines ramping - thrust vector stable. ",
            "Guidance is tracking nominal descent profile.",
            "Throttle is responsive - rate of descent decreasing.",
            "Vehicle is landing.",
          ]}
          vincentAiLines={[
            "I am actively enhancing the application. I will refine or add on to structural processes as needed to meet evolving requirements.",
          ]}
          processHighlights={
            <>
              <ProcessHighlightLayout>
                <FaWrench size={32} />
                <p>Hotfixes, patches, and rapid iteration</p>
                <p className="text-xs text-white/70 mt-auto">
                  an ongoing process of improvement and adaptation
                </p>
              </ProcessHighlightLayout>
              <div className="border border-b border-white/20 w-5" />
              <ProcessHighlightLayout>
                <FaMagnifyingGlass size={32} />
                <p>Identify technical debt</p>
                <p className="text-xs text-white/70 mt-auto">
                  review codebase, look for structural improvements
                </p>
              </ProcessHighlightLayout>
              <div className="border border-b border-white/20 w-5" />
              <ProcessHighlightLayout>
                <FaBookOpen size={32} />
                <p>
                  Setup
                  <br />
                  Docs
                </p>
                <p className="text-xs text-white/70 mt-auto">
                  maintain documentation for product/tech
                </p>
              </ProcessHighlightLayout>
            </>
          }
        />
      </MissionControlPrompt>
    </div>
  );
}
