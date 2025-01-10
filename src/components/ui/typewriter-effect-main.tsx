"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { buttonVariants } from "./button";

export function TypewriterEffectDemo() {
  const words = [{
    text:"Architects",
    className: "text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text  text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 "
  },
  {
    text:"of",
  },
  {
    text:"your",
  },
  {
    text:"digital",
  },
    {
      text: "Dreams.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="">
      <TypewriterEffect words={words} />   
    </div>
  );
}
