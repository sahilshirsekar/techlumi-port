import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";


function MenubarMain() {
  return(
    <div className="flex justify-center w-full bg-black bg-opacity-50 animate-fade-in-up sticky top-0 z-50" style={{ animationDelay: '0.1s'}}>
        <Menubar className="border-b border-gray-700 bg-black text-white">
        <MenubarMenu>
          <MenubarTrigger className="focus:bg-white hover:cursor-pointer">Home</MenubarTrigger>
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
          <MenubarTrigger className="focus:bg-white hover:cursor-pointer">About</MenubarTrigger>
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
          <MenubarTrigger className="focus:bg-white hover:cursor-pointer">Portfolio</MenubarTrigger>
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
          <MenubarTrigger className="focus:bg-white hover:cursor-pointer">Services</MenubarTrigger>
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
          <MenubarTrigger className="focus:bg-white hover:cursor-pointer">Contact</MenubarTrigger>
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