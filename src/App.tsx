import { MenubarMain } from "./components/ui/menubar-main";
import { DotBackgroundDemo } from "./components/ui/dot-background-demo";
import { InfiniteMovingCardsDemo } from "./components/ui/infinite-moving-demo";
import { useGSAP } from '@gsap/react';

function App() {
  
  return (
    <>
      <div className="relative min-h-screen bg-black text-white">
        {/* <div className="absolute inset-0 z-0 gap-12">
          <DotBackgroundDemo />
        </div> */}
        <div className="relative z-10">
          <header className="sticky top-0 z-50">
            <MenubarMain />
          </header>
          <main className="container space-y-32 mx-auto px-4 pt-96">
            <div className="absolute inset-0 z-0 gap-12">
              <DotBackgroundDemo />
            </div>
            <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
