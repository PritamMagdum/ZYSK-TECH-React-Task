import React from "react";
import { Link } from "react-router-dom";
import Blog1 from "../assets/images/Blog1.png";
import Blog2 from "../assets/images/Blog2.png";
import Blog3 from "../assets/images/Blog3.png";
import ArrowUpRight from "../assets/images/ArrowUpRight.png";
import UserImage from "../assets/images/UserImage.png";
import UserImage2 from "../assets/images/UserImage2.png";
import UserImage3 from "../assets/images/UserImage3.png";

const BlogSection = () => {
  return (
    <div className="flex flex-col  pb-24 gap-16 items-center px-4 ">
      <div className="flex justify-between gap-16  lg:px-12 w-[85%]">
        <div className="flex flex-col gap-2">
          <span className="text-[#6941C6] font-semibold">Our blogs</span>
          <h1 className="text-2xl font-semibold">Latest blog posts</h1>
          <h1 className="text-lg">
            Tool and strategies modern teams need to help their companies grow.
          </h1>
        </div>
        <div className="hidden xl:block">
          <Link className="px-5 py-3 bg-[#7F56D9] rounded-md text-white">
            View all posts
          </Link>
        </div>
      </div>

      {/* Cards */}
      <div className="px-9 flex flex-col justify-center">
        <div className="flex flex-wrap justify-center gap-8">
          <div className=" w-[370px] h-[440px] flex flex-col gap-4">
            <div>
              <img src={Blog1} alt="" className="w-[384px] h-[240px]" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h1 className="text-[#6941C6] font-medium">Design</h1>
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-medium">
                    UX review presentations
                  </h1>
                  <div>
                    <img src={ArrowUpRight} alt="" />
                  </div>
                </div>
                <h4 className="">
                  How do you create compelling presentations that wow your
                  colleagues and impress your managers?
                </h4>
              </div>
              <div className="flex gap-3">
                <div>
                  <img
                    src={UserImage}
                    alt="USER"
                    className="h-[40px] w-[40px] rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">Olivia Rhye</span>
                  <span className="text-sm">20 Jan 2024</span>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-[370px] h-[440px] flex flex-col gap-4">
            <div>
              <img src={Blog2} alt="" className="w-[384px] h-[240px]" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h1 className="text-[#6941C6] font-medium">Product</h1>
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-medium">
                    Migrating to Linear 101
                  </h1>
                  <div>
                    <img src={ArrowUpRight} alt="" />
                  </div>
                </div>
                <h4 className="">
                  Linear helps streamline software projects, sprints, tasks, and
                  bug tracking. Here’s how to get started.
                </h4>
              </div>
              <div className="flex gap-3">
                <div>
                  <img
                    src={UserImage2}
                    alt="USER"
                    className="h-[40px] w-[40px] rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">Phoenix Baker</span>
                  <span className="text-sm">19 Jan 2024</span>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-[370px] h-[440px] flex flex-col gap-4">
            <div>
              <img src={Blog3} alt="" className="w-[384px] h-[240px]" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h1 className="text-[#6941C6] font-medium">
                  Software Engineering
                </h1>
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-medium">
                    Building your API stack
                  </h1>
                  <div>
                    <img src={ArrowUpRight} alt="" />
                  </div>
                </div>
                <h4 className="">
                  The rise of RESTful APIs has been met by a rise in tools for
                  creating, testing, and managing them.
                </h4>
              </div>
              <div className="flex gap-3">
                <div>
                  <img
                    src={UserImage3}
                    alt="USER"
                    className="h-[40px] w-[40px] rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">Lana Steiner</span>
                  <span className="text-sm">18 Jan 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:hidden py-12">
          <Link className="px-32 py-3 bg-[#7F56D9] text-center rounded-md text-white">
            View all posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
