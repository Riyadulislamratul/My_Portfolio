import React from "react";
import Container from "./Container";
import Section from "./Section";
import { ArrowUpRightIcon } from "lucide-react";
import Behance from "../assets/behance.svg";
import Dribbble from "../assets/dribble.svg";
import LinkedIn from "../assets/linkedin.svg";
import Github from "../assets/github.svg";

const Hero = () => {
  return (
    <section className="bg-[#FFE9D9] pt-15">
      <Container>
        <div className="">
          <div>
            <h3 className="text-[32px] font-syne font-bold text-heading mb-2 leading-10">
              Hello, I’m
            </h3>
            <h1 className="text-[80px] w-[500px] font-bold leading-27.5 text-heading mb-6 font-syne">
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
                <h3 className="font-bold text-[44px] font-syne leading-13.5  text-heading lining-nums">1.2k+</h3>
                <p>Worldwide Clients</p>
              </div> 
              <div>
                |
              </div>
              <div className="flex items-center gap-5 cursor-pointer">
                <img src={Behance} alt="Behance" className="w-6 h-6" />
                <img src={Dribbble} alt="Dribbble" className="w-6 h-6" />
                <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
                <img src={Github} alt="Github" className="w-6 h-6" />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </Container>
    </section>
  );
};

export const BlackButton = ({ children }) => {
  return (
    <button className="bg-black font-bold text-[15px] font-dm-sans leading-4 cursor-pointer text-white px-8 py-4 rounded-[8px] flex items-center gap-2">
      {children}
      <ArrowUpRightIcon className="text-white w-6 h-6" />
    </button>
  );
};
export const TransparentButton = ({ children }) => {
  return (
    <button className="bg-transparent text-black px-8 py-4 font-bold text-[15px] font-dm-sans leading-4 cursor-pointer border border-black rounded-[8px] flex items-center gap-2">
      {children}
      <ArrowUpRightIcon className="text-heading w-6 h-6" />
    </button>
  );
};

export default Hero;
