import React from "react";
import Header from "./Header";
import Sidebar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6 font-oceanwide">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
