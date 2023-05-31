import { useState , useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card3 = () => {
  const notify = () => toast("Wow so easy!");
    const [posts , setCatData] = useState([])

    useEffect(() => {
      const getCats = async () => {
        try {
          const cats = await axios.get('http://localhost:3000/api/cats/');
          console.log(cats.data.cats);
          setCatData(cats.data.cats);
          
          // Display toast notification
          toast.success("🐱 Click on the Cat's name to view details", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        } catch (error) {
          console.log(error);
        }
      };
    
      getCats();
    }, []);
    


  return (
    <div className="grid gap-6 py-6 cursor-pointer gap-y-10 md:grid-cols-2 lg:grid-cols-3">
    
   
          {posts.map((post) => (
            <div key={post._id} className="border">
              <Link to={`/cat/${post._id}`}><img src={`http://localhost:3000/uploads/${post.image}`} className="w-full rounded-md aspect-video" alt="" /></Link>
              <div className="p-3 min-h-min">
                
                <Link to={`/cat/${post._id}`} className="flex mt-4 text-xl font-bold text-gray-900 text-bold">{post.name}</Link>
                <div className>
                <p className="w-full mt-4 text-lg leading-normal text-gray-600 cursor-text">Breed :
                   <span className="font-bold text-gray-900 font-handwriting2"> {post.breed}</span> 
                </p>
               
                
                <p className="w-full mt-4 text-sm leading-normal text-gray-600 cursor-text">
                  {post.gender}
                </p>
                </div>
                <div className="flex mt-4 space-x-3 ">
                
                  <div>
                    <p className="text-sm leading-tight text-gray-600">Owner :
                    <span className="text-lg font-extrabold text-gray-900 font-handwriting2"> {post.owner.username}</span>
                      
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
          <ToastContainer
position="top-right"
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
        </div>
  )
}

export default Card3