"use client";

import { Outfit, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const WorkTitleStyle = `font-monogram text-zinc-50 text-7xl`;
const WorkTechStackStyle = `${inter.className} text-zinc-400 underline`;
const CardNumberStyle =
  "text-zinc-50 font-monogram text-7xl self-start leading-none";
const WorkDescriptionStyle =
  "text-zinc-300 pr-4 pl-4 pb-4 text-[clamp(1rem,2vw,1.5rem)]";

export default function OtherWorksCard(props) {
  return (
    <>
      <div className="border border-zinc-50">
        <div>
          <h1 className="font-monogram text-5xl text-zinc-50">BURGBUG</h1>
          <p>Cardápio digital com opções de hambúrgueres e combos.</p>
        </div>
      </div>
    </>
  );
}
