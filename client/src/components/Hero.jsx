import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div >
        <div className='max-w-[800px] mt-32 mb-20 w-full h-[400px] mx-auto text-center flex flex-col justify-center'>
         <p className=' font-bold text-[#00df9a] text-2xl p-2'>Find Your Purrfect Companion at Purrfect Paws 🐾 </p>
         <p className=' md:text-3xl sm:text-2xl text-lg font-bold text-[#00df9a]'>Adoption Process made </p>
         <Typed className='md:text-3xl sm:text-2xl text-lg font-bold text-[#B8C6DB]'
          strings={['"Easy"', '"Fast"','"Reliable"', '"Transparent"']}
          typeSpeed={120} backSpeed={140} loop
         
         
         />
         <h1 className='text-[#B8C6DB] font-mono md:text-2xl sm:text-xl text-sm font-bold md:py-6 p-2'>Adopt a cat, love them unconditionally, and give them the care they deserve. At Purrfect Paws, we help you find your purrfect companion for a lifetime of happiness...</h1>
       
         <button className='bg-[#00df9a] w-[200px] rounded-xl font-medium my-6 mx-auto py-3  hover:bg-white hover:text-black hover:ease-in-out duration-500 '>Get Started</button>
         
        </div>
        
        
      

    </div>
  )
}

export default Hero