import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import add from '../assets/add.json';
import NavbarLoggedIn from '../components/NavbarLoggedIn';

const AddCat = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [uploading, setUploading] = useState(false); // New state variable

  const handleImageChange = (e) => {
    e.preventDefault();
    const selectedImage = e.target.files[0];
    setPreviewImage(URL.createObjectURL(selectedImage));
    setImage(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const owner = localStorage.getItem('userID');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('breed', breed);
    formData.append('age', age);
    formData.append('gender', gender);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('owner', owner);

    try {
      setUploading(true); // Set uploading state to true before making the API request
      const response = await axios.post(
        'https://purrfect-paws.onrender.com/api/cats/createCat',
        formData
      );
      console.log(response.data);
      alert('Cat added successfully');
      navigate('/account');
    } catch (error) {
      console.error(error);
      alert('Something went wrong');
    } finally {
      setUploading(false); // Reset uploading state after the server response
    }
  };

  return (
    <>
      <NavbarLoggedIn />
      <div className="flex items-center justify-center px-4 sm:px-6 sm:py-16 lg:px-8 lg:py-[130px]">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="flex justify-center mb-2">
            <Lottie animationData={add} className="w-24 h-24" />
          </div>
          <h2 className="text-2xl font-bold leading-tight text-center text-black">Add a new cat</h2>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
            <div>
              <label htmlFor="name" className="text-base font-medium text-gray-900">
                Cat Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder-text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Enter the cat's name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="description" className="text-base font-medium text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  className="flex w-full h-20 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder-text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter a description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="breed" className="text-base font-medium text-gray-900">
                Breed
              </label>
              <div className="mt-2">
                <input
                  id="breed"
                  className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder-text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Enter the cat's breed"
                  value={breed}
                  onChange={(e) => setBreed(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="age" className="text-base font-medium text-gray-900">
                Age
              </label>
              <div className="mt-2">
                <input
                  id="age"
                  className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder-text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="number"
                  min="0"
                  placeholder="Enter the cat's age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              
            </div>
            <div>
              <label htmlFor="breed" className="text-base font-medium text-gray-900">
                Gender
              </label>
              <div className="mt-2">
                <input
                  id="breed"
                  className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder-text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Enter the cat's Gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="image" className="text-base font-medium text-gray-900">
                Image
              </label>
              <div className="mt-2">
                <input
                  id="image"
                  className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder-text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="object-cover w-[200px] h-auto mx-auto mt-2 rounded-full"
                />
              )}
            </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  disabled={uploading} // Disable the button while uploading
                >
                  {uploading ? 'Uploading...' : 'Add Cat'} {/* Show 'Uploading...' or 'Add Cat' based on the uploading state */}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCat;
