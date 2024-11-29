import { images } from '@/constants';
import React from 'react'
import { IoMenu } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { MdOutlineFlightTakeoff, 
        MdOutlineCardTravel, 
        MdTravelExplore   
        } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { GiHouse } from "react-icons/gi";

const tab = [
    {
        id:1,
        icon:<MdOutlineCardTravel className='w-7 h-7' color='#0060f0' />,
        text:'Travel'
    },
    {
        id:2,
        icon:<MdTravelExplore className='w-7 h-7' color='#0060f0' />,
        text:'Explore'
    },
    {
        id:3,
        icon:<MdOutlineFlightTakeoff className='w-7 h-7' color='#0060f0' />,
        text:'Flight'
    },
    {
        id:4,
        icon:<FaBed className='w-7 h-7' color='#0060f0' />,
        text:'Hotels'
    },
    {
        id:5,
        icon:<GiHouse className='w-7 h-7' color='#0060f0' />,
        text:'Vacation rentals'
    }
]

export default function Nav() {
  return (
    <div className='p-5 flex justify-between border-b border-gray-400'>
    <div className='space-x-8 flex'>
        <div className='flex space-x-2 items-center'>
            <IoMenu color='#4b5563' className='w-10 h-10'/>
            <svg height="30" viewBox="0 0 92 30" width="92" xmlns="http://www.w3.org/2000/svg">
                <path 
                d="M38.9 15.51c0 4.26-3.32 7.39-7.4 7.39s-7.4-3.14-7.4-7.39c0-4.28 3.32-7.39 7.4-7.39s7.4 3.1 7.4 7.39zm-3.24 0c0-2.66-1.93-4.48-4.16-4.48-2.23 0-4.16 1.82-4.16 4.48 0 2.63 1.93 4.48 4.16 4.48 2.23 0 4.16-1.85 4.16-4.48z" fill="#EA4335">
                </path>
                <path 
                d="M11.96 22.98C5.63 22.98.31 17.83.31 11.5S5.63.02 11.96.02c3.5 0 5.99 1.37 7.87 3.16L17.62 5.4c-1.34-1.26-3.16-2.24-5.66-2.24-4.62 0-8.23 3.72-8.23 8.34 0 4.62 3.61 8.34 8.23 8.34 3 0 4.7-1.2 5.79-2.3.9-.9 1.49-2.2 1.74-4.17H12v-3.14h10.52c.11.56.17 1.23.17 1.96 0 2.35-.64 5.49-2.72 7.56-2.02 2.11-4.59 3.23-8.01 3.23z" fill="#4285F4">
                </path>
                <path 
                d="M54.9 15.51c0 4.26-3.32 7.39-7.4 7.39s-7.4-3.14-7.4-7.39c0-4.28 3.32-7.39 7.4-7.39s7.4 3.1 7.4 7.39zm-3.24 0c0-2.66-1.93-4.48-4.16-4.48-2.23 0-4.16 1.82-4.16 4.48 0 2.63 1.93 4.48 4.16 4.48 2.23 0 4.16-1.85 4.16-4.48z" 
                fill="#FBBC05">
                </path>
                <path d="M70 8.56v13.27c0 5.46-3.05 7.7-6.86 7.7-3.58 0-5.74-2.41-6.55-4.37l2.83-1.18c.5 1.2 1.74 2.63 3.72 2.63 2.44 0 3.78-1.51 3.78-4.34v-1.06h-.11c-.73.9-2.04 1.68-3.81 1.68-3.7 0-7-3.22-7-7.36 0-4.17 3.3-7.42 7-7.42 1.76 0 3.08.78 3.81 1.65h.11v-1.2H70zm-2.86 6.97c0-2.6-1.74-4.51-3.95-4.51-2.24 0-3.95 1.9-3.95 4.51 0 2.58 1.71 4.45 3.95 4.45 2.22.01 3.95-1.87 3.95-4.45z" 
                fill="#4285F4">
                </path>
                <path 
                d="M75 1.17V22.9h-3V1.17h3z" 
                fill="#34A853">
                </path>
                <path 
                d="M87.5 17.94l2.48 1.68c-.8 1.2-2.73 3.28-6.06 3.28-4.13 0-7.22-3.25-7.22-7.39 0-4.4 3.11-7.39 6.86-7.39 3.78 0 5.62 3.05 6.23 4.7l.31.85-9.71 4.08c.74 1.48 1.9 2.24 3.53 2.24s2.76-.82 3.58-2.05zm-7.63-2.66l6.5-2.74c-.36-.92-1.43-1.57-2.7-1.57-1.62 0-3.88 1.46-3.8 4.31z" 
                fill="#EA4335">
                </path>
            </svg>  
        </div> 

        <div className='hidden lg:flex ml-[8rem] space-x-2'>
            {tab.map((info) => (
                <div 
                key={info.id} 
                className={`flex items-center cursor-pointer ${info.text === 'Flight' ? 'text-[#0060f0] bg-blue-50' : 'hover:text-[#0060f0] hover:bg-blue-50'}  space-x-2 border border-gray-300 px-6 py-2 rounded-full`}>
                    {info.icon}
                    <p className='font-medium capitalize'>{info.text}</p>
                </div>                
            ))
            }
        </div>          
    </div>


    <div className='flex items-center space-x-5 lg:space-x-8'>
        <IoMoon className='w-5 h-5' color='#4b5563'/>
       
        <div className='space-y-1 cursor-pointer hover:bg-gray-300 p-3 rounded-full'>
            <div className='flex space-x-1'>
                <div className='dot'/>
                <div className='dot'/>
                <div className='dot'/>
            </div>  
            <div className='flex space-x-1'>
                <div className='dot'/>
                <div className='dot'/>
                <div className='dot'/>
            </div>  
            <div className='flex space-x-1'>
                <div className='dot'/>
                <div className='dot'/>
                <div className=' dot'/>
            </div>  
                
        </div>  


        <div 
        style={{
            backgroundImage: `url(${images.Profile.src})`
        }}
        className='w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-center bg-cover'>
            
        </div>  
    </div>



    </div>
  )
}
