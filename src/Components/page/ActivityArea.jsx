import React from 'react'
import Heart from '../../assets/images/Heart.png'
import pic1 from '../../assets/images/pic1.jpg'
// import pic2 from '../../assets/images/pic2.jpg'
import pic3 from '../../assets/images/pic3.jpg'
import pic4 from '../../assets/images/pic4.jpg'
import { Chart } from '../Chart'

export const ActivityArea = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-1 bg-[#DEAB4D] p-4 rounded-[40px] w-[884px] h-auto items-start text-white'>
        <div className='flex gap-2 items-center p-2'>
          <img src={Heart} alt="" className='w-[21px] h-[17px]' />
          <h1 className='text-[24px] font-medium'>Activity in your area</h1>
        </div>
        <div className='flex gap-4 p-2 text-[12px] font-medium text-black'>
          <div>
            <img src={pic1} alt="pic1" className=' rounded-2xl' />
            <h1>2km away</h1>
          </div>
          <div>
            <img src={pic1} alt="pic2" className=' rounded-2xl' />
            <h1>1.5km away</h1>
          </div>
          <div>
            <img src={pic3} alt="pic3" className=' rounded-2xl' />
            <h1>3km away</h1>
          </div>
          <div>
            <img src={pic4} alt="pic4" className=' rounded-2xl' />
            <h1>500m away</h1>
          </div>
        </div>
      </div>
      <Chart/>
    </div>
  )
}
