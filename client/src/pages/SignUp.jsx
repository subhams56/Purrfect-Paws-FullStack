

import { Link } from "react-router-dom";
import Catimg1 from "../assets/catimg11.png"
import svgimg from "../assets/svgimg.png"
import logo from '../assets/log2.png';
import { Helmet } from "react-helmet";



const SignUp = () => {
  return (
    <>
    <Helmet title='Purrfect Paws | Sign Up' />
    
    <div className=" flex items-center justify-center h-screen mx-auto bg-[#f6f6f6]">
      
     
      <div className="w-2/5 h-auto px-8 bg-[#f6f6f6] ">
      <div className='flex items-center gap-x-3'>
            <img
              className='w-16 h-16 p-1 border-2 border-black rounded-full border-opacity-20'
              src={logo}
              alt='logo'
            />
            <h1 className='text-4xl font-extrabold text-gray-700 cursor-pointer font-handwriting'>
              Purrfect Paws 🐾
            </h1>
          </div>
      <div className='flex-col pt-5 gap-x-3'>
            <img
              className='mx-auto w-62 h-44 '
              src={svgimg}
              alt='logo'
            />
            
          </div>
       
          <form className="max-w-sm mx-auto">
  <div className="mb-4">
    <label className="block mb-2 text-sm font-bold text-gray-700 md:text-lg font-handwriting2" htmlFor="username">
      Username
    </label>
    <input
      className="w-full px-3 py-2 text-xs leading-tight text-gray-700 border rounded appearance-none md:text-lg focus:outline-none focus:shadow-outline"
      id="username"
      type="text"
      placeholder="Enter your username"
    />
  </div>
  <div className="mb-4">
    <label className="block mb-2 text-lg font-bold text-gray-700 font-handwriting2" htmlFor="email">
      Email
    </label>
    <input
      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
      id="email"
      type="email"
      placeholder="Enter your email"
    />
  </div>
  <div className="mb-4">
    <label className="block mb-2 text-lg font-bold text-gray-700 font-handwriting2" htmlFor="password">
      Password
    </label>
    <input
      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
      id="password"
      type="password"
      placeholder="Enter your password"
    />
  </div>
  <div className="mb-4">
    <label className="block mb-2 text-lg font-bold text-gray-700 font-handwriting2" htmlFor="phone">
      Phone Number
    </label>
    <input
      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
      id="phone"
      type="text"
      placeholder="Enter your phone number"
    />
  </div>
  <div className="flex justify-between">
    <button
      className="px-4 py-2 font-semibold text-sm text-white rounded bg-[#614c68] hover:bg-violet-700 focus:outline-none focus:shadow-outline"
      type="button"
    >
      Register
    </button>
    <Link to='/'
      className="px-4 py-2 font-bold text-white rounded bg-[#ef8c65] hover:bg-violet-700 focus:outline-none focus:shadow-outline"
      type="button"
    >
      Home
    </Link>
  </div>
  <p className="mt-4 text-sm text-center text-gray-600">
    Already registered? <Link to='/signin' className="underline cursor-pointer text-sky-500" >Sign in here</Link>
  </p>
</form>

      </div>


   
      


      <div className= "hidden bg-purple-500 sm:block md:w-4/5 md:h-auto second div">
        <img className="object-cover "src={Catimg1} alt=""/>   
           </div>
    </div>
    </>
  );
};

export default SignUp;
