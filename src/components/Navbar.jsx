import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import { menuLinkVariants, menuListVariants } from "../utility/animation";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const body = document.body;

    if (open) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }

    return () => {
      body.classList.remove("no-scroll");
    };
  }, [open]);

  return (
    <>
      <nav className=" flex flex-wrap py-4 container justify-between items-center">
        <NavLink to='/'>
        <div className="font-bold font-Montserrat text-xl shadow-sm uppercase text-gray-600">
          <span className="font-bold text-2xl text-primary-300">BZ</span>
          -caremate
        </div>
        </NavLink>
        <div className="hidden sm:flex justify-center font-OpenSans items-center gap-12">
          <div className="flex justify-around  gap-6 mx-2">
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
          <motion.button
          whileTap={{ scale: 0.95 }}
          >
          <NavLink to="/register" className="primary-button hidden md:block">
            Get Started
          </NavLink>
          </motion.button>
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
              variants={menuListVariants}
              initial= "hidden"
              animate= "visible"
              exit="hidden"
              className="container py-6 text-lg uppercase font-medium text-white bg-primary-300"
            >
              <div className="flex font-OpenSans flex-col justify-center items-center gap-6">
                <motion.div
                variants={menuLinkVariants}
                >
                  <NavLink
                    onClick={() => setOpen((prevState) => !prevState)}
                    className="text-white"
                    to="/"
                  >
                    Home
                  </NavLink>
                </motion.div>
                <motion.div
                variants={menuLinkVariants}
                >
                  <NavLink
                    onClick={() => setOpen((prevState) => !prevState)}
                    className="text-white"
                    to="/dashboard"
                  >
                    Caregivers
                  </NavLink>
                </motion.div>
                <motion.div
                
                variants={menuLinkVariants}
                >
                  <NavLink
                    onClick={() => setOpen((prevState) => !prevState)}
                    className="text-white"
                    to=""
                  >
                    Contact
                  </NavLink>
                </motion.div>
                <motion.div
                variants={menuLinkVariants}
                >
                  <NavLink
                    onClick={() => setOpen((prevState) => !prevState)}
                    className="text-white"
                    to=""
                  >
                    About
                  </NavLink>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
