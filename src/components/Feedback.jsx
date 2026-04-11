import React from "react";
import Comma from "../assets/icons/comma.png";
import Minus from "../assets/icons/minus.png";

const Feedback = () => {
  return (
    <section className="py-16 md:py-20 lg:py-30">
      <div className="px-4 md:px-8 lg:px-72">
        <div className="grid grid-cols-1 lg:grid-cols-[416px_1fr] gap-8 lg:gap-6">
          <div>
            <p className="text-brand font-syne text-lg md:text-[20px] font-bold">
              Testimonial
            </p>
            <h3 className="text-3xl md:text-4xl lg:text-[64px] text-heading leading-tight lg:leading-18 font-syne font-bold mt-2">
              Client feedback
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-27 px-4">
            <FeedbackCard
              review={
                "Energistically build alternative scenarios via cross-unit applications. Credibly exploit one-to-one strategic theme areas and clicks-and-mortar services"
              }
              name={"John Doe"}
            />
            <FeedbackCard
              review={
                "Unleash energistically build alternative scenarios via cross-unit build efficient initiatives for distinctive vortals. Synergistically strategize via adaptiv"
              }
              name={"John Doe"}
            />
            <FeedbackCard
              review={
                "Aliquam vehicula nunc facilisis tincidunt feugiat. Pellentesque sed viverra nisi. Fusce et laoreet augue. Quisque pretium, ligula lectus semper urna. Aliquam vehicula."
              }
              name={"John Doe"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;

const FeedbackCard = ({ review, name }) => {
  return (
    <div className="w-full lg:w-[306px]">
      <div className="size-5 md:size-12 mb-6 md:mb-10">
        <img src={Comma} alt="" className="w-full" />
      </div>
      <p className="text-heading/80 font-syne text-base md:text-lg lg:text-[20px] font-bold leading-6 md:leading-7">
        {review}
      </p>
      <div className="flex items-center gap-3 md:gap-4 mt-4">
        <img src={Minus} alt="" className="w-10 md:w-12" />
        <h4 className="text-heading font-syne font-extrabold text-base md:text-[18px]">
          {name}
        </h4>
      </div>
    </div>
  );
};
