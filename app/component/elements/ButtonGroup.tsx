"use client";

import React from "react";
import BadgeImg from "../../assets/badge.png";
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
  const handleSelect = (option: string) => {
    onSelect(option);
  };

  return (
    <div className="flex overflow-hidden w-[588px] h-12 z-7 bg-transparent">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => handleSelect(option)}
          className={`h-full w-full flex-1 flex flex-row items-center justify-center last:border-r-0 border-gray-300 transition-all text-xl ${
            selected === option ? "font-bold" : "font-normal"
          }`}
        >
          {/* <p className="text-white">{option}</p>
            {selected === option && (
              <img
                src={BadgeImg.src}
                alt="badge"
                className="w-4 h-4 inline ml-2"
              />
            )} */}
          <AnimatedButton
            cardIndex={options.indexOf(option)}
            selected={selected === option}
            option={option}
          />
        </button>
      ))}
    </div>
  );
};
