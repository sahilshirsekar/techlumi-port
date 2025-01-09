import { MenubarMain } from "./components/ui/menubar-main";
import { Spotlight } from "./components/ui/spotlight";
import { Hero } from "./components/ui/hero";
import { LayoutGridMain } from "./components/ui/layout-grid-main";
import { Services } from "./components/ui/services";
import UpperFooter from "./components/ui/upper-footer";
import { DotBackgroundDemo } from "./components/ui/dot-background";
import { BackgroundBeams } from "./components/ui/background-beams";
import { BackgroundBeamsDemo } from "./components/ui/background-beams-main";

function App() {
  return (
    <>
       <div className="relative min-h-screen bg-black text-white">
      <div className="absolute inset-0 z-0">
        <BackgroundBeamsDemo />
      </div>
      
      <div className="relative z-10">
        <header className="sticky top-0 z-50">
          <MenubarMain />
        </header>
        <div className="pt-48"></div>
        <main className="container mx-auto px-4 pt-96">
          <Services />
          <LayoutGridMain />
          <UpperFooter />
        </main>
      </div>
    </div>
    </>
  );
}

export default App;
