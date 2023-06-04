import React from 'react'
import axios from 'axios';
import { ArrowUpRight } from 'lucide-react'
import Lottie from "lottie-react";
import del from  "../assets/delete.json"
import { useNavigate } from 'react-router-dom';


export function Card5(props) {
  const navigate = useNavigate();

  const deleteAdoption = () => {
    const apiUrl = `https://purrfect-paws.onrender.com/api/adopt/deleteAdoption/${props._id}`;

    axios.delete(apiUrl)
      .then(response => {
        console.log(response.data);
        alert('Adoption deleted successfully!');
        navigate('/account');
        
        
      })
      .catch(error => {
        console.log(error);
        alert('Something went wrong. Please try again.');
      });
  };

  return (
    <div className="w-[300px] rounded-md border">
      <img
        src={props.image}
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {props.name} <ArrowUpRight className="h-4 w-4" />
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          {props.description}
        </p>
        <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            breed: {props.breed}
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            age: {props.age}
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            gender: {props.gender}
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            Owner: {props.owner}
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            Owner's Email: {props.email}
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            gender: {props.gender}
          </span>
        </div>
        <div className='flex items-center justify-center'>
        <Lottie animationData={del} className="h-10 w-10 mt-4" />
        <button
          type="button"
          className="mt-4 w-1/2 items-center justify-center rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={deleteAdoption} // Attach the event handler to the delete button
        >
          Delete
        </button>
        </div>
        

      </div>
    </div>
  )
}

export default Card5;
