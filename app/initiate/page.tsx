"use client";

import { useState } from "react";
import Header from "../component/elements/Header";
import MissionControlPrompt from "../component/elements/MissionControlPrompt/MissionControlPrompt";
import { MISSION_CONTROL_PROMPTS } from "../component/page/missionControlPrompts";
import AnimatedPageTranscript from "../component/elements/AnimatedPageTranscript/AnimatedPageTranscript";

const LAST_PAGE_INDEX = 7;

export default function Initiate() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPageIndex, setPageIndex] = useState(0);

  function incrementPageIndex() {
    if (isPageIndex >= LAST_PAGE_INDEX) {
      return;
    }

    setPageIndex(isPageIndex + 1);
  }

  function decrementPageIndex() {
    if (isPageIndex <= 0) {
      return;
    }

    setPageIndex(isPageIndex - 1);
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* <div className="flex flex-row justify-around items-center min-h-12 mt-17 gap-1 px-2">
        <div className="border border-white rounded p-2 flex items-center flex-1 h-8"></div>
        <div className="border border-white rounded p-2 flex items-center flex-1 h-8"></div>
        <div className="border border-white rounded p-2 flex items-center flex-1 h-8"></div>
        <div className="border border-white rounded p-2 flex items-center flex-1 h-8"></div>
        <div className="border border-white rounded p-2 flex items-center flex-1 h-8"></div>
        <div className="border border-white rounded p-2 flex items-center flex-1 h-8"></div>
        <div className="border border-white rounded p-2 flex items-center flex-1 h-8"></div>
        <div className="border border-white rounded p-2 flex items-center flex-1 h-8"></div>
      </div> */}
      <div className="flex flex-row justify-between p-2 text-white font-inconsolata mt-17">
        <button
          className="min-w-20 border border-white/30 rounded px-2 py-1"
          onClick={decrementPageIndex}
        >
          Back
        </button>
        <button className="min-w-20 border border-white/30 rounded px-2 py-1">
          Home
        </button>
        <button
          className="min-w-20 border border-white/30 rounded px-2 py-1"
          onClick={incrementPageIndex}
        >
          Next
        </button>
      </div>
      <div className="mx-auto flex w-full flex-col font-inconsolata text-white overflow-x-hidden overflow-y-auto px-[3vw] pt-4 md:pt-24 md:pb-10 pb-6">
        <MissionControlPrompt
          status={MISSION_CONTROL_PROMPTS[isPageIndex].stage}
        >
          <AnimatedPageTranscript
            missionControlLines={[]}
            vincentAiLines={MISSION_CONTROL_PROMPTS[isPageIndex].vincentai}
            processHighlights={MISSION_CONTROL_PROMPTS[isPageIndex].task}
          />
        </MissionControlPrompt>
      </div>
    </div>
  );
}
