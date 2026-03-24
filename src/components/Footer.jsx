import React from "react";
import Section from "./Section";
import Container from "./Container";
import { ArrowUpRightIcon, ArrowUp } from "lucide-react";
import Behance from "../assets/wh-behance.svg";
import Dribbble from "../assets/wh-dribble.svg";
import LinkedIn from "../assets/wh-linkedin.svg";
import Github from "../assets/wh-git.svg";

const Footer = () => {
  return (
    <Section className="bg-black pt-30 pb-15">
      <Container>
        <div className="">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-white font-bold font-syne text-[64px] mt-12 mb-10 leading-18 tracking-[0.015em]">
                Let’s work together
              </h3>
              <div className="flex items-center gap-3">
                <p className="text-white text-[20px] font-syne font-bold">
                  Frontend Developer |
                </p>
                <div className="flex items-center gap-5">
                  <img src={Behance} alt="Behance" className="w-6 h-6" />
                  <img src={Dribbble} alt="Dribbble" className="w-6 h-6" />
                  <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
                  <img src={Github} alt="Github" className="w-6 h-6" />
                </div>
              </div>
            </div>
            <BlackCard
              title="Looking for a hectic developer?"
              contact="riadulislamratul93@gmail.com"
            />
            <BlackCard
              title="Want a more in-depth look at my history??"
              contact="+8801-8917-46139"
            />
          </div>
          <div className="relative">
            <h1 className="text-orange font-black font-syne text-[69px] mt-18  after:absolute after:w-full after:h-px after:bg-white/20 after:left-0 after:top-45">
            RIYADUL ISLAM RATUL
          </h1>
          </div>
          <div className="flex justify-between mt-24">
            <p className="text-white font-dm-sans text-lg">©2026 Riyadul Islam Ratul, All Rights Reserved</p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white font-dm-sans text-lg flex items-center gap-2 cursor-pointer hover:text-brand transition-colors"
            >
              Back to top 
              <ArrowUp className='text-brand'/>
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export const BlackCard = ({ title, contact }) => {
  return (
    <div className="bg-heading border text-white relative rounded-2xl border-white/20">
      <div className="px-7 py-9">
        <p className="pb-23 text-[20px] font-bold font-syne leading-7 absolute top-9">{title}</p>
        <div className="flex justify-between gap-7 pt-36.5">
          <p className="text-[17px] font-bold font-syne leading-8 lining-nums text-brand">
            {contact}
          </p>
          <ArrowUpRightIcon className="text-white w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
