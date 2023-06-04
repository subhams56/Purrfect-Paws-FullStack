import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import catsvg from '../assets/catsvg3.svg';
import Lottie from 'lottie-react';
import green from '../assets/green.json';
import { useNavigate } from 'react-router-dom';
export function Card4(props) {
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteCat = async () => {
    setIsDeleting(true); // Set the loading state to true when the delete button is clicked

    try {
      const response = await axios.delete(`https://purrfect-paws.onrender.com/api/cats/deleteCat/${props.id}`);
      console.log(response);
      alert('Cat deleted successfully.');
      navigate('/feed');
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsDeleting(false); // Set the loading state back to false when the server reply is received
    }
  };

  return (
    <div className="flex flex-col items-center w-full border rounded-md md:flex-row">
      <div className="h-full w-full md:h-[200px] md:w-[300px]">
        <img
          src={`https://purrfect-paws.onrender.com/uploads/${props.image}`}
          alt="catimg"
          className="object-cover aspect-square w-full h-auto mt-8 mx-2 rounded-md"
        />
      </div>
      <div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold gap-x-6">{props.name}</h1>
          <p className="mt-3 text-sm text-gray-600">{props.description}</p>
          <div className="mt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              age: {props.age}
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              gender : {props.gender}
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              breed: {props.breed}
            </span>
          </div>
          <div className="flex items-center mt-3 space-x-2">
            <img className="inline-block w-8 h-8 rounded-full" src={catsvg} alt="Dan_Abromov" />
            <button
              className="items-center p-2 text-xs text-center bg-red-400 rounded-lg"
              onClick={deleteCat}
              disabled={isDeleting} // Disable the delete button when deleting
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
            <span className="flex flex-col">
              <div className="flex items-center gap-x-1">
                <Link to={`/adoptionStatus/${props.id}`} className="m-2 border border-black hover:bg-purple-200 rounded-md">
                  <span className="p-2 text-[12px] font-medium text-gray-900">Adoption Status</span>
                </Link>
                <Lottie className="mx-auto w-[12px] h-[12px]" animationData={green} alt="logo" />
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card4;
