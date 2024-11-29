import React from "react";
import SysyphusLogo from "../assets/images/SysyphusLogo.png";
import UserImage from "../assets/images/UserImage.png";

const TestimonialSection = () => {
  return (
    <div className="flex justify-center py-24">
      <div className="px-8 flex flex-col items-center gap-8 md:w-[1216px] md:h-[360px]">
        <div>
          <img src={SysyphusLogo} alt="" className="h-10" />
        </div>
        <h1 className="text-3xl font-medium text-center md:w-2/3">
          We’ve been using Untitled to kick start every new project and can’t
          imagine working without it.
        </h1>
        <div className="flex flex-col justify-center items-center">
          <div>
            <img
              src={UserImage}
              alt="USER"
              className="h-[40px] w-[40px] rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-medium">Candice Wu</h1>
            <h1>Product Manager, Sisyphus</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
