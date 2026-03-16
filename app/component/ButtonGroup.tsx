"use client";

import React from "react";

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
  const handleSelect = (option: string) => {
    onSelect(option);
  };

  return (
    <div className="flex border border-gray-300 overflow-hidden w-[588px]">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => handleSelect(option)}
          className={`flex-1 px-4 py-2 last:border-r-0 border-gray-300 transition-all text-xl ${
            selected === option ? "font-bold" : "font-normal"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
