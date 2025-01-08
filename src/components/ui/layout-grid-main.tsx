import { LayoutGrid } from "./layout-grid";

export function LayoutGridMain() {
  return (
    <LayoutGrid cards={cards}></LayoutGrid>
  )
}

const cards= [
  {
    id: 1,
    content: <h2 className="text-lg font-bold">Welcome to TechLuminix</h2>,
    className: "bg-black text-gray-200 rounded-lg px-50",
    thumbnail: "./src/assets/layout/lay1.jpg",
  },
  {
    id: 2,
    content: (
      <div>
        <p className="text-sm">Discover innovative solutions for your business needs.</p>
        <button className="mt-2 px-40 py-2 bg-green-500 text-white rounded">
          Learn More
        </button>
      </div>
    ),
    className: "bg-black text-black p-6 rounded-md",
    thumbnail: "/src/assets/layout/lay2.jpg",
  },
  {
    id: 3,
    content: "Join us in shaping the future of technology.",
    className: "bg-black text-gray-200 p-5 rounded-lg",
    thumbnail: "./src/assets/layout/lay3.jpg",
  },
  {
    id: 4,
    content: (
      <ul className="list-disc list-inside">
        <li>Custom Software Development</li>
        <li>UI/UX Design</li>
        <li>Cloud Integration</li>
      </ul>
    ),
    className: "bg-black text-gray-200 p-5 rounded-lg",
    thumbnail: "/src/assets/layout/lay3.jpg",
  },
  {
    id: 5,
    content: (
      <blockquote className="italic border-l-4 border-blue-500 pl-4">
        "Innovation distinguishes between a leader and a follower."
      </blockquote>
    ),
    className: "bg-black text-white p-6 rounded-lg shadow",
    thumbnail: "/src/assets/layout/lay3.jpg",
  },
];
