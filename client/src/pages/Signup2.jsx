import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import logo from '../assets/log2.png';
import image from '../assets/catimg11.png';
import Lottie from 'lottie-react';
import cat from '../assets/cat2.json';
import hello from '../assets/hello.json';
import AlreadyLoggedIn from './AlreadyLoggedIn';
import checkAuthentication from '../middlewares/checkAuthentication';
import { useNavigate } from 'react-router-dom';

const SignUp2 = () => {

  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false); // State to track user authentication status
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isRegistering, setIsRegistering] = useState(false); // State to track registration status

  useEffect(() => {
    // Check user authentication status
    const isAuthenticated = checkAuthentication();
    setLoggedIn(isAuthenticated);
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();

    setIsRegistering(true); // Set the state to indicate registration is in progress

    try {
      const response = await fetch(`https://purrfect-paws.onrender.com/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          phoneNumber,
        }),
      });

      const data = await response.json();
      console.log(data);
      alert('User Registered Successfully. Please Log in');
      navigate('/signin');
    } catch (error) {
      console.error(error);
      alert('Registration Failed');
    } finally {
      setIsRegistering(false); // Reset the state after registration is completed
    }
  };

  return (
    <>
      <Helmet title="Purrfect Paws | Sign Up" />
      {loggedIn ? (
        <AlreadyLoggedIn /> // Render AlreadyLoggedIn component if user is already logged in
      ) : (
        <div className="flex">
          <div className="w-[770px] h-screen bg-[#f6f6f6]">
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
            <div className="flex items-center">
              <Lottie
                animationData={cat}
                className="md:block w-[180px] h-[180px] hidden ml-[140px]"
              />
              <Lottie animationData={hello} className="md:hidden w-[230px] h-[230px] ml-20" />
            </div>

            <h2 className="mb-4 text-lg font-extrabold text-center font-handwriting2">
              Register Yourself Here!
            </h2>

            <form className="max-w-sm mx-auto" onSubmit={handleSignUp}>
              <div className="mb-4">
                <label
                  className="block mb-2 text-lg font-bold text-gray-700 font-handwriting2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-lg font-bold text-gray-700 font-handwriting2"
                  htmlFor="email"
                >
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
                <label
                  className="block mb-2 text-lg font-bold text-gray-700 font-handwriting2"
                  htmlFor="password"
                >
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
              <div className="mb-4">
                <label
                  className="block mb-2 text-lg font-bold text-gray-700 font-handwriting2"
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                  id="phoneNumber"
                  type="text"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <div className="flex justify-between">
                <button
                  className="px-4 py-2 font-semibold text-sm text-white rounded bg-[#614c68] hover:bg-violet-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={isRegistering} // Disable the button while registering
                >
                  {isRegistering ? 'Registering...' : 'Sign Up'}
                </button>
                <Link
                  to="/"
                  className="px-4 py-2 font-bold text-white rounded bg-[#ef8c65] hover:bg-violet-700 focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Home
                </Link>
              </div>
              <p className="mt-4 text-sm text-center text-gray-600 ">
                Already Registered?{' '}
                <Link to="/signin" className="underline cursor-pointer text-sky-500">
                  Sign In here
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
      )}
    </>
  );
};

export default SignUp2;
