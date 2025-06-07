"use client";

import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
});

export default function FloatingMenu() {
  return (
    <div
      className={`${outfit.className} fixed bottom-16 right-32 space-y-2 text-right flex flex-col gap-2.5 z-50`}
    >
      <a href="#trabalhos">Trabalhos</a>
      <a href="#sobre">Sobre mim</a>
      <a href="#curriculum">Curriculum</a>
    </div>
  );
}
