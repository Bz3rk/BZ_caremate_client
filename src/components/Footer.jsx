import React from "react";
import {
  DevicePhoneMobileIcon,
  ChatBubbleOvalLeftIcon,
  GlobeAltIcon,
  UserGroupIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { slideRight } from "../utility/animation";

const Footer = () => {

  
  return (
    <footer>
      <div className="bg-gray-800 gap-8 text-gray-200 grid grid-cols-1 md:grid-cols-4 mt-6 p-10">
        <motion.div
          variants={slideRight(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
        >
          <h2 className="font-semibold text-2xl">BZ_CAREMATE</h2>
          <p className="leading-tight py-4 italic">
            Smart tools and services tailored to meet everyday caregiving needs
          </p>
        </motion.div>

        <motion.div
          variants={slideRight(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          className="flex flex-col gap-3"
        >
          <div className="text-xl font-semibold">Quick Links</div>
          <div className="hover:text-white duration-300">
            <a href="">Home</a>
          </div>
          <div className="hover:text-white duration-300">
            <a href="">About</a>
          </div>
          <div className="hover:text-white duration-300">
            <a href="">Caregivers</a>
          </div>
          <div className="hover:text-white duration-300">
            <a href="">Contact</a>
          </div>
        </motion.div>

        <motion.div
          variants={slideRight(0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          className="flex flex-col gap-3"
        >
          <div className="text-xl font-semibold">Socials</div>
          <div className="">
            <a className="flex items-center gap-2 pb-2">
              <UserGroupIcon className="w-8 h-8" />
              Linkedin
            </a>
            <a className="flex items-center gap-2 pb-2">
              <ChatBubbleOvalLeftIcon className="w-8 h-8" />
              Whatsapp
            </a>
            <a className="flex items-center gap-2 pb-2">
              <GlobeAltIcon className="w-8 h-8" />X
            </a>
            <a className="flex items-center gap-2 pb-2">
              <DevicePhoneMobileIcon className="w-8 h-8" />
              +2349069263478
            </a>
            <a className=" flex items-center gap-2 pb-2" href="">
              <EnvelopeIcon className="w-8 h-8" />
              Botzerk@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={slideRight(1.0)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          className="pt-4"
        >
          <p className="text-xl py-2 mb-4 italic">
            Get certified to become a Caregiver with Caremate
          </p>
          <a className="primary-button" href="mailto">
            Apply here
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
