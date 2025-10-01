import React from "react";
import Topbar from "../components/dashboard/Topbar";
import Sidebar from "../components/dashboard/Sidebar"
import BottomBar from "../components/dashboard/BottomBar";
import { Outlet } from "react-router-dom";

const Dashboardlayout = () => {
  return (
    <div>
      <Topbar/>
      <div className="flex pt-16">
      <Sidebar/>
      <BottomBar />
      <main className="flex-grow lg:ml-40 mb-12 md:mb-2">
        <Outlet />
      </main>
      </div>
    </div>
  );
};

export default Dashboardlayout;
