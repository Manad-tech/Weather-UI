import React from 'react'
import Ghost from '../assets/images/Ghost.png'
import smallcloud from '../assets/images/smallcloud.png'
import Icon from '../assets/images/Icon.png'
import marker from '../assets/images/marker.png'
import { ActivityArea } from './page/ActivityArea'
import { Information } from './page/Information'
// import Icon from '../assets/images/Icon.png'

export const Menu = ({info}) => {
  return (
      <div className='flex gap-8 p-4'>
        <div className=' bg-[#DEAB4D] w-[100px] h-auto rounded-[40px] justify-center items-center text-white'>
          <div className='flex flex-col p-4 justify-center gap-[120px] items-start'>
            <div>
              <img src={Ghost} alt="ghost" className='rounded-full w-[60px] h-[60px]' />
            </div>
            <div className='flex flex-col gap-4 justify-center items-center'>
              <div className='flex flex-col items-center justify-center'>
                <img src={smallcloud} alt="smallcloud" className='w-[60px] h-[60px] ' />
                <h1>weather</h1>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <img src={Icon} alt="smallcloud" className='w-[50px] h-[50px] ' />
                <h1>explore</h1>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <img src={marker} alt="smallcloud" className='w-[60px] h-[60px] ' />
                <h1>cities</h1>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <img src={smallcloud} alt="smallcloud" className='w-[60px] h-[60px] ' />
                <h1>settings</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ActivityArea />
        </div>
        <Information info = {info}/>
      </div>
  )
}
