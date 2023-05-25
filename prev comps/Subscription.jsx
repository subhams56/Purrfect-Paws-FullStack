import React from 'react';
import Typed from 'react-typed';

const Subscription = () => {
  return (
    <div 
    className='bg-[#B8C6DB] w-screen py-16 px-4 border-8 border-white   '>
        <div className=' ml-[620px]   w-[250px] h-[75px] rounded-xl font-medium text-black hover:bg-[#00df9a] hover:text-white hover:ease-in-out duration-500 '>
        <h2 className="text-xl font-bold text-center cursor-pointer">Subscribe to Purrfect Paws <Typed className='md:text-2xl sm:text-xl text-lg text-center m-2  font-mono font-bold'
          strings={['🐾🐾🐾','...']}
          typeSpeed={160} backSpeed={140} loop /></h2>
    </div>
          
      <div className=' gap-4 max-w-[1240px] mx-auto '>
    <div className="flex mt-10 gap-4 justify-between p-6">
    
      <div className="flex flex-col mb-4">
        <h3 className="text-xl font-bold mb-2 text-center">Basic Subscription</h3>
        <p className="mb-2 text-center">Access to available cats for adoption</p>
        <p className="mb-2 text-center">Notifications when new cats are added</p>
        <p className="mb-2 text-center">Billing amount: $9.99/month</p>
        <button className=" mt-[30px]    ml-[60px] text-center bg-[#00df9a] w-[150px] h-[40px] rounded-xl font-medium text-black hover:bg-white hover:text-black hover:ease-in-out duration-500 ">Start Trial</button>
      </div>
      <div className="flex flex-col mb-4">
        <h3 className="text-xl font-bold mb-2 text-center">Premium Subscription</h3>
        <p className="mb-2 text-center">Early access to new arrivals</p>
        <p className="mb-2 text-center">Priority status when adopting</p>
        <p className="mb-2 text-center">Discounts on merchandise</p>
        <p className="mb-2 text-center">Billing amount: $19.99/month</p>
        <button className=" ml-[30px] text-center bg-[#00df9a] w-[150px] h-[40px] rounded-xl font-medium text-black hover:bg-white hover:text-black hover:ease-in-out duration-500 ">Start Trial</button>
      </div>
      
      <div className="flex flex-col mb-4">
        <h3 className="text-xl font-bold mb-2 text-center">Foster Parent Subscription</h3>
        <p className="mb-2 text-center">Temporary fostering of cats</p>
        <p className="mb-2 text-center">Training and support from the Purrfect Paws team</p>
        <p className="mb-2 text-center">Billing amount: $29.99/month</p>
        <button className="  mt-[30px] ml-[100px] text-center bg-[#00df9a] w-[150px] h-[40px] rounded-xl font-medium text-black hover:bg-white hover:text-black hover:ease-in-out duration-500 ">Start Trial</button>
      </div>
      
      
      
    </div>
    </div>
    </div>
    
  );
};

export default Subscription;
