export default function ProcessHighlightLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex md:flex-col flex-row items-start gap-2 bg-black/40 rounded-lg border border-solid border-white/20 p-4 md:h-48 h-fit md:min-w-32 w-full md:max-w-50">
      {children}
    </div>
  );
}
