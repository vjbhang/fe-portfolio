import { useEffect } from "react";
import { GrBusinessService } from "react-icons/gr";
import { GrFanOption } from "react-icons/gr";
import MissionControlPrompt from "../../elements/MissionControlPrompt/MissionControlPrompt";
import AnimatedPageTranscript from "../../elements/AnimatedPageTranscript/AnimatedPageTranscript";
import ProcessHighlightLayout from "../../elements/ProcessHighlightLayout";
import { MISSION_CONTROL_PROMPTS } from "../missionControlPrompts";

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
          missionControlLines={MISSION_CONTROL_PROMPTS[2].mc}
          vincentAiLines={MISSION_CONTROL_PROMPTS[2].vincentai}
          processHighlights={MISSION_CONTROL_PROMPTS[2].task}
        />
      </MissionControlPrompt>
    </div>
  );
}
