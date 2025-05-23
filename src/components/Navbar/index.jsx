import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import User from "../../assets/user.png";

function Navbar({toggleSidebar}) {
  return (
    <nav className='bg-primary1 shadow-md py-4'>
        <div className='flex justify-between gap-2 items-center px-2'>
            <button onClick={toggleSidebar} className='md:hidden cursor-pointer'>
              <FiMenu  />
            </button>

            <div className='flex bg-primary2 items-center text-grayText justify-center gap-2 py-1.5 px-1.5 md:py-2.5 md:px-2.5 min-w[200px] max-w-xl rounded-md w-[100%]'>
              <CiSearch className='text-xl' />
              <input type='text' placeholder='Search For Somthing' className='bg-transparent text-gray-300 border-none w-full outline-none '>
              </input>
            </div>

            <div className='flex items-center justify-centent gap-x-2'> 
              <div className='relative'>
                <div className='absolute bg-red-500 rounded-full w-2 h-2 top-[3px] right-[5px]'></div>
                <IoMdNotificationsOutline className='text-gray-400 text-[25px] md:text[30px]' />
              </div>
              <img src={User} alt="" className='cursor-pointer' />
            </div>

        </div>
    </nav>
  )
}

export default Navbar