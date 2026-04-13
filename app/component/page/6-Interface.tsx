import { useEffect } from "react";
import { RiSurveyLine } from "react-icons/ri";
import { TbBrandSpeedtest } from "react-icons/tb";
import MissionControlPrompt from "../elements/MissionControlPrompt/MissionControlPrompt";
import AnimatedPageTranscript from "../elements/AnimatedPageTranscript/AnimatedPageTranscript";
import ProcessHighlightLayout from "../elements/ProcessHighlightLayout";

export default function Interface({
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
        previousPageIndex === 6 ? 7 : previousPageIndex,
      );
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setPageIndex]);

  return (
    <div className="flex flex-col w-full h-full font-inconsolata text-white pointer-events-none">
      <MissionControlPrompt status="RE-ENTRY INTERFACE">
        <AnimatedPageTranscript
          missionControlLines={[
            "Flight, we've reached entry interface.",
            "Velocity and angle within predicted corridor. .",
            "Thermal protection systems is active.",
            "Hitting atmosphere.",
          ]}
          vincentAiLines={[
            "I have implemented significant changes to the application and am now prioritizing user feedback, bug discovery, and performance to ensure stability. I will be closely monitoring the application.",
          ]}
          processHighlights={
            <>
              <ProcessHighlightLayout>
                <RiSurveyLine size={32} />
                <p>
                  User Actions
                  <br />
                  Monitoring
                </p>
                <p className="text-xs text-white/70 mt-auto">
                  track user interactions for feature optimization
                </p>
              </ProcessHighlightLayout>
              <div className="border border-b border-white/20 w-5" />
              <ProcessHighlightLayout>
                <TbBrandSpeedtest size={32} />
                <p>
                  User Interface
                  <br />
                  Testing
                </p>
                <p className="text-xs text-white/70 mt-auto">
                  manual testing, automated UI tests, visual regression tools
                </p>
              </ProcessHighlightLayout>
            </>
          }
        />
      </MissionControlPrompt>
    </div>
  );
}
