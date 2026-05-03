import React from "react";
import Section from "./Section";
import Container from "./Container";

import Heroo from "../assets/about.png";

const About = () => {
  return (
    <Section className="">
      <Container>
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">
          
          {/* LEFT IMAGE */}
          <div className="w-full px-3">
            <img
              src={Heroo}
              alt="Md Riyadul Islam Ratul"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="px-3">
            
            {/* Small Label */}
            <p className="text-brand2 mb-2 text-base sm:text-lg md:text-xl font-bold font-syne">
              About me
            </p>

            {/* Name */}
            <h2 className="text-heading mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-[50px] leading-tight font-syne font-bold">
              Md Riyadul Islam Ratul
            </h2>

            {/* Role */}
            <h3 className="text-heading mb-4 md:mb-6 font-syne font-bold text-lg sm:text-xl md:text-2xl">
              Frontend Developer
            </h3>

            {/* Intro */}
            <h3 className="mb-5 md:mb-7 font-syne font-bold text-base sm:text-lg md:text-xl lg:text-[20px] leading-relaxed">
              I am a frontend developer focused on building modern, responsive,
              and user-friendly web applications. I specialize in React,
              JavaScript, and clean UI development, creating digital experiences
              that combine performance with design.
            </h3>

            {/* Description */}
            <p className="mb-8 md:mb-10 lg:mb-12 font-dm-sans text-sm sm:text-base md:text-lg leading-relaxed text-heading/80">
              I enjoy transforming ideas into real-world products through code,
              with a strong focus on scalability, usability, and continuous
              improvement. From fashion platforms to e-commerce and business
              websites, I build solutions that are both functional and
              impactful.
            </p>

            {/* Closing Line */}
            <h3 className="font-syne font-bold text-2xl sm:text-3xl lg:text-[30px]">
              Built with passion.
            </h3>

          </div>

        </div>
      </Container>
    </Section>
  );
};

export default About;