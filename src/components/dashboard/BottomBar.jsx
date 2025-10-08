import React from "react";
import {
  Squares2X2Icon,
  BeakerIcon,
  CalendarIcon,
  HeartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const BottomBar = () => {
  const navActiveClass =
    "text-primary-300";
  const navPendingClass = "text-gray-600 cursor-wait";

  const navLink = ({ isActive, isPending }) =>
    `${isActive && navActiveClass} ${isPending && navPendingClass}`;

  return (
    <div className="lg:hidden fixed bottom-0 h-11 w-full bg-white shadow-[2px_2px_2px_0px_rgba(0,0,0,0.3)] z-20 ">
      <nav className="flex items-center justify-between py-2 px-8 text-primary-400">
        <NavLink to="/dashboard" className={navLink}>
          <Squares2X2Icon className="w-6 h-6" />
        </NavLink>
        <NavLink to="/medications" className={navLink}>
          <BeakerIcon className="w-6 h-6" />
        </NavLink>
        <NavLink to="/vitals" className={navLink}>
          <HeartIcon className="w-6 h-6" />
        </NavLink>
        <NavLink to="/appointment" className={navLink}>
          <CalendarIcon className="w-6 h-6" />
        </NavLink>
        <NavLink to="/support" className={navLink}>
          <UserCircleIcon className="w-6 h-6" />
        </NavLink>
      </nav>
    </div>
  );
};

export default BottomBar;
