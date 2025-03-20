import React from "react";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white p-4">
      {/* Logo */}
      <div className="text-xl font-bold">
        <img src={logo} alt="TSEEP" className="w-32 md:w-40 lg:w-full" />
      </div>

      {/* User Avatar */}
      <div className=" w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-gray-300 cursor-pointer overflow-hidden">
        <img src={avatar} alt="User Avatar" className="w-full h-full object-cover" />
      </div>

    </header>
  );
};

export default Header;
