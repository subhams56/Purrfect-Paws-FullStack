import React from 'react'
import { FaDribbbleSquare,
FaFacebookSquare,
FaGithub,FaTwitterSquare,
FaInstagramSquare} from 'react-icons/fa';
import Img3 from '../assets/catimg3.jpg';

const Footer = () => {
  return (
    <>
    <div className='max-w-[1240px] mx-auto h-[450px] py-16 px-4 grid lg:grid-cols-3 gap-8  text-gray-300'>
        <img src={Img3} alt="catimg3" />
        <div>
        <h1 className=' w-full text-xl font-bold text-[#00df9a] cursor-pointer'>Purrfect Paws 🐾 </h1>
        <p className='text-xs py-4'>"Purrfect Paws is dedicated to helping cats find their forever homes. By joining us in our mission, you can make a difference in a feline's life and experience the joy of cat adoption. With your support, we can work towards creating a world where all cats are loved and cared for. Thank you for being a part of the Purrfect Paws community!"</p>
        <div className='flex justify-between md:w-[75%] my-6 '>
            
        
        <FaFacebookSquare className='hover:text-rose-300 cursor-pointer' size={30} />
        <FaTwitterSquare className='hover:text-rose-300 cursor-pointer'size={30}/>
        <FaGithub className='hover:text-rose-300 cursor-pointer' size={30}/> 
        <FaInstagramSquare className='hover:text-rose-300 cursor-pointer' size={30} />
        <FaDribbbleSquare className='hover:text-rose-300 cursor-pointer' size={30}/>
        
        
       </div>
        </div>
        <div className='lg:col-span-3 mb-4 flex justify-between'>
            <div>
                <ul>
                    <li className='py-2 text-sm hover:text-white hover:ease-in-out duration-500 cursor-pointer'>Donate to Our Cause</li>
                    <li className='py-2 text-sm hover:text-white hover:ease-in-out duration-500 cursor-pointer'>Privacy Policy</li>
                    <li className='py-2 text-sm hover:text-white hover:ease-in-out duration-500 cursor-pointer'>Terms & Conditions</li> 
                    <li className='py-2 text-sm hover:text-white hover:ease-in-out duration-500 cursor-pointer'>FAQs</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='py-2 text-sm hover:text-white hover:ease-in-out duration-500 cursor-pointer'>Pricing</li>
                    <li className='py-2 text-sm hover:text-white hover:ease-in-out duration-500 cursor-pointer'>Documentation</li>
                    <li className='py-2 text-sm hover:text-white hover:ease-in-out duration-500 cursor-pointer'>Guides</li>
                    <li className='py-2 text-sm hover:text-white hover:ease-in-out duration-500 cursor-pointer'>API Status</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='py-2 text-sm hover:text-white hover:ease-in-out duration-500 cursor-pointer'>Founders</li>
                    <li className='py-2 text-sm hover:text-white hover:ease-in-out duration-500 cursor-pointer'>Blogs</li>
                    <li className='py-2 text-sm hover:text-white hover:ease-in-out duration-500 cursor-pointer'>Support Groups</li>
                    <li className='py-2 text-sm hover:text-white hover:ease-in-out duration-500 cursor-pointer'>Help</li>
                </ul>
            </div>

        </div>

        


        </div>
        <div className='text-white text-center font-thin text-xs mt-6'>
            <p>All Rights Reserved ©️ Subham Saha 2023</p>
        </div>
        </>
  )
}

export default Footer