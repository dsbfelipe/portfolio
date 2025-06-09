"use client";

import Image from "next/image";
import WorksHeader from "@/app/assets/images/works-header.png";
import PorkinMockup from "@/app/assets/images/porkin.png";
import { Outfit, Inter } from "next/font/google";
import WorkCard from "./WorkCard";

const outfit = Outfit({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

const CardStyle = "";

const works = [
  {
    image: PorkinMockup,
    title: "porkin!",
    techStack: "JavaScript / CSS / HTML / Webpack",
    number: "01",
    description:
      "Aplicação web para controle de gastos compartilhados em eventos",
  },
];

export default function WorksSection() {
  return (
    <>
      <section
        className="bg-cover"
        style={{ backgroundImage: `url(/images/works-background.jpg)` }}
      >
        <Image src={WorksHeader} alt="Trabalhos" />
        <div id="main-works" className="flex flex-col mt-4 sm:flex-row">
          <WorkCard {...works[0]} />
          <WorkCard {...works[0]} />
          <WorkCard {...works[0]} />
        </div>
      </section>
    </>
  );
}
