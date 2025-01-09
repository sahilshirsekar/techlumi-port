import React from "react";
import { Hero } from "./hero";

export function DotBackgroundDemo() {
  return (
    <div className="h-[50rem] w-full bg-black relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text  bg-gradient-to-b from-neutral-300 to-neutral-600 py-8">
        <Hero></Hero>
      </div>
    </div>
  );
}
