import React from "react";
import Container from "./Container";
import { Dot, ArrowUpRightIcon } from "lucide-react";
import BlogImg1 from "../assets/blog-1.png";
import BlogImg2 from "../assets/cheffest.png";
import BlogImg3 from "../assets/travel.png";
import BlogImg4 from "../assets/project-1.png";
import { Link } from "react-router";
import Reveal from "./Reveal";
import { Stagger, StaggerItem } from "./Stagger";

const Blog = () => {
  return (
    <section className="mt-10 md:mt-20 lg:mt-30">
      <Container>
        <div className="px-4 xl:px-0">
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
        <Reveal direction="up">
          <Stagger>
            <StaggerItem>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4 lg:px-0 md:gap-8">
            {cards.map((card, i) => (
              <div key={i} className={i % 2 === 1 ? "lg:translate-y-10" : ""}>
                <BlogCard {...card} />
              </div>
            ))}
          </div>
            </StaggerItem>
          </Stagger>
        </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default Blog;

const cards = [
  {
    img: BlogImg1,
    title: "Fashion Website",
    date: "Feb 17, 2026",
    description: "Modern fashion platform with clean UI and responsive design.",
    link: "https://modevo-project-with-react.vercel.app/",
  },
  {
    img: BlogImg4,
    title: "E-commerce Website",
    date: "Mar 27, 2026",
    description:
      "Full-featured online store with product listing, cart, and user interaction.",
    link: "https://e-commerce-five-navy-79.vercel.app/",
  },
  {
    img: BlogImg2,
    title: "Restaurant Website",
    date: "Oct 28, 2025",
    description:
      "Responsive website with menu showcase and user-friendly interface.",
    link: "https://riyadulislamratul.github.io/Resturant-Website/",
  },
  {
    img: BlogImg3,
    title: "Travel Website",
    date: "Apr 21, 2026",
    description:
      "Beautiful landing page with engaging UI for travel experiences.",
    link: "https://travel-agency-eta-three.vercel.app/",
  },
];

const BlogCard = ({ img, title, date, description, link }) => {
  return (
    <Link to={link} className="w-full lg:w-[306px]">
      <div className="w-full md:w-[300px] lg:w-auto h-auto md:h-[380px] lg:h-95 mb-4 md:mb-6">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-3">
        <h3 className="text-heading/80 text-sm flex items-center whitespace-nowrap font-bold font-syne">
          <Dot className="size-3 mr-1" />
          {title}
        </h3>
        <p className="text-brand text-sm flex items-center whitespace-nowrap">
          <Dot className="size-3 mr-1" />
          {date}
        </p>
      </div>
      <div className="flex items-start sm:items-end justify-between gap-2">
        <h3 className="font-dm-sans text-xl md:text-2xl leading-7 md:leading-8">
          {description}
        </h3>
        <ArrowUpRightIcon className="size-5 md:size-8 flex-shrink-0" />
      </div>
    </Link>
  );
};
