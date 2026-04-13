import styles from "./MouseScroll.module.css";

export default function MouseScroll({
  scrollDeltaYState,
}: {
  scrollDeltaYState: number;
}) {
  void scrollDeltaYState;

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
