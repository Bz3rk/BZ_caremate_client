import React from "react";
import AboutImg from "../assets/about.png"
import { slideUp, slideDown, slideRight, slideLeft,reveal } from "../utility/animation";
import {motion, useTransform} from "framer-motion"


const About = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])

const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0])
  
  return (
    <motion.section style={{scale, rotate}} className="py-10">
      <motion.h2 
      
      variants={reveal(0.4)}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount:0.5}}
      className="container font-Montserrat italic text-center text-3xl font-bold text-primary-300">
        Who We Are
      </motion.h2>
      <div className="container font-OpenSans font-medium grid grid-cols-1 md:grid-cols-2 pt-2 sm:pt-6 gap-6">
        <div className="text-base text-gray-600 text-justify">
      <motion.p
      
      variants={reveal(0.4)}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount:0.5}}
       className="first-letter:text-4xl text-lg first-letter:font-semibold">
        CareMate is a compassionate digital platform designed to support
        caregivers and elderly loved ones. Our mission is to simplify health
        tracking, medication management, and daily care, making it easier to
        provide the attention and love that truly matter
      </motion.p>
      <motion.p 
      
      variants={reveal(0.4)}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount:0.5}}
      className="pt-4 text-lg">
      At CareMate, we believe caregiving should be simple, compassionate, and reliable. That’s why we designed tools to make managing elderly care stress-free for families and caregivers
      </motion.p>
      </div>
      <div>
      <motion.img
      
      variants={slideLeft(0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once:true, amount:0.5}}
      src={AboutImg} alt="About us img" className="" />
      </div>
      </div>
    </motion.section>
  );
};

export default About;
