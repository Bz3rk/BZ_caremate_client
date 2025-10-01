import React from "react";
import {
  ClipboardDocumentListIcon,
  DocumentTextIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

import { slideUp, slideDown } from "../utility/animation";
import { motion } from "framer-motion";

const Offer = () => {
  return (
    <section className="py-6">
      <motion.div
        variants={slideDown(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        className="text-3xl font-Montserrat text-center text-primary-300 font-bold italic py-4"
      >
        What We Offer
      </motion.div>

      <div className="bg-primary-100 grid grid-cols-1 md:grid-cols-3 md:px-10 text-white">
        <motion.div
          variants={slideUp(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          className="px-8 py-28"
        >
          <ClipboardDocumentListIcon className="w-16 h-16" />
          <div className="text-3xl py-4 font-Montserrat">Medication Tracking</div>
          <p className="text-lg font-semibold font-OpenSans">Stay on top of prescriptions and reminders.</p>
        </motion.div>

        <div className="bg-primary-200 w-full px-8 py-28">
          <motion.div
            variants={slideUp(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
          >
            <DocumentTextIcon className="w-16 h-16" />
            <div className="text-3xl text-white py-4 font-Montserrat">Health Logging</div>
            <p className="text-lg font-semibold font-OpenSans ">
              Record vitals, symptoms, and progress daily.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={slideUp(1.0)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          className="px-8 py-28"
        >
          <UserGroupIcon className="w-16 h-16" />
          <div className="text-3xl text-white py-4 font-Montserrat">Caregiver Support</div>
          <p className="text-lg font-semibold font-OpenSans">
            Tools that connect families and professional caregivers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Offer;
