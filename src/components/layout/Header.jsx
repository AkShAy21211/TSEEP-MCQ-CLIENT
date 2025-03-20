import React, { useState } from "react";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import logout from "../../assets/logout.png";

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
    alert("Logged out successfully!");
    setIsPopupOpen(false); // Close the popup after logout
  };

  return (
    <header className="flex justify-between items-center bg-white p-4 relative">
      {/* Logo */}
      <div className="text-xl font-bold">
        <img src={logo} alt="TSEEP" className="w-32 md:w-40 lg:w-full" />
      </div>

      {/* User Avatar */}
      <div
        className="w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-gray-300 cursor-pointer overflow-hidden"
        onClick={togglePopup}
      >
        <img src={avatar} alt="User Avatar" className="w-full h-full object-cover" />
      </div>

      {/* Logout Popup */}
      {isPopupOpen && (
        <div className="absolute right-15 top-16 lg:top-20 bg-red-100 border cursor-pointer border-gray-200 shadow-lg rounded-lg p-4 w-40">
          <button
            onClick={handleLogout}
            className="w-full text-left text-lg text-red-600  rounded flex gap-1"
          >
            <img src={logout} alt={'logout'}/>
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
