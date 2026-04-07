export default function About({
  setPageIndex,
}: {
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex w-full h-full pb-22">
      <div className="flex flex-[1.2] flex-col justify-end pb-8 w-full h-full">
        <div className="flex flex-col w-full gap-6">
          <p className="text-md text-white">
            I picked up programming when I was a kid and ever since, I have had
            an intense fascination with how code - despite its heavily syntax-ed
            nature - translates into human usable interfaces and even visually
            engaging media forms.{" "}
          </p>
          <p className="text-md text-white">
            Having experience with implementing function-heavy projects - such
            as with computer vision, measurement devices, or dashboard UIs - I
            am now bringing that software development experience over as a
            creative freelancer!
          </p>
          <p className="text-md text-white">
            I am open to taking on projects (if not already taken). Don’t
            hesitate to reach out!{" "}
          </p>
          <p className="underline text-white">CONTACT</p>
          <p className="text-md text-white">pixelr_vincent@pm.me</p>
        </div>
        <div className="mt-auto"></div>
      </div>
      <div className="flex flex-[0.8]"></div>
      <div className="flex flex-1"></div>
    </div>
  );
}
