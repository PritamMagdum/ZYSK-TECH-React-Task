import React from "react";
import AnalyticsImage from "../assets/images/AnalyticsImage.png";
import Iphone12Image from "../assets/images/Iphone12Image.png";
import FeatureIcon1 from "../assets/icons/FeatureIcon1.png";
import FeatureIcon2 from "../assets/icons/FeatureIcon2.png";
import FeatureIcon3 from "../assets/icons/FeatureIcon3.png";

const AdvanceAnalyticsSection = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-24 gap-16">
      <div className="flex flex-col justify-center items-center gap-[24px] px-4">
        <span className="border text-[#6941C6] rounded-xl px-2 bg-[#F9F5FF] border-[#E9D7FE]">
          New features
        </span>
        <div>
          <h1 className="text-4xl font-bold text-center">
            Cutting-edge features for advanced analytics
          </h1>
        </div>
        <div className="md:w-[560px] text-center">
          <p>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
      </div>
      <div>
        <div>
          <div className="px-4 relative ">
            <div className="">
              <div className="md:relative md:left-[100px]">
                <img
                  src={AnalyticsImage}
                  alt="Analytics"
                  className="md:w-[768px] md:h-[512px] rounded-xl border-4 border-black hidden md:block"
                />
              </div>
              <div className="md:absolute md:top-[64px] md:left-[-30px]">
                <img
                  src={Iphone12Image}
                  alt="Analytics"
                  className="md:w-[244px] md:h-[498]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap py-24  gap-10 justify-center">
        <div className="">
          <div className=" rounded-md   gap-5 w-[350px] h-[160px]">
            <div className="w-[48px] h-[48px] flex  items-center justify-center  mx-auto">
              <img src={FeatureIcon1} alt="FeatureIcon1" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-xl text-center">
                Share team inboxes
              </h4>
              <p className=" text-center">
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" rounded-md   gap-5 w-[350px] h-[160px]">
            <div className="w-[48px] h-[48px] flex  items-center justify-center  mx-auto">
              <img src={FeatureIcon2} alt="FeatureIcon1" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-xl text-center">
                Share team inboxes
              </h4>
              <p className=" text-center">
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" rounded-md   gap-5 w-[350px] h-[160px]">
            <div className="w-[48px] h-[48px] flex  items-center justify-center  mx-auto">
              <img src={FeatureIcon3} alt="FeatureIcon1" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-xl text-center">
                Share team inboxes
              </h4>
              <p className=" text-center">
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceAnalyticsSection;
