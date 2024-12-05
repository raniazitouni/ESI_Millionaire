import React from "react";

const Agenda = () => {
  const timelineItems = [
    { time: "13:30-13:45", alignRight: false, event: "Check in " },
    { time: "13:50-14:05", alignRight: true, event: "Opening Ceremony" },
    { time: "14:10-14:35", alignRight: false, event: "Round 1" },
    { time: "14:40-14:50", alignRight: true, event: "Fun Activies" },
    { time: "14:55-15:15", alignRight: false, event: "Round 2" },
    { time: "15:20-15:40", alignRight: true, event: "Round 3" },
    { time: "15:45-16:05", alignRight: false, event: "Final round" },
    { time: "16:10-16:30", alignRight: true, event: "Closing Ceremony" },
  ];

  return (
    <div id="agenda" className="p-8">
      <h1
        className="md:text-7xl text-4xl  tracking-wide font-impact font-bold text-center mb-12 text-transparent"
        style={{
          background:
            "linear-gradient(180deg, #E9C156 0%, #FFFFAA 25%, #E1AB39 50%, #E9C156 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
        AGENDA
      </h1>
      <div
        className="xl:mx-60 mx-auto  relative rounded-xl  py-10  md:px-20 md:py-36  xs:px-10 px-4 shadow-md md:text-2xl"
        style={{
          backgroundColor: "rgba(255, 255, 250, 0.1)", // Adjusted background color
        }}
      >
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-500 transform -translate-x-1/2 md:my-10 my-4" />

        {/* Timeline Items */}
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className="relative flex w-full items-center mb-3 md:mb-6
            text-white
            hover:text-custom-gold  text-sm md:text-2xl  hover:md:text-3xl hover:text-md"
          >
            {/* Content Layout */}
            <div
              className={`flex items-center w-full ${
                item.alignRight ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {/* Time Text */}
              <div
                className={`w-1/2 ${
                  item.alignRight ? "flex justify-end " : "flex justify-start "
                } `}
              >
                <span
                  className={`${
                    item.alignRight ? "text-left" : "text-right"
                  } block font-[Poppins] font-light   text-opacity-60 tracking-wider`}
                >
                  {item.time}
                </span>
              </div>

              {/* Center Dot */}
              <div className="w-3 h-3 bg-[#F8F8F8]  rounded-full absolute left-1/2 transform -translate-x-1/2 z-10" />

              {/* Game Started Text */}
              <div
                className={`w-1/2 ${
                  item.alignRight ? " flex justify-start" : "flex justify-end"
                }`}
              >
                <span
                  className={`${
                    item.alignRight ? "text-right" : "text-left"
                  } block  font-[Poppins] text-nowrap tracking-wide`}
                >
                  {item.event}
                </span>
              </div>
            </div>

            {/* Dotted Line */}
            <svg
              className={`absolute top-1/2 transform -translate-y-1/2 ${
                item.alignRight ? "left-1/2 ml-1.5" : "right-1/2 mr-1.5"
              } md:w-16 w-6 h-[2px]`}
            >
              <line
                x1="0"
                y1="1"
                x2="64" // w-16 is 64px
                y2="1"
                stroke="#F8F8F8"
                strokeWidth="2"
                strokeDasharray="12 6" // Adjust these numbers to control dash length (12px dash, 6px gap)
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agenda;
