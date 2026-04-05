import React from "react";
import Comma from "../assets/icons/comma.png";
import Minus from "../assets/icons/minus.png";

const Feedback = () => {
  return (
    <section>
      <div className="margin-0-auto px-72 py-30">
        <div className="grid grid-cols-1 md:grid-cols-[416px_1fr] gap-6">
          <div>
            <p className="text-brand font-syne text-[20px] font-bold">
              Testimonial
            </p>
            <h3 className="text-[64px] text-heading leading-18 font-syne font-bold">
              Client feedback
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <FeedbackCard
              review={
                "“Energistically build alternative scenarios via cross-unit applications. Credibly exploit one-to-one strategic theme areas and clicks-and-mortar services”"
              }
              name={"John Doe"}
            />
            <FeedbackCard
              review={
                "“Unleash  energistically build alternative scenarios via cross-unit  build efficient initiatives for distinctive vortals. Synergistically strategize via adaptiv”"
              }
              name={"John Doe"}
            />
            <FeedbackCard
              review={
                "“Aliquam vehicula nunc facilisis tincidunt feugiat. Pellentesque sed viverra nisi. Fusce et laoreet augue. Quisque pretium, ligula lectus semper urna. Aliquam vehicula.”"
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
    <div className="">
      <div className="size-12 mb-10">
        <img src={Comma} alt="" className="w-full" />
      </div>
      <p className="text-heading/80 font-syne text-[20px] font-bold leading-7">
        {review}
      </p>
      <div className="flex items-center gap-4 mt-4">
        <img src={Minus} alt="" w-12 />
        <h4 className="text-heading font-syne font-extrabold text-[18px]">
          {name}
        </h4>
      </div>
    </div>
  );
};
