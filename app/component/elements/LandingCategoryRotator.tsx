"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./LandingCategoryRotator.module.css";

const ROTATION_INTERVAL_MS = 6000;

type Category = {
  shortLabel: string;
  title: string;
  description: string;
};

const CATEGORIES: Category[] = [
  {
    shortLabel: "SMB",
    title: "Small and Medium-sized Businesses",
    description:
      "I help translate business needs into effective systems by coordinating AI tools, software platforms, and integrations while ensuring reliability and continuous improvement.",
  },
  {
    shortLabel: "PB",
    title: "Personal Brand",
    description:
      "I help design, build, and continuously optimize the digital systems that turn an individual's expertise, content, and audience into a scalable online business.",
  },
];

type Direction = "up" | "down";

function getDirection(currentIndex: number, nextIndex: number): Direction {
  return nextIndex > currentIndex ? "up" : "down";
}

export default function LandingCategoryRotator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<Direction>("up");
  const [animationKey, setAnimationKey] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const rotationTimeoutRef = useRef<number | null>(null);

  const clearRotationTimeout = useCallback(() => {
    if (rotationTimeoutRef.current === null) {
      return;
    }

    window.clearTimeout(rotationTimeoutRef.current);
    rotationTimeoutRef.current = null;
  }, []);

  const scheduleRotation = useCallback(
    (delayMs: number) => {
      clearRotationTimeout();

      const runRotation = () => {
        setActiveIndex((previousIndex) => {
          const nextIndex = (previousIndex + 1) % CATEGORIES.length;
          setAnimationDirection(getDirection(previousIndex, nextIndex));
          setAnimationKey((previousKey) => previousKey + 1);
          setProgressKey((previousKey) => previousKey + 1);
          return nextIndex;
        });

        rotationTimeoutRef.current = window.setTimeout(
          runRotation,
          ROTATION_INTERVAL_MS,
        );
      };

      rotationTimeoutRef.current = window.setTimeout(runRotation, delayMs);
    },
    [clearRotationTimeout],
  );

  useEffect(() => {
    if (isHovered) {
      clearRotationTimeout();
      return;
    }

    scheduleRotation(ROTATION_INTERVAL_MS);

    return () => {
      clearRotationTimeout();
    };
  }, [clearRotationTimeout, isHovered, scheduleRotation]);

  const handleCategorySelect = (nextIndex: number) => {
    if (nextIndex === activeIndex) {
      return;
    }

    setAnimationDirection(getDirection(activeIndex, nextIndex));
    setAnimationKey((previousKey) => previousKey + 1);
    setProgressKey((previousKey) => previousKey + 1);
    setActiveIndex(nextIndex);

    if (!isHovered) {
      scheduleRotation(ROTATION_INTERVAL_MS);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const activeCategory = CATEGORIES[activeIndex];
  const descriptionClassName =
    animationDirection === "up" ? styles.slideUp : styles.slideDown;

  return (
    <div
      className="flex h-19 w-xl flex-row items-start gap-6 hover:cursor-help pointer-events-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col items-center gap-1.5 justify-around">
        {CATEGORIES.map((category, index) => (
          <button
            key={category.shortLabel}
            type="button"
            onClick={() => handleCategorySelect(index)}
            className={`text-white font-bold tracking-[0.18em] transition-opacity duration-300 hover:cursor-pointer ${
              index === activeIndex ? "opacity-100" : "opacity-35"
            }`}
          >
            <span className={styles.shortLabel}>
              {category.shortLabel}
              {index === activeIndex ? (
                <span
                  key={`${category.shortLabel}-${progressKey}`}
                  className={styles.progressUnderline}
                  style={{
                    animationDuration: `${ROTATION_INTERVAL_MS}ms`,
                    animationPlayState: isHovered ? "paused" : "running",
                  }}
                />
              ) : null}
            </span>
          </button>
        ))}
      </div>
      <div className={`${styles.descriptionViewport} max-w-2xl flex-1`}>
        <div
          key={`${activeCategory.shortLabel}-${animationKey}`}
          className={`${styles.descriptionCard} ${descriptionClassName}`}
        >
          <h5 className="text-sm text-zinc-300 font-bold leading-6">
            <span className="text-white">{activeCategory.title}</span>{" "}
            {activeCategory.description}
          </h5>
        </div>
      </div>
    </div>
  );
}
