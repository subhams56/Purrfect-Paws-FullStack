
import logo from '../assets/log2.png';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import catpaw from '../assets/catpaw.json';
import arrow from '../assets/arrow.json';

const Navbar = () => {
  return (
    <div className='fixed top-0 z-10 w-full'>
      <div className='container w-full h-auto mx-auto bg-white'>
        <nav className='flex items-center justify-between p-4 border-2 rounded-b-lg shadow-xl border-b-gray-400 shadow-gray-400'>
          <div className='flex items-center gap-x-2'>
            <img
              className='w-16 h-16 p-1 border-2 border-black rounded-full border-opacity-20'
              src={logo}
              alt='logo'
            />
            <h1 className='text-4xl font-extrabold cursor-pointer font-handwriting text-Black'>
              Purrfect Paws
            </h1>
            <Lottie animationData={catpaw} className='w-[60px] h-[60px]  rounded-full' />
          </div>

          <div className='NavbarItems'>
            <ul className='hidden text-lg font-medium md:flex gap-x-9'>
            <li className='cursor-pointer hover:text-xl'>
                <Link to='/feed'>Discover Paws</Link>
              </li>
              <li className='cursor-pointer hover:text-xl'>
                <Link to='/aboutus'>About</Link>
              </li>
              <li className='cursor-pointer hover:text-xl'>
                <Link to='/services'>Services</Link>
              </li>
              <li className='cursor-pointer hover:text-xl'>
              <div className='flex '>
              <Link to='/faq'>FAQs</Link>
              <Lottie animationData={arrow} className='w-[30px] h-[30px]  rounded-full' />
              </div>
                
              </li>
            </ul>
          </div>

          <div className='items-center h-auto text-center'>
            <Link to='/signin' className='p-3 text-lg font-bold text-black bg-white border-2 border-black border-opacity-50 hover:bg-sky-300 rounded-xl font-handwriting2'>
              🐈Login
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
