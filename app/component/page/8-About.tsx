import { useEffect } from "react";

const LAST_PAGE_INDEX = 8;

export default function About({
  setPageIndex,
}: {
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "r" || e.key === "R") {
        setPageIndex((previousPageIndex) =>
          previousPageIndex === LAST_PAGE_INDEX ? 0 : previousPageIndex,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setPageIndex]);

  return (
    <div className="flex w-full h-full pb-22 pointer-events-none">
      <div className="flex flex-[1.8] flex-col"></div>
      <div className="flex flex-[2.2] flex-col justify-end pb-8 w-full h-77%] mr-[4.5%]">
        <div className="flex flex-col gap-2 text-md text-white font-d-din w-full h-full">
          <h4 className="text-lg font-bold">ABOUT ME</h4>
          <div className="flex flex-row gap-8 w-full h-full">
            <div className="flex flex-col gap-2">
              <p>
                Ever since I picked up programming, I have had an intense
                fascination for how code - despite its syntactical rigidness -
                translates into usable human interfaces and visually engaging
                media forms.{" "}
              </p>
              <p>
                My previous experiences in software engineering were projects
                involving computer vision, measurement devices, and building
                dashboard-like interfaces. Many hours were spent coding and I
                have experienced my share of burnout as a developer.
              </p>
              <p>
                Reflecting back based on the way tech is shaping today, I humbly
                share my thoughts:
              </p>
              <p>
                The world of tech is evolving quickly. It has been the case
                where speed of implementation was as important as setting up the
                architecture simply because. Now that is no longer the case with
                the help of multiple powerful AI code generators. Today, the 10×
                engineer takes on a totally different definition.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                I believe this is the perfect time for everyone to benefit from
                digital-based creative technology. It is no longer the case
                where you need a whole team of developers to build a product.{" "}
                <span className="font-bold">
                  Building digital solutions has become democratized
                </span>{" "}
                through these AI tools, just like what the Unity Engine has done
                for Game Developers.{" "}
              </p>
              <p>
                But still, accessibility remains limited for those outside the
                tech ecosystem. I believe freelancers are in a unique position
                to act as intermediaries, translating and implementing AI
                capabilities in ways that are practical and usable. In doing so,
                they can{" "}
                <span className="font-bold">
                  empower individuals to rapidly and affordably bring their
                  ideas and visions to life.
                </span>
              </p>
              <p className="italic">
                Let's work together to bring your ideas to life <b>quickly</b>.
              </p>
              <div className="flex flex-row items-center gap-4 justify-center bg-[#7dd3fc14] border-[#7DD3FC] border border-solid rounded-3xl text-[#bae6fd] px-2 py-1 w-fit mt-1">
                <p className="font-inconsolata">Contact/Inquiries</p>
                <p className="font-inconsolata text-md font-bold">
                  vjbstudio@pm.me
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
