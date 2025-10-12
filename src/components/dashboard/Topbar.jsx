import React, { useState } from "react";
import { ChevronDownIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { NavLink, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

const Topbar = () => {
  const [open, setOpen] = useState(false);
  const { logout, user } = useAuth();
  const { theme, toogleTheme } = useTheme();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-16 z-50 bg-primary-200">
      <div className="container flex justify-between items-center py-4 text-white">
        <div className="flex items-center gap-6">
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
          <Link
            to="/"
            className=" font-semibold font-Montserrat tracking-wider text-2xl md:text-3xl"
          >
            Bz-caremate
          </Link>
        </div>
        <div className="flex justify-center items-center gap-2 ">
          <p className="uppercase font-OpenSans font-semibold">
            {user && user.first_name}
            <span className="pl-px">👋</span>
          </p>
          <div className="relative">
            <button onClick={() => setOpen((prevState) => !prevState)}>
              <ChevronDownIcon className="w-8 h-5 mt-2" />
            </button>
            <AnimatePresence mode="wait">
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute bg-white text-gray-600 top-11 w-48 -right-0 sm:-right-10 shadow-xl rounded-md "
                >
                  <nav className="font-semibold flex flex-col gap-4 text-center p-6 font-OpenSans">
                    <NavLink className="hover:text-black duration-200 hover:scale-105">
                      Profile
                    </NavLink>
                    <button onClick={handleLogout}>
                      <NavLink className="hover:text-black duration-200 hover:scale-105">
                        Log out
                      </NavLink>
                    </button>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
