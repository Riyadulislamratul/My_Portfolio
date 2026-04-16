import React from "react";
import Container from "./Container";
import Section from "./Section";
import { ArrowDown, ArrowUpRightIcon } from "lucide-react";
import Behance from "../assets/behance.svg";
import Dribbble from "../assets/dribble.svg";
import LinkedIn from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import { Link } from "react-router";
import MyImg from "../assets/my-image.png";
import Reveal from "./Reveal";
import { Stagger, StaggerItem } from "./Stagger";


const Hero = () => {
  return (
    <section className="bg-orange pt-15 overflow-hidden px-4 xl:px-0">
      <Container>
       <Reveal>
        <Stagger>
           <div className="hidden  lg:flex justify-between items-center gap-40.5 relative">
          <div>
            <StaggerItem>

            <h3 className="text-[32px] font-syne font-bold text-heading mb-2 leading-10">
              Hello, I’m
            </h3>
            </StaggerItem>
            <StaggerItem>
            <h1 className="text-[80px] w-125 font-bold leading-27.5 text-heading mb-6 font-syne">
              Riyadul Islam Ratul
            </h1>
            </StaggerItem>
            <StaggerItem>
            <h3 className="text-2xl font-syne text-heading font-bold leading-8 mb-7.5 lg:w-70 xl:w-full">
              Frontend Developer | React • JavaScript • Next.js
            </h3>
            </StaggerItem>
            <StaggerItem>
            <div className="mb-32.5 cursor-pointer flex items-center gap-7.5">
              <BlackButton>Let's Talk</BlackButton>
              <TransparentButton>My Work</TransparentButton>
            </div>
            </StaggerItem>
            <StaggerItem>
            <div className="flex items-center gap-8 pb-31.5">
              <div className="flex items-center gap-2 ">
                <StaggerItem>
                <h3 className="font-bold text-[44px] font-syne leading-13.5 text-heading lining-nums">
                  1.2k+
                </h3>
                </StaggerItem>
                <StaggerItem>
                <p>Worldwide Clients</p>
                </StaggerItem>
              </div>
              <StaggerItem>
              <div>|</div>
              </StaggerItem>
              <StaggerItem>
              <div className="flex items-center gap-5">
                <img src={Behance} alt="Behance" className="w-6 h-6" />
                <img src={Dribbble} alt="Dribbble" className="w-6 h-6" />
                <Link to="https://www.linkedin.com/in/md-riyadul-islam-ratul-16b422326/" target="_blank">
                  <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
                </Link>

                <Link to="https://github.com/riyadulislamratul" target="_blank">
                  <img src={Github} alt="Github" className="w-6 h-6" />
                </Link>
              </div>
              </StaggerItem>
            </div>
            </StaggerItem>
          </div>
          <div className="xl:w-[662px] xl:h-[985px] rounded-[220px] bg-brand rotate-45 absolute xl:-right-104 xl:-top-94 overflow-hidden hidden lg:block lg:w-[500px] lg:h-[900px] lg:-right-52 lg:-top-60">
            <img src={MyImg} alt="Hero" className=" w-full h-full object-cover rotate-316 xl:pt-48 xl:pr-49 lg:pt-52 lg:pr-40" />
          </div>
          <div className="size-45 p-5.25 absolute -right-46 top-118">
            <Link
              to="/contact"
              className="size-34.25 rounded-full border-[6px] cursor-pointer border-brand flex items-center justify-center absolute text-[15px]"
            >
              <div className="absolute w-full h-full animate-spin-slow">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <path
                    id="circlePath"
                    d="M 100, 100
                 m -80, 0
                 a 80,80 0 1,1 160,0
                 a 80,80 0 1,1 -160,0"
                    fill="none"
                  />
                  <text
                    fill="white"
                    fontSize="15.5"
                    letterSpacing="10"
                    fontFamily="DM Sans"
                    fontWeight="medium"
                  >
                    <textPath href="#circlePath" startOffset="0%">
                      CONTACT ME - CONTACT ME -
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Inner Circle */}
              <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center">
                <div className="size-16.5 bg-brand rounded-full flex items-center justify-center">
                  {/* Arrow */}
                  <div className="relative">
                    <Link to="" target="_blank">
                      <ArrowDown className="text-black size-8 animate-bounce" />
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        </Stagger>
       </Reveal>
        {/* Premium Mobile Hero */}
<div className="lg:hidden flex flex-col items-center text-center px-5 pt-12 pb-10">

  {/* Small intro */}
  <p className="text-sm text-gray-500 mb-2">
    Hello, I’m
  </p>

  {/* Name */}
  <h1 className="text-4xl font-bold text-heading leading-tight mb-3">
    Riyadul Islam Ratul
  </h1>

  {/* Role */}
  <p className="text-base text-gray-600 mb-6">
    Frontend Developer • React • Next.js
  </p>

  {/* Image with modern gradient ring */}
  <div className="relative mb-6">
    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand to-orange blur-xl opacity-40"></div>
    
    <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-xl">
      <img
        src={MyImg}
        alt="Hero"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Buttons */}
  <div className="flex w-full gap-3 mb-8">
    <button className="flex-1 bg-black text-white py-3 rounded-full font-medium">
      Let’s Talk
    </button>
    <button className="flex-1 border border-black py-3 rounded-full font-medium">
      My Work
    </button>
  </div>

  {/* Stats */}
  <div className="flex items-center justify-center gap-3 text-sm text-gray-600 mb-5">
    <span className="font-bold text-black text-lg">1.2k+</span>
    <span>Clients Worldwide</span>
  </div>

  {/* Social Icons */}
  <div className="flex gap-6">
    <img src={Behance} alt="Behance" className="w-5 h-5 opacity-70" />
    <img src={Dribbble} alt="Dribbble" className="w-5 h-5 opacity-70" />
    <img src={LinkedIn} alt="LinkedIn" className="w-5 h-5 opacity-70" />
    <img src={Github} alt="Github" className="w-5 h-5 opacity-70" />
  </div>

</div>
      </Container>
    </section>
  );
};

export const BlackButton = ({ children, className }) => {
  return (
    <button
      className={`bg-black font-bold text-[15px] font-dm-sans leading-4 cursor-pointer text-white px-8 py-4 rounded-[8px] flex items-center gap-2 ${className}`}
    >
      {children}
      <ArrowUpRightIcon className="text-white w-6 h-6" />
    </button>
  );
};
export const TransparentButton = ({ children, className }) => {
  return (
    <button
      className={`bg-transparent text-black px-8 py-4 font-bold text-[15px] font-dm-sans leading-4 cursor-pointer border border-black rounded-[8px] flex items-center gap-2 ${className}`}
    >
      {children}
      <ArrowUpRightIcon className="text-heading w-6 h-6" />
    </button>
  );
};

export default Hero;
