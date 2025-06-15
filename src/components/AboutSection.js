"use client";

import Image from "next/image";
import AboutBanner from "@/app/assets/images/about-banner.png";

export default function AboutSection() {
  return (
    <>
      <section>
        <Image src={AboutBanner} alt="Sobre Mim" />
        <div className="flex flex-col sm:flex-row relative w-[90%] m-auto">
          <div
            id="info"
            style={{ backgroundImage: `url(/images/window.png)` }}
            className="shadow-2xl w-screen sm:w-1/2 sm:left-10 sm:absolute z-20 aspect-square bg-cover font-monogram"
          ></div>
          <div
            id="skills"
            style={{ backgroundImage: `url(/images/window.png)` }}
            className="shadow-2xl w-screen sm:w-1/2 sm:right-10 top-30 sm:absolute z-10 aspect-square bg-cover font-monogram pt-40 pl-30 text-7xl"
          ></div>
        </div>
      </section>
    </>
  );
}
