import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Nav3 from './Nav3';
import { Topscroll } from '../middlewares/Topscroll';


const CatPage = () => {

  Topscroll();
  const { id } = useParams();
  const [catData, setCatData] = useState(null);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/cats/${id}`);
        setCatData(response.data.cat);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCatData();
  }, []);

  return (
    <>
    <Nav3/>
    
    <div className="flex items-center justify-center h-screen ">
   
      {catData ? (
        <div className="w-full max-w-md p-6 mt-8 bg-white rounded-md shadow-md ">
          <img
            src={`http://localhost:3000/uploads/${catData.image}`}
            className="w-auto mx-auto rounded-md h-72"
            alt=""
          />
          <h1 className="mt-4 text-2xl font-bold">{catData.name}</h1>
          <p className="mt-2 text-gray-600">
            Breed: {catData.breed}
          </p>
          <p className="mt-2 text-gray-600">
            Age: {catData.age}
          </p>
          <p className="mt-2 text-gray-600">
            Gender: {catData.gender}
          </p>
          <p className="mt-2 text-gray-600">
            Description: {catData.description}
          </p>
          <p className="mt-2 text-gray-600">
            Adoption Status: {catData.adoptionStatus}
          </p>
          <h2 className="mt-4 text-lg font-bold">Owner:</h2>
          <p className="mt-2 text-gray-600">
            Name: {catData.owner.username}
          </p>
          <p className="mt-2 text-gray-600">
            Email: {catData.owner.email}
          </p>
        </div>
      ) : (
        <p className="text-xl text-center">Loading .... please wait</p>
      )}
    </div>
    </>
  );
};

export default CatPage;
