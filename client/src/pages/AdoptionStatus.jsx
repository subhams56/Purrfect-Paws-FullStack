import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Nav4 from '../components/Nav4';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Banner from '../components/Banner';

const AdoptionStatus = ({ match }) => {
  const { catId } = useParams();
  const [adoptions, setAdoptions] = useState([]);

  useEffect(() => {
    const fetchAdoptions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/adopt/getAdoptionsByCatId/${catId}`
        );
        setAdoptions(response.data.adoptions);
      } catch (error) {
        console.error(error);
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
                            src={`http://localhost:3000/uploads/${adoption.cat.image}`}
                            alt=""
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Banner/>
     
    </>
  );
};

export default AdoptionStatus;
