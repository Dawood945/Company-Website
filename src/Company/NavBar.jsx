import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='flex flex-col sm:flex-row text-white items-center px-6 sm:px-12 py-4 sm:py-6 justify-between border-b-2 bg-gradient-to-r from-purple-700 to-indigo-500 fixed w-full z-50'>
      <h5 className='font-bold font-serif italic text-lg sm:text-xl mb-2 sm:mb-0 text-center sm:text-left'>
        DAWOOD MEHMOOD TECHNICAL
      </h5>
      <div className="flex flex-wrap justify-center sm:justify-end gap-x-6 sm:gap-x-10 font-medium italic text-sm sm:text-base">
        <Link to={"/"} className='hover:text-gray-200'>Home</Link>
        <Link to={"/about"} className='hover:text-gray-200'>About Us</Link>
        <Link to={"/gallery"} className='hover:text-gray-200'>Image Gallery</Link>
        <Link to={"/service"} className='hover:text-gray-200'>Our Services</Link>
        <Link to={"/team"} className='hover:text-gray-200'>Our Team</Link>
        <Link to={"/contact"} className='hover:text-gray-200'>Contact Us</Link>
      </div>
    </div>
  )
}

export default NavBar
