import React from "react";
import FeatureIcon1 from "../assets/icons/FeatureIcon1.png";
import FeatureIcon2 from "../assets/icons/FeatureIcon2.png";
import FeatureIcon3 from "../assets/icons/FeatureIcon3.png";
import FeatureIcon4 from "../assets/icons/FeatureIcon4.png";
import FeatureIcon5 from "../assets/icons/FeatureIcon5.png";
import FeatureIcon6 from "../assets/icons/FeatureIcon6.png";

const FeaturesSection = () => {
  return (
    <section className="py-24">
      <div className="flex flex-col ">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-12 lg:mb-20 md:w-[768px] md:h-[160px]">
              <span className="font-semibold text-lg mb-2 block text-[#6941C6]">
                Features
              </span>
              <h2 className="text-3xl">
                Analytics that feels like it's from the future
              </h2>
              <h1 className="text-base text-grey-500 h-[60px]">
                Powerful, self-serve product and growth analytics to help you
                convert, engage, and retain more users. Trusted by over 4,000
                startups.
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap   gap-10 justify-center">
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
          <div className="">
            <div className=" rounded-md   gap-5 w-[350px] h-[160px]">
              <div className="w-[48px] h-[48px] flex  items-center justify-center  mx-auto">
                <img src={FeatureIcon4} alt="FeatureIcon1" />
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
                <img src={FeatureIcon5} alt="FeatureIcon1" />
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
                <img src={FeatureIcon6} alt="FeatureIcon1" />
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
    </section>
  );
};

export default FeaturesSection;
