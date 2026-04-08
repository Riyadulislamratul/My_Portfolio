import React from "react";
import Section from "./Section";
import Container from "./Container";
import { Link } from "react-router";
import Intro_Bg from "../assets/intro-bg.png";
import { BlackButton } from "./Hero";
import Reveal from "./Reveal";
import { Stagger, StaggerItem } from "./Stagger";

const Intro = () => {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[636px_1fr] gap-8 lg:gap-10 xl:gap-33.5 px-4 lg:px-0">
          <Reveal direction="left">
            <div>
              <div className="w-full lg:w-[636px]">
                <img
                  src={Intro_Bg}
                  alt=""
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal direction="right">
            <Stagger>
              <div>
                <StaggerItem>
                  <p className="text-brand font-syne text-lg md:text-[20px] font-bold pb-2.5">
                    Hello I'm
                  </p>
                </StaggerItem>
                <StaggerItem>

                <h2 className="text-2xl md:text-3xl lg:text-[64px] leading-tight lg:leading-[72px] pb-3 text-heading font-bold font-syne tracking-[-0.015em]">
                  Riyadul Islam Ratul, Frontend Developer
                </h2>
                </StaggerItem>
                <StaggerItem>

                <h3 className="text-xl md:text-2xl lg:text-[44px] pb-3 lg:pb-4 leading-tight lg:leading-13.5 text-heading font-bold font-syne">
                  Based in Bangladesh
                </h3>
                </StaggerItem>
                <StaggerItem>

                <p className="text-base md:text-lg lg:text-[18px] leading-6 md:leading-7 pb-10 md:pb-6 font-dm-sans text-heading/60">
                  I build modern, responsive, and user-friendly web applications
                  using React, JavaScript, and the latest technologies.
                  Passionate about creating clean UI and solving real-world
                  problems through code.
                </p>
                </StaggerItem>
                <div className="grid grid-cols-3 gap-4 lg:gap-10 lining-nums">
                  <StaggerItem>

                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-[32px] text-black font-syne font-bold">
                      12+
                    </h3>
                    <p className="text-sm md:text-base lg:text-[16px] font-dm-sans text-heading/60">
                      Projects Completed
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem>

                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-[32px] text-black font-syne font-bold">
                      100%
                    </h3>
                    <p className="text-sm md:text-base lg:text-[16px] font-dm-sans text-heading/60">
                      Client Satisfaction
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem>

                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-[32px] text-black font-syne font-bold">
                      ∞
                    </h3>
                    <p className="text-sm md:text-base lg:text-[16px] font-dm-sans text-heading/60">
                      Hours of Coding
                    </p>
                  </div>
                </StaggerItem>
                </div>
                <StaggerItem>

                <Link to="/">
                  <BlackButton className="mt-8 md:mt-10 md:w-auto">
                    Download my resume
                  </BlackButton>
                </Link>
                </StaggerItem>
              </div>
            </Stagger>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
};

export default Intro;
