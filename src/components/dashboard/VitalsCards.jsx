import React from 'react'
import {
    ClockIcon,
    BoltIcon,
    FireIcon,
    PresentationChartLineIcon,
    HeartIcon

  } from "@heroicons/react/24/solid";

  

const VitalsCards = () => {
  return (
    <div className="bg-white ml-2 overflow-y-auto mt-4 text-gray-600 shadow-[2px_2px_2px_0px_rgba(0,0,0,0.3)]">
        <div className="flex items-center justify-between rounded-t-md bg-primary-300 text-white p-2 gap-24">
        <p className=" text-lg sm:text-xl  font-Montserrat font-semibold uppercase">
          Recent Vitals
        </p>
        <ClockIcon className="w-8 h-8 " />
      </div>

      <div className='font-medium flex justify-between p-2'>
        <p>Latest vital check on </p>
        <p className='italic'>Friday, sept 2022</p>
      </div>
      <div className=' font-medium'>
        <div className="flex justify-between p-2">
          <div className='flex items-center gap-2'>
          <PresentationChartLineIcon  className='w-6 h-6'/>
        <p>Blood Pressure</p>
        </div>
        <p>120/80 mmHg</p>
        </div>
        <div className="flex justify-between p-2">
        <div className='flex items-center gap-2'>
          <HeartIcon className='w-6 h-6'/>
        <p>Heart rate</p>
        </div>
        <p>76 bpm</p>
        </div>
        <div className="flex justify-between p-2">
          <div className='flex items-center gap-2'>
            <BoltIcon className='w-6 h-6'/>
            <p>Respiratory rate</p>
          </div>
        <p>120 breaths per min</p>
        </div>

        <div className="flex justify-between p-2">
          <div className='flex items-center gap-2'>
            <FireIcon className='w-6 h-6'/>
            <p>Temprature</p>
          </div>
        <p>33 C</p>
        </div>
      </div>
    </div>
  )
}

export default VitalsCards