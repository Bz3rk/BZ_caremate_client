import React from "react";
import {
  ClockIcon,
  Bars3BottomLeftIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

import { Meds } from "../../mockData/data";
import { format } from "date-fns";

const MedicationsCard = () => {


  const handleMarkAsTaken = () => {
    console.log("taken");
  };


  return (
    <div className="bg-white h-[350px]  ml-2 overflow-y-auto hide-scrollbar shadow-[2px_2px_2px_0px_rgba(0,0,0,0.3)]">
      <div className="flex items-center justify-between rounded-t-md bg-primary-300 text-white p-2 ">
        <p className=" text-lg font-Montserrat font-semibold uppercase">
          Upcoming Meds
        </p>
        <ClockIcon className="w-8 h-8 " />
      </div>
      <div className="py-2">
        {/* Output meds and formats date and time from database  */}
        {Meds.map((med) => {
          const formattedTime = med.time
            ? format(new Date(`1970-01-01T${med.time}`), "hh:mm a")
            : "No time set";

          return (
            <div className="p-2 text-gray-600 font-OpenSans" key={med.id}>
              <div className="flex justify-between items-center ">
                <div className="flex items-center">
                  <p className=" font-semibold capitalize ">
                    {med.medication_name}
                  </p>
                </div>
                <p className=" font-semibold">{formattedTime}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-medium text-base pl-4">
                  {med.notes && `${med.notes.slice(0, 20)}...`}
                </p>
                {med.taken ? (
                  <button
                    onClick={handleMarkAsTaken}
                    className=" text-gray-500  hover:text-primary-300 duration-300"
                    title="Mark as taken"
                  >
                    <CheckCircleIcon className="w-6 h-6" />
                  </button>
                ) : (
                  <CheckCircleIcon className="w-6 h-6 text-primary-300" />
                )}
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MedicationsCard;
