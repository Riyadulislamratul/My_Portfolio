import React from "react";
import Section from "./Section";
import Container from "./Container";
import { Link } from "react-router";
import PI_1 from "../assets/project-1.png";
import PI_2 from "../assets/project-2.png";
import {  ArrowUpRightIcon } from "lucide-react";

const RecentWorks = () => {
  return (
    <Section className="bg-orange">
      <Container>
        <div className="margin-0-auto py-25">
          <div className="text-center">
            <p className="text-brand font-syne text-[20px] pb-2.5 font-bold">
            Portfolio
          </p>
          <h1 className="text-[64px] font-syne font-bold text-heading pb-10">
            My recent work
          </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              project={{
                image: PI_1,
                title: "Full Ecommerce Website",
                description: "Description of project 1",
                link: "https://e-commerce-five-navy-79.vercel.app/",
              }}
            />
            <ProjectCard
              project={{
                image: PI_2,
                title: "Modevo Fashion Website",
                link: "https://modevo-project-with-react.vercel.app/",
              }}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default RecentWorks;

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-transparent w-[636px] h-[484px] rounded-lg">
      <div className="w-[636px] h-[380px] rounded-[20px]   overflow-hidden mb-6">
        <img src={project.image} alt={project.title} className="w-full h-full" />
      </div>
      <div className="flex gap-2 pb-3 ">
        <span className="text-heading text-[12px] font-medium py-1.5 px-4 font-syne border border-[#9C8F85] rounded-full">WEB </span>
        <span className="text-heading text-[12px] font-medium py-1.5 px-4 font-syne border border-[#9C8F85] rounded-full">DEVELOPMENT </span>
      </div>
      <Link to={project.link} className="flex items-center justify-between w-full" target="_blank">
        <h2 className="font-syne font-bold text-[32px] text-heading">{project.title}</h2>
        <ArrowUpRightIcon className="text-heading size-10" />
      </Link>
      
    </div>
  );
};
