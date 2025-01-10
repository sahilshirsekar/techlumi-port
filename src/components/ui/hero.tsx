import { ChevronDown } from "lucide-react";
import { Button, buttonVariants } from "./button";

export function Hero() {

  function handleClick() {
    window.location.href = 'https://google.com'
  }
  return (
    <div className="relative items-center justify-center text-center p-40">
      <h1 className="text-8xl font-bold ">
        <span
          className="inline-block animate-fade-in-up text-gray-700 text-6xl"
          style={{ animationDelay: "0.2s" }}
        >
          Welcome to 
        </span>
        <br></br>
        {/* <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}></span>{' '} */}
              <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>TechLuminix</span>
      </h1>
      <h4 className="text-4xl font-semibold">
        <span
          className="inline-block animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
        </span>{" "}
      </h4>
      <div className="p-5">
        <button
          onClick={handleClick}
          className={buttonVariants({ variant: "ghost" , className:"text-2xl pt-8 pb-8"})}
        >
          Explore More
        </button>
      </div>
      <div>
      <Button variant="outline" size="icon" className="bg-black border-white px-10">
      <ChevronDown />
    </Button>
      </div>
      
    </div>
  );
}

