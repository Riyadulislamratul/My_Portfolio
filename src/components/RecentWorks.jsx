import React from "react";
import Section from "./Section";
import Container from "./Container";
import { Link } from "react-router";
import PI_1 from "../assets/project-1.png";
import PI_2 from "../assets/project-2.png";
import { ArrowUpRightIcon } from "lucide-react";
import Reveal from "./Reveal";

const RecentWorks = () => {
  return (
    <section className="bg-orange">
      <Container>
        <div className="py-12 md:py-16 lg:py-20">
          <Reveal direction="down">
            <div className="text-center max-w-2xl mx-auto">
            <p className="text-brand font-syne text-lg md:text-xl pb-2 font-bold">
              Portfolio
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-syne font-bold text-heading pb-6 md:pb-10">
              My Recent Work
            </h1>
          </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
            <Reveal direction="left">
              <ProjectCard
              project={{
                image: PI_1,
                title: "Full Ecommerce Website",
                description: "Description of project 1",
                link: "https://e-commerce-five-navy-79.vercel.app/",
              }}
            />
            </Reveal>
            <Reveal direction="right">
              <ProjectCard
                project={{
                  image: PI_2,
                  title: "Modevo Fashion Website",
                  description: "Description of project 2",
                  link: "https://modevo-project-with-react.vercel.app/",
                }}
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RecentWorks;

const ProjectCard = ({ project }) => {
  return (
    <div className="w-full  ">
      {/* Image */}
      <div className="w-full rounded-2xl overflow-hidden mb-4 md:mb-6 group h-[380px]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pb-3">
        <span className="text-heading text-xs md:text-sm font-medium py-1 px-3 font-syne border border-[#9C8F85] rounded-full">
          WEB
        </span>
        <span className="text-heading text-xs md:text-sm font-medium py-1 px-3 font-syne border border-[#9C8F85] rounded-full">
          DEVELOPMENT
        </span>
      </div>

      {/* Title + Icon */}
      <Link
        to={project.link}
        target="_blank"
        className="flex items-center justify-between group"
      >
        <h2 className="font-syne font-bold text-lg md:text-xl lg:text-2xl text-heading transition group-hover:underline">
          {project.title}
        </h2>

        <ArrowUpRightIcon className="text-heading size-6 md:size-8 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>
    </div>
  );
};
