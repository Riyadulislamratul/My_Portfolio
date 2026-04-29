import React from "react";
import Section from "./Section";
import Container from "./Container";
import Hero from "../assets/aboutimg.png";
import Heroo from "../assets/about.png";

const About = () => {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-2 gap-33.5">
          <div className="w-full">
            <img src={Heroo} alt="" className="w-full" />
          </div>
          <div>
            <p className="text-brand2 mb-2.5 text-[20px] font-bold font-syne">
              About me
            </p>
            <h2 className="text-heading mb-2 text-[50px] font-syne font-bold">
              Md Riyadul Islam Ratul
            </h2>
            <h3 className="text-heading mb-6 font-syne font-bold text-2xl">
              Frontend Developer
            </h3>
            <h3 className="mb-7.5 font-syne font-bold text-[20px]">
              I am a frontend developer focused on building modern, responsive,
              and user-friendly web applications. I specialize in React,
              JavaScript, and clean UI development, creating digital experiences
              that combine performance with design.
            </h3>
            <p className="mb-12 font-dm-sans text-[18px]">
              I enjoy transforming ideas into real-world products through code,
              with a strong focus on scalability, usability, and continuous
              improvement. From fashion platforms to e-commerce and business
              websites, I build solutions that are both functional and
              impactful.
            </p>
            <h3 className="font-syne font-bold text-[30px]">
                Built with passion.
            </h3>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
