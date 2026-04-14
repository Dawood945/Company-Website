import React from 'react'
import company from '../assets/company.jpg'

const AboutUs = () => {
  return (
    <div className='text-white w-full min-h-screen px-4 bg-gray-800 pt-32'>
      <h3 className='text-3xl font-medium italic text-center pb-2'>
        About Us
      </h3>
      <hr className='mx-auto w-40'/>

      <div className='flex flex-wrap gap-8 md:flex-row items-center justify-center pb-10 my-10'>
        {/* Image */}
        <img
          src={company}
          alt="No image"
          className='w-full relative sm:w-[400px] h-72 border-2 border-dotted object-cover'
        />

        {/* Text */}
        <p className='text-justify font-medium max-w-2xl px-2 pb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo odit corrupti
          laudantium natus eius, modi aperiam blanditiis vitae optio ipsum dolorum enim omnis ex
          itaque laboriosam debitis aliquam delectus adipisci excepturi velit quia minus
          consectetur temporibus unde! Incidunt dignissimos hic harum sunt necessitatibus iusto
          quia voluptates voluptas mollitia ab doloribus autem, consequatur deserunt laudantium
          earum nisi magni ratione assumenda? Aliquid?
        </p>
      </div>
    </div>
  )
}

export default AboutUs
