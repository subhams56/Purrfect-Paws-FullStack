import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-3xl sm:text-2xl text-lg font-bold text-[#B8C6DB]'>Want to Stay updated and connect with us?</h1>
                <p className=' font-semibold mt-2'>Sign up to our Newsletter ! </p>
            </div>
            <div className='my-4'>
                <input className=' mr-2  rounded-xl w-[240px] h-[40px] items-center text-center' type="email" placeholder='Enter Email..' />
                <button className="  bg-[#00df9a] w-[150px] h-[40px] rounded-xl font-medium text-black hover:bg-white hover:text-black hover:ease-in-out duration-500 ">Notify Me 🔔</button>

            </div>
            <p className="text-xs font-extralight   ">At Purrfect Paws, we take privacy seriously. We will never share your personal information with third parties and will always protect your data with the highest security measures. If you have any questions about our <span className='text-[#00df9a]'> privacy policy</span>, please reach out to us.</p>


        </div>


    </div>
  )
}

export default Newsletter