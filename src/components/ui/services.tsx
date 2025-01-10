import { AnimatedCardBackgroundHover } from "./animated-hover-bg";
import { Separator } from "./separator";
import { Button, buttonVariants } from "./button";


export function Services() {
  function handleClick() {
    window.location.href = 'https://google.com'
  }
  return (
    <div className="flex flex-row items-start text-left mx-20">
      <div className="flex flex-col items-start text-left">
        <h3 className=" text-8xl font-bold mb-4"></h3>
        Our Services
        <h1 className="text-4xl font-bold mb-4">What We do?</h1>
        <Separator></Separator>
      <p className="pt-5 w-72 text-zinc-300">
        At TechLuminix Development, we're not just an IT firm; we're your
        partners in harnessing the power of technology to transform your dreams
        into reality. Our passion for innovation and commitment to excellence drive us to offer a wide range of services that cater to your every digital need.With a talented team of developers, designers, and digital
        marketing experts, we're ready to take your project to the next level.
      </p>
      <button
          onClick={handleClick}
          className={buttonVariants({ variant: "outline" , className:"mt-10 p-6 text-2xl bg-black transform transition duration-700 ease-in-out"})}
        >
          View All Services
        </button>
      </div>
      <div>
    <AnimatedCardBackgroundHover></AnimatedCardBackgroundHover>
      </div>
      
    </div>
  );
}
