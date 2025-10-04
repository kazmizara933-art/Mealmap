import React from "react";
import { Outlet, useLocation } from "react-router-dom";  // ✅ ye zaroori hai
import Navbar from "./Navbar";

function Layout() {
  const location = useLocation();
  const isLanding = location.pathname === "/" || location.pathname === "";
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className={isLanding ? "p-0" : "p-4"}>
        <Outlet />   {/* ✅ yahan nested pages render honge */}
      </main>
    </div>
  );
}

export default Layout;
