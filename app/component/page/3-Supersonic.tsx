import { useEffect } from "react";
import MissionControlPrompt from "../elements/MissionControlPrompt/MissionControlPrompt";

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
    <div className="flex flex-col w-full h-full font-inconsolata text-white">
      <MissionControlPrompt status="SUPERSONIC">
        <div className="flex flex-col gap-2">
          <h4 className="text-sky-300 font-bold">// Mission Control:</h4>
          <p>Vehicle is reaching supersonic velocity.</p>
          <p>Structure is nominal.</p>
          <p>At maximum dynamic pressure - Max Q.</p>
          <p>Withstanding a lot of pressure!</p>
          <p>Reaching orbit.</p>
        </div>
        <div className="w-4/5 h-px border-b border-white/30"></div>
        <div className="flex flex-col gap-2">
          <h4 className="text-sky-200 font-bold">// Vincent AI:</h4>
          <p>
            At this stage, the focus shifts to refining existing functionality
            and scaling performance as needed. I will ask for your input
            detailing further requirements.
          </p>
          <p>Should I scale beyond the original concept? Yes / No</p>
        </div>
      </MissionControlPrompt>
    </div>
  );
}
