import React from 'react'
import Img2 from '../assets/catimg2.jpg'
import Img4 from '../assets/catimg4.jpg'
import Typed from 'react-typed';

const Desc = () => {
  return (
    <div 
    className='bg-[#B8C6DB] w-screen py-16 px-4 border-8 border-white  '>
      <div className=' gap-4 max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <div className='flex items-center justify-center'><img className='object-cover h-96 w-96 rounded-full' src={Img2} alt="catimg" />
      </div>
      <div className=' px-4 mt-2'>
          <h1 className='text-center m-2 text-2xl font-mono font-bold '>Why Adopt? <Typed className='md:text-2xl sm:text-xl text-lg text-center m-2  font-mono font-bold'
          strings={['Why', 'Not ?','...']}
          typeSpeed={160} backSpeed={140} loop /></h1>
          
          <p className='text-center font-mono font-normal'>Adopting a cat from Purrfect Paws not only gives a deserving cat a loving home, but it also opens up space for another cat in need of help. This is a wonderful opportunity to make a difference in the life of a furry friend while also positively impacting your own life. Adopting a cat can bring joy and companionship to your home, reducing stress and improving overall wellbeing. By choosing to adopt, you are also supporting a local animal rescue organization and contributing to the community. In addition, adopted cats are often already litter trained, saving you time and effort in training, and many are already spayed or neutered, saving you money on future veterinary bills.</p>
        <button className=' ml-[200px] bg-[#00df9a] w-[200px] rounded-xl font-medium my-6  py-3  hover:bg-white hover:text-[#00df9a] hover:ease-in-out duration-500 '> 🐈‍ Explore Furrys 🐈‍</button>
        </div>
       
      </div>
    </div>
  )
}

export default Desc