import React from "react";
import MedicationsCard from "../components/dashboard/MedicationsCard";
import MedicationsChart from "../components/dashboard/MedicationsChart";
import VitalsCards from "../components/dashboard/VitalsCards";
import VitalsChart from "../components/dashboard/VitalsChart";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useAuth } from "../context/AuthContext";

const DashboardHomepage = () => {

  const {user} = useAuth()
  return (
    <section className="container pt-8">
      <p className=" text-2xl sm:text-3xl  tracking-wider font-semibold italic text-gray-700 dark:text-gray-100">
        Hey there,<span className="not-italic pl-2">{user && user.first_name}!</span>
      </p>
      <p className="text-gray-600 dark:text-gray-300 font-semibold pt-2">
        Hope you're feeling good today
      </p>
      <div className="flex gap-4 lg:gap-14 flex-wrap">
        <div className="text-gray-600 font-medium ">
          <div className="min-w-[150px] rounded-xl shadow-card mt-7">
            <div className="flex items-center justify-between bg-primary-300 text-white font-semibold p-2 rounded-t-xl ">
              <p className="font-Montserrat">Total meds</p>
              <ChevronDownIcon className="w-5 h-5" />
            </div>
            <p className="italic text-center pt-4 p-2 dark:text-gray-300">Total meds for today... </p>
            <p className="text-center text-2xl pb-6 pt-2 dark:text-gray-300">12</p>
          </div>
        </div>

        <div className="text-gray-600 font-medium">
          <div className="min-w-[150px] rounded-xl shadow-card mt-7">
            <div className="flex items-center justify-between bg-primary-300 text-white font-semibold p-2 rounded-t-xl ">
              <p className="font-Montserrat">Appointments</p>
              <ChevronDownIcon className="w-5 h-5" />
            </div>
            <p className="italic text-center pt-4 p-2">Pending Appointments</p>
            <p className="text-center text-2xl pt-2 pb-6">12</p>
          </div>
        </div>

        <div className="text-gray-600 font-medium ">
          <div className="min-w-[150px] rounded-xl shadow-card mt-7">
            <div className="flex items-center justify-between bg-primary-300 text-white font-semibold p-2 rounded-t-xl ">
              <p className="font-Montserrat">Total Vitals</p>
              <ChevronDownIcon className="w-5 h-5" />
            </div>
            <p className="italic text-center pt-4 p-2">Total no of logged vitals</p>
            <p className="text-center text-2xl pt-2 pb-6">12</p>
          </div>
        </div>
      </div>

      <div className=" pt-8 grid grid-cols-1  lg:grid-cols-3 gap-6 w-full">
        <MedicationsCard />
        <MedicationsChart />
        <VitalsChart />
        <VitalsCards />
      </div>
    </section>
  );
};

export default DashboardHomepage;
