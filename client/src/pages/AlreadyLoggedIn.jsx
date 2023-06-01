
import {  ArrowLeft } from 'lucide-react'
import Nav3 from '../components/Nav3'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Lottie from 'lottie-react';
import catloader from '../assets/catloader.json';



export function AlreadyLoggedIn() {

    const navigate = useNavigate();
    const logout = () => {
        // Clear localStorage
        localStorage.clear();
    
        // Display logout message using alert
        alert('Logged out successfully');
    
        // Redirect to the homepage
        navigate('/');
      };
 


  return (
    
    <div className="w-full px-2 mx-auto max-w-7xl md:px-4">
         <Helmet title='Purrfect Paws | Oops' />
      <Nav3/>
      <div className="flex items-center justify-center px-2 my-12 md:my-24 md:px-0">
        <div className="lg:flex lg:items-center lg:space-x-10">
          <Lottie
            animationData={catloader}
            className="w-96 h-96"
            
          
          />
          <div>
            <p className="mt-6 text-sm font-semibold text-black">404 error</p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
              You are Already Logged In ! 
            </h1>
            <p className="mt-4 text-gray-500">
              Go to your account page or log out.
            </p>
            <div className="flex items-center mt-6 space-x-3">
              <Link
                to="/account"
                className="inline-flex items-center px-3 py-2 text-sm font-semibold text-black border border-black rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <ArrowLeft size={16} className="mr-2" />
                Go to Account
              </Link>
              <button
               onClick={logout}
                className="px-3 py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* footer */}
      <div className="flex justify-center mx-auto max-w-7xl">
        <footer className="px-4 py-10">
          <p className="text-base font-semibold text-gray-700">© 2023 Purrfect Paws</p>
        </footer>
      </div>
    </div>
  )
}


export default AlreadyLoggedIn;