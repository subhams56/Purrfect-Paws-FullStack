
import logo from '../assets/log2.png';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import catpaw from '../assets/catpaw.json';
import add2 from '../assets/dd2.json';
import cat from '../assets/cat2.json';

const Nav4 = () => {
return (
    <div >
         <nav>
        <div className="px-4 mx-auto mt-4 max-w-7xl sm:px-6 lg:px-8">
          {/* Navbar content */}
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 ">
            <div className='flex items-center gap-x-3'>
            <img
              className='w-16 h-16 p-1 border-2 border-black rounded-full border-opacity-20'
              src={logo}
              alt='logo'
            />
            <h1 className='text-4xl font-extrabold text-gray-900 cursor-pointer font-handwriting'>
              Purrfect Paws
            </h1>
            
            <Lottie animationData={catpaw} className='w-[60px] h-[60px]  rounded-full' />
          </div>
            </div>
            {/* Navigation links */}
            <div className="flex items-center gap-x-10 ">
            <div className='flex items-center justify-center'>  <Lottie animationData={add2} className='w-[30px] h-[30px]  rounded-full' />
            <Link to="/addcat" className="px-3 py-2 text-lg font-medium text-gray-900 rounded-md hover:text-black hover:text-xl">
                Add a Cat 
              </Link    ></div>
           
              <Link to="/" className="px-3 py-2 text-lg font-medium text-gray-900 rounded-md hover:text-black hover:text-xl">
                Home 
              </Link    >
              <div className='flex items-center justify-center'>
              <Link  to="/feed"className="px-3 py-2 text-lg font-medium text-gray-900 rounded-md hover:text-black hover:text-xl">
                Adopt a Cat
              </Link    >
              <Lottie animationData={cat} className=' w-[90px] h-[90px]  rounded-full' />
              </div>
              
             
             
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav4