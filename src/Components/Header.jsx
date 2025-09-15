import React, { useEffect , useState } from 'react'
import marker from '../assets/images/marker.png'
import arrowRight from '../assets/images/arrow.png'
import cloud from '../assets/images/cloud.png'



export const Header = ({data}) => {
  



  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const d1 = new Date();
  let day1 = weekday[d1.getDay()];

  const month = ["Jan","Feb","Mar","Apr","May","June","July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const d2 = new Date();
  let day2 = month[d2.getDay()];

  const d3 = new Date();
  let day3 = d3.getDate();

  const d4 = new Date();
  let year = d4.getFullYear();

  return (

    <div className='flex flex-row justify-between w-full p-7'>
      <div className='flex flex-col gap-6 justify-between'>
        <div className='flex flex-col gap-3 text-white items-start'>
          <div className='flex gap-2 justify-center items-center'>
            <img src={marker} alt="frame3" className='w-[24px] h-[24px]' />
            <h1 className='text-white font-medium text-[24px] '>{data.city}</h1>
            <img src={arrowRight} alt="arrow" className='w-[20px] h-[20px]' />
          </div>
          <h1 className='text-[48px] font-medium '>{data.weather_des}</h1>
        </div>
        <div className='flex flex-col text-white '>
          <h1 className='text-[60px] font-medium'>{data.temp+ "°C"}</h1>
          <h1 className='text-[18px] font-regular'>{day1 + " | "  + day3  + " " + " " + month[8] + " " + year  }</h1>
        </div>
      </div>
      <div>
        <img src={cloud} alt="cloud" className='w-[321px] h-[321px]' />
      </div>
    </div>

  )
}
