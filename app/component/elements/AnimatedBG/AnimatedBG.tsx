"use client";

import { useEffect } from "react";
import styles from "./AnimatedBG.module.css";

const BACKGROUND_PIXEL_ATTRS = {
  "data-gap": "7",
  "data-speed": "80",
  "data-colors": "#36373240, #3D3D3D40, #29292940, #33333340",
  "data-no-focus": true,
};

export default function AnimatedBG() {
  useEffect(() => {
    import("./PixelCanvasBackground.js");
  }, []);

  return (
    <pixel-canvas-background
      className={styles["card-container"]}
      {...BACKGROUND_PIXEL_ATTRS}
    />
  );
}
