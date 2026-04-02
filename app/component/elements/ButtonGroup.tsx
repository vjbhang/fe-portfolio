"use client";

import React from "react";
import AnimatedButton from "./AnimatedButton/AnimatedButton";

interface ButtonGroupProps {
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  options,
  selected,
  onSelect,
}) => {
  return (
    <div className="flex overflow-hidden w-147 h-12 z-7 bg-transparent">
      {options.map((option, index) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className={`h-full w-full flex-1 flex flex-row items-center justify-center last:border-r-0 border-gray-300 transition-all text-xl ${
            selected === option ? "font-bold" : "font-normal"
          }`}
        >
          <AnimatedButton
            cardIndex={index}
            selected={selected === option}
            option={option}
          />
        </button>
      ))}
    </div>
  );
};
