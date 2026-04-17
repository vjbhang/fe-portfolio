import Landing from "../page/0-Landing";

export default function MobilePages({
  pageIndex,
  setPageIndex,
  isMobileViewport,
}: {
  pageIndex: number;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
  isMobileViewport: boolean;
}) {
  void pageIndex;
  void setPageIndex;

  return (
    <div className="flex flex-col w-full">
      <Landing
        setPageIndex={setPageIndex}
        isMobileViewport={isMobileViewport}
      />
    </div>
  );
}
