import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

  return (
    <div className="px-3 sm:px-6 md:px-10 lg:px-20 bg-gray-800 text-white pt-28 md:pt-32 tracking-wider overflow-x-hidden">
      {/* Heading */}
      <h3 className="text-3xl md:text-4xl font-medium italic text-center pb-6">
        Image Gallery
      </h3>
      <hr className="mx-auto w-40 sm:w-56 md:w-64 border-gray-400 pb-10" />

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-10 xl:gap-x-16 gap-y-10 sm:gap-y-12 md:gap-y-14 pb-16 place-items-center">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full max-w-[450px] sm:max-w-[400px] md:max-w-[420px] aspect-[4/3] overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03]"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover brightness-75 hover:brightness-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
