import { useEffect } from "react";
import { GrBusinessService } from "react-icons/gr";
import { GrFanOption } from "react-icons/gr";
import MissionControlPrompt from "../elements/MissionControlPrompt/MissionControlPrompt";
import ProcessHighlightLayout from "../elements/ProcessHighlightLayout";

export default function Supersonic({
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
        previousPageIndex === 3 ? 4 : previousPageIndex,
      );
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setPageIndex]);

  return (
    <div className="flex flex-col w-full h-full font-inconsolata text-white pointer-events-none">
      <MissionControlPrompt status="SUPERSONIC">
        <div className="flex flex-col gap-2">
          <h4 className="text-sky-300 font-bold">// Mission Control:</h4>
          <p>Vehicle is reaching supersonic velocity.</p>
          <p>At maximum dynamic pressure - Max Q.</p>
          <p>Withstanding a lot of pressure!</p>
          <p>Reaching orbit.</p>
        </div>
        <div className="w-full h-px border-b border-white/30 self-center"></div>
        <div className="flex flex-col gap-2 h-full">
          <h4 className="text-sky-200 font-bold">// Vincent AI:</h4>
          <p>
            At this stage, the focus shifts to refining existing features and
            scaling performance as needed. I will ask for your input detailing
            further requirements.
          </p>
          <p>Should I scale beyond the original concept? Yes / No</p>
          <div className="flex flex-row items-center rounded-lg py-2 mt-auto">
            <ProcessHighlightLayout>
              <GrBusinessService size={32} />
              <p>
                Align with
                <br />
                business needs
              </p>
              <p className="text-xs text-white/70 mt-auto">
                business-specific nuance,
                <br />
                speed vs scalability vs cost
              </p>
            </ProcessHighlightLayout>
            <div className="border border-b border-white/20 w-5" />
            <ProcessHighlightLayout>
              <GrFanOption size={32} />
              <p>Optimization</p>
              <p className="text-xs text-white/70 mt-auto">
                feature complexity or <br />
                increased user load
              </p>
            </ProcessHighlightLayout>
          </div>
        </div>
      </MissionControlPrompt>
    </div>
  );
}
