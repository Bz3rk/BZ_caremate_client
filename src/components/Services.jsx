import React, { useRef } from "react";
import {
  ShieldCheckIcon,
  HeartIcon,
  ClockIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";
import { motion, px, useScroll, useTransform } from "framer-motion";
import { Cards } from "../mockData/data";

const Services = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const h2Y = useTransform(scrollYProgress, [0.8, 1], [0, -100]);
  
  const radialSize = useTransform(
    scrollYProgress, 
    [0, 1], 
    ["10%", "150%"]
);

const background = useTransform(radialSize, (size) => {
    return `radial-gradient(circle at 50% 50%, #006494 ${size}, #003554)`;
});




  return (
    <motion.section ref={ref} style={{background}} className="relative py-16 ">
      <div className=" container relative">
        <motion.h2
          style={{ y: h2Y }}
          className=" sticky top-[120px] font-Montserrat italic text-center text-3xl font-bold text-white"
        >
          Why CareMate?
        </motion.h2>

        <div className="  relative mt-10 ">
          {Cards.map((card, id) => {
            {
              /* Calculates the top and scale value for each card  */
            }
            const top = `calc(200px + ${id * 25}px)`;
            const cardScale = 1 - (Cards.length - id) * 0.05;
            const scale = useTransform(
              scrollYProgress,
              [id * 0.25, 1],
              [1, cardScale]
            );

            return (
              <motion.div
                key={id}
                style={{ scale, top: top }}
                className={` sticky top-[200px] lg:[180px] cards ${card.color} min-h-[350px] pt-2 mt-8 `}
              >
                <card.icon className="w-10 h-10 text-primary-100 m-2 mx-auto " />
                <p className="text-xl font-Montserrat text-primary-300 font-medium p-2">
                  {card.title}
                </p>
                <p className="pb-4 text-start font-OpenSans font-semibold px-2 text-gray-600">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
