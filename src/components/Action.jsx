import React from "react";
import { slideUp, slideDown } from "../utility/animation";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Action = () => {
const navigate = useNavigate()
  
  return (
    <section className="container">
      <motion.h1
        variants={slideDown(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        className="py-4 font-Montserrat italic text-center text-3xl font-bold text-primary-300"
      >
        Start Caring Smarter Today
      </motion.h1>
      <motion.div
        variants={slideUp(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        className="text-center"
      >
        <p className="m-2 font-OpenSans font-medium sm:text-xl text-gray-600">
          Join thousands of families and caregivers who trust CareMate for
          better health and peace of mind
        </p>
        <button
        onClick={()=> navigate("register")}
        className="primary-button">Get Started</button>
      </motion.div>
    </section>
  );
};

export default Action;
