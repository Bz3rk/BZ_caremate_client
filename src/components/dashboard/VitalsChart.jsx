import React from 'react'
import { CartesianGrid, Legend, LineChart, Line, Tooltip, XAxis,YAxis, ResponsiveContainer, Area, AreaChart } from 'recharts'
import { Vitals } from '../../mockData/data'
import {format} from "date-fns"


const VitalsChart = () => {

  const data = Vitals.map(item => ({
    ...item,
    date: format(new Date(item.date), "dd MMM yy")
  }))

  console.log(data)
  
  return (
    <div className='lg:col-span-3 md:col-span-2 mt-4 hidden sm:block shadow-[0px_0px_2px_0px_rgba(0,0,0,0.3)]  text-gray-600 text-xs font-semibold font-OpenSans'>
      <p className='text-2xl text-center font-Montserrat tracking-widest text-white font-semibold mb-2 py-2 bg-primary-300 rounded-t-md'>
        Vitals Chart
      </p>
      <div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="date" />
          <YAxis width="auto" />
          <Tooltip contentStyle={{ borderRadius:"8px"}}/>
          <Legend align='center'/>
          <Area type="monotone" dataKey="blood_pressure" name='Blood Pressure' stroke='#00A6FB' fill='#00A6FB' fillOpacity={0.2}/>
          <Area type="monotone" dataKey="respiratory_rate" name='Respiratory Rate' stroke='#003554' fill='#003554' fillOpacity={0.2}/>
          <Area type="monotone" dataKey="heart_rate" name='Heart Rate' stroke='#0582CA' fill='#0582CA' fillOpacity={0.2}/>
          <Area type="monotone" dataKey="temp" name='Temprature' stroke='#006494' fill='#006494' fillOpacity={0.2}/ >
          <AreaChart/>
        </AreaChart>
        </ResponsiveContainer>
    </div>
    </div>
  )
}

export default VitalsChart