import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./AnimatedPageTranscript.module.css";

const MISSION_PARAGRAPH_DURATION_MS = 680;
const MISSION_PARAGRAPH_STAGGER_MS = 680;
const TYPE_SPEED_MS = 3;
const ANIMATION_TOGGLE_STORAGE_KEY = "portfolio-transcript-animations-enabled";

export default function AnimatedPageTranscript({
  missionControlLines,
  vincentAiLines,
  processHighlights,
  resetKey,
}: {
  missionControlLines: string[];
  vincentAiLines: string[];
  processHighlights: React.ReactNode;
  resetKey?: number;
}) {
  const hasVincentLines = vincentAiLines.length > 0;
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    return (
      window.localStorage.getItem(ANIMATION_TOGGLE_STORAGE_KEY) !== "false"
    );
  });
  const [typedLines, setTypedLines] = useState<string[]>(() =>
    isAnimationEnabled ? vincentAiLines.map(() => "") : [...vincentAiLines],
  );
  const [activeLineIndex, setActiveLineIndex] = useState<number | null>(null);
  const [animationRunKey, setAnimationRunKey] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(
    () => !hasVincentLines || !isAnimationEnabled,
  );
  const [showProcessHighlights, setShowProcessHighlights] = useState(
    () => !hasVincentLines || !isAnimationEnabled,
  );

  const isInitialResetRef = useRef(true);

  // Reset animation state when resetKey changes (used by pages that don't remount this component on navigation)
  useEffect(() => {
    if (resetKey === undefined) {
      return;
    }

    if (isInitialResetRef.current) {
      isInitialResetRef.current = false;
      return;
    }

    if (isAnimationEnabled) {
      setTypedLines(vincentAiLines.map(() => ""));
      setActiveLineIndex(null);
      setIsTypingComplete(!hasVincentLines);
      setShowProcessHighlights(!hasVincentLines);
      setAnimationRunKey((previousKey) => previousKey + 1);
      return;
    }

    setTypedLines([...vincentAiLines]);
    setActiveLineIndex(null);
    setIsTypingComplete(true);
    setShowProcessHighlights(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetKey]);

  const missionAnimationEndDelay = useMemo(() => {
    const totalParagraphs = missionControlLines.length;

    return (
      (totalParagraphs - 1) * MISSION_PARAGRAPH_STAGGER_MS +
      MISSION_PARAGRAPH_DURATION_MS
    );
  }, [missionControlLines.length]);

  useEffect(() => {
    if (!hasVincentLines || !isAnimationEnabled) {
      return;
    }

    let lineIndex = 0;
    let characterIndex = 0;
    let typingInterval: number | null = null;
    const updatedLines = vincentAiLines.map(() => "");

    const startTypingTimeout = window.setTimeout(() => {
      setActiveLineIndex(0);

      typingInterval = window.setInterval(() => {
        const currentLine = vincentAiLines[lineIndex] ?? "";

        if (characterIndex < currentLine.length) {
          characterIndex += 1;
          updatedLines[lineIndex] = currentLine.slice(0, characterIndex);
          setTypedLines([...updatedLines]);
          return;
        }

        if (lineIndex < vincentAiLines.length - 1) {
          lineIndex += 1;
          characterIndex = 0;
          setActiveLineIndex(lineIndex);
          return;
        }

        if (typingInterval !== null) {
          window.clearInterval(typingInterval);
        }
        setActiveLineIndex(null);
        setIsTypingComplete(true);
      }, TYPE_SPEED_MS);
    }, missionAnimationEndDelay);

    return () => {
      window.clearTimeout(startTypingTimeout);

      if (typingInterval !== null) {
        window.clearInterval(typingInterval);
      }
    };
  }, [
    animationRunKey,
    hasVincentLines,
    isAnimationEnabled,
    missionAnimationEndDelay,
    vincentAiLines,
  ]);

  useEffect(() => {
    if (!isTypingComplete || !isAnimationEnabled) {
      return;
    }

    const highlightDelayTimeout = window.setTimeout(() => {
      setShowProcessHighlights(true);
    }, 400);

    return () => {
      window.clearTimeout(highlightDelayTimeout);
    };
  }, [isAnimationEnabled, isTypingComplete]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(
      ANIMATION_TOGGLE_STORAGE_KEY,
      String(isAnimationEnabled),
    );
  }, [isAnimationEnabled]);

  const handleToggleAnimations = () => {
    const nextAnimationEnabled = !isAnimationEnabled;

    setIsAnimationEnabled(nextAnimationEnabled);

    if (nextAnimationEnabled) {
      setTypedLines(vincentAiLines.map(() => ""));
      setActiveLineIndex(null);
      setIsTypingComplete(!hasVincentLines);
      setShowProcessHighlights(!hasVincentLines);
      setAnimationRunKey((previousKey) => previousKey + 1);
      return;
    }

    setTypedLines(vincentAiLines);
    setActiveLineIndex(null);
    setIsTypingComplete(true);
    setShowProcessHighlights(true);
  };

  const areProcessHighlightsVisible =
    !isAnimationEnabled || showProcessHighlights;

  return (
    <>
      <div className="flex flex-col gap-2 md:w-fit w-full">
        <div className="items-center gap-3 md:flex hidden">
          <h4 className="text-sky-300 font-bold">{"// Mission Control:"}</h4>
          <button
            type="button"
            role="switch"
            aria-checked={isAnimationEnabled}
            onClick={handleToggleAnimations}
            className={`${styles.animationSwitch} ${
              !isAnimationEnabled ? styles.animationSwitchOff : ""
            }`.trim()}
          >
            <span
              className={`${styles.switchTrack} ${
                !isAnimationEnabled ? styles.switchTrackOff : ""
              }`.trim()}
              aria-hidden="true"
            >
              <span
                className={`${styles.switchThumb} ${
                  !isAnimationEnabled ? styles.switchThumbOff : ""
                }`.trim()}
              />
            </span>
            <span className={styles.switchLabel}>
              {isAnimationEnabled ? "Text Delay" : "Text Delay"}
            </span>
          </button>
        </div>
        {missionControlLines.map((line, index) => (
          <p
            key={`${animationRunKey}-${line}-${index}`}
            className={isAnimationEnabled ? styles.missionParagraph : ""}
            style={
              isAnimationEnabled
                ? {
                    animationDelay: `${index * MISSION_PARAGRAPH_STAGGER_MS}ms`,
                  }
                : undefined
            }
          >
            {line}
          </p>
        ))}
      </div>
      <div className="w-full h-px border-b border-white/30 self-center md:inline hidden"></div>
      <div className="flex flex-col gap-2 h-full md:w-fit w-full">
        <h4 className="text-sky-200 font-bold">{"// Vincent AI:"}</h4>
        {typedLines.map((line, index) => {
          const isActiveLine = activeLineIndex === index;
          const typingClassName = isActiveLine
            ? `${styles.typingParagraph} ${styles.typingActive}`
            : styles.typingParagraph;

          return (
            <p key={`vincent-line-${index}`} className={typingClassName}>
              {line}
            </p>
          );
        })}
        <div className="flex flex-col gap-2">
          {processHighlights && (
            <p
              className={`text-white/60 text-xs tracking-wide mt-auto -mb-1 ${styles.processHighlightRow} ${areProcessHighlightsVisible ? styles.processHighlightRowVisible : ""}`.trim()}
            >
              TASK
            </p>
          )}

          <div
            className={`flex md:flex-row flex-col items-center rounded-lg pb-2 ${styles.processHighlightRow} ${
              areProcessHighlightsVisible
                ? styles.processHighlightRowVisible
                : ""
            }`.trim()}
          >
            {processHighlights}
          </div>
        </div>
      </div>
    </>
  );
}
