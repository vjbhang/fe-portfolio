import styles from "./ScrollIndicator.module.css";

type CircleProps = {
  filled?: boolean;
  graded?: boolean;
  direction?: "left" | "right";
};

type DiamondProps = {
  filled?: boolean;
};

function Circle({ filled = false, graded = false, direction }: CircleProps) {
  return (
    <div
      className={`w-4 h-4 transition delay-150 duration-300 ease-in transform rotate-45 ${filled ? "bg-white/50" : graded && `${direction === "left" ? "bg-linear-to-l from-transparent to-white/50" : "bg-linear-to-r from-white/50 to-transparent"}`} border border-white linear`}
    />
  );
}

function Diamond({ filled = false }: DiamondProps) {
  return (
    <div
      className={`w-6 h-6 ${filled ? "bg-white" : "bg-transparent"} transform rotate-45 border border-white ${styles["blob"]} ${styles["white"]}`}
    />
  );
}

export default function ScrollIndicator({
  scrollDeltaYState,
}: {
  scrollDeltaYState: number;
}) {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="flex gap-3">
        <Circle graded={scrollDeltaYState <= -1100} />
        <Circle filled={scrollDeltaYState <= -800} />
        <Circle filled={scrollDeltaYState <= -400} />
      </div>
      <Diamond />
      <div className="flex gap-3">
        <Circle filled={scrollDeltaYState >= 400} />
        <Circle filled={scrollDeltaYState >= 800} />
        <Circle graded={scrollDeltaYState >= 1100} />
      </div>
    </div>
  );
}
