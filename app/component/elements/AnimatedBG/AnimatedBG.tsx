"use client";

import { useEffect } from "react";
import styles from "./AnimatedBG.module.css";

export default function AnimatedButton() {
  useEffect(() => {
    // Dynamically import PixelCanvas only on client
    import("./PixelCanvasBackground.js");
  }, []);
  // Example data for dynamic grid
  const cards = [
    {
      key: "layout",
      pixelProps: {},
      button: "Layout",
      style: { width: "100%", height: "100%" },
      pixelAttrs: {},
    },
    {
      key: "code",
      pixelProps: {
        "data-gap": "10",
        "data-speed": "25",
        "data-colors": "#e0f2fe, #7dd3fc, #0ea5e9",
      },
      button: "Code",
      style: { "--active-color": "#e0f2fe", width: "100%", height: "100%" },
      pixelAttrs: {
        "data-gap": "10",
        "data-speed": "25",
        "data-colors": "#e0f2fe, #7dd3fc, #0ea5e9",
      },
    },
    {
      key: "command",
      pixelProps: {
        "data-gap": "3",
        "data-speed": "20",
        "data-colors": "#fef08a, #fde047, #eab308",
      },
      button: "Command",
      style: { "--active-color": "#fef08a", width: "100%", height: "100%" },
      pixelAttrs: {
        "data-gap": "3",
        "data-speed": "20",
        "data-colors": "#fef08a, #fde047, #eab308",
      },
    },
    {
      key: "dropper",
      pixelProps: {
        "data-gap": "6",
        "data-speed": "80",
        "data-colors": "#fecdd3, #fda4af, #e11d48",
        "data-no-focus": true,
      },
      button: "Dropper",
      style: { "--active-color": "#fecdd3", width: "100%", height: "100%" },
      pixelAttrs: {
        "data-gap": "6",
        "data-speed": "80",
        "data-colors": "#fecdd3, #fda4af, #e11d48",
        "data-no-focus": true,
      },
    },
  ];

  return (
    // <div className={styles["card-container"]}>
    <pixel-canvas-background
      className={styles["card-container"]}
      {...cards[3].pixelAttrs}
    />
    // </div>
  );
}
