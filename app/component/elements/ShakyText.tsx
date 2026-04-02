import { useEffect, useState } from "react";

const MAX_OFFSET = 1; // px

export default function ShakyText({ content }: { content: string }) {
  const generateOffsets = (numOffsets: number) => {
    let output = [];
    for (let i = 0; i < numOffsets; i++) {
      output.push([
        Math.floor(Math.random() * (MAX_OFFSET + 0.5)),
        Math.floor(Math.random() * (MAX_OFFSET + 0.5)),
      ]);
    }
    return output;
  };

  const [offsets, setOffsets] = useState(generateOffsets(content.length));
  useEffect(() => {
    const interval = setInterval(
      () => setOffsets(generateOffsets(content.length)),
      50,
    );
    return () => clearInterval(interval);
  }, [content.length]);

  return (
    <span aria-label={content} className="whitespace-nowrap relative">
      {content.split("").map((letter, index) => (
        <span
          aria-hidden
          className="relative"
          style={{
            left: (offsets[index][0] - MAX_OFFSET / 2).toString() + "px",
            bottom: (offsets[index][1] - MAX_OFFSET / 2).toString() + "px",
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}
