import { useEffect } from "react";
import { PiStackDuotone } from "react-icons/pi";
import { GrDeploy } from "react-icons/gr";
import { FaDatabase } from "react-icons/fa";
import MissionControlPrompt from "../elements/MissionControlPrompt/MissionControlPrompt";
import AnimatedPageTranscript from "../elements/AnimatedPageTranscript/AnimatedPageTranscript";
import ProcessHighlightLayout from "../elements/ProcessHighlightLayout";

import { MISSION_CONTROL_PROMPTS } from "./missionControlPrompts";

export default function Nominal({
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
        previousPageIndex === 2 ? 3 : previousPageIndex,
      );
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setPageIndex]);

  return (
    <div className="flex flex-col w-full h-full font-inconsolata text-white pointer-events-none">
      <MissionControlPrompt status="TRANSONIC">
        <AnimatedPageTranscript
          missionControlLines={MISSION_CONTROL_PROMPTS[1].mc}
          vincentAiLines={MISSION_CONTROL_PROMPTS[1].vincentai}
          processHighlights={MISSION_CONTROL_PROMPTS[1].task}
        />
      </MissionControlPrompt>
    </div>
  );
}
