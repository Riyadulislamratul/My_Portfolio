import React from "react";
import Section from "./Section";
import Container from "./Container";
import { Dot, ArrowUpRightIcon } from "lucide-react";
import BlogImg1 from "../assets/blog-1.png";

const Blog = () => {
  return (
    <Section>
      <Container>
        <div className="text-center">
          <p className="text-brand font-syne font-bold text-[18px]">Blog</p>
          <h3 className="font-syne font-bold text-[64px] text-heading mt-2.5 mb-12">
            My blog post
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div key={i} className={i % 2 === 1 ? "lg:translate-y-10" : ""}>
              <BlogCard {...card} />
            </div>
          ))}
        </div>
        ;
      </Container>
    </Section>
  );
};

export default Blog;

const cards = [
  {
    img: BlogImg1,
    title: "Interaction design",
    date: "May 12, 2023",
    description: "Right-lo-left behind development in mobile web design",
  },
  {
    img: BlogImg1,
    title: "Interaction design",
    date: "May 12, 2023",
    description: "Right-lo-left behind development in mobile web design",
  },
  {
    img: BlogImg1,
    title: "Interaction design",
    date: "May 12, 2023",
    description: "Right-lo-left behind development in mobile web design",
  },
  {
    img: BlogImg1,
    title: "Interaction design",
    date: "May 12, 2023",
    description: "Right-lo-left behind development in mobile web design",
  },
];

const BlogCard = ({ img, title, date, description }) => {
  return (
    <div>
      <div className="w-76.5 h-95 mb-6">
        <img src={img} alt={title} />
      </div>
      <div className="flex items-start gap-3 mb-3">
        <h3 className="text-heading/80 text-sm flex items-center whitespace-nowrap">
          <Dot />
          {title}
        </h3>
        <p className="text-brand text-sm flex items-center whitespace-nowrap">
          <Dot />
          {date}
        </p>
      </div>
      <div className="flex items-end w-full">
        <h3 className="font-syne font-bold text-2xl leading-8">
          {description}
        </h3>
        <ArrowUpRightIcon className="size-15" />
      </div>
    </div>
  );
};
