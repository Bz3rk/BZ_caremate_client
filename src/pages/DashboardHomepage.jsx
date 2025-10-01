import React from "react";
import MedicationsCard from "../components/dashboard/MedicationsCard";
import MedicationsChart from "../components/dashboard/MedicationsChart";
import VitalsCards from "../components/dashboard/VitalsCards";
import VitalsChart from "../components/dashboard/VitalsChart";

const DashboardHomepage = () => {
  return (
    <section className="container pt-8">
      <p className=" text-2xl sm:text-3xl  tracking-wider font-semibold italic text-gray-700">
        Hey there,<span className="not-italic pl-2">Julia!</span>
      </p>
      <p className="text-gray-600 font-semibold pt-2">Hope you're feeling good today</p>

      <div className=" pt-8 grid grid-cols-1  lg:grid-cols-3 gap-6 w-full">
      <MedicationsCard />
      <MedicationsChart />
      <VitalsChart/>
      <VitalsCards/>
      </div>
    </section>
  );
};

export default DashboardHomepage;
