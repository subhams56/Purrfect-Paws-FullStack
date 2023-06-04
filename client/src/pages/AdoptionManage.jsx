import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card5 from '../components/Card5';
import Nav4 from '../components/Nav4';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'
import Lottie from "lottie-react";
import loading from "../assets/loading.json"

const AdoptionManage = () => {
  const [adoptions, setAdoptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem('userID');
    const apiUrl = `https://purrfect-paws.onrender.com/api/adopt/getAdoptionsByInterestedUser/${userId}`;

    axios
      .get(apiUrl)
      .then(response => {
        console.log(response.data);
        setAdoptions(response.data.adoptions);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });

  }, []);

  return (
    <>
      <Helmet title='Purrfect Paws | Adoption' />
      <div className='container mx-auto flex flex-col min-h-screen'>

        <Nav4 />
        <Link to="/account" className='mx-auto mt-10 '> <button
          type="button"
          className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Account
        </button></Link>
        {isLoading ? (
          <p className="text-center mt-8">Loading info... <Lottie animationData={loading} className=" w-36 h-auto mx-auto" /></p>
        ) : (
          <div className='flex flex-wrap justify-center m-4 p-2 gap-6 mt-[100px]'>
            {adoptions.map(adoption => (
              <div key={adoption._id} className="card">
                <Card5
                  _id={adoption._id} // Pass the _id as a prop
                  name={adoption.cat.name}
                  breed={adoption.cat.breed}
                  description={adoption.cat.description}
                  age={adoption.cat.age}
                  gender={adoption.cat.gender}
                  owner={adoption.owner.username}
                  email={adoption.owner.email}
                  image={`https://purrfect-paws.onrender.com/uploads/${adoption.cat.image}`}
                />
              </div>
            ))}
          </div>
        )}
        <div className=' hidden md:block h-[90px] w-auto '></div>
        <Footer />
      </div>
    </>
  );
};

export default AdoptionManage;
