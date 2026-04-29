import Section from "./Section";
import Container from "./Container";
import HTML from "../assets/icons/html.png";
import CSS from "../assets/icons/css.png";
import JS from "../assets/icons/js.png";
import Tailwind from "../assets/icons/tailwind.png";
import NextJS from "../assets/icons/nextjs.png";
import Git from "../assets/icons/git.png";
import Github from "../assets/icons/gith.png";
import Figma from "../assets/icons/figma.png";
import React from "../assets/icons/react.png";
import Reveal from "./Reveal";
const TechStack = () => {
  return (
    <Section className="py-25">
      <Container>
        <Reveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-brand font-syne text-lg md:text-xl pb-2 font-bold">
              Tools
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-syne font-bold text-heading pb-6 md:pb-10">
              My Tech Stack
            </h1>
          </div>
        </Reveal>
        <div className="space-y-30 ">
          <Reveal>
            <div className="flex justify-center items-center gap-70 ">
              <div className="size-20">
                <img src={HTML} alt="" className="w-full" />
              </div>
              <div className="size-20">
                <img src={CSS} alt="" className="w-full" />
              </div>
              <div className="size-20">
                <img src={JS} alt="" className="w-full" />
              </div>
              <div className="size-20">
                <img src={Tailwind} alt="" className="" />
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex justify-center items-center gap-70">
              <div className="size-20">
                <img src={React} alt="" className="w-full" />
              </div>
              <div className="size-20">
                <img src={NextJS} alt="" />
              </div>
              <div className="size-20">
                <img src={Git} alt="" />
              </div>
              <div className="size-20">
                <img src={Github} alt="" />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
};

export default TechStack;
