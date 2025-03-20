import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen ">

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
