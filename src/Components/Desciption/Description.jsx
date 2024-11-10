import React from "react";

const Description = () => {
  return (
    <div className="py-16">
      <h1 className="text-white font-light text-center text-4xl md:text-6xl font-poppins md:mb-20 mb-12">
        PLAY BOLD WIN{" "}
        <span
          className="tracking-wide font-bold text-transparent font-impact"
          style={{
            background:
              "linear-gradient(180deg, #E9C156 0%, #FFFFAA 25%, #E1AB39 50%, #E9C156 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          GOLD!
        </span>
      </h1>
      <p className="text-white tracking-wide  text-xl md:text-2xl font-light leading-8 font-poppins text-center w-11/12 md:w-3/4 mx-auto md:px-4">
        The ESI Millionaire event is an exciting quiz competition inspired by
        the
        <br className="hidden md:block" /> popular game show "Who Wants to Be a
        Millionaire. Participants compete in <br className="hidden md:block" />{" "}
        teams to answer questions, with the ultimate goal of identifying the
        last two <br className="hidden md:block" /> contestants. The winner will
        take home a grand prize of 1 million, making it a{" "}
        <br className="hidden md:block" /> thrilling and competitive experience
        that tests knowledge and strategy.
      </p>
    </div>
  );
};

export default Description;
