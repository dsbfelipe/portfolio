"use client";

import Image from "next/image";
import FooterImage from "@/app/assets/images/footer.png";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <>
      <section
        className={`${outfit.className} text-lg sm:text-2xl w-full bg-gradient-to-b from-zinc-50 to-zinc-200`}
      >
        <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-end p-8 underline mt-4 sm:mt-16">
          <div className="text-left mb-10">
            <a href="#hero">Voltar pro início</a>
          </div>
          <div className="flex sm:flex-col justify-between sm:justify-end text-right gap-6">
            <a
              href="https://github.com/dsbfelipe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/dsbfelipe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="mailto:dsbfelipe@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </div>
        </div>

        <Image src={FooterImage} alt="dsbfelipe" />
      </section>
    </>
  );
}
