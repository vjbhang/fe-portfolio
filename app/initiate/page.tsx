"use client";

import { useEffect, useRef, useState } from "react";
import Header from "../component/elements/Header";
import MissionControlPrompt from "../component/elements/MissionControlPrompt/MissionControlPrompt";
import { MISSION_CONTROL_PROMPTS } from "../component/page/missionControlPrompts";
import AnimatedPageTranscript from "../component/elements/AnimatedPageTranscript/AnimatedPageTranscript";
import Link from "next/link";
import { GrHomeRounded } from "react-icons/gr";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const LAST_PAGE_INDEX = 7;

export default function Initiate() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPageIndex, setPageIndex] = useState(0);
  const [emailCopiedActive, setEmailCopiedActive] = useState(false);

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

  function copyEmail() {
    navigator.clipboard.writeText("vjbstudio@pm.me");
    setEmailCopiedActive(true);
    setTimeout(() => setEmailCopiedActive(false), 2000);
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-row justify-evenly p-2 text-white font-inconsolata mt-17">
        {isPageIndex === 0 ? (
          <div className="px-2 py-1 flex-1 items-center justify-center flex" />
        ) : (
          <button
            className="px-2 py-1 flex-1 items-center justify-start flex"
            onClick={decrementPageIndex}
          >
            <FaChevronLeft size={24} />
          </button>
        )}
        <Link href="/" className="pointer-events-auto flex-1">
          <button className="px-2 py-1 flex w-full items-center justify-center gap-2">
            <GrHomeRounded size={24} />
          </button>
        </Link>
        {isPageIndex >= LAST_PAGE_INDEX ? (
          <div className="px-2 py-1 flex-1 items-center justify-center flex" />
        ) : (
          <button
            className="px-2 py-1 flex-1 items-center justify-end flex"
            onClick={incrementPageIndex}
          >
            <FaChevronRight size={24} />
          </button>
        )}
      </div>
      <div className="mx-auto flex w-full flex-col font-inconsolata text-white overflow-x-hidden overflow-y-auto px-[3vw] pt-4 md:pt-24 md:pb-10 pb-6">
        <MissionControlPrompt
          status={MISSION_CONTROL_PROMPTS[isPageIndex].stage}
        >
          <AnimatedPageTranscript
            missionControlLines={[]}
            vincentAiLines={MISSION_CONTROL_PROMPTS[isPageIndex].vincentai}
            processHighlights={MISSION_CONTROL_PROMPTS[isPageIndex].task}
            resetKey={isPageIndex}
          />
        </MissionControlPrompt>
      </div>
      {isPageIndex === LAST_PAGE_INDEX && (
        <div className="flex flex-col items-center justify-center gap-4 mb-20">
          <div className="flex flex-col gap-3 text-white font-d-din w-full px-4">
            <h4 className="text-lg font-bold text-center mt-4">ABOUT ME</h4>
            <p>
              It no longer requires an entire team of developers to build a
              product.{" "}
              <span className="font-bold">
                Building digital solutions has become democratized
              </span>{" "}
              through various AI tools.{" "}
            </p>
            <p>
              But still, accessibility remains limited for those outside the
              tech ecosystem. A certain level of technical knowledge - and
              inclination - is required to fully leverage these tools.
            </p>
            <p>
              I believe freelancers are in a unique position to act as
              intermediaries, translating and implementing AI capabilities in
              ways that are practical and usable. In doing so, we can{" "}
              <span className="font-bold">
                empower individuals to rapidly and affordably bring their ideas
                and visions to life.
              </span>
            </p>
            <p className="italic">
              Let's work together to bring your ideas to life - quickly.
            </p>
          </div>
          <button
            onClick={copyEmail}
            className="flex flex-row items-center gap-4 justify-center bg-[#7dd3fc14] border-[#7DD3FC] border border-solid rounded-3xl text-[#bae6fd] px-2 mx-4 max-w-120 py-1 mt-1 pointer-events-auto cursor-pointer"
          >
            <p className="font-inconsolata text-lg">Contact/Inquiries</p>
            <p className="font-inconsolata text-lg font-bold">
              vjbstudio@pm.me
            </p>
          </button>
          {emailCopiedActive && (
            <p className="font-inconsolata text-sm text-white/70">
              copied e-mail!
            </p>
          )}
          <p className="text-white/70 text-xs italic text-center max-w-[90%]">
            Once I receive your email, I’ll follow up with a survey and provide
            options to schedule a meeting/call.{" "}
          </p>
        </div>
      )}
    </div>
  );
}
