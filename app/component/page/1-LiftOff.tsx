import { useEffect } from "react";
import { LuListTodo } from "react-icons/lu";
import { FiFigma } from "react-icons/fi";
import MissionControlPrompt from "../elements/MissionControlPrompt/MissionControlPrompt";
import AnimatedPageTranscript from "../elements/AnimatedPageTranscript/AnimatedPageTranscript";
import ProcessHighlightLayout from "../elements/ProcessHighlightLayout";

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
          missionControlLines={[
            "The ideas are solid and the requirements have been clearly defined. It's clear what we need to build, and we have a plan for how to do it.",
            "All that's left to do is launch!",
            "3... 2... 1... Liftoff!",
          ]}
          vincentAiLines={[
            "I am Vincent AI - efficient and resourceful. Initiating project.",
            "To get started, we will:",
          ]}
          processHighlights={
            <>
              <ProcessHighlightLayout>
                <LuListTodo size={32} />
                <p>
                  Define
                  <br />
                  Requirements
                </p>
                <p className="text-xs text-white/70 mt-auto">
                  establish clear specifications,
                  <br />
                  build user stories
                </p>
              </ProcessHighlightLayout>
              <div className="border border-b border-white/20 w-5" />
              <ProcessHighlightLayout>
                <FiFigma size={32} />
                <p>
                  Design
                  <br />
                  Prototype
                </p>
                <p className="text-xs text-white/70 mt-auto">
                  create low- to
                  <br />
                  high-fidelity interactive prototypes
                </p>
              </ProcessHighlightLayout>
            </>
          }
        />
      </MissionControlPrompt>
    </div>
  );
}
