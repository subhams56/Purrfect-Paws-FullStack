import { ArrowUpRight } from 'lucide-react'
import catsvg from  "../assets/catsvg3.svg"
import Lottie from "lottie-react"
import green from "../assets/green.json"


export function Card4(props) {
  return (
    <div className="flex flex-col items-center max-w-2xl border rounded-md md:flex-row">
      <div className="h-full w-full md:h-[200px] md:w-[300px]">
      <img src={`http://localhost:3000/uploads/${props.image}`}
          alt="Laptop"
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {props.name} <ArrowUpRight className="w-4 h-4 ml-2" />
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            {props.description}
          </p>
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
            <img
              className="inline-block w-8 h-8 rounded-full"
              src={catsvg}
              alt="Dan_Abromov"
            />
            <span className="flex flex-col">
               <div className='flex items-center gap-x-1'>
               <span className="text-[10px] font-medium text-gray-900">Adoption Status</span>
               <Lottie className="mx-auto w-[12px] h-[12px]"  animationData={green} alt="logo" />
               </div>
              
              <span className="text-[8px] font-bold text-green-400">{props.adoptionStatus}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
