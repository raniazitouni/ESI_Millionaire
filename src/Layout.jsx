import React from "react";
import Navbar from "./Components/shared/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-custom-black  py-11">
      {children}
    </div>
  );
};

export default Layout;
