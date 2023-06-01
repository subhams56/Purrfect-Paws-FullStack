
import logo from '../assets/log2.png';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import catpaw from "../assets/catpaw.json";


const Nav2 = () => {
  return (
    <div className='fixed top-0 z-10 w-full'>
      <div className='container w-full h-auto mx-auto bg-white'>
        <nav className='flex items-center justify-between p-4 border-2 rounded-b-lg '>
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

          <div className='hidden NavbarItems'>
            <ul className='hidden text-lg font-medium md:flex gap-x-9'>
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

          <div className='items-center h-auto text-center'>
            <Link to='/' className='p-3 mx-4 text-lg font-bold text-black bg-white border-2 border-black border-opacity-50 hover:bg-sky-300 rounded-xl font-handwriting2'>
            🐾Home
            </Link>
            <Link to='/account' className='p-3 text-lg font-bold text-black bg-white border-2 border-black border-opacity-50 hover:bg-sky-300 rounded-xl font-handwriting2'>
            👤Account
            </Link>
            
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav2;
