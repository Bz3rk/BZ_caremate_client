import React from "react";
import {
  Squares2X2Icon,
  BeakerIcon,
  CalendarIcon,
  HeartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navActiveClass ="text-primary-300 scale-105 border-l-4 border-primary-300 rounded-sm pl-2 ";
  const navPendingClass = "text-gray-600 cursor-wait";

  const navLink = ({ isActive, isPending }) =>
    `flex items-center gap-3 hover:text-primary-300 hover:scale-105 duration-300 ease-in-out   
${isActive && navActiveClass}
${isPending && navPendingClass}`;

  return (
    <div className=" hidden lg:block fixed top-16 left-0">
      {/* Sidebar */}
      <aside className="w-48 bg-white shadow-card h-[calc(100vh-4rem)] p-4 ">
        <nav className="flex flex-col gap-10 items-start pt-10 text-base font-medium text-gray-600">
          <NavLink to="/dashboard" className={navLink}>
            <Squares2X2Icon className="w-6 h-6" />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/medications" className={navLink}>
            <BeakerIcon className="w-6 h-6" />
            <span>Medications</span>
          </NavLink>
          <NavLink to="/vitals" className={navLink}>
            <HeartIcon className="w-6 h-6" />
            <span>Health logs</span>
          </NavLink>
          <NavLink to="/appointment" className={navLink}>
            <CalendarIcon className="w-6 h-6" />
            <span>Appointment</span>
          </NavLink>
          <NavLink to="/support" className={navLink}>
            <UserCircleIcon className="w-6 h-6" />
            <span>Support</span>
          </NavLink>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
