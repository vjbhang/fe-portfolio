"use client";

import Image from "next/image";
import { useEffect, type CSSProperties } from "react";
import styles from "./AnimatedButton.module.css";
import BadgeImg from "../../../assets/badge.png";

type PixelAttributes = {
  "data-gap"?: string;
  "data-speed"?: string;
  "data-colors"?: string;
  "data-no-focus"?: boolean;
};

type CardConfig = {
  style: CSSProperties;
  pixelAttrs: PixelAttributes;
};

const CARD_CONFIGS: CardConfig[] = [
  {
    style: { width: "100%", height: "100%" },
    pixelAttrs: {},
  },
  {
    style: { "--active-color": "#e0f2fe", width: "100%", height: "100%" } as CSSProperties,
    pixelAttrs: {
      "data-gap": "10",
      "data-speed": "25",
      "data-colors": "#e0f2fe, #7dd3fc, #0ea5e9",
    },
  },
  {
    style: { "--active-color": "#fef08a", width: "100%", height: "100%" } as CSSProperties,
    pixelAttrs: {
      "data-gap": "3",
      "data-speed": "20",
      "data-colors": "#fef08a, #fde047, #eab308",
    },
  },
  {
    style: { "--active-color": "#fecdd3", width: "100%", height: "100%" } as CSSProperties,
    pixelAttrs: {
      "data-gap": "6",
      "data-speed": "80",
      "data-colors": "#fecdd3, #fda4af, #e11d48",
      "data-no-focus": true,
    },
  },
];

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
    import("./PixelCanvas.js");
  }, []);
  const cardConfig = CARD_CONFIGS[cardIndex] ?? CARD_CONFIGS[0];

  return (
    <div className={styles["card-container"]}>
      <div className={styles.card} style={cardConfig.style}>
        <div className="flex items-center justify-center opacity-100 z-10">
          <p className="text-white">{option}</p>
          {selected && (
            <Image
              src={BadgeImg.src}
              alt="badge"
              width={BadgeImg.width}
              height={BadgeImg.height}
              className="w-4 h-4 inline ml-2"
            />
          )}
        </div>
        <pixel-canvas {...cardConfig.pixelAttrs} />
      </div>
    </div>
  );
}
