import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Service = () => {
  return (
    <div className='text-white min-h-screen px-4 sm:px-6 md:px-8 bg-gray-800 pt-24 pb-12'>
      <h3 className='text-2xl underline underline-offset-[16px] font-medium italic text-center pb-4'>
        Our Services
      </h3>

      {/* Responsive Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 py-6 justify-items-center'>
        
        {/* Plan 1 */}
        <div 
          style={{ boxShadow: '2px 2px 5px white' }} 
          className='bg-black italic px-6 border flex flex-col justify-between max-w-sm w-full mx-auto'
        >
          <div>
            <h5 className='bg-blue-300 font-semibold tracking-widest text-center text-xl mt-8'>FREE</h5>
            <h4 className='text-4xl font-serif tracking-widest text-center pt-8'>Price</h4>
            <p className='text-2xl tracking-widest py-6 text-center'>$ 0.00 / Month</p>
            <hr className='mx-8' />
            <p className='mx-8 tracking-tighter pt-10 text-sm text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia debitis maiores aspernatur vel? 
              Voluptas, a! Delectus nam nihil porro atque architecto unde exercitationem optio. 
              Vel, rem provident? Necessitatibus, recusandae quaerat.
            </p>
          </div>

          <div className='pt-8 pb-4 px-6'>
            <div className='flex items-center justify-between pr-4'>
              <p>Get Information</p>
              <FaCheckCircle />
            </div>
            <div className='flex py-4 items-center justify-between pr-5'>
              <p>Services</p>
              <FaXmark />
            </div>
            <div className='flex items-center justify-between pr-5'>
              <p>Packages</p>
              <FaXmark />
            </div>
          </div>
        </div>

        {/* Plan 2 */}
        <div 
          style={{ boxShadow: '2px 2px 5px white' }} 
          className='bg-black italic px-6 border flex flex-col justify-between max-w-sm w-full mx-auto'
        >
          <div>
            <h5 className='bg-blue-300 font-semibold tracking-widest text-center text-xl mt-8'>PROFESSIONAL</h5>
            <h4 className='text-4xl font-serif tracking-widest text-center pt-8'>Price</h4>
            <p className='text-2xl tracking-widest py-6 text-center'>$ 50.00 / Month</p>
            <hr className='mx-8' />
            <p className='mx-8 tracking-tighter pt-10 text-sm text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia debitis maiores aspernatur vel? 
              Voluptas, a! Delectus nam nihil porro atque architecto unde exercitationem optio. 
              Vel, rem provident? Necessitatibus, recusandae quaerat.
            </p>
          </div>

          <div className='pt-8 pb-4 px-6'>
            <div className='flex items-center justify-between pr-4'>
              <p>Get Information</p>
              <FaCheckCircle />
            </div>
            <div className='flex py-4 items-center justify-between pr-4'>
              <p>Services</p>
              <FaCheckCircle />
            </div>
            <div className='flex items-center justify-between pr-4'>
              <p>Packages</p>
              <FaCheckCircle />
            </div>
          </div>
        </div>

        {/* Plan 3 */}
        <div 
          style={{ boxShadow: '2px 2px 5px white' }} 
          className='bg-black italic px-6 border flex flex-col justify-between max-w-sm w-full mx-auto'
        >
          <div>
            <h5 className='bg-blue-300 font-semibold tracking-widest text-center text-xl mt-8'>ENTERPRISE</h5>
            <h4 className='text-4xl font-serif tracking-widest text-center pt-8'>Price</h4>
            <p className='text-2xl tracking-widest py-6 text-center'>$ 20.00 / Month</p>
            <hr className='mx-8' />
            <p className='mx-8 tracking-tighter pt-10 text-sm text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia debitis maiores aspernatur vel? 
              Voluptas, a! Delectus nam nihil porro atque architecto unde exercitationem optio. 
              Vel, rem provident? Necessitatibus, recusandae quaerat.
            </p>
          </div>

          <div className='pt-8 pb-4 px-6'>
            <div className='flex items-center justify-between pr-4'>
              <p>Get Information</p>
              <FaCheckCircle />
            </div>
            <div className='flex py-4 items-center justify-between pr-4'>
              <p>Services</p>
              <FaCheckCircle />
            </div>
            <div className='flex items-center justify-between pr-5'>
              <p>Packages</p>
              <FaXmark />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
