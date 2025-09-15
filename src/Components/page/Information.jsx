import React, { useEffect } from 'react'
import temperature from '../../assets/images/temperature.png'
import wind from '../../assets/images/wind.png'
import rain from '../../assets/images/rain.png'
import sun from '../../assets/images/sun.png'
import SunIcon from "../../assets/images/SunIcon.png"
import CloudIcon from "../../assets/images/CloudIcon.png"
import M3 from "../../assets/images/M3.png"
import M4 from "../../assets/images/M4.png"
import M5 from "../../assets/images/M5.png"
import LeftArrow from "../../assets/images/LeftArrow.png"
import RighttArrow from "../../assets/images/RightArrow.png"



export const Information = ({ info , day}) => {

  // useEffect(() => {
  //   let  weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  //   const d1 = new Date();
  //   let currentDay = d1.getDay();
  //   let print_weekday_array = new Map();
  //   console.log(currentDay);
  //   console.log(weekday);
  
  //   return () => {
      
  //     for(let i=-2; i<=2; i++){
  //       let changeDay = currentDay + i;
        
  //       let weekday_length = weekday.length;
  //       console.log(weekday_length,"current");
  //       let day = 0
    
  //       if (changeDay< 0) {
  //         day = weekday_length + changeDay
  //         console.log("current day if",day);
  //       }
  //       else{
  //         day = changeDay % weekday_length
  //         console.log("current day else",day);
  //       }

  //       // print_weekday_array.unshift(day)
        
  //     }
  //     console.log(print_weekday_array);
  //   }
  // }, [])

  


  console.log(info);

  return (
    <div className=' bg-[#DEAB4D] w-auto h-auto rounded-[40px] text-white p-4'>
      <div>

        <div className='flex flex-col gap-4 items-center'>
          <div className='flex gap-4 justify-center items-center'>
            <div>
              <img src={LeftArrow} alt="leftarrow" className='w-[20px] h-[24px]' />
            </div>
            <div className='flex flex-col items-center gap-1'>
              <h1>FRI</h1>
              <img src={CloudIcon} alt="cloudicon" className='w-[20px] h-[20px]' />
            </div>
            <div className='flex flex-col items-center gap-1'>
              <h1>SAT</h1>
              <img src={SunIcon} alt="sunicon" className='w-[20px] h-[20px]' />
            </div>
            <div className='flex flex-col items-center gap-1'>
              <h1>SUN</h1>
              <img src={M3} alt="m3" className='w-[31px] h-[25px]' />
            </div>
            <div className='flex flex-col items-center gap-1'>
              <h1>MON</h1>
              <img src={M4} alt="m4" className='w-[20px] h-[20px]' />
            </div>
            <div className='flex flex-col items-center gap-1'>
              <h1>TUE</h1>
              <img src={M5} alt="m5" className='w-[20px] h-[19px]' />
            </div>
            <div>
              <img src={RighttArrow} alt="rightarrow" className='w-[20px] h-[24px]' />
            </div>
          </div>
          <div>
            <h1 className=''>8:00 PM GMT</h1>
          </div>
        </div>
        <div className='flex flex-col gap-5 '>
          <h1 className='text-[14px] font-bold'>
            AIR CONDITIONS
          </h1>
          <div className='flex flex-col gap-15'>
            <div className='flex gap-1'>
              <img src={temperature} alt="temperature" className='w-[20px] h-[25px]' />
              <div className='flex flex-col'>
                <h1 className='text-[12px] font-regular'>Real Feel</h1>
                <h1 className='text-[16px] font-medium'>{info.feelslike + "°C"}</h1>
              </div>
            </div>
            <div className='flex gap-1'>
              <img src={wind} alt="temperature" className='w-[20px] h-[20px]' />
              <div className='flex flex-col'>
                <h1 className='text-[12px] font-regular'>Wind</h1>
                <h1 className='text-[16px] font-medium'>{info.wind} km/hr</h1>
              </div>
            </div>
            <div className='flex gap-1'>
              <img src={rain} alt="temperature" className='w-[20px] h-[25px]' />
              <div className='flex flex-col'>
                <h1 className='text-[12px] font-regular'>Chance of rain</h1>
                <h1 className='text-[16px] font-medium'>{info.precip}%</h1>
              </div>
            </div>
            <div className='flex gap-1'>
              <img src={sun} alt="temperature" className='w-[20px] h-[20px]' />
              <div className='flex flex-col'>
                <h1 className='text-[12px] font-regular'>UV index</h1>
                <h1 className='text-[16px] font-medium'>{info.uv}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
