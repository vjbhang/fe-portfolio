import { useEffect } from "react";
import { LuListTodo } from "react-icons/lu";
import { FiFigma } from "react-icons/fi";
import MissionControlPrompt from "../elements/MissionControlPrompt/MissionControlPrompt";

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
        <div className="flex flex-col gap-2">
          <h4 className="text-sky-300 font-bold">// Mission Control:</h4>
          <p>
            The ideas are now solidified and the requirements clearly defined.
            At this point, there is no remaining ambiguity in the path
            forward...
          </p>
          <p>Either drive initiative or sunset the idea for good.</p>
          <p>There is no room for hesitation - execute ×3!</p>
          <p>3... 2... 1... Liftoff!</p>
        </div>
        <div className="w-4/5 h-px border-b border-white/30"></div>
        <div className="flex flex-col gap-2">
          <h4 className="text-sky-200 font-bold">// Vincent AI:</h4>
          <p>
            With my skills and access to powerful tools, let's launch your
            project effectively and efficiently{" "}
            <span className="font-bold">together</span>.
          </p>
          <p>To get started, we will:</p>
          <div className="flex flex-row items-center justify-around gap-6 bg-black/40 p-4 rounded-lg border border-solid border-white/20">
            <div className="flex flex-col items-start gap-2">
              <LuListTodo size={32} />
              <p>
                Define
                <br />
                Requirements
              </p>
            </div>
            <p className="flex items-center justify-center h-full">→</p>
            <div className="flex flex-col items-start gap-2">
              <FiFigma size={32} />
              <p>Prototyping</p>
            </div>
          </div>
        </div>
      </MissionControlPrompt>
    </div>
  );
}
