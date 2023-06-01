import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Nav3 from './Nav3';
import { Topscroll } from '../middlewares/Topscroll';
import Footer from './Footer';
import { ArrowRight } from 'lucide-react';
import { checkAuthentication } from '../middlewares/checkAuthentication';
import { useNavigate } from 'react-router-dom';

const CatPage = () => {
  const navigate = useNavigate();
  Topscroll();
  const { id } = useParams();
  const [catData, setCatData] = useState(null);

  const adopt = async () => {
    const isAuthenticated = checkAuthentication(); // Check if user is authenticated

    if (isAuthenticated) {
      const catId = catData._id;
      const interestedUserId = localStorage.getItem('userID');
      const ownerId = catData.owner._id;

      try {
        const response = await axios.post('http://localhost:3000/api/adopt/createAdoption', {
          catId,
          interestedUserId,
          ownerId,
        });

        console.log(response);
        alert('Adoption request added!');
      } catch (error) {
        console.log(error);
        alert('Something went wrong.');
      }
    } else {
      alert('Please log in first to adopt.');
      navigate('/unauthorized');
    }
  };

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/cats/${id}`);
        setCatData(response.data.cat);
        console.log(response.data.cat);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCatData();
  }, []);

  return (
    <>
      <Nav3 />
      <div className="flex items-center justify-center h-screen ">
        {catData ? (
          <div className="w-full max-w-md p-6 mt-8 bg-white rounded-md shadow-md ">
            <img
              src={`http://localhost:3000/uploads/${catData.image}`}
              className="w-auto mx-auto rounded-md h-72"
              alt=""
            />
            <h1 className="mt-4 text-2xl font-bold">{catData.name}</h1>
            <p className="mt-2 text-gray-600">Breed: {catData.breed}</p>
            <p className="mt-2 text-gray-600">Age: {catData.age}</p>
            <p className="mt-2 text-gray-600">Gender: {catData.gender}</p>
            <p className="mt-2 text-gray-600">Description: {catData.description}</p>
            <p className="mt-2 text-gray-600">Adoption Status: {catData.adoptionStatus}</p>
            <h2 className="mt-4 text-lg font-bold">Owner:</h2>
            <p className="mt-2 text-gray-600">Name: {catData.owner.username}</p>
            <p className="mt-2 text-gray-600">Email: {catData.owner.email}</p>
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 mt-4 text-sm font-semibold text-white bg-black rounded-md hover:bg-black/80"
              onClick={adopt}
            >
              Adopt!
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        ) : (
          <p className="text-xl text-center">Loading .... please wait</p>
        )}
      </div>
      <Footer className="" />
    </>
  );
};

export default CatPage;
