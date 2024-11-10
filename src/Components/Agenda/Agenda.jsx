import React from "react";

const Agenda = () => {
  const timelineItems = [
    { time: "13:15 TO 13:30", alignRight: false },
    { time: "13:15 TO 13:30", alignRight: true },
    { time: "13:15 TO 13:30", alignRight: false },
    { time: "13:15 TO 13:30", alignRight: true },
    { time: "13:15 TO 13:30", alignRight: false },
    { time: "13:15 TO 13:30", alignRight: true },
    { time: "13:15 TO 13:30", alignRight: false },
  ];

  return (
    <div className="p-8">
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
        className="md:w-[70%]  mx-auto relative rounded-xl p-8 md:py-16  shadow-md md:text-2xl"
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
            className="relative flex w-full items-center mb-3 md:mb-6"
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
                  item.alignRight
                    ? "md:pl-36 md:ml-1 pl-9"
                    : "md:pr-36 md:mr-1 pr-9"
                } `}
              >
                <span
                  className={`${
                    item.alignRight ? "text-left" : "text-right"
                  } block font-[Poppins] font-light text-sm md:text-2xl  text-white text-opacity-60 tracking-wider`}
                >
                  {item.time}
                </span>
              </div>

              {/* Center Dot */}
              <div className="w-3 h-3 bg-[#F8F8F8] rounded-full absolute left-1/2 transform -translate-x-1/2 z-10" />

              {/* Game Started Text */}
              <div
                className={`w-1/2 ${
                  item.alignRight ? "md:pr-8 pr-10" : "md:pl-8 pl-10"
                }`}
              >
                <span
                  className={`${
                    item.alignRight ? "text-right" : "text-left"
                  } block text-white font-[Poppins] text-nowrap tracking-wide`}
                >
                  Game Started
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
