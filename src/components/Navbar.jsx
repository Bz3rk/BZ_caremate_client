import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Bars3Icon,
  SunIcon,
  MoonIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import { menuLinkVariants, menuListVariants } from "../utility/animation";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const { theme, toogleTheme } = useTheme();

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
        <div className="flex gap-4 items-center">
          <button
            onClick={toogleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
          >
            {theme === "dark" ? (
              <SunIcon className="w-6 h-6 text-yellow-400" />
            ) : (
              <MoonIcon className="w-6 h-6 text-gray-800" />
            )}
          </button>
          <NavLink to="/">
            <div className="font-bold font-Montserrat text-xl shadow-sm uppercase text-gray-600 dark:text-gray-200 ">
              <span className="font-bold text-2xl text-primary-300 dark:text-primary-200">
                BZ
              </span>
              -caremate
            </div>
          </NavLink>
        </div>

        <div className="hidden sm:flex justify-center font-OpenSans items-center gap-12">
          <div className="flex justify-around  gap-6 mx-2">
            <NavLink className="nav-links" to="/">
              Home
            </NavLink>
            <NavLink className="nav-links" to="">
              Contact
            </NavLink>
            <NavLink className="nav-links" to="">
              About
            </NavLink>
          </div>
          <motion.button whileTap={{ scale: 0.95 }}>
            {user ? (
              <NavLink
                to={
                  user && user.is_cargiver
                    ? "/caregiver/dashboard"
                    : "/user/dashboard"
                }
                className="primary-button hiddel md:block"
              >
                Dashboard
              </NavLink>
            ) : (
              <NavLink
                to="/register"
                className="primary-button hidden md:block"
              >
                Get Started
              </NavLink>
            )}
          </motion.button>
        </div>

        <button
          onClick={() => setOpen((prevState) => !prevState)}
          className="sm:hidden"
        >
          {open ? (
            <XMarkIcon className="w-8 h-8 text-primary-300" />
          ) : (
            <Bars3Icon className="w-8 h-8 text-primary-300" />
          )}
        </button>
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
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="container py-6 text-lg capitalize font-medium text-white bg-primary-300"
            >
              <div className="flex font-OpenSans flex-col justify-center items-center gap-6">
                <motion.div variants={menuLinkVariants}>
                  <NavLink
                    onClick={() => setOpen((prevState) => !prevState)}
                    className="text-white"
                    to="/"
                  >
                    Home
                  </NavLink>
                </motion.div>
                <motion.div variants={menuLinkVariants}>
                  <NavLink
                    onClick={() => setOpen((prevState) => !prevState)}
                    className="text-white"
                    to=""
                  >
                    Contact
                  </NavLink>
                </motion.div>
                <motion.div variants={menuLinkVariants}>
                  <NavLink
                    onClick={() => setOpen((prevState) => !prevState)}
                    className="text-white"
                    to=""
                  >
                    About
                  </NavLink>
                </motion.div>

                <motion.div variants={menuLinkVariants}>
                  {user ? (
                    <NavLink
                      onClick={() => setOpen((prevState) => !prevState)}
                      className="text-white"
                      to={
                        user && user.is_cargiver
                          ? "/caregiver/dashboard"
                          : "/user/dashboard"
                      }
                    >
                      Dashboard
                    </NavLink>
                  ) : (
                    <NavLink
                      onClick={() => setOpen((prevState) => !prevState)}
                      className="text-white"
                      to="/register"
                    >
                      Get Started
                    </NavLink>
                  )}
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
