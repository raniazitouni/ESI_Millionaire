import React, { useState, useEffect } from "react";
import coin from "/images/joinUsAssets/coinleft.svg";
import { motion } from "framer-motion";

const JoinUs = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.querySelector("#coinImage");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSelUE6wfnZ5ZtEaNlbWMwEj3XLCodg9UIoubIefHGxM2ghXsQ/viewform",
      "_blank"
    );
  };
  return (
    <div
      id="join-us"
      className="relative flex flex-col items-center  xl:px-20 lg:px-10 px-0 xl:pb-60 lg:pb-40 pb-40"
    >
      <motion.img
        id="coinImage"
        className="absolute bottom-0 xl:-left-40 lg:-left-20 -left-10 xl:w-[1520px] xl:h-[856px] lg:w-[1200px] lg:h-[790px] md:w-[900px] md:h-[750px] sm:w-[890px] sm:h-[700px] w-[1500px] h-[500px] object-contain"
        initial={{ y: 200, opacity: 0 }}
        animate={{
          y: isInView ? 0 : 200,
          opacity: isInView ? 1 : 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        src={coin}
      />
      <div className="flex justify-center items-center sm:mb-10 mb-0 ">
        <span className="font-impact font-bold xl:text-8xl  md:text-7xl text-5xl  bg-clip-text sm:bg-custom-gradient bg-custom-gradient-sm text-transparent leading-[182.96px] tracking-[0.03em]">
          JOIN US
        </span>
      </div>
      <div
        className="border-2 border-[#FFFFFF66] bg-white/10 backdrop-blur-sm shadow-lg rounded-2xl xs:py-12 py-8 lg:px-28 sm:px-14 xs:px-10 px-7 xl:mx-44 sm:mx-32 mx-8 "
        style={{ backdropFilter: "blur(50px)" }}
      >
        {/* <h1 className="font-poppins md:text-3xl text-lg text-custom-white font-bold lg:text-left text-center">
          lorem
        </h1> */}
        <p className="font-poppins md:text-lg text-base text-custom-white xs:py-10 py-8 lg:text-left text-center">
          We are a dedicated team of third-year students at ESI Algiers, excited
          to host ESI's Millionaire. Our aim is to deliver an entertaining and
          memorable quiz competition that brings everyone together!
        </p>
        <div className="flex lg:flex-row flex-col gap-10 justify-center font-poppins xl:text-lg md:text-base xs2:text-sm text-xs md:px-0 px-10">
          {/* <button className="py-2.5 xl:px-6 px-2 bg-custom-gradient  text-custom-black rounded-3xl">
            Join Us As a Participant
          </button> */}
          <button
            className="py-2.5 xl:px-28 xs:px-10 px-5 border-2 border-custom-gold text-custom-gold rounded-3xl "
            onClick={handleClick}
          >
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
