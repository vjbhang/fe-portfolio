import Image from "next/image";
import ShakyText from "../elements/ShakyText";

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
        <div className="flex flex-col bg-black/50 items-center justify-center w-120 h-70 rounded-lg gap-4 ml-[6vw]">
          <div className="flex flex-col items-center gap-1 text-center text-white text-lg">
            <div className="flex justify-start items-center flex-row gap-40 mr-auto">
              <Image
                src="/scrollmouseSVG.svg"
                alt="scroll mouse"
                width={62}
                height={127}
                className="w-10 h-10 ml-10"
              />
              <div className="flex flex-row items-center gap-1">
                <Image
                  src="/arrow-left-keypad.svg"
                  alt="left arrow key"
                  width={62}
                  height={127}
                  className="w-6 h-6"
                />
                <Image
                  src="/arrow-right-keypad.svg"
                  alt="right arrow key"
                  width={62}
                  height={127}
                  className="w-6 h-6"
                />
              </div>
            </div>
            <p>Scroll down or use left/right arrow keys to</p>
            <p className="text-amber-500 font-bold text-xl font-inconsolata text-center">
              <ShakyText content={"INITIATE LAUNCH"} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
