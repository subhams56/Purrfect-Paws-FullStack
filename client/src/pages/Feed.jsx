
import { Helmet } from "react-helmet";
import Footer from "../components/Footer"
import Navbar from "../components/Nav2"
import { Topscroll } from "../middlewares/Topscroll";
import Card3 from "../components/Card3";
import catsvg from "../assets/catsvg6.svg"
import Nav2 from "../components/Nav2";
import Lottie from "lottie-react";
import cat from "../assets/cat4.json";








export function Feed() {
 
 Topscroll();
  

  return (
    <div >
       <Helmet title='Purrfect Paws | Feed' />
        <Nav2/>
      

      <div className="px-2 mx-auto mt-12 max-w-7xl">
        <div className="flex flex-col pt-12 pb-10 space-y-8 md:pt-24">
          <p className="text-3xl font-bold text-gray-900 font-handwriting2 md:text-5xl md:leading-10">
            Flurry Feed 🐱
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
          Discover a world of purr-fection in our Flurry Feed section, where you can browse and connect with adorable flurries waiting for their forever homes. Be the loving parent they deserve and create unforgettable memories together.
          </p>
         
          <div className="flex items-center md:ml-[380px] w-full  space-x-2 md:w-1/3">
          
          <Lottie animationData={cat} className=' md:block w-[250px] h-auto hidden ml-[100px]   rounded-full items-center' />
           
          </div>
        </div>
        <h2 className="text-lg text-black font-handwriting2">Latest Additions to our Paw Feed</h2>
        <div className="flex-col justify-between hidden w-full mt-5 space-y-4 md:flex md:flex-row ">
          <div className="flex items-end w-full">
          
             
            
          </div>
        </div>
        {/* posts */}
        <Card3/>
        
        <div className="w-full border-t border-gray-900">
          <div className="flex items-center justify-between mt-2">
            <div className="hidden md:block">
             
            </div>
            <div className="space-x-2">
              <button
                type="button"
                className="px-3 py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="px-3 py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
     
      <Footer className="mt-auto"/>
    </div>
  )
}

export default Feed;
