"use client";

import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
});

export default function FloatingMenu() {
  return (
    <div
      className={`${outfit.className} hidden fixed bottom-16 right-32 space-y-2 text-right sm:flex flex-col gap-8 z-50 text-[clamp(1rem,2vw,2rem)] font-light`}
    >
      <div>
        <a href="#trabalhos">Trabalhos</a>
      </div>
      <div>
        <a href="#sobre">Sobre mim</a>
      </div>
      <div>
        <a href="#curriculum">Curriculum</a>
      </div>
    </div>
  );
}
