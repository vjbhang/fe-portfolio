import { useEffect, useState } from "react";
import GradientRotateButton from "../elements/GradientRotateBtn";
import MissionControlPrompt from "../elements/MissionControlPrompt/MissionControlPrompt";
import AnimatedPageTranscript from "../elements/AnimatedPageTranscript/AnimatedPageTranscript";
import ProcessHighlightLayout from "../elements/ProcessHighlightLayout";
import { FaBookOpen, FaWrench } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

const LAST_PAGE_INDEX = 8;

export default function About({
  setPageIndex,
}: {
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [emailCopiedActive, setEmailCopiedActive] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "r" || e.key === "R") {
        setPageIndex((previousPageIndex) =>
          previousPageIndex === LAST_PAGE_INDEX ? 0 : previousPageIndex,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setPageIndex]);

  function copyEmail() {
    navigator.clipboard.writeText("vjbstudio@pm.me");
    setEmailCopiedActive(true);
    setTimeout(() => setEmailCopiedActive(false), 2000);
  }

  return (
    <div className="flex w-full h-full pointer-events-none">
      <div className="flex flex-[2.8] flex-col">
        \
        <div className="flex flex-col w-full h-full font-inconsolata text-white">
          <MissionControlPrompt status="MISSION COMPLETE">
            <AnimatedPageTranscript
              missionControlLines={[
                "Landing legs deployed.",
                "Vehicle is stable on the pad.",
                "Touchdown confirmed.",
              ]}
              vincentAiLines={[
                "The application is safe, stable, and ready for the next iteration. Depending on your requirements, it is not always the case where multiple iterations are needed. Software is never truly 'complete', going through multiple launch and re-entry cycles.",
                "---",
                "This landing page is a demonstration of my capabilities and a vision for how I provide value to clients. ",
                "As a freelancer, I can help you build your digital solution - whether it is a website, web/mobile application, or an AI implementation.",
                "If you have any questions, or would like to discuss working together, please don't hesitate to reach out. →",
              ]}
              processHighlights={undefined}
            />
          </MissionControlPrompt>
        </div>
      </div>
      <div className="flex flex-[1.2] flex-col justify-end pb-8 w-full h-77%] mr-[4.5%]">
        <div className="flex flex-col gap-3 text-md text-white font-d-din w-full h-full">
          <h4 className="text-lg font-bold">ABOUT ME</h4>
          <div className="flex flex-col gap-3">
            <p>
              It no longer requires an entire team of developers to build a product.{" "}
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
            
            <div className="flex flex-row gap-3 items-center">
              <button
                onClick={copyEmail}
                className="flex flex-row items-center gap-4 justify-center bg-[#7dd3fc14] border-[#7DD3FC] border border-solid rounded-3xl text-[#bae6fd] px-2 py-1 w-fit mt-1 pointer-events-auto cursor-pointer"
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
            </div>
            <p className="text-white/70 text-xs italic">
              Once I receive your email, I’ll follow up with a survey and
              provide options to schedule a meeting/call.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
