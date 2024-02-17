"use client";
import musashiImage from "@/images/musashi.png";
import Image from "next/image";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main>
        <div className="w-[90%] h-[90%] bg-gray-400">
          <Image
            className="absolute -right-40 top-0 w-[790px] h-[630px]"
            src={musashiImage}
            alt="musashi"
            width={1300}
            height={800}
          />
        </div>
      </main>
    </NextUIProvider>
  );
}
