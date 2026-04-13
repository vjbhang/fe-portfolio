import { useEffect, useMemo, useState } from "react";
import styles from "./AnimatedPageTranscript.module.css";

const MISSION_PARAGRAPH_DURATION_MS = 750;
const MISSION_PARAGRAPH_STAGGER_MS = 680;
const TYPE_SPEED_MS = 5;

export default function AnimatedPageTranscript({
  missionControlLines,
  vincentAiLines,
  processHighlights,
}: {
  missionControlLines: string[];
  vincentAiLines: string[];
  processHighlights: React.ReactNode;
}) {
  const hasVincentLines = vincentAiLines.length > 0;
  const [typedLines, setTypedLines] = useState<string[]>(() =>
    vincentAiLines.map(() => ""),
  );
  const [activeLineIndex, setActiveLineIndex] = useState<number | null>(null);
  const [isTypingComplete, setIsTypingComplete] = useState(
    () => !hasVincentLines,
  );
  const [showProcessHighlights, setShowProcessHighlights] = useState(
    () => !hasVincentLines,
  );

  const missionAnimationEndDelay = useMemo(() => {
    const totalParagraphs = missionControlLines.length;

    return (
      (totalParagraphs - 1) * MISSION_PARAGRAPH_STAGGER_MS +
      MISSION_PARAGRAPH_DURATION_MS
    );
  }, [missionControlLines.length]);

  useEffect(() => {
    if (!hasVincentLines) {
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
  }, [hasVincentLines, missionAnimationEndDelay, vincentAiLines]);

  useEffect(() => {
    if (!isTypingComplete) {
      return;
    }

    const highlightDelayTimeout = window.setTimeout(() => {
      setShowProcessHighlights(true);
    }, 400);

    return () => {
      window.clearTimeout(highlightDelayTimeout);
    };
  }, [isTypingComplete]);

  return (
    <>
      <div className="flex flex-col gap-2">
        <h4 className="text-sky-300 font-bold">{"// Mission Control:"}</h4>
        {missionControlLines.map((line, index) => (
          <p
            key={`${line}-${index}`}
            className={styles.missionParagraph}
            style={{
              animationDelay: `${index * MISSION_PARAGRAPH_STAGGER_MS}ms`,
            }}
          >
            {line}
          </p>
        ))}
      </div>
      <div className="w-full h-px border-b border-white/30 self-center"></div>
      <div className="flex flex-col gap-2 h-full">
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
        <p
          className={`text-white/60 text-xs tracking-wide mt-auto -mb-1 ${styles.processHighlightRow} ${showProcessHighlights ? styles.processHighlightRowVisible : ""}`.trim()}
        >
          TASK
        </p>

        <div
          className={`flex flex-row items-center rounded-lg pb-2 ${styles.processHighlightRow} ${
            showProcessHighlights ? styles.processHighlightRowVisible : ""
          }`.trim()}
        >
          {processHighlights}
        </div>
      </div>
    </>
  );
}
