import React from "react";
import Topbar from "../components/dashboard/Topbar";
import Sidebar from "../components/dashboard/Sidebar"
import { Outlet } from "react-router-dom";

const Dashboardlayout = () => {
  return (
    <div>
      <Topbar/>
      <div className="flex pt-16">
      <Sidebar/>
      <main className="ml-64">
        <Outlet />
      </main>
      </div>
    </div>
  );
};

export default Dashboardlayout;
