"use client";

import { useEffect, useState } from "react";
import Landing from "../page/Desktop/0-Landing";
import Liftoff from "../page/Desktop/1-LiftOff";
import Nominal from "../page/Desktop/2-Nominal";
import Supersonic from "../page/Desktop/3-Supersonic";
import Orbit from "../page/Desktop/4-Orbit";
import ReEntry from "../page/Desktop/5-ReEntry";
import Interface from "../page/Desktop/6-Interface";
import EntryBurn from "../page/Desktop/7-EntryBurn";
import About from "../page/Desktop/8-About";
import styles from "./DynamicPages.module.css";

const EXIT_DURATION_MS = 450;

function isSpacerPageIndex(pageIndex: number) {
  return pageIndex > 0 && pageIndex < 8;
}

export default function DynamicPages({
  pageIndex,
  setPageIndex,
}: {
  pageIndex: number;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [displayedPageIndex, setDisplayedPageIndex] = useState(pageIndex);

  const pages = [
    <Landing key="landing" setPageIndex={setPageIndex} />,
    <Liftoff key="liftoff" setPageIndex={setPageIndex} />,
    <Nominal key="nominal" setPageIndex={setPageIndex} />,
    <Supersonic key="supersonic" setPageIndex={setPageIndex} />,
    <Orbit key="orbit" setPageIndex={setPageIndex} />,
    <ReEntry key="reentry" setPageIndex={setPageIndex} />,
    <Interface key="interface" setPageIndex={setPageIndex} />,
    <EntryBurn key="entryburn" setPageIndex={setPageIndex} />,
    <About key="about" setPageIndex={setPageIndex} />,
  ];

  useEffect(() => {
    if (pageIndex === displayedPageIndex) {
      return;
    }

    const exitTimer = window.setTimeout(() => {
      setDisplayedPageIndex(pageIndex);
    }, EXIT_DURATION_MS);

    return () => window.clearTimeout(exitTimer);
  }, [displayedPageIndex, pageIndex]);

  const animationClassName =
    pageIndex !== displayedPageIndex
      ? styles.slideOut
      : isSpacerPageIndex(displayedPageIndex)
        ? styles.slideInSpacer
        : styles.slideIn;

  return (
    <div className={styles.container}>
      <div
        key={displayedPageIndex}
        className={`${styles.page} ${animationClassName}`.trim()}
      >
        {pages[displayedPageIndex]}
      </div>
    </div>
  );
}
