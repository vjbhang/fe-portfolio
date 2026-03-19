export default function HamburgerMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    isOpen && (
      <nav className="absolute bg-opacity-80 bg-black top-0 left-0 w-full h-full z-9 flex flex-col items-center justify-center gap-8 text-white text-2xl">
        <a href="#landing">Landing</a>
        <a href="#work">Work</a>
        <a href="#about">About</a>
      </nav>
    )
  );
}
