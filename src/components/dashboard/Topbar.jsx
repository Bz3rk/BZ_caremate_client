import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";


const Topbar = () => {

    const [open, setOpen] = useState(false)


  return (
    <div className="fixed top-0 left-0 w-full h-16 z-50 bg-primary-200">
      <div className="container flex justify-between items-center py-4 text-white">
        <div className=" font-semibold tracking-wider text-3xl">
          Bz-caremate
        </div>
        <div className="flex justify-center items-center gap-2 ">
          <p className="uppercase font-semibold">
            julia <span className="pl-px">👋</span>
          </p>
          <div className="relative">
            <button
            onClick={()=> setOpen((prevState)=> !prevState)}
            >
              <ChevronDownIcon className="w-8 h-5 mt-2" />
            </button>
            <AnimatePresence mode="wait" >
        {open && 
            <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute bg-white text-gray-600 top-11 w-48 -right-10 shadow-xl rounded-md ">
                <nav className="font-semibold flex flex-col gap-4 text-center p-6">
                    <NavLink className="hover:text-black duration-200 hover:scale-105">Profile</NavLink>
                    <NavLink className="hover:text-black duration-200 hover:scale-105">Log out</NavLink>
                </nav>
            </motion.div>
}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
