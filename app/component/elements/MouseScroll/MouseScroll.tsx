import styles from "./MouseScroll.module.css";

export default function MouseScroll({
  scrollDeltaYState,
}: {
  scrollDeltaYState: number;
}) {
  function Circle({
    filled = false,
    graded = false,
    direction,
  }: {
    filled?: boolean;
    graded?: boolean;
    direction?: "left" | "right";
  }) {
    return (
      <div
        className={`w-3.5 h-3.5 transition delay-150 duration-300 ease-in rounded-xs ${filled ? "bg-cyan-300/70" : graded && `${direction === "left" ? "bg-linear-to-l from-cyan-300/70 to-transparent" : "bg-linear-to-r from-cyan-300/70 to-transparent"}`} border border-white linear`}
      />
    );
  }

  return (
    <div className="flex items-center justify-center gap-1.5">
      <div className="flex gap-0.5 pb-5">
        <Circle graded={scrollDeltaYState <= -900} direction="left" />
        <Circle filled={scrollDeltaYState <= -800} />
        <Circle filled={scrollDeltaYState <= -400} />
      </div>
      <div className={"text-center"}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
          <div className={styles.scroll}></div>
          <div className={styles.scroll2}></div>
          <div className={styles.scroll3}></div>
        </div>
      </div>
      <div className="flex gap-0.5 pb-5">
        <Circle filled={scrollDeltaYState >= 400} />
        <Circle filled={scrollDeltaYState >= 800} />
        <Circle graded={scrollDeltaYState >= 900} />
      </div>
    </div>
  );
}
