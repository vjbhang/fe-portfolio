"use client"

import { useState } from "react";
import Header from "../component/elements/Header";
import MissionControlPrompt from "../component/elements/MissionControlPrompt/MissionControlPrompt";
import { MISSION_CONTROL_PROMPTS } from "../component/page/missionControlPrompts";

export default function Initiate() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="mx-auto flex w-full flex-1 flex-col items-center justify-center overflow-x-hidden overflow-y-auto px-[3vw] pt-15 md:pt-24 md:pb-10">
        <MissionControlPrompt status={MISSION_CONTROL_PROMPTS[0].stage}>
          {/* <AnimatedPageTranscript
            missionControlLines={MISSION_CONTROL_PROMPTS[0].mc}
            vincentAiLines={MISSION_CONTROL_PROMPTS[0].vincentai}
            processHighlights={MISSION_CONTROL_PROMPTS[0].task}
          /> */}
          <p>Hello World</p>
        </MissionControlPrompt>

      </div>
    </div>
  );
}
