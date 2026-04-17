import { useEffect } from "react";
import MissionControlPrompt from "../elements/MissionControlPrompt/MissionControlPrompt";
import AnimatedPageTranscript from "../elements/AnimatedPageTranscript/AnimatedPageTranscript";
import { MISSION_CONTROL_PROMPTS } from "./missionControlPrompts";

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
          missionControlLines={MISSION_CONTROL_PROMPTS[5].mc}
          vincentAiLines={MISSION_CONTROL_PROMPTS[5].vincentai}
          processHighlights={MISSION_CONTROL_PROMPTS[5].task}
        />
      </MissionControlPrompt>
    </div>
  );
}
