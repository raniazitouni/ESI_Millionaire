import React from "react";

const Description = () => {
  return (
    <div id="the-event" className="py-16">
      <h1 className="text-white font-light text-center text-4xl md:text-6xl font-poppins md:mb-20 mb-12 xs:px-0 px-5">
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
      <p className="text-white tracking-wide  xs:text-xl text-lg md:text-2xl font-light leading-8 font-poppins text-center w-11/12 md:w-3/4 mx-auto md:px-4 xs:px-0 px-5">
        ESI's Millionaire is an exciting quiz competition inspired by the
        popular game show
        <br className="hidden md:block" /> "Who Wants to Be a Millionaire"
        .Participants compete in teams to answer questions,
        <br className="hidden md:block" />
        aiming to reach the final stage where only two contestants remain.
        Ultimately, one winner will take home a grand prize of 1 million
        centimes offering an experience that
        <br className="hidden md:block" /> combines knowledge, strategy, and a
        lively atmosphere.
      </p>
    </div>
  );
};

export default Description;
