import React from "react";
import { AiFillInstagram, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className=" bg-black w-full flex flex-col md:flex-row md:justify-between md:px-24 md:py-8 px-8 py-4 border-b-2 border-custom-gray gap-4 md:gap-0 items-start md:items-center">
        <div className="flex items-center gap-2">
          <img src="/images/Logo.svg" className="md:size-12 size-14" />
          <p
            className="tracking-wide font-bold text-transparent text-2xl"
            style={{
              background:
                "linear-gradient(180deg, #E9C156 0%, #FFFFAA 25%, #E1AB39 50%, #E9C156 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            E$I MILLIONAIRE
          </p>
        </div>
        <div className="flex items-start justify-between  w-full md:w-[40%] gap-8 ">
          <ul>
            <h3 className="font-impact text-custom-white text-xl">PAGE</h3>
            <li className="text-custom-white font-poppins text-base mb-1">
              <a href="#">Home</a>
            </li>
            <li className="text-custom-white font-poppins text-base mb-1">
              <a href="#">Agenda</a>
            </li>
            <li className="text-custom-white font-poppins text-base mb-1">
              <a href="#">Team</a>
            </li>
            <li className="text-custom-white font-poppins text-base mb-1">
              <a href="#">Join Us</a>
            </li>
          </ul>
          <ul>
            <div className="flex flex-col justify-between gap-10">
              <div>
                <li className="font-impact text-custom-white text-xl">
                  Localisation
                </li>
                <li
                  className="text-transparent  font-medium text-lg "
                  style={{
                    background:
                      "linear-gradient(180deg, #E9C156 0%, #FFFFAA 25%, #E1AB39 50%, #E9C156 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  AP1.ESI.Oued Smar
                </li>
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineInstagram className="bg-white size-9 p-1 rounded-full" />
                <p className="text-custom-white font-poppins text-base ">
                  instagram account
                </p>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <p className="text-custom-gray  text-center font-poppins py-4 ">
        © 2024 ESI Millionaire. All Rights Reserved.
      </p>
    </>
  );
};

export default Footer;
