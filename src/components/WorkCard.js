"use client";

import { Prosto_One } from "next/font/google";
import Image from "next/image";
import { Outfit, Inter } from "next/font/google";
import { use, useEffect, useRef } from "react";

const outfit = Outfit({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

const MockupStyle = "aspect-square object-cover";
const WorkTitleStyle = `${outfit.className} text-zinc-50 text-5xl`;
const WorkTechStackStyle = `${inter.className} text-zinc-400 underline`;
const CardNumberStyle =
  "text-zinc-50 font-monogram text-7xl self-start leading-none absolute right-4 top-1";
const WorkDescriptionStyle =
  "text-zinc-300 pr-4 pl-4 pb-4 text-[clamp(1rem,2vw,1.5rem)]";

export default function WorkCard(props) {
  const cursorRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);

    const card = cardRef.current;

    const showCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
      }
    };

    const hideCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
    };

    if (card) {
      card.addEventListener("mouseenter", showCursor);
      card.addEventListener("mouseleave", hideCursor);
    }

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      if (card) {
        card.removeEventListener("mouseenter", showCursor);
        card.removeEventListener("mouseleave", hideCursor);
      }
    };
  }, []);

  return (
    <>
      <div ref={cardRef} className="border border-zinc-50 cursor-none">
        <Image
          src={props.image}
          alt={`Mockup do projeto "${props.title}"`}
          className={MockupStyle}
        />
        <div className=" bg-zinc-950/50 pb-4">
          <div className="flex flex-row justify-between p-4 pb-2 relative">
            <div className="flex flex-col gap-2">
              <h1 className={WorkTitleStyle}>{props.title}</h1>
              <p className={WorkTechStackStyle}>{props.techStack}</p>
            </div>
            <p className={CardNumberStyle}>{props.number}</p>
          </div>
          <p className={WorkDescriptionStyle}>{props.description}</p>
        </div>
      </div>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-32 h-32 bg-zinc-950/90 text-white rounded-full flex items-center justify-center opacity-0 pointer-events-none z-[9999] transition-opacity duration-200 transform -translate-x-1/2 -translate-y-1/2"
      >
        <p
          className={`${outfit.className} text-zinc-50 text-base font-light text-center w-2/3`}
        >
          Ver estudo de caso
        </p>
      </div>
    </>
  );
}
