export default function Landing() {
  return (
    <div className="flex flex-col w-full h-full justify-center gap-12 font-inconsolata">
      <div className="flex flex-col gap-8 mb-auto">
        <h1 className="text-5xl text-white">I build your Digital Spaceship</h1>
        <div className="flex gap-12 items-center">
          <h4 className="text-xl text-white font-bold">
            Every Pixel, Intentional
          </h4>
          <h5 className="text-m mt-1 text-white font-bold">
            -- Because Every Detail Matters
          </h5>
        </div>
        <div className="flex flex-col bg-black/50 items-center justify-center w-78.5 h-70 rounded-lg gap-4 ml-[6vw]">
          <img
            src="/scrollmouseSVG.svg"
            alt="scroll mouse"
            className="w-24 h-24"
          />
          <div className="flex flex-col items-center gap-1 text-center text-white text-lg">
            <p>Begin scrolling down</p>
            <p>to initiate</p>
            <p className="text-launchred">Spaceship Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
}
