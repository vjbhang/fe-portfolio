import { useEffect } from "react";
import { PiStackDuotone } from "react-icons/pi";
import { GrDeploy } from "react-icons/gr";
import { FaDatabase } from "react-icons/fa";
import MissionControlPrompt from "../elements/MissionControlPrompt/MissionControlPrompt";
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
        <div className="flex flex-col gap-2">
          <h4 className="text-sky-300 font-bold">// Mission Control:</h4>
          <p>Nominal Systems Check.</p>
          <p>Thrusters: Positive</p>
          <p>Trajectory: Positive</p>
          <p>Onboard Personnel: . . . Unable to confirm</p>
          <p>We are off the ground!</p>
        </div>
        <div className="w-full h-px border-b border-white/30 self-center"></div>
        <div className="flex flex-col gap-2 h-full">
          <h4 className="text-sky-200 font-bold">// Vincent AI:</h4>
          <p>
            Now that we have a defined prototype, let's make it into something
            tangible. Moving from ideation to deployment.
          </p>
          <div className="flex flex-row items-center rounded-lg py-2 mt-auto">
            <ProcessHighlightLayout>
              <PiStackDuotone size={32} />
              <p>Choosing architecture</p>
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
                Core features implemented; working end-to-end
              </p>
            </ProcessHighlightLayout>
            <div className="border border-b border-white/20 w-5" />
            <ProcessHighlightLayout>
              <FaDatabase size={32} />
              <p>Basic integrations</p>
              <p className="text-xs text-white/70 mt-auto">
                APIs, Database, Authentication
              </p>
            </ProcessHighlightLayout>
          </div>
        </div>
      </MissionControlPrompt>
    </div>
  );
}
