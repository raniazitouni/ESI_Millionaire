import React, { useState } from "react";
import Modal from "./components/Modal";

const Road = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      />
      <div className="flex items-center flex-col gap-6 md:gap-0 md:flex-row mx-auto justify-between py-28 md:px-24">
        <div className="flex flex-col items-start">
          <h1 className="text-white font-normal text-5xl md:text-7xl font-impact mb-8 text-left flex gap-2 md:gap-0 md:flex-col">
            ROAD TO
            <span
              className="tracking-wide font-bold text-transparent"
              style={{
                background:
                  "linear-gradient(180deg, #E9C156 0%, #FFFFAA 25%, #E1AB39 50%, #E9C156 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              GOLD
            </span>
          </h1>
          <button
            className="rounded-md mx-auto md:mx-0 border-white border text-white py-3 font-poppins px-3 text-xl"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            explore the rules
          </button>
        </div>
        <div className="flex flex-col items-center gap-0 md:w-1/2 px-4 md:px-0">
          <div className="relative">
            {/* Main Image */}
            <img
              src="/images/roadGoal.png"
              className="relative z-10 md:w-48 w-32 object-contain"
            />

            {/* Shadow Effect */}
            <div className="absolute top-0 md:left-8 left-4 md:w-32 md:h-32 w-24 h-24 rounded-full blur-2xl bg-white opacity-30 z-0"></div>
          </div>
          <img src="/images/roadPath.svg" />
        </div>
      </div>
    </>
  );
};

export default Road;
