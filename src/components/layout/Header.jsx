import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white shadow-md p-4">
      {/* Logo */}
      <div className="text-xl font-bold">
        <img src="/assets/logo.png" alt="Logo" className="h-10" />
      </div>

      {/* User Avatar */}
      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
        <span className="text-gray-600 font-semibold">A</span> {/* Placeholder */}
      </div>
    </header>
  );
};

export default Header;
