import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { Card4 } from '../components/Card4';
import { checkAuthentication } from '../middlewares/checkAuthentication'; // Import the checkAuthentication function
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import profilesvg from "../assets/profilesvg.svg"
import { Helmet } from 'react-helmet';
import Nav4 from '../components/Nav4';
import Lottie from "lottie-react";
import cat from "../assets/cat.json"

const Account = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  

  useEffect(() => {
    const isAuthenticated = checkAuthentication();

    if (!isAuthenticated) {
      navigate('/unauthorized');
    } else {

     

      // Retrieve userID from localStorage
      const userID = localStorage.getItem('userID');
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');

      toast.success(`🐱 Welcome Back ${user} `, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

      const headers = {
        Authorization: `token ${token}`,
      };

      // Make GET request to fetch user data
      axios
        .get(`http://localhost:3000/api/users/${userID}`, { headers })
        .then((response) => {
          // Log the response data
          console.log(response.data);

          // Set the user data in state
          setUserData(response.data.userData);

          // Extract username from the response
          // Display welcome message using alert
        })
        .catch((error) => {
          // Log the error
          console.log(error);
        });
    }
  }, [navigate]);

  const logout = () => {
    // Clear localStorage
    localStorage.clear();

    // Display logout message using alert
    alert('Logged out successfully');

    // Redirect to the homepage
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen ">
    <Helmet title="Purrfect Paws | Account" />
      {/* Navbar */}
      <Nav4 />

      {/* Profile section */}
      <section className="px-4 pt-8 pb-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
          <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
            <img  className='w-[240px] h-[140px] ml-[160px]' src={profilesvg} alt='profilesvg'/>
              <h2 className="text-xl font-medium leading-6 text-gray-900"> Account</h2>
              
              <p className="max-w-2xl mt-1 text-sm text-gray-500">View and manage your account details.</p>
            </div>
            <div className="px-4 py-5 border-t border-gray-200 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                {userData && (
                  <>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                      <dt className="ml-4 text-sm font-medium text-gray-500">Username</dt>
                      <dd className="mt-1 text-sm font-semibold text-gray-900 sm:mt-0 sm:col-span-2">{userData.username}</dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                      <dt className="ml-4 text-sm font-medium text-gray-500">Email</dt>
                      <dd className="mt-1 text-sm font-semibold text-gray-900 sm:mt-0 sm:col-span-2">{userData.email}</dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                      <dt className="ml-4 text-sm font-medium text-gray-500">Phone Number</dt>
                      <dd className="mt-1 text-sm font-semibold text-gray-900 sm:mt-0 sm:col-span-2">{userData.phoneNumber}</dd>
                      
                    </div>
                    {/* Display catsOwned as separate cards */}
                    <div className="flex items-center py-4 sm:py-5 sm:gap-4">
                      
                      <dt className="ml-2 text-xl font-medium text-black"> 🐱 Cats Owned By {userData.username} : {userData.catsOwned.length}</dt>
                      <Lottie className="w-[150px] h-[150px]" animationData={cat} />
                    </div>

                    <div className="sm:grid sm:grid-cols-1 sm:gap-4">
                      {userData.catsOwned.map((cat) => (
                        <Card4
                          key={cat._id}
                          id={cat._id}
                          name={cat.name}
                          breed={cat.breed}
                          age={cat.age}
                          gender={cat.gender}
                          description={cat.description}
                          adoptionStatus={cat.adoptionStatus}
                          image={cat.image}
                        />
                      ))}
                    </div>
                  </>
                )}
                {/* Add more profile fields as needed */}
              </dl>
            </div>
          </div>
        </div>
        <div className='items-center mx-auto ml-[210px]'>
        <button onClick={logout} className="p-2 mx-auto mt-2 border border-black rounded-lg bg-sky-200 hover:bg-purple-400">
          Logout
        </button>
        </div>
       
      </section>

      {/* Footer */}
      <Footer className="mt-auto" />
    </div>
  );
};

export default Account;
