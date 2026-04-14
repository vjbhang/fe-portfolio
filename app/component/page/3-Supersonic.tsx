import { useEffect } from "react";
import { GrBusinessService } from "react-icons/gr";
import { GrFanOption } from "react-icons/gr";
import MissionControlPrompt from "../elements/MissionControlPrompt/MissionControlPrompt";
import AnimatedPageTranscript from "../elements/AnimatedPageTranscript/AnimatedPageTranscript";
import ProcessHighlightLayout from "../elements/ProcessHighlightLayout";

export default function Supersonic({
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
        previousPageIndex === 3 ? 4 : previousPageIndex,
      );
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setPageIndex]);

  return (
    <div className="flex flex-col w-full h-full font-inconsolata text-white pointer-events-none">
      <MissionControlPrompt status="SUPERSONIC">
        <AnimatedPageTranscript
          missionControlLines={[
            "Vehicle is reaching supersonic velocity.",
            "At maximum dynamic pressure - Max Q.",
            "Withstanding a lot of pressure!",
            "Reaching orbit.",
          ]}
          vincentAiLines={[
            "The project is now tangible. The focus shifts to refining existing features and scaling performance as needed.",
            "Should I scale beyond the initial concept?",
          ]}
          processHighlights={
            <>
              <ProcessHighlightLayout>
                <GrBusinessService size={32} />
                <p>
                  Align with
                  <br />
                  Business Needs
                </p>
                <p className="text-xs text-white/70 mt-auto">
                  business-specific nuance,
                  <br />
                  speed vs scalability vs cost
                </p>
              </ProcessHighlightLayout>
              <div className="border border-b border-white/20 w-5" />
              <ProcessHighlightLayout>
                <GrFanOption size={32} />
                <p>Optimization</p>
                <p className="text-xs text-white/70 mt-auto">
                  feature complexity or <br />
                  increased user load
                </p>
              </ProcessHighlightLayout>
            </>
          }
        />
      </MissionControlPrompt>
    </div>
  );
}
