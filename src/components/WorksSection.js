"use client";

import Image from "next/image";
import WorksHeader from "@/app/assets/images/works-header.png";
import BooklogdMockup from "@/app/assets/images/booklogd-mockup.png";
import PokemonMockup from "@/app/assets/images/pokemon-mockup.png";
import PorkinMockup from "@/app/assets/images/porkin-mockup.png";
import BurgBugMockup from "@/app/assets/images/burgbug-mockup.png";
import CalculatorMockup from "@/app/assets/images/calculator-mockup.png";
import { Outfit, Inter } from "next/font/google";
import WorkCard from "./WorkCard";
import OtherWorksCard from "./OtherWorksCard";
import { motion } from "framer-motion";

const CardStyle = "";

const works = [
  {
    image: PorkinMockup,
    title: "porkin!",
    techStack: "JavaScript / CSS / HTML / Webpack",
    number: "01",
    description:
      "Aplicação web para controle de gastos compartilhados em eventos",
    link: "https://github.com/LauriESB/porkin",
  },
  {
    image: BooklogdMockup,
    title: "Booklogd",
    techStack: "JavaScript / CSS / HTML",
    number: "02",
    description:
      "Plataforma para catalogar e acompanhar sua leitura de livros.",
    link: "https://github.com/dsbfelipe/odin-library",
  },
  {
    image: PokemonMockup,
    title: "Pokédex",
    techStack: "JavaScript / CSS / HTML",
    number: "03",
    description: "Site para buscar e explorar dados de Pokémon.",
    link: "https://github.com/dsbfelipe/freecodecamp-pokemon-search-app",
  },
];

const otherWorks = [
  {
    image: BurgBugMockup,
    title: "BURBUG",
    techStack: "JavaScript / CSS / HTML / Webpack",
    number: "04",
    description: "Cardápio digital com opções de hambúrgueres e combos.",
    link: "https://github.com/dsbfelipe/odin-restaurant-page",
    zindex: "60",
  },
  {
    image: CalculatorMockup,
    title: "Calculadora",
    techStack: "JavaScript / CSS / HTML",
    number: "05",
    description: "Calculadora online para operações matemáticas básicas.",
    link: "https://github.com/dsbfelipe/odin-calculator",
    zindex: "61",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function WorksSection() {
  return (
    <section
      id="trabalhos"
      className="bg-cover"
      style={{ backgroundImage: `url(/images/works-background.jpg)` }}
    >
      <Image src={WorksHeader} alt="Trabalhos" className="mb-4" />
      <div
        id="main-works"
        className="flex flex-col sm:flex-row max-w-screen overflow-hidden"
      >
        {works.map((work, i) => (
          <motion.div
            key={work.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={cardVariants}
          >
            <WorkCard {...work} />
          </motion.div>
        ))}
      </div>
      <div id="other-works">
        <OtherWorksCard {...otherWorks[0]} />
        <OtherWorksCard {...otherWorks[1]} />
      </div>
    </section>
  );
}
