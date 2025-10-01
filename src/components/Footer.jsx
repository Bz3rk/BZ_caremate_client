import React from "react";
import { Link } from "react-router-dom";
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
      <div className="bg-gray-800 gap-8 font-OpenSans text-gray-200 grid grid-cols-1 md:grid-cols-4 mt-6 p-10">
        <motion.div
          variants={slideRight(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
        >
          <h2 className="font-semibold text-2xl font-Montserrat">BZ_CAREMATE</h2>
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
          <div className="text-xl font-semibold font-Montserrat">Quick Links</div>
          <div className="hover:text-white duration-300">
            <Link to="/" href="">Home</Link>
          </div>
          <div className="hover:text-white duration-300">
            <Link href="">About</Link>
          </div>
          <div className="hover:text-white duration-300">
            <Link to="/dashboard" href="">Caregivers</Link>
          </div>
          <div className="hover:text-white duration-300">
            <Link href="">Contact</Link>
          </div>
        </motion.div>

        <motion.div
          variants={slideRight(0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          className="flex flex-col gap-3"
        >
          <div className="text-xl font-semibold font-Montserrat">Socials</div>
          <div className="">
            <Link className="flex items-center gap-2 pb-2">
              <UserGroupIcon className="w-8 h-8" />
              Linkedin
            </Link>
            <Link className="flex items-center gap-2 pb-2">
              <ChatBubbleOvalLeftIcon className="w-8 h-8" />
              Whatsapp
            </Link>
            <Link className="flex items-center gap-2 pb-2">
              <GlobeAltIcon className="w-8 h-8" />X
            </Link>
            <p className="flex items-center gap-2 pb-2">
              <DevicePhoneMobileIcon className="w-8 h-8" />
              +2349069263478
            </p>
            <Link className=" flex items-center gap-2 pb-2" href="">
              <EnvelopeIcon className="w-8 h-8" />
              Botzerk@gmail.com
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={slideRight(1.0)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          className="pt-4"
        >
          <p className="text-xl font-Montserrat py-2 mb-4 italic">
            Get certified to become a Caregiver with Caremate
          </p>
          <Link className="primary-button" href="mailto">
            Apply here
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
