import styles from "./MouseScroll.module.css";

type CircleProps = {
  filled?: boolean;
  graded?: boolean;
  direction?: "left" | "right";
};

function Circle({ filled = false, graded = false, direction }: CircleProps) {
  return (
    <div
      className={`w-3.5 h-3.5 transition delay-150 duration-300 ease-in rounded-xs ${filled ? "bg-cyan-300/70" : graded && `${direction === "left" ? "bg-linear-to-l from-cyan-300/70 to-transparent" : "bg-linear-to-r from-cyan-300/70 to-transparent"}`} border border-white linear`}
    />
  );
}

export default function MouseScroll({
  scrollDeltaYState,
}: {
  scrollDeltaYState: number;
}) {
  return (
    <div className="flex items-center">
      <div className={"text-center"}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
          <div className={styles.scroll}></div>
          <div className={styles.scroll2}></div>
          <div className={styles.scroll3}></div>
        </div>
      </div>
    </div>
  );
}
