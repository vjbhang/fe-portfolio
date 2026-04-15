import { useEffect } from "react";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { SiBaremetrics } from "react-icons/si";
import { SiAlwaysdata } from "react-icons/si";
import MissionControlPrompt from "../elements/MissionControlPrompt/MissionControlPrompt";
import AnimatedPageTranscript from "../elements/AnimatedPageTranscript/AnimatedPageTranscript";
import ProcessHighlightLayout from "../elements/ProcessHighlightLayout";
import { MISSION_CONTROL_PROMPTS } from "./missionControlPrompts";

export default function Orbit({
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
        previousPageIndex === 4 ? 5 : previousPageIndex,
      );
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setPageIndex]);

  return (
    <div className="flex flex-col w-full h-full font-inconsolata text-white pointer-events-none">
      <MissionControlPrompt status="ORBIT">
        <AnimatedPageTranscript
          missionControlLines={MISSION_CONTROL_PROMPTS[3].mc}
          vincentAiLines={MISSION_CONTROL_PROMPTS[3].vincentai}
          processHighlights={MISSION_CONTROL_PROMPTS[3].task}
        />
      </MissionControlPrompt>
    </div>
  );
}
