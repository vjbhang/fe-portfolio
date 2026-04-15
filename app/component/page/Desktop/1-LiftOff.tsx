import { useEffect } from "react";
import { LuListTodo } from "react-icons/lu";
import { FiFigma } from "react-icons/fi";
import MissionControlPrompt from "../../elements/MissionControlPrompt/MissionControlPrompt";
import AnimatedPageTranscript from "../../elements/AnimatedPageTranscript/AnimatedPageTranscript";
import ProcessHighlightLayout from "../../elements/ProcessHighlightLayout";

import { MISSION_CONTROL_PROMPTS } from "../missionControlPrompts";

export default function Liftoff({
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
        previousPageIndex === 1 ? 2 : previousPageIndex,
      );
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setPageIndex]);

  return (
    <div className="flex flex-col w-full h-full font-inconsolata text-white pointer-events-none">
      <MissionControlPrompt status="LIFT OFF">
        <AnimatedPageTranscript
          missionControlLines={MISSION_CONTROL_PROMPTS[0].mc}
          vincentAiLines={MISSION_CONTROL_PROMPTS[0].vincentai}
          processHighlights={MISSION_CONTROL_PROMPTS[0].task}
        />
      </MissionControlPrompt>
    </div>
  );
}
