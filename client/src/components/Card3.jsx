import { useState , useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const Card3 = () => {
    const [posts , setCatData] = useState([])

    useEffect(() => {

        const getCats = async ()=>{
            const cats = await axios.get('http://localhost:3000/api/cats/');
            console.log(cats.data.cats);
            setCatData(cats.data.cats);
        };

        getCats();
        }
          
    
    
    
    , [])


  return (
    <div className="grid gap-6 py-6 cursor-pointer gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post._id} className="border">
              <img src={`http://localhost:3000/uploads/${post.image}`} className="w-full rounded-md aspect-video" alt="" />
              <div className="p-3 min-h-min">
                
                <Link to={`/cat/${post._id}`} className="flex mt-4 text-base font-semibold text-gray-900">{post.name}</Link>
                <div className="flex">
                <p className="w-full mt-4 text-sm leading-normal text-gray-600 cursor-text">Breed :
                  {post.breed}
                </p>
                <p className="w-full mt-4 text-sm leading-normal text-gray-600 cursor-text"> About :
                  {post.description}
                </p>
                <p className="w-full mt-4 text-sm leading-normal text-gray-600 cursor-text">Age :
                  {post.age}
                </p>
                <p className="w-full mt-4 text-sm leading-normal text-gray-600 cursor-text">Gender :
                  {post.gender}
                </p>
                </div>
                <div className="flex mt-4 space-x-3 ">
                
                  <div>
                    <p className="text-sm font-semibold leading-tight text-gray-900">Owner :
                      {post.owner.username}
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
  )
}

export default Card3