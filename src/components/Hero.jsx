import React from "react";
import Heroimg from "../assets/hero.jpg";
import {
  containerVariants,
  childVariants,
  typewriterVariants,
  buttonVariants,
} from "../utility/animation";
import { useNavigate } from "react-router-dom";
import { motion, useTransform } from "framer-motion";



const Hero = ({ scrollYProgress }) => {
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const heroText = "Smarter Care, Better Health";
  const words = heroText.split(" ");

  const navigate = useNavigate();
  return (
    <>
      <section className="sticky top-0">
        <div className=" bg-primary-500/50 relative overflow-hidden h-[100vh]">
          <div className=" container px-6 py-10 md:py-20 flex flex-col md:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="text-center md:text-left space-y-6 max-w-lg py-16 md:py-10">
              <motion.h1
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl font-Montserrat md:text-5xl font-semibold text-white leading-tight -tracking-wider text-shadow-md"
              >
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={childVariants}
                    style={{
                      display: "inline-block",
                      marginRight: "8px",
                    }}
                  >
                    {word.includes("Better") || word.includes("Health") ? (
                      <span className="text-primary-400 ">{word}</span>
                    ) : (
                      word
                    )}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p
                variants={typewriterVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.5 }}
                className="text-gray-200 font-OpenSans text-lg text-start"
              >
                Empowering caregivers and elderly loved ones with smart tools
                for daily health tracking and care management.
              </motion.p>
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1 },
                }}
                onClick={() => navigate("/register")}
                className="primary-button"
              >
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
          <motion.img
            style={{ y: backgroundY }}
            className="absolute w-full h-full left-0 top-0 -z-10 object-cover"
            src={Heroimg}
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
