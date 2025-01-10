import React from "react";
import { Hero } from "./hero";
import { LayoutGridMain } from "./layout-grid-main";
import { ParallaxScroll } from "./parallax-scroll";
import { ParallaxScrollSecondMain } from "./parallax-second-main";
import ParallaxScrollDemo from "./parallax-scroll-main";
import { TypewriterEffectDemo } from "./typewriter-effect-main";
import { TypewriterEffectSmooth } from "./typewriter-effect";


export function DotBackgroundDemo() {


  return (
    <div className="h-[50rem] w-full bg-black bg-dot-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-row space-x-10">
        <div className="flex flex-row w-auto my-64 pl-20">
          <TypewriterEffectDemo></TypewriterEffectDemo>
        </div>
        <div className="relative my-28">
          <ParallaxScrollDemo></ParallaxScrollDemo>
        </div>
      </div>
    </div>
  );
}
