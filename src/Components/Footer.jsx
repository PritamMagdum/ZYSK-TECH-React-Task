import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <div className=" pt-16 pb-12 px-4">
      <div className="">
        {/* Links */}
        <div className=" flex flex-wrap gap-28 justify-center">
          <div className="flex flex-col gap-3">
            <h1>Product</h1>
            <Link className="font-semibold">Overview</Link>
            <Link className="font-semibold">Features</Link>
            <Link className="font-semibold">Solutions</Link>
            <Link className="font-semibold">Tutorials</Link>
            <Link className="font-semibold">Pricing</Link>
            <Link className="font-semibold">Releases</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h1>Company</h1>
            <Link className="font-semibold">About us</Link>
            <Link className="font-semibold">Careers</Link>
            <Link className="font-semibold">Press</Link>
            <Link className="font-semibold">News</Link>
            <Link className="font-semibold">Media kit</Link>
            <Link className="font-semibold">Contact</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h1>Resources</h1>
            <Link className="font-semibold">Blog</Link>
            <Link className="font-semibold">Newsletter</Link>
            <Link className="font-semibold">Events</Link>
            <Link className="font-semibold">Help centre</Link>
            <Link className="font-semibold">Tutorials</Link>
            <Link className="font-semibold">Support</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h1>Use cases</h1>
            <Link className="font-semibold">Startups</Link>
            <Link className="font-semibold">Enterprise</Link>
            <Link className="font-semibold">Government</Link>
            <Link className="font-semibold">Saar centre</Link>
            <Link className="font-semibold">Marketplaces</Link>
            <Link className="font-semibold">Eccommerce</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h1>Social</h1>
            <Link className="font-semibold">Twitter</Link>
            <Link className="font-semibold">Linkedin</Link>
            <Link className="font-semibold">Facebook</Link>
            <Link className="font-semibold">GitHub</Link>
            <Link className="font-semibold">AngelList</Link>
            <Link className="font-semibold">Dribble</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h1>Legal</h1>
            <Link className="font-semibold">Terms</Link>
            <Link className="font-semibold">Privacy</Link>
            <Link className="font-semibold">Cookies</Link>
            <Link className="font-semibold">Licenses</Link>
            <Link className="font-semibold">Settings</Link>
            <Link className="font-semibold">Contact</Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="border-b-2 w-full md:w-[80%] mt-20"></div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row sm:px-12 md:px-24 lg:px-36 gap-2 sm:items-center  pt-4 sm:justify-between">
          <div className="flex items-center gap-2 text-white text-lg font-bold">
            <img src={Logo} alt="img" className="w-[32px] h-[32px]" />
            <span className="font-bold text-black">Untitled UI</span>
          </div>
          <h1>© 2077 Untitled UI. All rights reserved.</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
