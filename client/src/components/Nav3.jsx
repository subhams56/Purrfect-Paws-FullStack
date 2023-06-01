
import logo from '../assets/log2.png';
import { Link } from 'react-router-dom';

const Nav3 = () => {


  
    

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
          </div>
            </div>
            {/* Navigation links */}
            <div className="flex items-center ">
              <Link to="/" className="px-3 py-2 text-lg font-medium text-gray-900 rounded-md hover:text-black hover:text-xl">
                Home
              </Link    >
              <Link  to="/feed"className="px-3 py-2 text-lg font-medium text-gray-900 rounded-md hover:text-black hover:text-xl">
                Feed
              </Link    >
              <Link to="/signup" className="px-3 py-2 text-lg font-medium text-gray-900 rounded-md hover:text-black hover:text-xl">
                Register
              </Link    >
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav3