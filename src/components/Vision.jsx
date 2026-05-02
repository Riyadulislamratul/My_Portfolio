import React from "react";
import Section from "./Section";
import Container from "./Container";
import { StaggerItem } from "./Stagger";
import { ArrowUpRightIcon } from "lucide-react";

const Vision = () => {
  return (
    <Section>
      <Container>
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* LEFT SIDE */}
          <div>
            {/* Heading */}
            <h2 className="text-heading font-syne font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight tracking-tight mb-4 md:mb-6">
              My vision is to create happy my clients
            </h2>

            {/* Description */}
            <p className="text-heading/60 font-dm-sans text-sm sm:text-base md:text-lg leading-relaxed mb-8 md:mb-10">
              I focus on creating modern, responsive, and user-friendly web
              applications that combine clean design with functionality. My goal
              is to build digital solutions that not only look great but also
              deliver real value through performance, usability, and innovation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lining-nums">
              
              <StaggerItem>
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] text-black font-syne font-bold">
                    12+
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base font-dm-sans text-heading/60">
                    Projects Completed
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] text-black font-syne font-bold">
                    10+
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base font-dm-sans text-heading/60">
                    Technologies Mastered
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] text-black font-syne font-bold">
                    ∞
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base font-dm-sans text-heading/60">
                    Hours of Coding
                  </p>
                </div>
              </StaggerItem>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-center">
            
            {/* Big Number */}
            <div className="">
              <h3 className="font-syne font-bold text-5xl lining-nums  sm:text-6xl md:text-7xl lg:text-[80px] leading-none">
                12+
              </h3>
            </div>

            {/* Outline Text */}
            <h1
              className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] tracking-tight leading-tight text-transparent mt-2"
              style={{
                WebkitTextStroke: "1px black",
              }}
            >
              Years of
              <br />
              experience
            </h1>

            {/* Contact Box */}
            <div className="mt-8 md:mt-10 lg:mt-12">
              <div className="p-5 sm:p-6 bg-black rounded-2xl">
                
                <p className="text-brand2 font-syne text-sm sm:text-base lg:text-lg mb-2">
                  SAY HELLO!
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <a
                    href="mailto:riadulislamratul93@gmail.com"
                    className="text-sm sm:text-base md:text-lg font-bold font-syne text-white break-all"
                  >
                    riadulislamratul93@gmail.com
                  </a>

                  <ArrowUpRightIcon className="text-brand w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 flex-shrink-0" />
                </div>

              </div>
            </div>

          </div>

        </div>
      </Container>
    </Section>
  );
};

export default Vision;