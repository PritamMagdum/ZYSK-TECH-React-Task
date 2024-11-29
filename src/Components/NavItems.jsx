"use client";

import { headerLinks } from "../constants/links";
import useMediaQuery from "../hooks/UseMediaQuery";
import React from "react";
import { Link, useParams } from "react-router-dom";

const NavItems = ({ setOpen }) => {
  const pathname = useParams();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <ul className="flex md:flex-between w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`${
              isActive &&
              "text-[#915eff] underline underline-offset-8 decoration-2 decoration-white"
            } flex-center p-medium-16 whitespace-nowrap hover:underline underline-offset-8 decoration-2`}
          >
            {isDesktop ? (
              <Link to={link.route}>{link.label}</Link>
            ) : (
              <Link to={link.route} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
