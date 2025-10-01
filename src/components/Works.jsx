import React from "react";
import { useState } from "react";
import { Steps } from "../mockData/data";
import {
  UserPlusIcon,
  HeartIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

import {
  slideUp,
  slideDown,
  slideLeft,
} from "../utility/animation";
import { motion } from "framer-motion";

const Works = () => {

  const firstStep = Steps.find((step) => step.id == 1);
  const [activeStep, setActiveStep] = useState(firstStep);
  console.log(activeStep);
  const Icon = activeStep.icon;

  return (
    <section>
      <motion.div
        variants={slideDown(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        className="text-3xl font-Montserrat text-center text-primary-300 font-bold italic"
      >
        How Caremate Works
      </motion.div>

      {/* Works slider  */}
      <div className="container font-OpenSans w-full flex flex-col justify-center items-center py-6 ">
        {/* Top bar for the slider */}
        <motion.div
          variants={slideUp(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          className="flex space-x-6"
        >
          {Steps.map((step) => (
            <div key={step.id} className="flex items-center">
              {/* Circle for Step Number */}
              <button
                onClick={() => setActiveStep(step)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg font-semibold cursor-pointer duration-700
              transition ${
                activeStep.id === step.id
                  ? "bg-primary-100 text-white"
                  : "bg-white text-gray-600 border-primary-100 border-2"
              }`}
              >
                {step.id}
              </button>

              {/* Step Label */}
              <span className="hidden md:block ml-2 text-gray-600 font-medium">
                {step.title}
              </span>

              {/* Line Between Steps */}
              {step.id !== Steps.length && (
                <ArrowRightIcon className=" hidden lg:inline-block h-8 mx-2 text-primary-100" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Description panel  */}

        <div className=" bg-gray-100 w-[80%] md:w-[70%] border-2 border-primary-200 my-2 rounded-2xl shadow-lg p-8 mx-auto ">
          
          <motion.div
            variants={slideLeft(0.4)}
            key={activeStep.id}
            initial="hidden"
            animate="visible"
            viewport={{once:true, amount:0.5}}
            className="flex flex-col justify-center items-center"
          >
            <Icon className="w-12 h-12 text-primary-200" />
            <h3 className="text-2xl font-Montserrat font-semibold text-primary-200 mb-3">
              {activeStep.title}
            </h3>
            <p className="text-gray-600 text-center sm:text-xl font-medium">
              {activeStep.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Works;
