"use client";

import Image from "next/image";
import WorksHeader from "@/app/assets/images/works-header.png";
import PorkinMockup from "@/app/assets/images/porkin.png";
import { Outfit, Inter } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

const CardStyle = "";

const MockupStyle = "aspect-square object-cover";
const WorkTitleStyle = `${outfit.className} text-zinc-50 text-5xl`;
const WorkTechStackStyle = `${inter.className} text-zinc-400 underline`;
const CardNumberStyle =
  "text-zinc-50 font-monogram text-7xl self-start leading-none absolute right-4 top-1";
const WorkDescriptionStyle =
  "text-zinc-300 pr-4 pl-4 pb-4 text-[clamp(1rem,2vw,1.5rem)]";

export default function WorksSection() {
  return (
    <>
      <section
        className="bg-cover"
        style={{ backgroundImage: `url(/images/works-background.jpg)` }}
      >
        <Image src={WorksHeader} alt="Trabalhos" />
        <div id="main-works" className="flex flex-col mt-4">
          <div className="border border-zinc-50">
            <Image
              src={PorkinMockup}
              alt="Mockup do projeto porkin!"
              className={MockupStyle}
            />
            <div className=" bg-zinc-950/50">
              <div className="flex flex-row justify-between p-4 pb-2 relative border-t border-zinc-50">
                <div className="flex flex-col gap-2">
                  <h1 className={WorkTitleStyle}>porkin!</h1>
                  <p className={WorkTechStackStyle}>
                    JavaScript / CSS / HTML / Webpack
                  </p>
                </div>
                <p className={CardNumberStyle}>01</p>
              </div>
              <p className={WorkDescriptionStyle}>
                Aplicação web para controle de gastos compartilhados em eventos
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
