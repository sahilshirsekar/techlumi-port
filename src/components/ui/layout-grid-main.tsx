import { div } from "framer-motion/client";
import { LayoutGrid } from "./layout-grid";

export function LayoutGridMain() {
  return (
    <LayoutGrid cards={cards}></LayoutGrid>
  )
}

const cards= [
  {
    id: 1,
    content: <div className=" text-black">
    <h1 className="text-4xl font-bold  ">Patholist</h1>
    Web Development HTML, CSS & JS
  </div>,
    className: "bg-black text-gray-200 p-5 rounded-lg",
    thumbnail: "./src/assets/layout/lay1.png",
  },
  {
    id: 2,
    content:<div className=" text-black">
    <h1 className="text-4xl font-bold  ">Saverr
    </h1>
    Software Development Cordova & JS
    </div>,
    className: "bg-black text-black p-6 rounded-md",
    thumbnail: "/src/assets/layout/lay2.png",
  },
  {
    id: 3,
    content: <div className=" text-black">
    <h1 className="text-4xl font-bold  ">BookStore Application
    </h1>
    Software Development React Native & MongoDB    </div>,
    
    
    className: "bg-black text-gray-200 p-5 rounded-lg",
    thumbnail: "./src/assets/layout/lay3.png",
  },
  {
    id: 4,
    content:<div className=" text-black">
    <h1 className="text-4xl font-bold  ">HAATI (Card Customization)
    </h1>
    Software Development React Native & Fabric.JS
    </div>,
    className: "bg-black text-gray-200 p-5 rounded-lg",
    thumbnail: "/src/assets/layout/lay4.png",
  },
  {
    id: 5,
    content:<div className=" text-black">
    <h1 className="text-4xl font-bold  ">Janki Jewellery

    </h1>
    Web Development / React & Redux
    </div>,
    className: "bg-black text-white p-6 rounded-lg shadow",
    thumbnail: "/src/assets/layout/lay5.png",
  },
];
