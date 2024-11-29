import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <div className="bg-[#F9FAFB] py-24">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-3xl font-semibold">Start your free trial</h1>
          <h1 className="text-lg text-center">
            Join over 4,000+ startups already growing with Untitled.
          </h1>
        </div>
        <div className="flex gap-3">
          <Link className="px-3 py-2 border font-semibold rounded-md">
            Learn more
          </Link>
          <Link className="px-3 py-2 bg-[#7F56D9] text-white font-semibold rounded-md">
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
