import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "@/components/ui/image"
import { Separator } from "@radix-ui/react-menubar";

function MenubarMain() {
  return(
    <div className="flex justify-center w-full bg-opacity-50 animate-fade-in-up sticky top-0 z-50 pt-6 space-x-14" style={{ animationDelay: '0.1s'}}>
        <Menubar className="border-b backdrop-blur-md bg-opacity-50 bg-black border-gray-700 z-0 text-zinc-50 text-lg " >
          <Image src="./src/assets/logo.png" alt="Tech" className="w-14"></Image>
          <h1 className="text-2xl font-bold font-mono pr-16 ">TECHLUMINIX</h1>
        <MenubarMenu >
          <MenubarTrigger className="focus:bg-white hover:cursor-pointer hover:text-zinc-400 transform transition duration-700 ease-in-out  text-md font-light ">Home</MenubarTrigger>
          <MenubarContent className="bg-black text-white">
            <MenubarItem className="focus:bg-white hover:cursor-pointer ">
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem className="focus:bg-white hover:cursor-pointer">New Window</MenubarItem>
            <MenubarSeparator className="bg-gray-700" />
            <MenubarItem className="focus:bg-white hover:cursor-pointer">Share</MenubarItem>
            <MenubarSeparator className="bg-gray-700" />
            <MenubarItem className="focus:bg-white hover:cursor-pointer">Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="focus:bg-white hover:cursor-pointer hover:text-zinc-400 text-md font-light transform transition duration-700 ease-in-out ">About</MenubarTrigger>
          <MenubarContent className="bg-black text-white">
            <MenubarItem className="focus:bg-white hover:cursor-pointer">About Us</MenubarItem>
            <MenubarItem className="focus:bg-white hover:cursor-pointer">Our Mission</MenubarItem>
            <MenubarSeparator className="bg-gray-700" />
            <MenubarItem className="focus:bg-white hover:cursor-pointer">Team</MenubarItem>
            <MenubarSeparator className="bg-gray-700" />
            <MenubarItem className="focus:bg-white hover:cursor-pointer">History</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="focus:bg-white hover:cursor-pointer hover:text-zinc-400 text-md font-light transform transition duration-700 ease-in-out ">Portfolio</MenubarTrigger>
          <MenubarContent className="bg-black text-white">
            <MenubarItem className="focus:bg-white hover:cursor-pointer">Projects</MenubarItem>
            <MenubarItem className="focus:bg-white hover:cursor-pointer">Case Studies</MenubarItem>
            <MenubarSeparator className="bg-gray-700" />
            <MenubarItem className="focus:bg-white hover:cursor-pointer">Testimonials</MenubarItem>
            <MenubarSeparator className="bg-gray-700" />
            <MenubarItem className="focus:bg-white hover:cursor-pointer">Awards</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="focus:bg-white hover:cursor-pointer hover:text-zinc-400  text-md font-light transform transition duration-700 ease-in-out ">Services</MenubarTrigger>
          <MenubarContent className="bg-black text-white">
            <MenubarItem className="focus:bg-white hover:cursor-pointer">Web Development</MenubarItem>
            <MenubarItem className="focus:bg-white hover:cursor-pointer">Mobile Apps</MenubarItem>
            <MenubarSeparator className="bg-gray-700" />
            <MenubarItem className="focus:bg-white hover:cursor-pointer">UI/UX Design</MenubarItem>
            <MenubarSeparator className="bg-gray-700" />
            <MenubarItem className="focus:bg-white hover:cursor-pointer">Consulting</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="focus:bg-white hover:cursor-pointer hover:text-zinc-400 text-md font-light transform transition duration-700 ease-in-out ">Contact</MenubarTrigger>
          <MenubarContent className="bg-black text-white">
            <MenubarItem className="focus:bg-white hover:cursor-pointer ">Email Us</MenubarItem>
            <MenubarItem className="focus:bg-white hover:cursor-pointer">Phone</MenubarItem>
            <MenubarSeparator className="bg-gray-700" />
            <MenubarItem className="focus:bg-white hover:cursor-pointer">Office Locations</MenubarItem>
            <MenubarSeparator className="bg-gray-700" />
            <MenubarItem className="focus:bg-white hover:cursor-pointer">Support</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        </Menubar>
      </div>
  )
}

export {
  MenubarMain
}