/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useEffect } from 'react';
import face_paint from "../../../Assets/images/minipolaroid.jpg"
import RegisterButton from '../../Registerbutton';
const Face_paint = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
  return (
    <>
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={face_paint}/>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">MINI POLAROID PAINTING
            </h1>
            <p class="mb-8 leading-relaxed text-justify">With limited space and boundless imagination, contestants will compete to create captivating scenes, portrait's etc, all with in a polaroid frame. The evaluation will be based on creativity, technique and overall visual impact.</p>
            <div class="flex justify-center">
              <a href=''>
                <RegisterButton/>
                </a>
                </div>
            </div>
        </div>
    </section>
                <div class="bg-white py-4 sm:py-4 lg:py-6">
                <div class="mx-auto max-w-screen-md px-4 md:px-8">
              
                  <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">RULES :</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    ➤ The time given to complete the painting is 45 mins.<br/>

                    ➤ Only individual participants are allowed.
                    </p>
                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">CO-ORDINATOR :</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    •  P.Hema Sekhar - 9347883828<br/>
                    </p>


                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">REGISTRATION FEE:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <strong className='text-red-600'>• 100/- Per Head.</strong><br/>
                    </p>
            
                </div>
              </div>
    
    </>
  )
}

export default Face_paint