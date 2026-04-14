export default function GradientRotateButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative inline-flex p-0.5 rounded-xl overflow-hidden pointer-events-auto cursor-pointer"
    >
      <span className="absolute inset-0 bg-gradient-rotate animate-spin-slow opacity-70" />
      <span className="relative z-10 px-6 py-2 bg-black text-white rounded-xl">
        {children}
      </span>
    </button>
  );
}
