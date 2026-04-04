import React from "react";
import Container from "./Container";
import Section from "./Section";
import { ArrowDown, ArrowUpRightIcon } from "lucide-react";
import Behance from "../assets/behance.svg";
import Dribbble from "../assets/dribble.svg";
import LinkedIn from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="bg-orange pt-15">
      <Container>
        <div className="flex justify-between items-center gap-40.5">
          <div>
            <h3 className="text-[32px] font-syne font-bold text-heading mb-2 leading-10">
              Hello, I’m
            </h3>
            <h1 className="text-[80px] w-125 font-bold leading-27.5 text-heading mb-6 font-syne">
              Riyadul Islam Ratul
            </h1>
            <h3 className="text-2xl font-syne text-heading font-bold leading-8 mb-7.5">
              Frontend Developer | React • JavaScript • Next.js
            </h3>
            <div className="mb-32.5 cursor-pointer flex items-center gap-7.5">
              <BlackButton>Let's Talk</BlackButton>
              <TransparentButton>My Work</TransparentButton>
            </div>
            <div className="flex items-center gap-8 pb-31.5">
              <div className="flex items-center gap-2 ">
                <h3 className="font-bold text-[44px] font-syne leading-13.5 text-heading lining-nums">
                  1.2k+
                </h3>
                <p>Worldwide Clients</p>
              </div>
              <div>|</div>
              <div className="flex items-center gap-5">
                <img src={Behance} alt="Behance" className="w-6 h-6" />
                <img src={Dribbble} alt="Dribbble" className="w-6 h-6" />
                <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
                <img src={Github} alt="Github" className="w-6 h-6" />
              </div>
            </div>
          </div>
          <div></div>
          <div className="size-45 p-5.25 relative ">
            <Link to="/contact" className="size-34.25 rounded-full border-[6px] cursor-pointer border-brand flex items-center justify-center absolute top-56 right-0 text-[15px]">
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
      </Container>
    </section>
  );
};

export const BlackButton = ({ children, className }) => {
  return (
    <button className={`bg-black font-bold text-[15px] font-dm-sans leading-4 cursor-pointer text-white px-8 py-4 rounded-[8px] flex items-center gap-2 ${className}`}>
      {children}
      <ArrowUpRightIcon className="text-white w-6 h-6" />
    </button>
  );
};
export const TransparentButton = ({ children, className }) => {
  return (
    <button className={`bg-transparent text-black px-8 py-4 font-bold text-[15px] font-dm-sans leading-4 cursor-pointer border border-black rounded-[8px] flex items-center gap-2 ${className}`}>
      {children}
      <ArrowUpRightIcon className="text-heading w-6 h-6" />
    </button>
  );
};

export default Hero;
