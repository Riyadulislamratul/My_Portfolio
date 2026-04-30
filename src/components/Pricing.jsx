import React from "react";
import Section from "./Section";
import Container from "./Container";
import { BlackButton } from "./Hero";
import { ArrowUpRightIcon } from "lucide-react";
import { Link } from "react-router";
import Reveal from "./Reveal";
import { Stagger, StaggerItem } from "./Stagger";

const Pricing = () => {
  return (
    <Section>
      <Container>
        <div className="px-4 xl:px-0">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
            <Reveal direction="left">
              <div className="max-w-[527px]">
                <p className="text-brand font-syne text-[20px] font-bold">
                  Pricing
                </p>
                <h2 className="font-syne font-bold text-4xl md:text-5xl lg:text-[64px] text-heading leading-tight lg:leading-18 tracking-[-0.015em] ">
                  Stay chill and pick your plan
                </h2>
              </div>
            </Reveal>
            <Reveal direction="right">
              <Link to="/contact" className="flex items-start lg:items-end">
                <BlackButton className=" lg:w-auto">
                  Contact for Custom Project
                </BlackButton>
              </Link>
            </Reveal>
          </div>
          <Reveal direction="up">
            <Stagger>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lining-nums mt-16">
                <StaggerItem>
                  <PriceCard
                    title="Basic"
                    hours="20 Hours"
                    perweek="10 hours per Week"
                    perhour="$28/hr"
                    link="/contact"
                  />
                </StaggerItem>
                <StaggerItem>
                  <PriceCard
                    title="Standard"
                    hours="40 Hours"
                    perweek="15 hours per Week"
                    perhour="$42/hr"
                    link="/contact"
                  />
                </StaggerItem>
                <StaggerItem>
                  <PriceCard
                    title="Premium"
                    hours="60 Hours"
                    perweek="20 hours per Week"
                    perhour="$50/hr"
                    link="/contact"
                  />
                </StaggerItem>
              </div>
            </Stagger>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
};

export default Pricing;

const PriceCard = ({ title, hours, perweek, perhour, link }) => {
  return (
    <Link
      to={link}
      className="bg-[#F5F5F5] rounded-xl hover:bg-white hover:transition-all hover:-translate-y-1 hover:shadow-xl duration-300 "
    >
      <div className="p-8">
        <div className="mb-12 flex justify-between items-center">
          <p className="text-lg font-dm-sans text-heading/60">{title}</p>
          <p className="font-syne text-[20px] font-bold text-brand">
            {perhour}
          </p>
        </div>
        <div>
          <div>
            <h4 className="font-syne font-bold text-[32px] text-heading">
              {hours}
            </h4>
            <div className="text-heading/60 flex items-center justify-between">
              <p className="text-lg font-dm-sans ">{perweek}</p>
              <ArrowUpRightIcon className="size-8" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
