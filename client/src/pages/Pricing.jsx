import { CheckCircle } from 'lucide-react'
import Footer from '../components/Footer'
import Nav3 from '../components/Nav3'
import { Topscroll } from '../middlewares/Topscroll'


export function Pricing() {

   Topscroll() ;
  return (
    <div className="mx-auto max-w-7xl">
        <Nav3/>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
        <div className="px-4 py-10 lg:col-span-5 lg:px-0">
          <span className="inline-block p-1 px-3 mb-8 text-xs font-semibold border rounded-full">
          Find the Perfect Plan for Your Feline Friend
          </span>
          <h1 className="text-3xl font-bold md:text-5xl">
          Choose the Perfect Plan
          </h1>
          <p className="mt-8 font-extrabold font-handwriting2 ">
          At Purrfect Paws, we offer flexible subscription plans to cater to your specific needs. Whether you're a new pet owner or an experienced cat lover, we have a plan that will provide the purrfect experience for you and your furry friend. Select a plan below and start your journey with us today!
          </p>
        
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row lg:col-span-7">
          <div className="w-full mb-[72px] p-25 md:w-1/2">
            <div className="bg-white border rounded-md bg-opacity-90">
              <div className="border-b ">
                <div className="px-9 py-7">
                  <h3 className="text-xl font-bold leading-snug text-gray-900 ">Standard</h3>
     
</div>
</div>
<div className="pt-8 px-9 pb-9">
<p className="mb-6 font-medium leading-relaxed text-gray-600">Features included:</p>
<ul className="mb-11">
  <li className="flex items-center mb-4">
    <CheckCircle className="mr-2" size={16} />
    <p className="font-semibold leading-normal">Access to Adoption Profiles</p>
  </li>
  <li className="flex items-center mb-4">
    <CheckCircle className="mr-2" size={16} />
    <p className="font-semibold leading-normal">Priority Support for Adoption Inquiries</p>
  </li>
  <li className="flex items-center mb-4">
    <CheckCircle className="mr-2" size={16} />
    <p className="font-semibold leading-normal">Virtual Meet & Greet with Cats</p>
  </li>
  <li className="flex items-center mb-4">
    <CheckCircle className="mr-2" size={16} />
    <p className="font-semibold leading-normal">Exclusive Discounts on Cat Supplies</p>
  </li>
  <li className="flex items-center">
    <CheckCircle className="mr-2" size={16} />
    <p className="font-semibold leading-normal">Monthly Newsletter with Cat Care Tips</p>
  </li>
</ul>
<p className="mb-6 text-lg font-semibold leading-normal text-gray-600">
  <span>Starting from</span>
  <span className="ml-2 text-gray-900">₹499/mo</span>
</p>
<div className="md:inline-block">
  <button
    type="button"
    className="px-3 py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    Start your free trial
  </button>
</div>
</div>

            </div>
          </div>
          <div className="w-full p-5 md:w-1/2">
            <div className="bg-white border rounded-md bg-opacity-90">
              <div className="border-b ">
                <div className="px-9 py-7">
                  <h3 className="text-xl font-bold leading-snug text-gray-900 ">Premium</h3>
    
</div>
</div>
<div className="pt-8 px-9 pb-9">
<p className="mb-6 font-medium leading-relaxed text-gray-600">Features included:</p>
<ul className="mb-11">
  <li className="flex items-center mb-4">
    <CheckCircle className="mr-2" size={16} />
    <p className="font-semibold leading-normal">Access to Exclusive Cat Adoption Events</p>
  </li>
  <li className="flex items-center mb-4">
    <CheckCircle className="mr-2" size={16} />
    <p className="font-semibold leading-normal">Personalized Adoption Assistance</p>
  </li>
  <li className="flex items-center mb-4">
    <CheckCircle className="mr-2" size={16} />
    <p className="font-semibold leading-normal">Free Veterinary Consultations for Your New Cat</p>
  </li>
  <li className="flex items-center mb-4">
    <CheckCircle className="mr-2" size={16} />
    <p className="font-semibold leading-normal">Quarterly Cat Care Workshops and Webinars</p>
  </li>
  <li className="flex items-center">
    <CheckCircle className="mr-2" size={16} />
    <p className="font-semibold leading-normal">Priority Access to Special Cat Supplies</p>
  </li>
</ul>
<p className="mb-6 text-lg font-semibold leading-normal text-gray-600">
  <span>Starting from</span>
  <span className="ml-2 text-gray-900">₹999/mo</span>
</p>
<div className="md:inline-block">
  <button
    type="button"
    className="px-3 py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    Start your free trial
  </button>
</div>

</div>

            </div>
          </div>
        </div>
      </div>
      <footer className='py-6 '>
        <div className='container mx-auto text-center text-gray-400'>
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} Purrfect Paws. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
