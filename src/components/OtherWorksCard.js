"use client";

import { Outfit, Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
});

const WorkTitleStyle = `font-monogram text-zinc-50 text-7xl`;
const WorkTechStackStyle = `${inter.className} text-zinc-400 underline pb-4`;
const CardNumberStyle =
  "text-zinc-50 font-monogram text-7xl self-start leading-none";
const WorkDescriptionStyle =
  "text-zinc-300 pr-4 pb-4 text-[clamp(1rem,2vw,1.5rem)]";

export default function OtherWorksCard(props) {
  const cursorRef = useRef(null);
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

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
      <div
        ref={cardRef}
        className={`border hidden border-zinc-50 p-8 pb-2 pt-1 sm:pt-4 sm:flex flex-row w-full justify-between cursor-none z-${props.zindex} relative`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.open(props.link, "_blank")}
      >
        <div>
          <h1 className={WorkTitleStyle}>{props.title}</h1>
          <p className={WorkTechStackStyle}>{props.techStack}</p>
          <p className={WorkDescriptionStyle}>{props.description}</p>
        </div>
        <p className={CardNumberStyle}>{props.number}</p>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.3, ease: "circInOut" }}
              className="absolute right-96 bottom-0 w-128 h-128"
              style={{ pointerEvents: "none" }}
            >
              <Image
                src={props.image}
                alt={`Mockup do projeto ${props.title}`}
                fill
                className="object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div
        ref={cursorRef}
        className="hidden shadow-md sm:flex fixed top-0 left-0 w-40 h-20 bg-zinc-50 items-center justify-center opacity-0 pointer-events-none z-[9999] transition-opacity duration-200 transform -translate-x-1/2 -translate-y-1/2"
      >
        <p
          className={`font-monogram text-zinc-950 text-2xl font-light text-center w-3/5 leading-none`}
        >
          VER ESTUDO DE CASO &gt;
        </p>
      </div>
    </>
  );
}
