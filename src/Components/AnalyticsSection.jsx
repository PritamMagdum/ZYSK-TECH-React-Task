import React from "react";
import AnalyticsImage from "../assets/images/AnalyticsImage.png";
import Company1 from "../assets/companyImages/company1.png";
import Company2 from "../assets/companyImages/company2.png";
import Company3 from "../assets/companyImages/company3.png";
import Company4 from "../assets/companyImages/company4.png";
import Company5 from "../assets/companyImages/company4.png";
import Company6 from "../assets/companyImages/company5.png";

const AnalyticsSection = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-24 gap-16">
      <div className="flex flex-col justify-center items-center gap-[24px]">
        <div className="w-fit flex text-[#6941C6] bg-[#E9D7FE] py-1 px-1 rounded-2xl gap-1 items-center border border-[#6941C6]">
          <span className="border rounded-xl px-2 bg-white border-[#6941C6]">
            New features
          </span>
          <h1 className="px-1">Check out the team dashboard</h1>
        </div>
        <div>
          <h1 className="text-5xl font-bold">
            Beautiful analytics to grow smarter
          </h1>
        </div>
        <div className="w-[560px] text-center">
          <p>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-gray-200 rounded-lg">
            Demo
          </button>
          <button className="px-4 py-2 border border-gray-100 rounded-lg bg-[#7F56D9] text-white">
            Sign up
          </button>
        </div>
      </div>
      <div>
        <div>
          <div className="px-4 ">
            <img
              src={AnalyticsImage}
              alt="Analytics"
              className="md:w-[1216px] md:h-[810px] rounded-xl border-8 border-black "
            />
          </div>
          <div
            className="flex flex-col items-center gap-8 py-24 md:-translate-y-64 md:-mb-64 bg-white"
            style={{ borderBottom: "1px solid gray" }}
          >
            <h1>Join 4,000+ companies already growing</h1>
            <div className="flex flex-wrap justify-center gap-8 px-4">
              <img
                src={Company1}
                alt="Company1"
                className="h-[36px] md:h-[48px]"
              />
              <img
                src={Company2}
                alt="Company1"
                className="h-[36px] md:h-[48px]"
              />
              <img
                src={Company3}
                alt="Company1"
                className="h-[36px] md:h-[48px]"
              />
              <img
                src={Company4}
                alt="Company1"
                className="h-[36px] md:h-[48px]"
              />
              <img
                src={Company5}
                alt="Company1"
                className="h-[36px] md:h-[48px]"
              />
              <img
                src={Company6}
                alt="Company1"
                className="h-[36px] md:h-[48px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
