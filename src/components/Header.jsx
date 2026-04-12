import React, { useState } from "react";
import { ArrowUpRightIcon, Equal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import Behance from "../assets/icons/behance.png";
import Dribbble from "../assets/icons/dribble.png";
import LinkedIn from "../assets/icons/linkedin.png";
import Github from "../assets/icons/github.png";
import { Link } from "react-router";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="flex justify-between items-center bg-[#FFE9D9] h-20 relative">
        {/* Logo */}
        <Reveal direction="left">
          <div
            className="font-oswald py-6 text-[24px] font-semibold text-brand px-12 
            after:absolute after:w-[65%] lg:after:w-[86%] xl:after:w-[93%] 
            after:h-px after:bg-[#C0C0C0] after:-bottom-px after:left-12 after:z-10"
          >
            <span className="text-heading">R</span>i
            <span className="text-heading">Y</span>a
            <span className="text-heading">D</span>
          </div>
        </Reveal>

        {/* Right Side */}
        <Reveal direction="right">
          <div className="h-full">
            <div className="flex items-center gap-5 h-full">
              {/* Let's Talk */}
              <div className="flex items-center gap-1 cursor-pointer">
                <p className="font-bold font-dm-sans text-[15px] text-heading">
                  Let's Talk
                </p>
                <ArrowUpRightIcon className="text-heading" />
              </div>

              {/* MENU BUTTON */}
              <div
                onClick={() => setOpen(true)}
                className="h-full bg-heading w-[100px] px-9.5 py-7 cursor-pointer"
              >
                <Equal className="text-white" />
              </div>
            </div>
          </div>

          {/* Decorative shape */}
          <div
            className="absolute top-0 right-25 hidden xl:block w-102.5 h-20 bg-brand z-1"
            style={{ clipPath: "polygon(19% 0, 100% 0, 100% 100%, 0 100%)" }}
          />
        </Reveal>
      </nav>

      {/* FULLSCREEN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 right-0 h-full w-[75%] sm:w-[50%] lg:w-[25%] bg-black z-50 flex flex-col justify-between p-6"
          >
            {/* TOP */}
            <div className="flex justify-end">
              <div
                onClick={() => setOpen(false)}
                className="bg-brand w-14 h-14 flex items-center justify-center cursor-pointer text-white text-xl"
              >
                ✕
              </div>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-6">
              {["Home", "About", "Project", "Blog", "Contact"].map(
                (item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center text-white text-xl border-b border-white/20 pb-4 cursor-pointer group"
                  >
                    <span>{item}</span>
                    <ArrowUpRightIcon className="opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                  </motion.div>
                ),
              )}
            </div>

            {/* SOCIAL */}
            <div className="flex items-center gap-5 z-9000">
                <img src={Behance} alt="Behance" className="size-4" />
                <img src={Dribbble} alt="Dribbble" className="size-5" />
                <Link to="https://www.linkedin.com/in/md-riyadul-islam-ratul-16b422326/" target="_blank">
                  <img src={LinkedIn} alt="LinkedIn" className="size-5" />
                </Link>
                <Link to="https://github.com/riyadulislamratul" target="_blank">
                  <img src={Github} alt="Github" className="size-5" />
                </Link>
              </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
