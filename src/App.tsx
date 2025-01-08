import { MenubarMain } from "./components/ui/menubar-main";
import { ParallaxScrollSecondMain } from "./components/ui/parallax-second-main";
import { Spotlight } from "./components/ui/spotlight";
import { Hero } from "./components/ui/hero";
import { WobbleCardMain } from "./components/ui/wobble-card-main";
import { LayoutGridMain } from "./components/ui/layout-grid-main";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white">
      <div className="sticky top-0 z-50 w-full">
        <MenubarMain />
      </div>
      <Hero />
      <Spotlight />
      <ParallaxScrollSecondMain />
      <WobbleCardMain/>
      <LayoutGridMain></LayoutGridMain>
    </main>
  );
}




export default App;
