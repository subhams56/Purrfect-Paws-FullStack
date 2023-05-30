import React from 'react'
import { Link } from 'react-router-dom'

export function Cta() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl  text-center">
          <div className="isolate flex justify-center -space-x-2">
            <img
              className="relative z-30 inline-block h-20 w-20 rounded-full ring-4 ring-white"
              src="https://images.pexels.com/photos/7128287/pexels-photo-7128287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Dan_Abromov"
            />
            <img
              className="relative z-20 inline-block h-20 w-20 rounded-full ring-4 ring-white"
              src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Guillermo_Rauch"
            />
            <img
              className="relative z-10 inline-block h-20 w-20 rounded-full ring-4 ring-white"
              src="https://images.pexels.com/photos/9271168/pexels-photo-9271168.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Lee_Robinson"
            />
            <img
              className="relative z-0 inline-block h-20 w-20 rounded-full ring-4 ring-white"
              src="https://images.pexels.com/photos/8498533/pexels-photo-8498533.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Delba"
            />
          </div>

          <h2 className="mt-8 text-3xl font-bold leading-tight text-black sm:text-4xl lg:mt-12 lg:text-5xl">
          Join 300+ other cat enthusiasts who have welcomed feline friends into their homes!
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-handwriting2 text-gray-500 md:mt-10 lg:text-xl">
          "Imagine the wagging tails, purrs, and playful antics that will fill your days. Our dedicated team will guide you through the adoption process, helping you find the perfect four-legged friend who will bring endless happiness."
          </p>

          <Link to="/signup"
            type="button"
            className="mt-8 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Get Access Now
          </Link>
        </div>
      </div>
    </section>
  )
}
