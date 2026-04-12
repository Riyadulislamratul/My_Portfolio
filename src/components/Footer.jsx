import React from "react";
import Section from "./Section";
import Container from "./Container";
import { Link } from "react-router";
import { ArrowUpRightIcon, ArrowUp } from "lucide-react";
import Behance from "../assets/wh-behance.svg";
import Dribbble from "../assets/wh-dribble.svg";
import LinkedIn from "../assets/wh-linkedin.svg";
import Github from "../assets/wh-git.svg";
import Reveal from "./Reveal";

const Footer = () => {
  return (
    <Section className="bg-black pt-30 pb-15">
      <Container>
        <div className="px-4 xl:px-0">
          <Reveal direction="up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Left Section */}
              <div>
                <h3 className="text-white font-bold font-syne text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
                  Let’s work together
                </h3>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <p className="text-white text-base md:text-lg font-syne font-bold">
                    Frontend Developer |
                  </p>

                  <div className="flex items-center gap-4">
                    <Link to="https://www.behance.net/" target="_blank">
                      <img src={Behance} className="w-5 h-5" />
                    </Link>
                    <Link to="https://dribbble.com/" target="_blank">
                      <img src={Dribbble} className="w-5 h-5" />
                    </Link>
                    <Link to="https://www.linkedin.com/" target="_blank">
                      <img src={LinkedIn} className="w-5 h-5" />
                    </Link>
                    <Link to="https://github.com/" target="_blank">
                      <img src={Github} className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Cards */}
              <BlackCard
                title="Looking for a developer?"
                contact="riadulislamratul93@gmail.com"
              />
              <BlackCard
                title="Want a more in-depth look at my history?"
                contact="+8801-8917-46139"
              />
            </div>
          </Reveal>
          <Reveal direction="up">
            <div className="relative mt-16">
              <h1 className="text-orange font-black font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
                RIYADUL ISLAM RATUL
              </h1>

              <div className="w-full h-px bg-white/20 mt-6"></div>
            </div>
          </Reveal>
          <Reveal direction="up">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12 text-center md:text-left">
              <p className="text-white text-sm md:text-base">
                ©2026 Riyadul Islam Ratul, All Rights Reserved
              </p>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-white flex items-center gap-2 hover:text-brand transition"
              >
                Back to top
                <ArrowUp className="text-brand" />
              </button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
};

export const BlackCard = ({ title, contact }) => {
  return (
    <div className="bg-heading border text-white relative rounded-2xl border-white/20">
      <div className="px-7 py-9">
        <p className="pb-23 text-[20px] font-bold font-syne leading-7 absolute top-9">
          {title}
        </p>
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
