import { useEffect } from "react";
import { LuListTodo } from "react-icons/lu";
import { FiFigma } from "react-icons/fi";
import MissionControlPrompt from "../elements/MissionControlPrompt/MissionControlPrompt";
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
        <div className="flex flex-col gap-2">
          <h4 className="text-sky-300 font-bold">// Mission Control:</h4>
          <p>
            The ideas are now solidified and the requirements clearly defined.
            At this point, there is no remaining ambiguity in the path
            forward...
          </p>
          <p>There is no room for hesitation - execute {"×"}3!</p>
          <p>3... 2... 1... Liftoff!</p>
        </div>
        <div className="w-full h-px border-b border-white/30 self-center"></div>
        <div className="flex flex-col gap-2 h-full">
          <h4 className="text-sky-200 font-bold">// Vincent AI:</h4>
          <p>
            With my skills and the latest powerful tools, let's begin your
            project.
          </p>
          <p>To get started, we will:</p>
          <div className="flex flex-row items-center rounded-lg py-2 mt-auto">
            <ProcessHighlightLayout>
              <LuListTodo size={32} />
              <p>
                Define
                <br />
                Requirements
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
            </ProcessHighlightLayout>
          </div>
        </div>
      </MissionControlPrompt>
    </div>
  );
}
