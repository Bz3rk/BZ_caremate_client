import React from "react";
import AboutImg from "../assets/about.png"
import { slideUp, slideDown, slideRight, slideLeft } from "../utility/animation";
import {motion, } from "framer-motion"


const About = () => {
  
  return (
    <section className="py-10">
      <motion.h2 
      
      variants={slideDown(0.4)}
      initial="hidden"
      whileInView="visible"
      viewport={{once:true, amount:0.5}}
      className="container italic text-center text-3xl font-bold text-primary-300">
        Who We Are
      </motion.h2>
      <div className="container grid grid-cols-1 md:grid-cols-2 pt-6 gap-6">
        <div className="text-xl text-gray-600 text-justify">
      <motion.p
      
      variants={slideRight(0.6)}
      initial="hidden"
      whileInView="visible"
      viewport={{once:true, amount:0.5}}
       className="first-letter:text-4xl first-letter:font-semibold">
        CareMate is a compassionate digital platform designed to support
        caregivers and elderly loved ones. Our mission is to simplify health
        tracking, medication management, and daily care, making it easier to
        provide the attention and love that truly matter
      </motion.p>
      <motion.p 
      
      variants={slideUp(0.8)}
      initial="hidden"
      whileInView="visible"
      viewport={{once:true, amount:0.5}}
      className="pt-4">
      At CareMate, we believe caregiving should be simple, compassionate, and reliable. That’s why we designed tools to make managing elderly care stress-free for families and caregivers
      </motion.p>
      </div>
      <div>
      <motion.img
      
      variants={slideLeft(0.8)}
      initial="hidden"
      whileInView="visible"
      viewport={{once:true, amount:0.5}}
      src={AboutImg} alt="About us img" className="" />
      </div>
      </div>
    </section>
  );
};

export default About;
