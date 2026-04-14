import React from 'react'
import pic1 from '../assets/Elon Musk.jpg'
import pic2 from '../assets/VCEO.jpg'
import pic3 from '../assets/Managing Director.jpg'

const Team = () => {
  return (
    <div className='text-white min-h-screen px-4 sm:px-6 md:px-10 lg:px-12 bg-gray-800 pt-24'>
      <h3 className='text-2xl underline underline-offset-[16px] font-medium italic text-center pb-10'>
        Our Team
      </h3>

      {/* Responsive Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 justify-items-center pb-20'>

        {/* Elon Musk */}
        <div className='max-w-sm w-full mx-auto border-double border-8 rounded-sm hover:border-2 hover:border-dashed hover:brightness-75 max-h-fit transition duration-300'>
          <img src={pic1} alt="Elon Musk" className='w-full h-80 object-cover' />
          <div className='bg-black text-center pt-4'>
            <h3 style={{ textShadow: '5px 5px 5px blue' }} className='text-pink-400 text-2xl font-semibold italic font-serif'>Elon Musk</h3>
            <h3 className='text-2xl font-semibold tracking-wide italic py-2'>CEO & Founder</h3>
            <p style={{ textShadow: '5px 5px 5px white' }} className='text-lg text-red-500 font-semibold tracking-widest italic pb-2'>Web Developer & Programmer</p>
          </div>
        </div>

        {/* Hira Virk */}
        <div className='max-w-sm w-full mx-auto border-double border-8 rounded-sm hover:border-2 hover:border-dashed hover:brightness-75 max-h-fit transition duration-300'>
          <img src={pic2} alt="Hira Virk" className='w-full h-[21rem] object-cover' />
          <div className='bg-black text-center'>
            <h3 style={{ textShadow: '5px 5px 5px blue' }} className='text-pink-400 text-2xl font-semibold italic font-serif'>Hira Virk</h3>
            <h3 className='text-2xl font-semibold tracking-wide italic py-2'>VCEO & Planner</h3>
            <p style={{ textShadow: '5px 5px 5px white' }} className='text-lg text-red-500 font-semibold tracking-widest italic pb-2'>IT Expert</p>
          </div>
        </div>

        {/* Mahrukh Jutt */}
        <div className='max-w-sm w-full mx-auto border-double border-8 rounded-sm hover:border-2 hover:border-dashed hover:brightness-75 max-h-fit transition duration-300'>
          <img src={pic3} alt="Mahrukh Jutt" className='w-full h-80 object-cover' />
          <div className='bg-black text-center pt-4'>
            <h3 style={{ textShadow: '5px 5px 5px blue' }} className='text-pink-400 text-2xl font-semibold italic font-serif'>Mahrukh Jutt</h3>
            <h3 className='text-2xl font-semibold tracking-wide italic py-2'>Managing Director</h3>
            <p style={{ textShadow: '5px 5px 5px white' }} className='text-lg text-red-500 font-semibold tracking-widest italic pb-2'>Web Designer</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Team
