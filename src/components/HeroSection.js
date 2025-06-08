"use client";
import Image from "next/image";
import MobileBanner from "@/app/assets/images/mobile-hero-banner.png";
import PixelArt from "@/app/assets/images/pixel-art.png";
import EmailIcon from "@/app/assets/svgs/mail-line.svg";
import LinkedInIcon from "@/app/assets/svgs/linkedin-box-fill.svg";
import GitHubIcon from "@/app/assets/svgs/github-fill.svg";

const contactButtonsStyle =
  "size-12 flex justify-center items-center shadow-md rounded-full cursor-pointer";

const boldTextStyle = "font-semibold text-zinc-900";

export default function HeroSection() {
  return (
    <>
      <section className="flex bg-gradient-to-b from-zinc-50 to-zinc-200 w-screen overflow-x-hidden flex-col relative sm:hidden">
        <Image src={MobileBanner} alt="Image" className="sm:hidden" />
        <div className="flex flex-row w-screen justify-center gap-10 mt-2">
          <button className={contactButtonsStyle}>
            <Image src={EmailIcon} alt="email icon" />
          </button>
          <button className={contactButtonsStyle}>
            <Image src={GitHubIcon} alt="email icon" />
          </button>
          <button className={contactButtonsStyle}>
            <Image src={LinkedInIcon} alt="email icon" />
          </button>
        </div>
        <div className="w-7/9 ml-[20%] mt-[6%] flex flex-col gap-3">
          <p className="text-zinc-400 text-[clamp(1rem,2vw,2rem)]">
            Estudante de Análise e Desenvolvimento de Sistemas na
            <span className={boldTextStyle}> FATEC Sorocaba</span>
          </p>
          <p className="text-zinc-400">
            Focado em <span className={boldTextStyle}>JavaScript</span>
          </p>
          <p className="text-zinc-400">
            Entusiasta de <span className={boldTextStyle}>Design UI/UX</span>
          </p>
        </div>
        <Image src={PixelArt} alt="image" className="bottom-[0] z-20 mt-8" />
        <div className="h-5/8 bg-gradient-to-b from-zinc-100 to-zinc-400 absolute left-[15%] bottom-0 w-px"></div>
      </section>
      <section></section>
    </>
  );
}
