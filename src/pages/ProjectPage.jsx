import React from "react";
import Section from "../components/Section";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import { Stagger, StaggerItem } from "../components/Stagger";
import { Link } from "react-router";
import { ArrowUpRightIcon, ArrowUp } from "lucide-react";
import PI_1 from "../assets/project-1.png";
import PI_2 from "../assets/project-2.png";

const ProjectPage = () => {
  return (
    <Section>
      <Container>
        <Reveal direction="up">
          <div className="lg:text-center pl-6">
            <p className="text-brand font-syne font-bold text-lg md:text-[18px]">
              Blogs
            </p>
            <h3 className="font-syne font-bold text-3xl md:text-5xl lg:text-[64px] text-heading mt-2.5 mb-8 md:mb-12">
              My Projects
            </h3>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr] gap-10 px-4 lg:px-0 md:gap-8">
          <WorkCard
            img={PI_1}
            title="Project 1"
          />
          <WorkCard
            img={PI_2}
            title="Project 2"
          />
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr] gap-10 px-4 lg:px-0 md:gap-8">
            <WorkCard
            img={PI_1}
            title="Project 1"
          />
          <WorkCard
            img={PI_2}
            title="Project 2"
          />
          <WorkCard
            img={PI_2}
            title="Project 2"
          />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-10 px-4 lg:px-0 md:gap-8">
          <WorkCard
            img={PI_1}
            title="Project 1"
          />
          <WorkCard
            img={PI_2}
            title="Project 2"
          />
        </div>
      </Container>
    </Section>
  );
};

export default ProjectPage;

const WorkCard = ({ img, title }) => {
  return (
    <div className="group relative w-full h-[260px] md:h-[320px] lg:h-[380px] rounded-lg overflow-hidden cursor-pointer">
      
      {/* Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition duration-300"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-between p-5">
        <p className="text-[17px] font-bold font-syne text-white">
          {title}
        </p>
        <ArrowUpRightIcon className="text-white w-8 h-8" />
      </div>
      
    </div>
  );
};