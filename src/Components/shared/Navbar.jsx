import React, { useState, useEffect } from "react";
import logo from "/images/Logo.svg";
import menu from "/images/navbarAssets/menu.svg";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isActive, setIsActive] = useState("home");

  const handleLogoClick = () => {
    window.location.reload();
  };

  const navlinks = [
    { id: "home", title: "HOME" },
    { id: "the-event", title: "THE EVENT" },
    { id: "agenda", title: "AGENDA" },
    { id: "rules", title: "RULES" },
    { id: "our-team", title: "OUR TEAM" },
    { id: "join-us", title: "JOIN US" },
  ];

  const toggleMenu = () => {
    setIsMenu((prev) => !prev);
  };

  useEffect(() => {
    const observerOptions = {
      root: null, 
      rootMargin: "0px",
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsActive(entry.target.id);
        }
      });
    }, observerOptions);

    navlinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) {
        observer.observe(section);
      }
    });

   
    return () => {
      observer.disconnect();
    };
  }, [navlinks]);

   const handleClick = () => {
     window.open(
       "https://docs.google.com/forms/d/e/1FAIpQLSelUE6wfnZ5ZtEaNlbWMwEj3XLCodg9UIoubIefHGxM2ghXsQ/viewform",
       "_blank"
     );
   };

  return (
    <div className="md:px-20 sm:px-10 px-7">
      <div
        className="sm:static fixed top-0 left-0 w-full bg-bg-grey flex flex-row justify-between py-2 px-4 
      sm:rounded-2xl rounded-none z-50 "
      >
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-28 h-20 object-contain cursor-pointer"
            onClick={handleLogoClick}
          />
        </div>
        <div className="sm:flex hidden flex-row justify-between lg:gap-x-9 md:gap-x-6 gap-x-4 py-7 lg:text-lg text-sm font-poppins">
          {navlinks.map((item) => (
            <div key={item.id}>
              <a
                href={`#${item.id}`}
                className={`${
                  isActive === item.id
                    ? "text-custom-gold"
                    : "text-custom-white"
                } hover:text-custom-gold`}
                onClick={() => setIsActive(item.id)}
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
        <div className="xl:flex hidden flex-row justify-between gap-x-4 xl:text-lg text-md font-poppins font-medium py-4">
          {/* <button className="py-2.5 xl:px-11 px-7 border-2 border-custom-gold text-custom-gold rounded-xl ">
            Guest
          </button> */}
          <button className="py-2.5 xl:px-16 px-4 bg-custom-gradient  text-custom-black rounded-xl" onClick={handleClick}>
            register
          </button>
        </div>
        <div
          className={`sm:hidden block xs:mx-7 mx-14 my-6 p-1  hover:border-2  hover:border-custom-gold rounded-md ${
            isMenu && "border-2 border-custom-gold"
          }`}
          onClick={toggleMenu}
        >
          <img src={menu} alt="menuIcon" className="w-7 h-7 object-contain " />
        </div>

        {isMenu && (
          <div className="absolute top-20 right-12 w-40 rounded-xl border-2 border-custom-gold bg-custom-black  flex flex-col items-center py-7 px-6 z-50 transition-transform transform translate-x-0">
            {navlinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`${
                  isActive === item.id
                    ? "text-custom-black bg-custom-gold rounded-md hover:text-custom-black"
                    : "text-custom-white"
                } hover:text-custom-gold mb-3.5 py-1 w-full text-sm font-poppins text-center font-medium`}
                onClick={() => {
                  setIsActive(item.id);
                  toggleMenu(); // Close menu after clicking
                }}
              >
                {item.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
