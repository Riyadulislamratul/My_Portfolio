import Section from "./Section";
import Container from "./Container";
import HTML from "../assets/icons/html.png";
import CSS from "../assets/icons/css.png";
import JS from "../assets/icons/js.png";
import Tailwind from "../assets/icons/tailwind.png";
import NextJS from "../assets/icons/nextjs.png";
import Git from "../assets/icons/git.png";
import Github from "../assets/icons/gith.png";
import Figma from "../assets/icons/figma.png";
import ReactIcon from "../assets/icons/react.png";
import Firebase from "../assets/icons/firebase.png";

import Reveal from "./Reveal";

const TechStack = () => {
  const techItems = [
    { icon: HTML, name: "HTML" },
    { icon: CSS, name: "CSS" },
    { icon: JS, name: "JavaScript" },
    { icon: Tailwind, name: "Tailwind CSS" },
    { icon: ReactIcon, name: "React" },
    { icon: NextJS, name: "Next.js" },
    { icon: Git, name: "Git" },
    { icon: Github, name: "GitHub" },
    { icon: Figma, name: "Figma" },
    { icon: Firebase, name: "Firebase" },
  ];

  return (
    <Section className="py-12 md:py-16 lg:py-24">
      <Container>
        <Reveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <p className="text-brand font-syne text-base sm:text-lg md:text-xl font-bold pb-2">
              Tools
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-syne font-bold text-heading leading-tight">
              Tech Stack
            </h1>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12 place-items-center">
            {techItems.map((tech, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl p-2 sm:p-3 hover:scale-110 transition duration-300">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="mt-2 text-xs sm:text-sm md:text-base font-medium text-heading opacity-80 group-hover:opacity-100 transition">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
};

export default TechStack;
