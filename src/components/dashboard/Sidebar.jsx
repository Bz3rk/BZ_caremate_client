import React from 'react'
import { Squares2X2Icon, BeakerIcon, CalendarIcon, HeartIcon, UserCircleIcon  } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className=" hidden sm:block fixed top-16 left-0">
        {/* Sidebar */}
        <aside className="w-56 bg-white shadow-[2px_2px_2px_0px_rgba(0,0,0,0.3)] h-[calc(100vh-4rem)] p-4 ">
          <nav className="flex flex-col gap-10 items-start pt-10 text-xl font-semibold text-gray-600">
            <div className='flex items-center gap-3 hover:text-primary-300 hover:scale-105 duration-200'>
            <Squares2X2Icon className='w-6 h-6'/>
            <NavLink to="/dashboard" >Dashboard</NavLink>
            </div>
            <div className='flex items-center gap-3 hover:text-primary-300 hover:scale-105 duration-200'>
            <BeakerIcon className='w-6 h-6'/>
            <NavLink to="/dashboard">Medications</NavLink>
            </div>
            <div className='flex items-center gap-3 hover:text-primary-300 hover:scale-105 duration-200'>
            <HeartIcon className='w-6 h-6'/>
            <NavLink to="/dashboard">Health logs</NavLink>
            </div>
            <div className='flex items-center gap-3 hover:text-primary-300 hover:scale-105 duration-200'>
            <CalendarIcon className='w-6 h-6'/>
            <NavLink to="/dashboard">Appointment</NavLink>
            </div>
            <div className='flex items-center gap-3 hover:text-primary-300 hover:scale-105 duration-200'>
            <UserCircleIcon className='w-6 h-6'/>
            <NavLink to="/dashboard">Support</NavLink>
            </div>
          </nav>
        </aside>
        </div>
  )
}

export default Sidebar