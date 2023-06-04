
import { useEffect,useState } from 'react'

import axios from 'axios'





const TestData = () => {

    const [catData , setCatData] = useState([])

    useEffect(() => {

        const getCats = async ()=>{
            const cats = await axios.get(`https://purrfect-paws.onrender.com/api/cats/`);
            console.log(cats.data.cats);
            setCatData(cats.data.cats);
        };

        getCats();
        }
          
    
    
    
    , [])
  return (
    <div>
        <h1>Cat Data</h1>
       {catData.map(cat => (
  <div key={cat._id}>
    <h3>{cat.name}</h3>
    <h3>{cat.breed}</h3>
    <h3>{cat.age}</h3>
    <img className='h-[40px] w-[40px]'
      src={`https://purrfect-paws.onrender.com/uploads/${cat.image}`}
      alt={cat.name}
    />
    <h3>{cat.gender}</h3>
    <h2>{cat.adoptionStatus}</h2>
    <p>{cat.description}</p>
    {/* Render other cat properties as needed */}
  </div>
))}

        
       
    </div>
  )
}

export default TestData