import React, { useRef } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Action from "../components/Action";

import Works from "../components/Works";
import Offer from "../components/Offer";
import { useScroll } from "framer-motion";

const HomePage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "center center"],
  });
  return (
    <>
      <div ref={ref} className="relative h-[200vh] overflow-hidden">
        <Hero scrollYProgress={scrollYProgress} />
        <div className="absolute top-[100vh]">
          <About scrollYProgress={scrollYProgress} />
        </div>
      </div>
      <Services />
      <Offer />
      <Works />
      <Action />
    </>
  );
};

export default HomePage;
