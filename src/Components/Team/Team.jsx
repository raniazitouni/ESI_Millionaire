import React, { useEffect, useState } from "react";
import mem from "/images/teamAssets/member.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const Team = () => {
  const members = [
    { img: mem, name: "HASNAOUI SARAH" },
    { img: mem, name: "ZITOUNI RANIA" },
    { img: mem, name: "TAILAB LINA " },
    { img: mem, name: "MARAF MOHAMED ISLAM" },
    { img: mem, name: "SOUILAH MOHAMMED ZAKARIA" },
    { img: mem, name: "BOUKAKIOU RAYANE" },
    { img: mem, name: "BENLECHHAB YARA" },
    { img: mem, name: "TERKMANI AYA" },
    { img: mem, name: "ALOUANE SAFA" },
    { img: mem, name: "BOUAB SAMI" },
    { img: mem, name: "ZIADI IDRIS" },
    { img: mem, name: "YAHIAOUI MAROUA" },
    { img: mem, name: "AZZOUZ ABDELLAH AIMENE" },
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
        stretch: -25,
        depth: 250,
        modifier: 3.5,
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
    <div id="our-team" className="flex flex-col py-32 md:px-20 sm:px-10 px-7">
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
          slidesPerView={2}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          coverflowEffect={coverflowConfig}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Navigation, Autoplay]}
        >
          {members.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center px-10">
                <img
                  src={item.img}
                  alt={item.name}
                  className="xl:w-[418px] xl:h-[426px] md:w-96 md:h-80 sm:w-64 sm:h-72 w-52 h-56 object-contain"
                />
                <p className="font-poppins text-custom-white sm:text-2xl text-base text-center font-light">
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
