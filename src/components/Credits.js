import React from 'react'
import { FaHeart } from "react-icons/fa";
import "./Credits.css"
const Credits = () => {
  return (
    <div className='rounded-lg credits'>
      <div >
        <div className='flex space-x-1 relative'>
            <p>Created with love</p>
            <FaHeart className=' mt-[4px]' color='red'/> 
        </div>
        
        <p>by <span className='text-blue-700'>Manas Tripathi</span></p>
        <div className='space-x-5'>
          <a className='cursor-pointer font-bold text-large  hover:text-red-500' href="https://www.linkedin.com/in/manas-tripathi-73876324b/">Linkdln</a>
          <a href="https://github.com/ManasTripathi07" className='cursor-pointer font-bold text-large hover:text-red-500'>Github</a> 
        </div>
        
       </div>
    </div>
  )
}

export default Credits
