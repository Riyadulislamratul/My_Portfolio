import React from "react";
import Container from "./Container";
import { Dot, ArrowUpRightIcon } from "lucide-react";
import BlogImg1 from "../assets/blog-1.png";
import { Link } from "react-router";

const Blog = () => {
  return (
    <section className="mt-10 md:mt-20 lg:mt-30">
      <Container>
        <div className="lg:text-center pl-6">
          <p className="text-brand font-syne font-bold text-lg md:text-[18px]">Blog</p>
          <h3 className="font-syne font-bold text-3xl md:text-5xl lg:text-[64px] text-heading mt-2.5 mb-8 md:mb-12">
            My blog post
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4 lg:px-0 md:gap-8">
          {cards.map((card, i) => (
            <div key={i} className={i % 2 === 1 ? "lg:translate-y-10" : ""}>
              <BlogCard {...card} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blog;

const cards = [
  {
    img: BlogImg1,
    title: "Interaction design",
    date: "May 12, 2023",
    description: "Right-lo-left behind development in mobile web design",
    link: "/blog/interaction-design"
  },
  {
    img: BlogImg1,
    title: "Interaction design",
    date: "May 12, 2023",
    description: "Right-lo-left behind development in mobile web design",
    link: "/blog/interaction-design"
  },
  {
    img: BlogImg1,
    title: "Interaction design",
    date: "May 12, 2023",
    description: "Right-lo-left behind development in mobile web design",
    link: "/blog/interaction-design"
  },
  {
    img: BlogImg1,
    title: "Interaction design",
    date: "May 12, 2023",
    description: "Right-lo-left behind development in mobile web design",
    link: "/blog/interaction-design"
  },
];

const BlogCard = ({ img, title, date, description, link }) => {
  return (
    <Link to={link} className="w-full lg:w-[306px]">
      <div className="w-full md:w-[300px] lg:w-auto h-auto md:h-[380px] lg:h-95 mb-4 md:mb-6">
        <img src={img} alt={title} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-3">
        <h3 className="text-heading/80 text-sm flex items-center whitespace-nowrap">
          <Dot className="size-3 mr-1" />
          {title}
        </h3>
        <p className="text-brand text-sm flex items-center whitespace-nowrap">
          <Dot className="size-3 mr-1" />
          {date}
        </p>
      </div>
      <div className="flex items-start sm:items-end justify-between gap-2">
        <h3 className="font-syne font-bold text-xl md:text-2xl leading-7 md:leading-8">
          {description}
        </h3>
        <ArrowUpRightIcon className="size-5 md:size-8 flex-shrink-0" />
      </div>
    </Link>
  );
};
