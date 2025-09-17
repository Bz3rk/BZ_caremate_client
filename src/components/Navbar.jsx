import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className=" flex flex-wrap py-4 container justify-between items-center">
        <div className="font-bold text-xl shadow-sm uppercase text-gray-600">
          <span className="font-bold text-2xl text-primary-300">BZ</span>
          -caremate
        </div>
        <div className="hidden sm:flex justify-center items-center gap-12">
          <div className="flex justify-around gap-6 mx-2">
            <NavLink className="nav-links" to="/">
              Home
            </NavLink>
            <NavLink className="nav-links" to="/dashboard">
              Caregivers
            </NavLink>
            <NavLink className="nav-links" to="">
              Contact
            </NavLink>
            <NavLink className="nav-links" to="">
              About
            </NavLink>
          </div>

          <NavLink to="/register" className="primary-button hidden md:block">
            Get Started{" "}
          </NavLink>
        </div>

        <div
          onClick={() => setOpen((prevState) => !prevState)}
          className="sm:hidden"
        >
          <Bars3Icon className="w-7 h-7 text-primary-300" />
        </div>
      </nav>

      {/* mobile menu */}
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-16 left-0 z-20 w-full h-screen bg-black/50 sm:hidden "
          >
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
              className="container py-6 max-w-[95%] mt-2 text-lg uppercase font-semibold text-white bg-primary-300  rounded-xl"
            >
              <div className="flex flex-col justify-center items-center gap-6">
                <NavLink
                  onClick={() => setOpen((prevState) => !prevState)}
                  className="text-white"
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  onClick={() => setOpen((prevState) => !prevState)}
                  className="text-white"
                  to=""
                >
                  Caregivers
                </NavLink>
                <NavLink
                  onClick={() => setOpen((prevState) => !prevState)}
                  className="text-white"
                  to=""
                >
                  Contact
                </NavLink>
                <NavLink
                  onClick={() => setOpen((prevState) => !prevState)}
                  className="text-white"
                  to=""
                >
                  About
                </NavLink>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
