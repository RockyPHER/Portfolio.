import musashiImage from "@/images/musashi.png";
import Image from "next/image";
import NextJS from "@/icons/Nextjs.svg";
import Python from "@/icons/python.svg";
import Rust from "@/icons/Rust.svg";

export default function Home() {
  return (
    <div className="w-full h-auto flex items-center justify-center overflow-hidden">
      {/* first screen */}
      <div className="w-full h-[642px] relative flex justify-center items-center">
        <div className="w-[1280px] h-[580px] flex flex-col justify-between py-8 px-10 border-2 border-black">
          <span>
            <h1>Davidson Amaro</h1>
            <h2>Software Developer</h2>
            <h2>Designer UX/UI</h2>
            <h2>Video Editor</h2>
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
          className="w-[710px] absolute top-0 -right-[150px]"
          src={musashiImage}
          alt="musashi"
          width={1300}
          height={800}
        />
      </div>
    </div>
  );
}
