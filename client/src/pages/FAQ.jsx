import React from 'react'
import Nav3 from '../components/Nav3'
import Footer from '../components/Footer'
import Lottie from 'lottie-react';
import faq from '../assets/faq.json';

export function FAQ() {
  return (
    <>
    <Nav3/>
    <section className="px-2 mt-[30px] md:mb-[200px]">
      <div className="mx-auto max-w-7xl py-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h1 className="text-2xl font-bold text-black"> <Lottie animationData={faq} className='w-[80px] h-[80px] mb-4  ' />Frequently Asked Questions  </h1>
            <p className="mt-6 text-lg text-gray-500">
                Here are some of our most frequently asked questions. If you have a question that isn't answered here, please contact us.
            </p>
          </div>
          <div className=" mt-10 lg:col-span-7 lg:mt-0">
            <dl>
              
                <div  className="mt-10 first:mt-0">
                  <dt className="text-xl font-semibold leading-6 text-gray-900">
                    How do I get started?
                  </dt>
                  <dd className="mt-2 text-lg  text-gray-500">
                    To get started with Purrfect Paws, you can sign up for an account and start looking for Flurries to Adopt in our 
                    Flurry Feed.
                  </dd>
                  
                </div>
                <div  className="mt-10 first:mt-0">
                  <dt className="text-xl font-semibold leading-6 text-gray-900">
                    How do I Adopt?
                  </dt>
                  <dd className="mt-2 text-lg text-gray-500">
                    To adopt a Flurry, you can click on the Flurry's profile and click on the Adopt button.Your Adoption Request will 
                    be registered and the owner of the cat will be notified. If the owner is interested in your request, they will
                    contact you and you can discuss the adoption further.
                  </dd>
                  
                </div>
                <div  className="mt-10 first:mt-0">
                  <dt className="text-xl font-semibold leading-6 text-gray-900">
                    How can I post my Cat for Adoption?
                  </dt>
                  <dd className="mt-2 text-lg text-gray-500">
                    To post your cat for adoption , You first have to Log in/Sign up to your account. Then you can click on the
                    Add a cat button and fill in the details of your cat. Your cat will be added to the Flurry Feed and other users
                    can view your cat's profile and request for adoption.
                  </dd>
                  
                </div>
                <div  className="mt-10 first:mt-0">
                  <dt className="text-xl font-semibold leading-6 text-gray-900">
                   How many Cats can I post for Adoption?
                  </dt>
                  <dd className="mt-2 text-lg text-gray-500">
                    You can post as many cats as you want for adoption. There is no limit to the number of cats you can post for adoption.
                    Though we reccomend that you post only those cats that you are willing to give up for adoption.
                  </dd>
                  
                </div>
              
            </dl>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}
