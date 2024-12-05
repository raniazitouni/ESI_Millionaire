import React from "react";

const Price = () => {
  return (
    <div id="price" className=" md:py-56 py-0">
      <h1 className="md:text-9xl text-5xl  tracking-wide  font-bold text-white text-center mb-6 font-impact">
        {" "}
        <span
          className="text-transparent"
          style={{
            background:
              "linear-gradient(180deg, #E9C156 0%, #FFFFAA 25%, #E1AB39 50%, #E9C156 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          10000.00
        </span>{" "}
        DA
      </h1>
      <h1 className="font-poppins md:text-6xl text-3xl flex flex-col justify-center md:gap-3 gap-2 md:flex-row  tracking-wide font-light text-center mb-12 text-white ">
        THE WINNER WILL GAIN{" "}
        <span
          className="text-transparent"
          style={{
            background:
              "linear-gradient(180deg, #E9C156 0%, #FFFFAA 25%, #E1AB39 50%, #E9C156 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          ONE MILLION !
        </span>
      </h1>
    </div>
  );
};

export default Price;
