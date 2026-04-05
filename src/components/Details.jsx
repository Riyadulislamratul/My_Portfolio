import React from "react";
import Section from "./Section";
import Container from "./Container";
import { ArrowUpRightIcon } from "lucide-react";
import { Link } from "react-router";

const Details = () => {
  return (
    <Section className="bg-[#F5F5F5]">
      <Container>
        <div className="py-16 px-4 lg:px-0 md:py-20 lg:py-25 grid grid-cols-1 lg:grid-cols-[455px_1fr] gap-8 lg:gap-10 xl:gap-36.5">
          <div>
            <p className="text-brand font-syne text-lg md:text-[20px] font-bold pb-2.5">
              Resume
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-[64px] leading-tight lg:leading-[72px] pb-4 lg:pb-4.5 text-heading font-bold font-syne tracking-[-0.015em]">
              All over my details find here...
            </h2>
            <div className="space-y-2">
              <DetailButton link="/about">About me</DetailButton>
              <DetailButton link="/experience">Experience</DetailButton>
              <DetailButton link="/education">Education</DetailButton>
              <DetailButton link="/skills">Skills</DetailButton>
              <DetailButton link="/contact">Contact</DetailButton>
            </div>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl lg:text-[32px] font-syne font-bold text-heading mb-4 md:mb-6 leading-8 lg:leading-10">
              Frontend Developer
            </h3>
            <p className="text-base md:text-lg text-heading/60 font-dm-sans leading-6 md:leading-7">
              Riyadul Islam Ratul, {" "}
              <span className="font-bold text-black">
                Frontend Developer {" "}
              </span> 
              focused on building modern, responsive, and high-performance web
              applications using React and JavaScript. Passionate about clean
              design, user experience, and turning ideas into real-world
              solutions.
              <div className="mt-4 md:mt-6">
                I am always exploring new technologies to improve and expand my
                development capabilities.
              </div>
              <div className="pt-8 md:pt-14 space-y-3 md:space-y-4 lining-nums">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-10">
                  <span className="text-heading/80 w-full sm:w-27.5 font-dm-sans text-sm md:text-[18px]">
                    Name
                  </span>
                  <span className="text-heading font-bold font-syne text-lg md:text-[24px]">
                    Riyadul Islam Ratul
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-10">
                  <span className="text-heading/80 font-dm-sans w-full sm:w-27.5 text-sm md:text-[18px]">
                    Email
                  </span>
                  <span className="text-heading font-bold font-syne text-lg md:text-[24px] break-all">
                    riadulislamratul93@gmail.com
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-10">
                  <span className="text-heading/80 font-dm-sans w-full sm:w-27.5 text-sm md:text-[18px]">
                    Phone
                  </span>
                  <span className="text-heading font-bold font-syne text-lg md:text-[24px]">
                    +8801891746139
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-10">
                  <span className="text-heading/80 font-dm-sans w-full sm:w-27.5 text-sm md:text-[18px]">
                    Experience
                  </span>
                  <span className="text-heading font-bold font-syne text-lg md:text-[24px]">
                    3+ years
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-10">
                  <span className="text-heading/80 font-dm-sans w-full sm:w-27.5 text-sm md:text-[18px]">
                    Freelance
                  </span>
                  <span className="text-heading font-bold font-syne text-lg md:text-[24px]">
                    Available
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-10">
                  <span className="text-heading/80 font-dm-sans w-full sm:w-27.5 text-sm md:text-[18px]">
                    Nationality
                  </span>
                  <span className="text-heading font-bold font-syne text-lg md:text-[24px]">
                    Bangladesh
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-10">
                  <span className="text-heading/80 font-dm-sans w-full sm:w-27.5 text-sm md:text-[18px]">
                    Linkedln
                  </span>
                  <Link
                    to="https://www.linkedin.com/in/md-riyadul-islam-ratul-16b422326/"
                    className="cursor-pointer text-heading font-bold font-syne text-lg md:text-[24px] hover:underline"
                  >
                    riadulislamratul
                  </Link>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-10">
                  <span className="text-heading/80 font-dm-sans w-full sm:w-27.5 text-sm md:text-[18px]">
                    Language
                  </span>
                  <span className="text-heading font-bold font-syne text-lg md:text-[24px]">
                    English, Bengali
                  </span>
                </div>
              </div>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Details;

const DetailButton = ({ children, link }) => {
  return (
    <button className="w-full cursor-pointer">
      <div className="text-sm md:text-[15px] leading-4 font-bold font-dm-sans text-black rounded-lg py-4 md:py-5 px-4 md:px-6 flex items-center justify-between bg-white hover:bg-black hover:text-white transition-colors duration-300">
        <Link to={link} target="_blank" rel="noopener noreferrer">
          {children}
        </Link>
        <div>
          <ArrowUpRightIcon className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      </div>
    </button>
  );
};
