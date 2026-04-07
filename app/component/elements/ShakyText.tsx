import { useEffect, useState } from "react";

const MAX_OFFSET = 1; // px

function buildOffsets(numOffsets: number): Array<[number, number]> {
  const offsets: Array<[number, number]> = [];

  for (let index = 0; index < numOffsets; index += 1) {
    offsets.push([
      Math.floor(Math.random() * (MAX_OFFSET + 0.5)),
      Math.floor(Math.random() * (MAX_OFFSET + 0.5)),
    ]);
  }

  return offsets;
}

export default function ShakyText({ content }: { content: string }) {
  const [offsets, setOffsets] = useState(() => buildOffsets(content.length));

  useEffect(() => {
    const interval = setInterval(
      () => setOffsets(buildOffsets(content.length)),
      50,
    );
    return () => clearInterval(interval);
  }, [content.length]);

  return (
    <span aria-label={content} className="whitespace-nowrap relative">
      {content.split("").map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          aria-hidden
          className="relative"
          style={{
            left: `${offsets[index][0] - MAX_OFFSET / 2}px`,
            bottom: `${offsets[index][1] - MAX_OFFSET / 2}px`,
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}
