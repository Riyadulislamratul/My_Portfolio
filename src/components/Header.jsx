import { ArrowUpRightIcon, Equal, MenuIcon } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between items-center bg-orange h-20 relative">
      <div className="font-oswald py-6 text-[24px] font-semibold text-heading px-12">
        <span className="text-red-500">R</span>i
        <span className="text-red-500">Y</span>a
        <span className="text-red-500">D</span>
      </div>
      <div className="h-full " >
        <div className="flex items-center gap-5 h-full">
          <div className="flex items-center gap-1 cursor-pointer">
            <p className="font-bold font-dm-sans text-[15px] text-heading bg-transparent z-2">
              Let's Talk
            </p>
            <ArrowUpRightIcon className="text-heading" />
          </div>
          <div className="h-full bg-heading w-[100px] px-9.5 py-7 cursor-pointer ">
              <Equal className="text-white" />
          </div>
        </div>
      </div>
       <div className="absolute top-0 right-25 w-117.5 h-20 bg-brand z-1"
       style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)' }}
        />
    </nav>
  );
};

export default Header;
