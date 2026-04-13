export default function ProcessHighlightLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start gap-2 bg-black/40 rounded-lg border border-solid border-white/20 p-4 h-48 min-w-32">
      {children}
    </div>
  );
}
