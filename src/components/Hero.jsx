import React from "react";
import Heroimg from "../assets/hero.jpg"
import { slideUp, slideDown, slideRight } from "../utility/animation";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"



const Hero = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className=" bg-primary-500/40 relative overflow-hidden min-h-[500px]">
        <div className=" container px-6 py-10 md:py-20 flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="text-center md:text-left space-y-6 max-w-lg py-10">
            <motion.h1
            
            variants={slideDown(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
             className="text-4xl font-Montserrat md:text-5xl font-semibold text-white leading-tight text-shadow-md">
              Smarter Care, <span className="text-primary-400 ">Better Health</span>
            </motion.h1>
            <motion.p
            
            variants={slideRight(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            className="text-gray-200 font-OpenSans text-lg text-start">
              Empowering caregivers and elderly loved ones with smart tools for
              daily health tracking and care management.
            </motion.p>
            <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            variants={slideUp(0.4)}
            onClick={()=> navigate("/register")}
            className="primary-button">
              Get Started
            </motion.button>
          </div>

          {/* Right Animation */}
          <div className="mt-12 md:mt-0 flex flex-col items-center">
            {/* EKG Line */}
            <svg
              width="300"
              height="100"
              viewBox="0 0 300 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-6"
            >
              <path
                d="M0 40 H60 L80 10 L100 70 L120 40 H180 L200 25 L220 55 L240 40 H300"
                stroke="#00A6FB"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <animate
                  attributeName="stroke-dasharray"
                  from="0,500"
                  to="500,500"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-500"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        </div>
        <img className="absolute w-full h-full left-0 top-0 -z-10 object-cover" src={Heroimg} alt="" />
      </section>

    </>
  );
};

export default Hero;
