


import Nav3 from '../components/Nav3'
import catimg from "../assets/catimg15.jpg"
import yeswecat from "../assets/catimg16.jpg"
import { Link } from 'react-router-dom'
import { Topscroll } from '../middlewares/Topscroll'
import { Helmet } from 'react-helmet'



export function AboutUs() {
  Topscroll();
 

  
  return (
    <div>
    <Helmet title='Purrfect Paws | About' />
      <Nav3/>
     

      <div className="px-4 mx-auto max-w-7xl">
        {/* Hero Map */}
        <div className="flex flex-col pb-5 space-y-8 md:pt-12">
          <div className="p-1 px-3 border rounded-full max-w-max bg-gray-50">
            <p className="text-xs font-semibold leading-normal md:text-sm">About the company</p>
          </div>
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Made with love, right here in India
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
          "Purrfect Paws is dedicated to helping cats find their forever homes. By joining us in our mission, you can make a difference in a feline's life and experience the joy of cat adoption. With your support, we can work towards creating a world where all cats are loved and cared for. Thank you for being a part of the Purrfect Paws community!"
          </p>
        </div>
        <div className="w-full space-y-4">
          <img
            className="h-[200px] w-[1280px] rounded-xl object-cover md:h-[350px]"
            src={catimg}
            alt=""
          />
        </div>
       
       
       
        {/* TEAM */}
        
        {/* Hiring Banner */}
        <div className="flex flex-col items-center py-16 gap-x-4 gap-y-4 md:flex-row">
          <div className="space-y-6">
            <p className="text-sm font-semibold md:text-base">Join our team &rarr;</p>
            <p className="text-3xl font-bold md:text-4xl">We&apos;re just getting started</p>
            <p className="text-base text-gray-600 md:text-lg">
              Our philosophy is simple — hire a team of diverse, passionate people and foster a
              culture that empowers you to do your best work.
            </p>
            <Link to="/signin"
              type="button"
              className="px-3 py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Join Now
            </Link>
          </div>
          <div className="w-full h-auto mt-10 md:mt-o">
            <img
              src={yeswecat}
              alt="Getting Started"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <hr className="mt-6" />
      {/* footer */}
      
      <footer className='py-6 bg-gray-900'>
        <div className='container mx-auto text-center text-gray-400'>
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} Purrfect Paws. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
