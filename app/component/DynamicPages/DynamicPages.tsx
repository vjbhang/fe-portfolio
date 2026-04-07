"use client";

import { useEffect, useState } from "react";
import About from "../page/about";
import Landing from "../page/landing";
import styles from "./DynamicPages.module.css";

const EXIT_DURATION_MS = 450;

export default function DynamicPages({
  pageIndex,
  setPageIndex,
}: {
  pageIndex: number;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [displayedPageIndex, setDisplayedPageIndex] = useState(pageIndex);

  const pages = [
    <Landing key="landing" />,
    <div key="spacer-1" />,
    <div key="spacer-2" />,
    <div key="spacer-3" />,
    <div key="spacer-4" />,
    <div key="spacer-5" />,
    <div key="spacer-6" />,
    <div key="spacer-7" />,
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
    pageIndex !== displayedPageIndex ? styles.slideOut : styles.slideIn;

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
