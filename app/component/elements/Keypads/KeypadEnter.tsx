export default function KeypadEnter({
  setPageIndex,
}: {
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div
      onClick={() => setPageIndex((prevIndex) => prevIndex + 1)}
      className="hover:cursor-pointer ml-auto flex flex-col items-center justify-center text-white/60 border border-solid rounded border-white/60 w-13 h-8.25"
    >
      <p className="text-xs/tight">enter ↵</p>
    </div>
  );
}
