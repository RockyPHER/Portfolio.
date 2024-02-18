import musashiImage from "@/images/musashi.png";
import Image from "next/image";
import NextJS from "@/icons/Nextjs.svg";
import Python from "@/icons/python.svg";
import Rust from "@/icons/Rust.svg";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full h-auto relative flex items-center justify-center overflow-hidden bg-gradient-radial from-white to-gray-700">
      {/* navigation buttons */}
      <div className="w-[150px] h-full absolute right-0 z-20 group">
        <button className="w-auto h-full absolute z-10 py-2 top-0 right-0 translate-x-24 group-hover:translate-x-0 transition-all flex justify-start items-center">
          <div className="w-full h-full absolute z-10 bg-gradient-to-l from-black to-transparent opacity-0 group-hover:opacity-80" />
          <ChevronRight className="w-36 h-36 text-white z-10 group-hover:animate-bounce-right" />
        </button>
      </div>
      <div className="w-[150px] h-full absolute left-0 z-20 group">
        <button className="w-auto h-full absolute z-10 py-2 top-0 left-0 -translate-x-24 group-hover:translate-x-0 transition-all flex justify-start items-center">
          <div className="w-full h-full absolute z-10 bg-gradient-to-r from-black to-transparent opacity-0 group-hover:opacity-80" />
          <ChevronLeft className="w-36 h-36 text-white z-10 group-hover:animate-bounce-left" />
        </button>
      </div>
      {/* pagination buttons */}
      <div className="w-[220px] h-[110px] absolute top-0 z-20 flex justify-center group/main">
        <div className="w-auto h-auto absolute z-10 px-5 py-2 flex justify-evenly gap-5 -translate-y-20 group-hover/main:translate-y-5 transition-all bg-gray-200 rounded-full">
          <button className="group/button1">
            <Circle className="w-10 h-10 group/button1-active:fill-gray-600 group-hover/button1:fill-gray-400" />
          </button>
          <button className="group/button2">
            <Circle className="w-10 h-10 group/button2-active:fill-gray-600 group-hover/button2:fill-gray-400" />
          </button>
          <button className="group/button3">
            <Circle className="w-10 h-10 group/button3-active:fill-gray-600 group-hover/button3:fill-gray-400" />
          </button>
        </div>
      </div>
      {/* main container */}
      <div className="w-full h-[642px] relative flex justify-center items-center">
        <div className="w-[1280px] h-[580px] flex flex-col justify-between py-8 px-10 bg-white bg-opacity-20">
          <span>
            <h1>Davidson Amaro</h1>
            <h2>Web Developer</h2>
            <h2>UI/UX</h2>
          </span>
          <ul className="flex gap-4">
            <li>
              <NextJS className="w-16 h-16" />
            </li>
            <li>
              <Python className="w-16 h-16" />
            </li>
            <li>
              <Rust className="w-16 h-16" />
            </li>
          </ul>
        </div>
        <Image
          className="w-[780px] absolute top-0 -right-[150px]"
          src={musashiImage}
          alt="musashi"
          width={1300}
          height={800}
        />
      </div>
    </div>
  );
}
