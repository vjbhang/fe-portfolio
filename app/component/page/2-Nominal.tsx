import { useEffect } from "react";
import MissionControlPrompt from "../elements/MissionControlPrompt/MissionControlPrompt";

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
    <div className="flex flex-col w-full h-full font-inconsolata text-white">
      <MissionControlPrompt status="TRANSONIC">
        <div className="flex flex-col gap-2">
          <h4 className="text-sky-300 font-bold">// Mission Control:</h4>
          <p>Nominal Systems Check.</p>
          <p>Thrusters: Positive</p>
          <p>Trajectory: Positive</p>
          <p>Weather Conditions: Positive</p>
          <p>Onboard Personnel: . . . Unable to confirm</p>
          <p>We are off the ground!</p>
        </div>
        <div className="w-4/5 h-px border-b border-white/30"></div>
        <div className="flex flex-col gap-2">
          <h4 className="text-sky-200 font-bold">// Vincent AI:</h4>
          <p>
            Now that we have a defined prototype, let's make it into something
            tangible. Moving from ideation to deployment.
          </p>
        </div>
      </MissionControlPrompt>
    </div>
  );
}
