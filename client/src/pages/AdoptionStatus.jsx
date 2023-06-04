import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Nav4 from '../components/Nav4';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Banner from '../components/Banner';
import Lottie from "lottie-react";
import loading from "../assets/loading.json"

const AdoptionStatus = ({ match }) => {
  const { catId } = useParams();
  const [adoptions, setAdoptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAdoptions = async () => {
      try {
        const response = await axios.get(
          `https://purrfect-paws.onrender.com/api/adopt/getAdoptionsByCatId/${catId}`
        );
        setAdoptions(response.data.adoptions);
        setIsLoading(false);
        console.log(response.data.adoptions);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchAdoptions();
  }, [catId]);


  return (
    <>
      <Nav4 />

      <section className="mx-auto w-full max-w-7xl px-4 py-4 mt-[120px]">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className='flex gap-x-11 items-center justify-between space-x-7'>
            <h2 className="text-lg font-semibold">Adoption Status</h2>
            <Link to="/account" className='mx-auto mt-10 '> <button
              type="button"
              className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Account
            </button></Link>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                {isLoading ? (
                  <p className="p-4 text-gray-900 text-center mx-auto">
                    Loading Adoption status... Please wait. 
                    <Lottie animationData={loading} className=' mx-auto w-36 h-auto' />
                  </p>
                ) : (
                  <>
                    {adoptions.length === 0 ? (
                      <p className="p-4 text-gray-500">
                        Currently, there are no adoption requests for your cat.
                      </p>
                    ) : (
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr className="divide-x divide-gray-200">
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                            >
                              Cat Name
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                            >
                              Image
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                            >
                              Interested User
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                            >
                              Email
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                            >
                              Phone Number
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                            >
                              Adoption Status
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                            >
                              Remove Adoption Request
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {adoptions.map((adoption) => (
                            <tr key={adoption._id} className="divide-x divide-gray-200">
                              <td className="whitespace-nowrap px-4 py-4">
                                {adoption.cat.name}
                              </td>
                              <td className="whitespace-nowrap px-4 py-4">
                                <img
                                  className="h-10 w-10 rounded-full object-cover"
                                  src={`https://purrfect-paws.onrender.com/uploads/${adoption.cat.image}`}
                                  alt="catimg"
                                />
                              </td>
                              <td className="whitespace-nowrap px-4 py-4">
                                {adoption.interestedUser.username}
                              </td>
                              <td className="whitespace-nowrap px-4 py-4">
                                {adoption.interestedUser.email}
                              </td>
                              <td className="whitespace-nowrap px-4 py-4">
                                {adoption.interestedUser.phoneNumber}
                              </td>
                              <td className="whitespace-nowrap px-4 py-4">
                                {adoption.cat.adoptionStatus}
                              </td>
                              <td>
                                <button
                                  className='bg-red-500 hover:bg-red-700 ml-[60px] text-white font-bold py-2 px-4 rounded'
                                  onClick={async () => {
                                    try {
                                      setIsLoading(true);
                                      const response = await axios.delete(
                                        `https://purrfect-paws.onrender.com/api/adopt/deleteAdoption/${adoption._id}`
                                      );
                                      console.log(response);
                                      alert('Adoption request deleted.');
                                      
                                      window.location.reload();
                                    } catch (error) {
                                      console.error(error);
                                      alert('Error: Something went wrong. Please try again.');
                                    } finally {
                                      setIsLoading(false);
                                    }
                                  }}
                                  disabled={isLoading}
                                >
                                  {isLoading ? "Removing..." : "Remove"}
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Banner message="You can contact the Interested User and update the Adoption Status, or remove the adoption request in case not interested" />
    </>
  );
};

export default AdoptionStatus;
