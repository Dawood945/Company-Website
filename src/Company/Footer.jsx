import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img8.jpg'

const Footer = () => {
  return (
    <div className='bg-black py-4'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:flex justify-evenly gap-6'>
        {/* 1st div */}
        <div className='w-full md:w-96'>
          <h3 className='text-blue-300 text-4xl font-serif italic pb-2'>DAWOOD MEHMOOD TECHNICAL</h3>
          <p className='text-white text-justify leading-4 italic'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsam enim similique incidunt tempore commodi cumque!
            Voluptate cum ea neque iusto animi at doloribus atque inventore delectus nisi aperiam porro quos soluta, illum corrupti quis tempore harum praesentium quas eaque officia dicta esse optio necessitatibus.
          </p>
        </div>

        {/* 2nd div */}
        <div className='w-full md:w-auto mx-0 md:mx-24'>
          <h3 className='text-blue-300 text-4xl font-serif italic pb-2'>PROJECTS</h3>
          <ul className='text-white list-disc italic'>
            <li>Software Development</li>
            <li className='pt-2'>Web Development</li>
            <li className='pt-2'>Transport Company</li>
            <li className='pt-2'>Shopping Mall</li>
            <li className='pt-2'>7 Star Hotel</li>
          </ul>
        </div>

        {/* 3rd div */}
        <div className='grid grid-cols-2 items-center gap-1'>
          <img src={img1} alt="No image" className='w-full h-36 object-cover border-2' />
          <img src={img2} alt="No image" className='w-full h-36 object-cover border-2' />
          <img src={img3} alt="No image" className='w-full h-36 object-cover border-2' />
          <img src={img4} alt="No image" className='w-full h-36 object-cover border-2' />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-b text-white text-center mt-4'>
        <p className='pb-2'>
          Copyright © 2022 All Rights Reserved.
          Designed by <span className='text-blue-400 underline'>Dawood Mehmood</span>
        </p>
      </div>
    </div>
  )
}

export default Footer
