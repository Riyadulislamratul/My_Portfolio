import React from "react";
import Section from "../components/Section";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import MailIcon from "../assets/icons/mail.png";
import MapIcon from "../assets/icons/map.png";
import CallIcon from "../assets/icons/call.png";
import { BlackButton } from "../components/Hero";
import { Stagger, StaggerItem } from "../components/Stagger";
import Behance from "../assets/behance.svg";
import Dribbble from "../assets/dribble.svg";
import LinkedIn from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import { Link } from "react-router";

const ContactPage = () => {
  return (
    <Section>
      <Container>
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 px-4 md:px-6">
          {/* LEFT SIDE */}
          <div>
            <Reveal direction="up">
              <div>
                <p className="text-brand font-syne font-bold text-base md:text-lg">
                  Contact
                </p>

                <h3 className="font-syne font-bold text-2xl md:text-4xl lg:text-[56px] text-heading mt-2 mb-6 md:mb-10 leading-tight max-w-md">
                  Let’s connect
                </h3>
              </div>
            </Reveal>

            <Reveal>
              <Stagger>
                <div className="flex flex-col gap-6">
                  <StaggerItem>
                    <Cards
                      img={MailIcon}
                      title="Email"
                      description="K4d5o@example.com"
                    />
                  </StaggerItem>

                  <StaggerItem>
                    <Cards
                      img={CallIcon}
                      title="Call Us"
                      description="+8801891-746139 | +8801575-814664"
                    />
                  </StaggerItem>

                  <StaggerItem>
                    <Cards
                      img={MapIcon}
                      title="Address"
                      description="Board Bazar, Gazipur, Bangladesh"
                    />
                  </StaggerItem>
                </div>
              </Stagger>
            </Reveal>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <Reveal>
            <Stagger>
              <div className="p-4 md:p-6 rounded-lg w-full">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <Input label="Name" placeholder="Your name*" />
                  <Input label="Email" type="email" placeholder="Your email*" />
                  <Input label="Phone" placeholder="Your number" />
                  <Input label="Subject*" placeholder="Your subject*" />

                  <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="text-sm text-heading">Message</label>
                    <textarea
                      rows="4"
                      placeholder="Type your message"
                      className="w-full border text-heading/40 rounded-md px-4 py-3 bg-transparent focus:outline-none focus:ring-1 focus:ring-black resize-none"
                    ></textarea>
                  </div>
                </form>

                <BlackButton className="mt-5 w-full md:w-auto">
                  Submit
                </BlackButton>

                {/* Social */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-10 md:mt-14">
                  <div className="hidden sm:block h-[1px] w-20 md:w-28 bg-gray-300"></div>

                  <p className="text-base md:text-lg font-medium text-gray-900">
                    Follow me
                  </p>

                  <div className="flex items-center gap-4 md:gap-5">
                    <img
                      src={Behance}
                      alt="Behance"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <img
                      src={Dribbble}
                      alt="Dribbble"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />

                    <Link
                      to="https://www.linkedin.com/in/md-riyadul-islam-ratul-16b422326/"
                      target="_blank"
                    >
                      <img
                        src={LinkedIn}
                        alt="LinkedIn"
                        className="w-5 h-5 md:w-6 md:h-6"
                      />
                    </Link>

                    <Link
                      to="https://github.com/riyadulislamratul"
                      target="_blank"
                    >
                      <img
                        src={Github}
                        alt="Github"
                        className="w-5 h-5 md:w-6 md:h-6"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </Stagger>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
};

export default ContactPage;

/* ========================= */
/* Reusable Input Component  */
/* ========================= */

const Input = ({ label, type = "text", placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-heading">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border text-heading/40 rounded-md px-4 py-3 bg-transparent focus:outline-none focus:ring-1 focus:ring-black"
      />
    </div>
  );
};

/* ========================= */
/* Cards Component           */
/* ========================= */

const Cards = ({ img, title, description }) => {
  return (
    <div className="w-full lg:w-104 pb-3 border-b border-heading/10">
      <div className="flex gap-4 items-start">
        <div className="w-7 h-7 md:w-8 md:h-8">
          <img src={img} alt="" />
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-heading/60 text-base md:text-[18px] font-dm-sans">
            {title}
          </p>

          <h3 className="font-syne text-base md:text-lg font-bold text-heading">
            {description}
          </h3>
        </div>
      </div>
    </div>
  );
};
