import React, { useState, useEffect } from "react";
import locationLogo from "/images/heroAssets/location.svg";
import { motion } from "framer-motion";
import coin from "/images/heroAssets/mainCoin.svg";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("December 10, 2024 00:00:00").getTime();

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      } else {
        clearInterval(countdown);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  return (
    <div
      id="home"
      className="relative w-full flex flex-col sm:pt-0 xs:pt-28 pt-5 md:px-20 sm:px-10 xs:px-4 px-0 z-20"
    >
      <motion.img
        className="absolute md:bottom-9 sm:bottom-10 bottom-56  xl:left-80 lg:left-64 md:left-36 sm:left-20 left-2 xl:w-[840px] xl:h-[700px] lg:w-[750px] lg:h-[600px] md:w-[680px] md:h-[550px] w-[600px] h-[450px] object-contain z-0"
        src={coin}
        alt="coin"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      />
      <div className="flex justify-center items-center xl:py-60 md:py-52 sm:py-40 py-32 ">
        <span className="font-impact font-extrabold xl:text-9xl lg:text-8xl md:text-7xl xs:text-5xl text-4xl bg-clip-text sm:bg-custom-gradient bg-custom-gradient-sm text-transparent leading-[182.96px] tracking-[0.03em]">
          ESI&rsquo;S MILLIONAIRE
        </span>
      </div>
      <div className="flex sm:flex-row flex-col justify-between sm:px-0 xs2:px-14 px-7">
        <div className="flex flex-col sm:my-0 my-12 sm:items-start items-center">
          <p className="font-poppins text-custom-white sm:text-4xl text-2xl">
            December 10th
          </p>
          <div className="flex flex-row ">
            <img
              src={locationLogo}
              alt="locationLogo"
              className="sm:w-5 sm:h-7 w-3 h-4 object-contain"
            />
            <p className="font-poppins text-custom-gray sm:text-xl text-sm mx-2">
              A1 ESI-Oued Smar
            </p>
          </div>
        </div>
        <div className="bg-bg-grey flex flex-row text-custom-white py-4 px-4 font-poppins justify-between rounded-xl">
          <div className="flex flex-col mx-3 font-medium">
            <div className="xs2:text-3xl text-2xl ">{timeLeft.days}</div>
            <div className="xs2:text-sm xs:text-xs">Days</div>
          </div>
          <div className="font-medium xs2:text-3xl text-2xl">&#58;</div>
          <div className="flex flex-col  mx-3 font-medium">
            <div className="xs2:text-3xl text-2xl">{timeLeft.hours}</div>
            <div className="xs2:text-sm xs:text-xs">Hours</div>
          </div>
          <div className="font-medium xs2:text-3xl text-2xl">&#58;</div>
          <div className="flex flex-col  mx-3 font-extralight">
            <div className="xs2:text-3xl text-2xl">{timeLeft.minutes}</div>
            <div className="xs2:text-sm xs:text-xs">Mins</div>
          </div>
          <div className="font-medium xs2:text-3xl text-2xl">&#58;</div>
          <div className="flex flex-col  mx-3 font-extralight">
            <div className="xs2:text-3xl text-2xl">{timeLeft.seconds}</div>
            <div className="xs2:text-sm xs:text-xs">Secs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
