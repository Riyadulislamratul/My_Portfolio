import { ArrowUpRightIcon, Equal, MenuIcon } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between items-center bg-[#FFE9D9] h-20 relative">
      <div className="font-oswald py-6 text-[24px] font-semibold text-brand px-12 
      after:absolute after:w-full after:h-px after:bg-[#C0C0C0] after:-bottom-px after:left-12 after:z-10 ">
        <span className="text-heading">R</span>i
        <span className="text-heading">Y</span>a
        <span className="text-heading">D</span>
      </div>
      <div className="h-full " >
        <div className="flex items-center gap-5 h-full">
          <div className="flex items-center gap-1 cursor-pointer">
            <p className="font-bold font-dm-sans text-[15px] text-heading bg-transparent z-2">
              Let's Talk
            </p>
            <ArrowUpRightIcon className="text-heading" />
          </div>
          <div className="h-full bg-heading w-[100px] px-9.5 py-7 cursor-pointer z-2">
              <Equal className="text-white" />
          </div>
        </div>
      </div>
       {/* <div className="absolute top-0 right-25 w-117.5 h-20 bg-brand z-1"
       style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)' }}
        /> */}
    </nav>
  );
};

export default Header;
