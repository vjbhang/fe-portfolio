import { useEffect } from "react";
import { PiStackDuotone } from "react-icons/pi";
import { GrDeploy } from "react-icons/gr";
import { FaDatabase } from "react-icons/fa";
import MissionControlPrompt from "../elements/MissionControlPrompt/MissionControlPrompt";
import AnimatedPageTranscript from "../elements/AnimatedPageTranscript/AnimatedPageTranscript";
import ProcessHighlightLayout from "../elements/ProcessHighlightLayout";

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
          missionControlLines={[
            "We are off the ground!",
            "Thrusters: Positive. Trajectory: Positive.",
            "Onboard Personnel: . . . Unable to confirm",
          ]}
          vincentAiLines={[
            "Now that we have a defined prototype, let's make it into something tangible. Moving from ideation to deployment.",
          ]}
          processHighlights={
            <>
              <ProcessHighlightLayout>
                <PiStackDuotone size={32} />
                <p>Choosing Architecture</p>
                <p className="text-xs text-white/70 mt-auto">
                  tech stack, cloud provider, frameworks
                </p>
              </ProcessHighlightLayout>
              <div className="border border-b border-white/20 w-5" />
              <ProcessHighlightLayout>
                <GrDeploy size={32} />
                <p>
                  Rapid MVP
                  <br />
                  Deployment
                </p>
                <p className="text-xs text-white/70 mt-auto">
                  core features implemented; working end-to-end
                </p>
              </ProcessHighlightLayout>
              <div className="border border-b border-white/20 w-5" />
              <ProcessHighlightLayout>
                <FaDatabase size={32} />
                <p>Base Integrations</p>
                <p className="text-xs text-white/70 mt-auto">
                  APIs, database, authentication
                </p>
              </ProcessHighlightLayout>
            </>
          }
        />
      </MissionControlPrompt>
    </div>
  );
}
