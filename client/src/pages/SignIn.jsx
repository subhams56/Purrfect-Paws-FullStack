import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import logo from '../assets/log2.png';
import image from '../assets/catimg14.jpg';
import Lottie from "lottie-react";
import user from "../assets/user.json";
import login from "../assets/login.json";


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true); // Set loading state to true
      const response = await axios.post(`https://purrfect-paws.onrender.com/api/auth/login`, {
        email,
        password,
      });

      console.log(response.data);
      const { userData ,token  } = response.data;
      localStorage.setItem('userID', userData._id);
      localStorage.setItem('token', token);
      localStorage.setItem('user', userData.username);
      
      setIsLoading(false); // Set loading state to false
      navigate('/account');
    } catch (error) {
      
      console.log(error.response.data);

      alert(`${error.response.data.msg}`);
      setIsLoading(false); // Set loading state to false
    }
  };

  return (
    <>
      <Helmet title="Purrfect Paws | Sign In" />
      <div className="flex">
        <div className="w-[770px] h-screen bg-white">
          <div className="flex items-center mt-6 ml-7 gap-x-3">
            <img
              className="w-16 h-16 p-1 border-2 border-black rounded-full border-opacity-20"
              src={logo}
              alt="logo"
            />
            <h1 className="text-4xl font-extrabold text-gray-700 cursor-pointer font-handwriting">
              Purrfect Paws 🐾
            </h1>
          </div>
          <div className="flex-col mt-4 gap-x-3">
            <Lottie className="mx-auto w-42 h-52"  animationData={user} alt="logo" />
            <Lottie className="w-24 h-16 mx-auto"  animationData={login} alt="logo" />
          </div>

          <form className="max-w-sm mx-auto" onSubmit={handleSignIn}>
            <div className="mb-4">
              <label className="block mb-2 text-lg font-bold text-gray-700 font-handwriting2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-between">
              <button
                className="px-4 py-2 font-semibold text-sm text-white rounded bg-[#614c68] hover:bg-violet-700 focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isLoading} // Disable the button while loading
              >
                {isLoading ? '⌛ Logging in...' : 'Log In'} {/* Display 'Loading...' while loading */}
              </button>
              <Link
                to="/"
                className="px-4 py-2 font-bold text-white rounded bg-[#ef8c65] hover:bg-violet-700 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Home
              </Link>
            </div>
            <p className="mt-4 text-sm text-center text-gray-600">
              Not registered?{' '}
              <Link to="/signup" className="underline cursor-pointer text-sky-500">
                Sign Up here
              </Link>
            </p>
          </form>
        </div>

        <div
          className="hidden w-full h-screen bg-center bg-cover md:block"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right',
          }}
        ></div>
      </div>
    </>
  );
};

export default SignIn;
