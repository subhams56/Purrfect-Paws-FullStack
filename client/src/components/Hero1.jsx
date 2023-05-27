
import { Link } from "react-router-dom"
import Catimg from "../assets/catimg8.png"

const Hero1 = () => {
  return (
    <div className='container mx-auto md:flex justify-center md:items-center  mt-40 bg-[#e9ecf0]'>
    <div className='m-4 text-center'>
    <p className=' font-bold text-[#081b15] text-2xl p-2'>Find Your Purrfect Companion at Purrfect Paws 🐾 </p>
    <p className=' md:text-3xl sm:text-2xl text-lg font-bold text-[#000000c6]'>Adoption Process made Easy </p>

     <h1 className='text-[#1b1d21] font-handwriting2 md:text-2xl sm:text-xl text-sm font-bold md:py-6 p-2'>Adopt a cat, love them unconditionally, and give them the care they deserve. At Purrfect Paws, we help you find your purrfect companion for a lifetime of happiness...</h1>
       
    <Link to='/signup' className=' w-[250px] rounded-xl font-medium my-6 mx-auto py-3   hover:bg-white hover:text-black hover:ease-in-out duration-500 '>
      <h1 className="text-lg font-semibold text-black bg-white border-2 border-black border-opacity-50 hover:bg-[#00df9a] font-handwriting2 w-[140px] mx-auto pt-[5px] text-center rounded-lg h-[40px]">Get Started</h1>
      </Link>
       
    </div>
   
    <div className='hidden md:block' >
      <img className=" md:h-[450px] md:w-[620px]" src={Catimg} alt="cat" />
    </div>
      
    </div>
  )
}

export default Hero1