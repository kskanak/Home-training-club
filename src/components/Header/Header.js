import React from "react";
import logo from "../../images/logo.png";
const Header = () => {
  return (
    <div className="bg-slate-800 h-20 flex justify-center items-center">
      <img src={logo} alt="" className="h-14" />
      <h2 className="text-white text-3xl font-bold mx-2">Home Training Club</h2>
    </div>
  );
};

export default Header;
