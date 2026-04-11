import { useEffect } from "react";
import { RiSurveyLine } from "react-icons/ri";
import { TbBrandSpeedtest } from "react-icons/tb";
import MissionControlPrompt from "../elements/MissionControlPrompt/MissionControlPrompt";

export default function Interface({
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
        previousPageIndex === 6 ? 7 : previousPageIndex,
      );
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setPageIndex]);

  return (
    <div className="flex flex-col w-full h-full font-inconsolata text-white pointer-events-none">
      <MissionControlPrompt status="RE-ENTRY INTERFACE">
        <div className="flex flex-col gap-2">
          <h4 className="text-sky-300 font-bold">// Mission Control:</h4>
          <p>Flight, we've reached entry interface.</p>
          <p>Velocity and angle within predicted corridor. .</p>
          <p>Thermal protection systems is active.</p>
          <p>Hitting atmosphere.</p>
        </div>
        <div className="w-4/5 h-px border-b border-white/30"></div>
        <div className="flex flex-col gap-2">
          <h4 className="text-sky-200 font-bold">// Vincent AI:</h4>
          <p>
            I have implemented significant changes to the application and am now
            prioritizing user feedback, bug discovery, and performance
            variability to ensure stability. I will be closely monitoring the
            application.
          </p>
          <div className="flex flex-row items-start justify-around gap-3 bg-black/40 p-4 rounded-lg border border-solid border-white/20">
            <div className="flex flex-col items-start h-full">
              <RiSurveyLine size={32} />
              <p>
                User Actions
                <br />
                Monitoring
              </p>
            </div>
            <p className="flex items-center justify-center h-full">→</p>
            <div className="flex flex-col items-start h-full">
              <TbBrandSpeedtest size={32} />
              <p>
                User Interface
                <br />
                Testing
              </p>
            </div>
          </div>
        </div>
      </MissionControlPrompt>
    </div>
  );
}
