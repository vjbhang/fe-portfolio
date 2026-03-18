"use client";

import React from "react";
import BadgeImg from "../assets/badge.png";

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
          className={`flex-1 flex flex-row items-center justify-center px-4 py-2 last:border-r-0 border-gray-300 transition-all text-xl ${
            selected === option ? "font-bold" : "font-normal"
          }`}
        >
          <p className="text-white">{option}</p>
          {selected === option && (
            <img
              src={BadgeImg.src}
              alt="badge"
              className="w-4 h-4 inline ml-2"
            />
          )}
        </button>
      ))}
    </div>
  );
};
