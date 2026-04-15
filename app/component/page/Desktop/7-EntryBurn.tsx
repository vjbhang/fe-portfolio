import { useEffect } from "react";
import { FaWrench } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import MissionControlPrompt from "../../elements/MissionControlPrompt/MissionControlPrompt";
import AnimatedPageTranscript from "../../elements/AnimatedPageTranscript/AnimatedPageTranscript";
import ProcessHighlightLayout from "../../elements/ProcessHighlightLayout";
import { MISSION_CONTROL_PROMPTS } from "../missionControlPrompts";

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
          missionControlLines={MISSION_CONTROL_PROMPTS[6].mc}
          vincentAiLines={MISSION_CONTROL_PROMPTS[6].vincentai}
          processHighlights={MISSION_CONTROL_PROMPTS[6].task}
        />
      </MissionControlPrompt>
    </div>
  );
}
