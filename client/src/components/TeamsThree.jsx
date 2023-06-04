import React from 'react'
import cat1 from "../assets/cat1.jpg"
import cat2 from "../assets/cat2.jpg"
import cat3 from "../assets/cat3.jpg"
import cat4 from "../assets/cat4.jpg"
import Card from './Card'
import { Link } from 'react-router-dom'



export function TeamsThree() {
  return (
    <div className="px-2 mx-auto max-w-7xl lg:px-0 ">
      <div className="max-w-3xl mx-auto md:text-center ">
        <h2 className="text-3xl font-bold leading-tight text-center text-black sm:text-4xl lg:text-5xl lg:leading-tight">
          Beautiful Flurries Waiting for you..
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-center text-gray-600 md:text-xl">
        "Discover our enchanting flurries, eagerly awaiting your love. These beautiful cats are ready to fill your home with joy and playfulness. Find your perfect companion today and experience the magic they bring to your life."
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 mt-8 mb-8 md:grid-cols-2 lg:grid-cols-4">
      <Card img={cat2} name={'Mr.Morgan'} breed={"White Siamese"} desc={"majestic and friendly maine coon with a tufted tail"}/>
      <Card img={cat1} name={'Missy'} breed={"Calico"} desc={"charming calico cat with a unique coat pattern of orange, black, and white"}/>
      <Card img={cat3} name={'Oscar'} breed={"Scottish fold"} desc={"adorable scottish fold cat with folded ears and a playful disposition"}/>
      <Card img={cat4} name={'Luna'} breed={"Ragdoll"} desc={"gentle and affectionate ragdoll cat with striking blue eyes"}/>
    </div>
    <div className='flex justify-start mb-8'>
    <Link to='/feed' className='p-3 mx-auto text-lg font-bold text-black bg-white border-2 border-black border-opacity-50 hover:bg-sky-300 rounded-xl font-handwriting2'>
              🐈Discover More
            </Link>
            <Link to='/faq' className='p-3 mx-auto text-lg font-bold text-black bg-white border-2 border-black border-opacity-50 hover:bg-sky-300 rounded-xl font-handwriting2'>
              🐈Need Help?
            </Link>
            </div>
    </div>
  )
}
