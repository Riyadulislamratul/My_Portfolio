import React from "react";
import Section from "./Section";
import Container from "./Container";
import { ArrowUpRightIcon } from "lucide-react";
import Icon6 from "../assets/icons/icon6.png";
import Reveal from "./Reveal";
import { Stagger } from "./Stagger";

const Services = () => {
  return (
    <Section className="px-4 lg:px-0">
      <Container>
        <div className="px-4 xl:px-0">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10 xl:gap-33.5 w-full mb-8 md:mb-12">
            <Reveal direction="left">
              <div>
                <p className="text-brand font-syne text-lg md:text-[20px] font-bold">
                  What I Do
                </p>
                <h2 className="font-syne font-bold text-2xl md:text-4xl lg:text-[64px] mt-2 text-nowrap">
                  My Expertise
                </h2>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div>
                <p className="font-dm-sans font-normal text-base md:text-lg lg:text-[18px] leading-6 md:leading-7 mt-0 lg:mt-7.5 text-heading/60">
                  I build modern, responsive, and user-friendly web applications
                  using the latest technologies. Focused on performance,
                  scalability, and clean design.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[auto_416px] gap-6">
            <Reveal>
              <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <ServiceCard title="Frontend Development" img={Icon6} />
                <ServiceCard title="React Development" img={Icon6} />
                <ServiceCard title="Website Development" img={Icon6} />
                <ServiceCard title="UI Implementation" img={Icon6} />
                <ServiceCard title="Performance Optimization" img={Icon6} />
                <ServiceCard title="Problem Solving" img={Icon6} />
              </Stagger>
            </Reveal>
            <Reveal direction="right">
              <div>
                <div className="px-4 md:px-6 py-6 md:py-9 bg-heading rounded-2xl mt-6 lg:mt-0">
                  <ArrowUpRightIcon className="text-[#F8B144] w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 justify-self-end" />
                  <h4 className="text-brand mt-6 md:mt-8 lg:mt-44 text-sm md:text-base">
                    SAY HELLO!
                  </h4>
                  <a className="text-white mt-2 font-bold font-syne text-xl md:text-[20px] lg:text-[22px]" href="mailto:riadulislamratul93@gmail.com">
                    riadulislamratul93@gmail.com
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export const ServiceCard = ({ title, img }) => {
  return (
    <div className="rounded-2xl bg-[#F5F5F5] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-white cursor-pointer">
      <div className="px-4 md:px-6 py-5 md:py-7">
        <div className="bg-white w-10 h-10 md:w-12 md:h-12 rounded-full items-center flex justify-center mb-5 md:mb-7 transition-all duration-300 group-hover:bg-black">
          <img src={img} alt={title} className="w-5 h-5 md:w-6 md:h-6" />
        </div>

        <div className="flex items-center gap-2">
          <h3 className="text-base md:text-lg lg:text-[20px] font-bold font-syne leading-6 md:leading-7 w-full lg:w-45.5">
            {title}
          </h3>

          <ArrowUpRightIcon className="text-heading w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </div>
  );
};

export default Services;
