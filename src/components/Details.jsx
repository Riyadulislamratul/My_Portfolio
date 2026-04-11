import React from "react";
import Section from "./Section";
import Container from "./Container";
import { ArrowUpRightIcon, Dot } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import Reveal from "./Reveal";

const Details = () => {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <Section className="bg-[#F5F5F5]">
      <Container>
        <div className="py-16 px-4 lg:px-0 md:py-20 lg:py-25 grid grid-cols-1 lg:grid-cols-[455px_1fr] gap-8 lg:gap-10 xl:gap-36.5">
          <Reveal direction="left">
            <div>
            <p className="text-brand font-syne text-lg md:text-[20px] font-bold pb-2.5">
              Resume
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-[64px] leading-tight lg:leading-[72px] pb-4 lg:pb-4.5 text-heading font-bold font-syne tracking-[-0.015em]">
              All over my details find here...
            </h2>
            <div className="space-y-2 ">
              <DetailButton
                onClick={() => setActiveTab("about")}
                active={activeTab === "about"}
              >
                About me
              </DetailButton>
              <DetailButton
                onClick={() => setActiveTab("experience")}
                active={activeTab === "experience"}
              >
                Experience
              </DetailButton>
              <DetailButton
                onClick={() => setActiveTab("education")}
                active={activeTab === "education"}
              >
                Education
              </DetailButton>
              <DetailButton
                onClick={() => setActiveTab("skills")}
                active={activeTab === "skills"}
              >
                Skills
              </DetailButton>
              <DetailButton
                onClick={() => setActiveTab("achievements")}
                active={activeTab === "achievements"}
              >
                Achievements
              </DetailButton>
            </div>
          </div>
          </Reveal>
          <div className="relative">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              {activeTab === "about" && <About />}
              {activeTab === "experience" && <Experience />}
              {activeTab === "education" && <Education />}
              {activeTab === "skills" && <Skills />}
              {activeTab === "achievements" && <Achievements />}
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Details;

const DetailButton = ({ children, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-sm md:text-[15px] font-bold rounded-lg py-4 cursor-pointer px-4 flex items-center justify-between transition-colors duration-300
        ${active ? "bg-black text-white" : "bg-white text-black hover:bg-black hover:text-white"}
      `}
    >
      {children}
      <ArrowUpRightIcon className="w-5 h-5" />
    </button>
  );
};

const About = () => {
  return (
    <div>
      <h3 className="text-xl md:text-2xl lg:text-[32px] font-syne font-bold text-heading mb-4 md:mb-6 leading-8 lg:leading-10">
        Frontend Developer
      </h3>
      <p className="text-base md:text-lg text-heading/60 font-dm-sans leading-6 md:leading-7">
        Riyadul Islam Ratul,{" "}
        <span className="font-bold text-black">Frontend Developer </span>
        focused on building modern, responsive, and high-performance web
        applications using React and JavaScript. Passionate about clean design,
        user experience, and turning ideas into real-world solutions.
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
  );
};

const Experience = () => {
  return (
    <div>
      <h3 className="text-heading font-syne font-bold text-[32px]">My Work</h3>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <ExprienceCard
          title="Personal Project"
          duration="2025 - Present"
          description="Restaurant Website"
          link="https://riyadulislamratul.github.io/Resturant-Website/"
        />
        <ExprienceCard
          title="Ongoing Project"
          duration="2026 - Present"
          description="E-commerce Website"
          link="https://e-commerce-five-navy-79.vercel.app/"
        />
        <ExprienceCard
          title="Ongoing Project"
          duration="2026 - Present"
          description="E-commerce Website"
          link="https://e-commerce-five-navy-79.vercel.app/"
        />
        <ExprienceCard
          title="Portfolio Project"
          duration="2026 - Present"
          description="Portfolio Website"
          link="https://e-commerce-five-navy-79.vercel.app/"
        />
      </div>
    </div>
  );
};

const ExprienceCard = ({ title, duration, description, link }) => {
  return (
    <Link to={link} className="bg-[#ECECEC] rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-white cursor-pointer" target="_blank">
      <div className="px-6 pt-7.5 pb-6">
        <p className="text-heading text-[14px] leading-5 mb-8">{duration}</p>
        <div className="flex items-center gap-2">
          <Dot className="size-2 text-brand bg-brand rounded-full" />
          <h5 className="font-dm-sans text-lg mb-1">{title}</h5>
        </div>
        <h3 className="font-syne font-bold text-2xl text-heading">
          {description}
        </h3>
      </div>
    </Link>
  );
};

const Education = () => {
  return (
    <div>
      <h4 className="text-heading font-syne font-bold text-[32px] mb-6">
        Education
      </h4>
      <div className="grid grid-cols-1 gap-4 ">
        <EducationCard
          title="Bsc in Computer Science and Engineering"
          duration="2024-Present"
          description="National University"
        />
        <EducationCard
          title="Higher Secondary Certificate"
          duration="2022-2023"
          description="Gazipur Metropolitan College"
        />
        <EducationCard
          title="Secondary School Certificate"
          duration="2019-2021"
          description="Shaheen School and College, Gazipur"
        />
      </div>
    </div>
  );
};

const EducationCard = ({ title, duration, description }) => {
  return (
    <div className="bg-[#ECECEC] rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-white cursor-pointer">
      <div className="px-6 pt-7.5 pb-6 flex items-center gap-26">
        <div>
          <p className="text-heading text-[14px] leading-5">{duration}</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Dot className="size-2 text-brand bg-brand rounded-full" />
            <h5 className="font-dm-sans text-lg mb-1">{description}</h5>
          </div>
          <h4 className="font-syne text-[24px] leading-8">{title}</h4>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div>
      <h4 className="text-heading font-syne font-bold text-[32px] mb-6">
        Skills
      </h4>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
        <SkillCard title="React" icon={<FaReact className="size-8" />} />
        <SkillCard title="JavaScript" icon={<DiJavascript1 className="size-8" />} />
        <SkillCard title="Tailwind" icon={<SiTailwindcss className="size-8" />} />
        <SkillCard title="CSS" icon={<FaCss3Alt className="size-8" />} />
        <SkillCard title="HTML" icon={<FaHtml5 className="size-8" />} />
      </div>
    </div>
  );
};

const SkillCard = ({ title, icon }) => {
  return (
    <div className="bg-[#ECECEC] rounded-lg px-6 py-4 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-white cursor-pointer" >
      <div className="py-6 pl-5 flex items-center gap-4">
        <div>
          {icon}
        </div>
        <div>
          <h4 className="font-syne text-[20px] leading-7 font-bold text-heading">
            {title}
          </h4>
          <p className="text-[14px] text-heading/80">
            (90% Proficiency)
          </p>
        </div>
      </div>
    </div>
  );
};


const Achievements = () => {
  return (
    <div>
      <h3 className="text-heading font-syne font-bold text-[32px]">My Achievements</h3>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <AchievementCard
          title="10+ Projects Built"
          duration="2025"
          current="Completed"
        />
        <AchievementCard
          title="Portfolio Website Launched"
          duration="2025"
          current="Achievements"
        />
        <AchievementCard
          title="100+ Problems Solved"
          duration="2024 – Present"
          current="Learning"
        />
        <AchievementCard
          title="Continuous Skill Development"
          duration="Ongoing"
          current="Growth"
        />
      </div>
    </div>
  );
};


const AchievementCard = ({ title, duration, current }) => {
  return (
    <div className="bg-[#ECECEC] rounded-lg lining-nums transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-white cursor-pointer">
      <div className="px-6 pt-7.5 pb-7">
        
          <p className="text-heading/80 text-[18px] leading-5 mb-8">{duration}</p>
        <div className="flex items-center gap-2">
          <Dot className="size-2 text-brand bg-brand rounded-full" />
          <h5 className="font-dm-sans text-lg mb-1">{current}</h5>
        </div>
        <h3 className="font-syne font-bold text-2xl text-heading">
          {title}
        </h3>
      </div>
    </div>
  );
};
