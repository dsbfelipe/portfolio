"use client";
import Image from "next/image";
import MobileBanner from "@/app/assets/images/mobile-hero-banner.png";
import DesktopBanner from "@/app/assets/images/desktop-hero-banner.png";
import PixelArt from "@/app/assets/images/pixel-art-hd.png";
import EmailIcon from "@/app/assets/svgs/mail-line.svg";
import LinkedInIcon from "@/app/assets/svgs/linkedin-box-fill.svg";
import GitHubIcon from "@/app/assets/svgs/github-fill.svg";

const mobileContactButtonsStyle =
  "size-12 flex justify-center items-center shadow-md rounded-full cursor-pointer";

const desktopContactButtonsStyle =
  "size-16 flex justify-center items-center shadow-md rounded-full cursor-pointer";

const boldTextStyle = "font-semibold text-zinc-900";

export default function HeroSection() {
  return (
    <>
      <section className="flex bg-gradient-to-b from-zinc-50 to-zinc-200 w-screen overflow-x-hidden flex-col relative sm:hidden overscroll-contain">
        <Image
          src={MobileBanner}
          alt="dsbfelipe: Desenvolvedor Front-End"
          className="sm:hidden"
        />
        <div className="flex flex-row w-screen justify-center gap-10 mt-2">
          <button
            className={mobileContactButtonsStyle}
            onClick={() => window.open("mailto:dsbfelipe@outlook.com")}
          >
            <Image src={EmailIcon} alt="email icon" />
          </button>
          <button
            className={mobileContactButtonsStyle}
            onClick={() =>
              window.open("https://github.com/dsbfelipe", "_blank")
            }
          >
            <Image src={GitHubIcon} alt="email icon" />
          </button>
          <button
            className={mobileContactButtonsStyle}
            onClick={() =>
              window.open("https://www.linkedin.com/in/dsbfelipe/", "_blank")
            }
          >
            <Image src={LinkedInIcon} alt="email icon" />
          </button>
        </div>
        <div className="w-7/9 ml-[20%] mt-[6%] flex flex-col gap-3">
          <p className="text-zinc-400 text-[clamp(1rem,2vw,2rem)]">
            Estudante de Análise e Desenvolvimento de Sistemas na
            <span className={boldTextStyle}> FATEC Sorocaba</span>
          </p>
          <p className="text-zinc-400 text-[clamp(1rem,2vw,2rem)]">
            Focado em <span className={boldTextStyle}>JavaScript</span>
          </p>
          <p className="text-zinc-400 text-[clamp(1rem,2vw,2rem)]">
            Entusiasta de <span className={boldTextStyle}>Design UI/UX</span>
          </p>
        </div>
        <Image src={PixelArt} alt="image" className="bottom-[0] z-20 mt-8" />
        <div className="h-5/8 bg-gradient-to-b from-zinc-100 to-zinc-400 absolute left-[15%] bottom-0 w-px"></div>
      </section>

      <section className="hidden sm:flex bg-gradient-to-b from-zinc-50 to-zinc-200 h-screen relative flex-col overflow-x-hidden overscroll-contain">
        <Image
          src={DesktopBanner}
          alt="dsbfelipe: Desenvolvedor Front-End"
          className="absolute"
        />
        <Image
          src={PixelArt}
          alt="pixel art"
          className="absolute bottom-0 z-20 w-[45%]"
        />
        <div className="flex flex-row-reverse gap-10 w-2/4 justify-between ml-[45%] mt-[17%]">
          <div className="flex flex-row justify-center gap-10 mt-[33%]">
            <button
              className={desktopContactButtonsStyle}
              onClick={() => window.open("mailto:dsbfelipe@outlook.com")}
            >
              <Image src={EmailIcon} alt="email icon" width={32} height={32} />
            </button>
            <button
              className={desktopContactButtonsStyle}
              onClick={() =>
                window.open("https://github.com/dsbfelipe", "_blank")
              }
            >
              <Image src={GitHubIcon} alt="email icon" width={32} height={32} />
            </button>
            <button
              className={desktopContactButtonsStyle}
              onClick={() =>
                window.open("https://www.linkedin.com/in/dsbfelipe/", "_blank")
              }
            >
              <Image
                src={LinkedInIcon}
                alt="email icon"
                width={32}
                height={32}
              />
            </button>
          </div>
          <div className="w-2/3 mt-[33%] flex flex-col gap-10">
            <p className="text-zinc-400 text-[clamp(1rem,2vw,2rem)]">
              Estudante de Análise e Desenvolvimento de Sistemas na
              <span className={boldTextStyle}> FATEC Sorocaba</span>
            </p>
            <p className="text-zinc-400 text-[clamp(1rem,2vw,2rem)]">
              Focado em <span className={boldTextStyle}>JavaScript</span>
            </p>
            <p className="text-zinc-400 text-[clamp(1rem,2vw,2rem)]">
              Entusiasta de <span className={boldTextStyle}>Design UI/UX</span>
            </p>
          </div>
        </div>

        <div className="h-3/7 bg-gradient-to-b from-zinc-100 to-zinc-400 absolute left-[42.15%] bottom-0 w-px"></div>
      </section>
    </>
  );
}
