import AnimatedPageTranscript from "../elements/AnimatedPageTranscript/AnimatedPageTranscript";
import MissionControlPrompt from "../elements/MissionControlPrompt/MissionControlPrompt";
import Landing from "../page/0-Landing";
import { MISSION_CONTROL_PROMPTS } from "../page/missionControlPrompts";

export default function MobilePages({
  pageIndex,
  setPageIndex,
}: {
  pageIndex: number;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  void pageIndex;
  void setPageIndex;

  return (
    <div className="flex flex-col w-full">
      <Landing setPageIndex={setPageIndex} />
    </div>
  );
}
