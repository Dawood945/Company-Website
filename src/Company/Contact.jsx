import React from 'react'

const Contact = () => {
  return (
     <div className='text-white bg-gray-800 pt-24'>
        <h3 className='text-2xl underline underline-offset-[16px] font-medium italic text-center pb-4'>Contact Us</h3>

        {/* Outer container now responsive */}
        <div className='flex flex-col lg:flex-row pt-4'>
          
          {/* Left Section */}
          <div className='bg-black px-4 w-full lg:w-[35rem] pt-24 relative justify-center items-center'>
            <h2 className='text-xl italic font-bold font-serif tracking-wider text-yellow-300 pb-6 text-center lg:text-left'>
              CONTACT US FORM
            </h2>
            <p className='text-justify text-xs leading-relaxed'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur veniam at temporibus non in quam blanditiis provident, neque reiciendis dolor sequi quaerat, obcaecati laboriosam ducimus eligendi rem voluptatem dicta doloremque aut mollitia eveniet veritatis labore illo. Neque obcaecati praesentium nesciunt et saepe fugiat quasi iste consectetur illo explicabo numquam tempore provident, sed, cum recusandae blanditiis nobis, soluta quis voluptatum earum eos doloribus magnam beatae! Sint praesentium perferendis natus? Possimus sequi amet necessitatibus corporis facilis numquam cum dicta, illo nulla odit.
            </p>
          </div>

          {/* Right Section (Form) */}
          <div className='bg-white text-black px-6 sm:px-8 pt-6 w-full lg:w-[60vw]'>
            <h5 style={{textShadow: '2px 2px 2px black'}} className='text-xs italic tracking-wider font-serif font-medium pb-4'>YOUR NAME :</h5>
            <input 
              type="text" 
              name="name" 
              id="name" 
              className='border border-black w-full sm:w-96 px-1 rounded-none' 
            />

            <h5 style={{textShadow: '2px 2px 2px black'}} className='text-xs italic tracking-wider font-serif font-medium mt-6 pb-4'>EMAIL ADDRESS:</h5>
            <input 
              type="email" 
              name="email" 
              id="email" 
              className='border border-black w-full sm:w-96 px-1 rounded-none' 
            /> 

            <h5 style={{textShadow: '2px 2px 2px black'}} className='text-xs italic tracking-wider font-serif font-medium mt-6 pb-4'>MESSAGE:</h5>   
            <textarea 
              name="" 
              id="" 
              cols="70" 
              rows="8" 
              className='border border-black w-full sm:w-auto'
            ></textarea>

            <br />
            <input 
              type="submit" 
              value="SUBMIT" 
              className='bg-gray-500 px-8 sm:px-12 py-2 text-white font-serif border-2 border-black italic tracking-widest rounded-md mt-4 mb-2 cursor-pointer'
            />
          </div>
        </div>
    </div>
  )
}

export default Contact
