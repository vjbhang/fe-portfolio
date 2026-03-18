"use client";

import { useEffect } from "react";
import styles from "./AnimatedButton.module.css";
import BadgeImg from "../../../assets/badge.png";

export default function AnimatedButton({
  cardIndex = 0,
  selected = false,
  option = "",
}: {
  cardIndex: number;
  selected: boolean;
  option: string;
}) {
  useEffect(() => {
    // Dynamically import PixelCanvas only on client
    import("./PixelCanvas.js");
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
    <div className={styles["card-container"]}>
      {/* {cards.map((card) => ( */}
      <div
        className={styles.card}
        style={cards[cardIndex].style as React.CSSProperties}
      >
        <div className="flex items-center justify-center opacity-100 z-10">
          <p className="text-white">{option}</p>
          {selected && (
            <img
              src={BadgeImg.src}
              alt="badge"
              className="w-4 h-4 inline ml-2"
            />
          )}
        </div>
        <pixel-canvas {...cards[cardIndex].pixelAttrs} />
        {/* <button>{cards[cardIndex].button}</button> */}
      </div>
    </div>
  );
}
