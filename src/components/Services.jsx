import React from "react";
import {
  ShieldCheckIcon,
  HeartIcon,
  
  ClockIcon,
  BoltIcon
} from "@heroicons/react/24/solid";
import {  slideDown, slideLeft } from "../utility/animation";
import {motion} from "framer-motion"

const Services = () => {
  

  return (
    <div>
      <motion.h2
       
      variants={slideDown(0.4)}
      initial="hidden"
      whileInView="visible"
      viewport={{once:true, amount:0.5}}
      className="container italic text-center text-3xl font-bold text-primary-300">
        Why CareMate?
      </motion.h2>

      <div className="container py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        <motion.div
        
        variants={slideLeft(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        className="space-y-3 cards">
          <ShieldCheckIcon className="w-10 h-10 text-primary-100 m-2 mx-auto" />
          <p className="text-xl text-primary-300 font-medium p-2">
            Reliable & secure
          </p>
          <p className="pb-4 px-2 text-gray-600">
            Your data is protected with top-notch security
          </p>
        </motion.div>
        <motion.div
        
        variants={slideLeft(0.8)}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        className="space-y-3 cards">
          <HeartIcon className="w-10 h-10 text-primary-100 m-2 mx-auto" />
          <p className="text-xl text-primary-300 font-medium p-2">
            Compassion First
          </p>
          <p className="pb-4 px-2 text-gray-600 ">
            Built to provide comfort and peace of mind.
          </p>
        </motion.div>
        <motion.div
        
        variants={slideLeft(1.0)}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        className="space-y-3 cards">
          <BoltIcon className="w-10 h-10 text-primary-100 m-2 mx-auto" />
          <p className="text-xl text-primary-300 font-medium p-2">
            Easy to Use
          </p>
          <p className="pb-4 px-2 text-gray-600 ">
            Simple design, accessible for all age groups.
          </p>
        </motion.div>
        <motion.div
        
        variants={slideLeft(1.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        className="space-y-3 cards">
          <ClockIcon className="w-10 h-10 text-primary-100 m-2 mx-auto" />
          <p className="text-xl text-primary-300 font-medium p-2">
            24/7 Access
          </p>
          <p className="pb-4 px-2 text-gray-600 ">Manage care anytime, anywhere.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
