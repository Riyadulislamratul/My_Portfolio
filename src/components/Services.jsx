import React from "react";
import Section from "./Section";
import Container from "./Container";
import { ArrowUpRightIcon,} from "lucide-react";
import Icon6 from "../assets/icons/icon6.png"

const Services = () => {
  return (
    <Section>
      <Container>
        
          <div className="flex items-center gap-33.5 w-full mb-12">
            <div>
              <p className="text-brand font-syne text-[20px] font-bold">What I Do</p>
              <h2 className="font-syne font-bold text-[64px] mt-2 text-nowrap">My specialties</h2>
            </div>
            <div>
              <p className="font-dm-sans font-normal text-[18px] leading-7 mt-7.5 text-heading/60">
            Synergistically seize front-end methods of empowerment without extensive core competencies. Progressively repurpose alternative platforms 
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-6 w-full">
            <div className="grid grid-cols-3 gap-6 w-full">
            <ServiceCard
            title="Interaction design"
            img={Icon6}
            />
            <ServiceCard
            title="Webflow development"
            img={Icon6}
            />
            <ServiceCard
            title="Interaction design"
            img={Icon6}
            />
            <ServiceCard
            title="Webflow development"
            img={Icon6}
            />
            <ServiceCard
            title="Interaction design"
            img={Icon6}
            />
            <ServiceCard
            title="Webflow"
            img={Icon6}
            />
          </div>
          <div>
            <div className="px-6 py-9 bg-heading rounded-[8px] w-[416px]">
                <ArrowUpRightIcon className="text-[#F8B144] w-20 h-20 justify-self-end-safe" />
                <h4 className="text-brand mt-44">SAY HELLO!</h4>
                <h3 className="text-white mt-2 font-bold font-syne text-[32px]">hello@henry.com</h3>
            </div>
          </div>
          </div>
        
      </Container>
    </Section>
  );
};

export const ServiceCard = ({ title, img }) => {
  return (
    <div className="rounded-lg bg-[#F5F5F5] w-[270px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-white cursor-pointer">
      <div className="px-6 py-7">
        <div className="bg-white w-12 h-12 rounded-full items-center flex justify-center mb-7 transition-all duration-300 group-hover:bg-black">
          <img src={img} alt={title} className="w-6 h-6" />
        </div>

        <div className="flex items-center gap-2">
          <h3 className="text-[20px] font-bold font-syne leading-7 w-45.5">
            {title}
          </h3>

          <ArrowUpRightIcon className="text-heading w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </div>
  );
};

export default Services;
