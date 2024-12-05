import React, { useEffect, useState } from "react";
import mem from "/images/teamAssets/member.svg";
import aymen from "/images/teamAssets/aymen.jpg";
import idriss from "/images/teamAssets/Idriss.jpg";
import lyna from "/images/teamAssets/lyna.jpg";
import rayane from "/images/teamAssets/Rayan.jpg";
import safa from "/images/teamAssets/safa.jpg";
import yara from "/images/teamAssets/yara.jpg";
import zaki from "/images/teamAssets/zaki.jpg";
import maroua from "/images/teamAssets/maroua.jpg";
import aya from "/images/teamAssets/aya.jpg";
import rania from "/images/teamAssets/rania.jpg";
import sarah from "/images/teamAssets/sarah.jpg";
import sami from "/images/teamAssets/Sami.jpg";
import islam from "/images/teamAssets/islam.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const Team = () => {
  const members = [
    { img: sarah, name: "HASNAOUI SARAH" },
    { img: rania, name: "ZITOUNI RANIA" },
    { img: lyna, name: "TAILEB LYNA " },
    { img: islam, name: "MARAF MOHAMED ISLAM" },
    { img: zaki, name: "SOUALAHMOHAMMED ZAKARIA" },
    { img: rayane, name: "BOUKAKIOU RAYAN" },
    { img: yara, name: "BENLACHEHEB YARA" },
    { img: aya, name: "TERKMANI AYA" },
    { img: safa, name: "ALOUANE SAFA" },
    { img: sami, name: "BOUAB SAMI" },
    { img: idriss, name: "ZIADI IDRISS" },
    { img: maroua, name: "YAHIAOUI MAROUA" },
    { img: aymen, name: "AZZOUZ ABDELLAH AIMENE" },
  ];

  const [coverflowConfig, setCoverflowConfig] = useState({
    rotate: 0,
    stretch: -75,
    depth: 250,
    modifier: 3.5,
    slideShadows: true,
  });

  const updateCoverflowConfig = () => {
    if (window.innerWidth <= 640) {
      setCoverflowConfig({
        rotate: 0,
        stretch: -20,
        depth: 250,
        modifier: 4,
        slideShadows: true,
      });
    } else if (window.innerWidth <= 768) {
      setCoverflowConfig({
        rotate: 0,
        stretch: -33,
        depth: 250,
        modifier: 3.5,
        slideShadows: true,
      });
    } else if (window.innerWidth <= 1024) {
      setCoverflowConfig({
        rotate: 0,
        stretch: -45,
        depth: 250,
        modifier: 3.5,
        slideShadows: true,
      });
    } else if (window.innerWidth <= 1280) {
      setCoverflowConfig({
        rotate: 0,
        stretch: -60,
        depth: 250,
        modifier: 3.5,
        slideShadows: true,
      });
    } else {
      setCoverflowConfig({
        rotate: 0,
        stretch: -75,
        depth: 250,
        modifier: 3.5,
        slideShadows: true,
      });
    }
  };

  useEffect(() => {
    // Set the initial configuration based on screen size
    updateCoverflowConfig();

    // Listen for window resize events
    window.addEventListener("resize", updateCoverflowConfig);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", updateCoverflowConfig);
  }, []);

  console.log(coverflowConfig);

  return (
    <div id="our-team" className="flex flex-col pb-32 md:px-20 sm:px-10 px-7">
      <div className="flex justify-center items-center sm:mb-10 mb-0 ">
        <span className="font-impact font-bold xl:text-8xl  md:text-7xl text-5xl  bg-clip-text sm:bg-custom-gradient bg-custom-gradient-sm text-transparent leading-[182.96px] tracking-[0.03em]">
          OUR TEAM
        </span>
      </div>
      <div className="slider-container ">
        <Swiper
          key={JSON.stringify(coverflowConfig)}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          // slidesPerView={2}
          autoplay={{
            delay: 1350,
            disableOnInteraction: false,
          }}
          coverflowEffect={coverflowConfig}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          breakpoints={{
            // For screens >= 680px
            480: {
              slidesPerView: 2,
            },
            // For screens < 680px
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {members.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center px-10">
                <div className="relative xl:w-[418px] xl:h-[426px] md:w-96 md:h-80 sm:w-64 sm:h-72 w-52 h-56">
                  <img
                    src={mem}
                    alt="cadre"
                    className="absolute inset-0 w-full h-full object-contain z-0"
                  />
                  <img
                    src={item.img}
                    className="absolute inset-0 sm:w-[70%] sm:h-[70%] w-[70%] h-[68%] object-cover rounded-full m-auto z-10"
                  />
                </div>
                {/* <img
                  src={item.img}
                  alt={item.name}
                  className=" object-contain"
                /> */}
                <p
                  className={`font-poppins ${
                    item.name == "HASNAOUI SARAH"
                      ? "text-custom-gold"
                      : " text-custom-white"
                  } sm:text-2xl text-base text-center font-light`}
                >
                  {item.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
