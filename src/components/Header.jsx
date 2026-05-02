import React, { useState } from "react";
import { ArrowUpRightIcon, Equal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import Behance from "../assets/icons/behance.png";
import Dribbble from "../assets/icons/dribble.png";
import LinkedIn from "../assets/icons/linkedin.png";
import Github from "../assets/icons/github.png";
import { Link, useLocation } from "react-router";

const Header = () => {
  const [open, setOpen] = useState(false);

  // ✅ Detect current route
  const location = useLocation();
  const isHome = location.pathname === "/";

  // ✅ Menu items
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Project", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`flex justify-between items-center h-20 relative ${
          isHome ? "bg-[#FFE9D9]" : "bg-white"
        }`}
      >
        {/* Logo */}
        <Reveal direction="left">
          <Link to="/"
            className="font-oswald py-6 text-[24px] font-semibold text-brand px-12 
            after:absolute after:w-[65%] lg:after:w-[86%] xl:after:w-[93%] 
            after:h-px after:bg-[#C0C0C0] after:-bottom-px after:left-12 after:z-10"
          >
            <span className="text-heading">R</span>i
            <span className="text-heading">Y</span>a
            <span className="text-heading">D</span>
          </Link>
        </Reveal>

        {/* Right Side */}
        <Reveal direction="right">
          <div className="h-full">
            <div className="flex items-center gap-5 h-full">
              {/* Let's Talk */}
              <div className="flex items-center gap-1 cursor-pointer">
                <p
                  className={`font-bold font-dm-sans text-[15px] ${
                    isHome ? "text-heading" : "text-black"
                  }`}
                >
                  Let's Talk
                </p>
                <ArrowUpRightIcon
                  className={isHome ? "text-heading" : "text-black"}
                />
              </div>

              {/* MENU BUTTON */}
              <div
                onClick={() => setOpen(true)}
                className={`h-full w-[100px] px-9.5 py-7 cursor-pointer ${
                  isHome ? "bg-heading" : "bg-black"
                }`}
              >
                <Equal className="text-white" />
              </div>
            </div>
          </div>

          {/* ✅ Clip-path only on home */}
          {isHome && (
            <div
              className="absolute top-0 right-25 hidden xl:block w-102.5 h-20 bg-brand z-1"
              style={{
                clipPath: "polygon(19% 0, 100% 0, 100% 100%, 0 100%)",
              }}
            />
          )}
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
              {menuItems.map((item, index) => (
                <Link
                  to={item.path}
                  key={item.name}
                  onClick={() => setOpen(false)}
                >
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center text-white text-xl border-b border-white/20 pb-4 cursor-pointer group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRightIcon className="opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* SOCIAL */}
            <div className="flex items-center gap-10 z-[9999]">
              <img src={Behance} alt="Behance" className="w-6.5 h-5" />
              <img src={Dribbble} alt="Dribbble" className="size-5" />

              <a
                href="https://www.linkedin.com/in/md-riyadul-islam-ratul-16b422326/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedIn} alt="LinkedIn" className="size-5" />
              </a>

              <a
                href="https://github.com/riyadulislamratul"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Github} alt="Github" className="size-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;