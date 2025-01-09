import { BackgroundBeams } from "../ui/background-beams";
import { Button } from "./button";
import { buttonVariants } from "./button";
import { ChevronDown } from "lucide-react";
import { TypewriterEffect } from "./typewriter-effect";

export function BackgroundBeamsDemo() {

  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "TechLuminix",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased inset-0 z-0">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        </h1>
        <p></p>

        <TypewriterEffect words={words}/>
        
      <BackgroundBeams />
    </div>
    </div>
  );
}
