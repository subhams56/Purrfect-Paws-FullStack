import React from 'react';
import logo from '../assets/log2.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='fixed top-0 w-full z-10'>
      <div className='container mx-auto w-full h-auto bg-white'>
        <nav className='flex justify-between p-4 items-center border-b-gray-400 border-2 rounded-b-lg shadow-xl shadow-gray-400'>
          <div className='flex gap-x-3 items-center'>
            <img
              className='w-16 h-16 border-black border-2 border-opacity-20 p-1 rounded-full'
              src={logo}
              alt='logo'
            />
            <h1 className='text-4xl font-handwriting font-extrabold text-Black cursor-pointer'>
              Purrfect Paws
            </h1>
          </div>

          <div className='NavbarItems'>
            <ul className='hidden md:flex gap-x-9 text-lg font-medium'>
              <li className='cursor-pointer hover:text-xl'>
                <Link to='/about'>About</Link>
              </li>
              <li className='cursor-pointer hover:text-xl'>
                <Link to='/services'>Services</Link>
              </li>
              <li className='cursor-pointer hover:text-xl'>
                <Link to='/pricing'>Pricing</Link>
              </li>
            </ul>
          </div>

          <div className='h-auto items-center text-center'>
            <button className='bg-white text-black hover:bg-sky-300 rounded-xl font-handwriting2 font-bold text-lg border-2 border-black border-opacity-50 p-3'>
              🐈Login
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
