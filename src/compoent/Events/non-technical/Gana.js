import React from 'react'
import { useEffect } from 'react';
import gana from "../../../Assets/images/singing.jpg"
import RegisterButton from '../../Registerbutton';
const Gana = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <>
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={gana}/>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">GAANA
            </h1>
            <p class="mb-8 leading-relaxed text-justify">GAANA: is a Hindi term that translates to "song" in English. It is commonly used in the context of Indian music, particularly in Bollywood and other regional film industries, to refer to a song. In a broader sense, "gaana" can refer to any form of music or song in the Indian context, including traditional, folk, classical, and modern popular music.</p>
            <div class="flex justify-center">
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSeM1dVykYfRHMC4BGShWdPGZz93q0FfplkFZX2gFw4RGY1Ibg/viewform?vc=0&c=0&w=1&flr=0'>
                <RegisterButton/>
                </a>
            </div>
            </div>
        </div>
    </section>
                <div class="bg-white py-4 sm:py-4 lg:py-6">
                <div class="mx-auto max-w-screen-md px-4 md:px-8">
              
                  <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">RULES:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    ➤ The participant should sing his/her favourite song track for 2-3mins.<br/>
                                        </p>
                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">CO-ORDINATOR :</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    • Manaswitha - 8555983669 - 2nd CSE.<br/>
                    </p>

                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">REGISTRATION FEE:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <strong>• 50/- Per Head.</strong><br/>
                    </p>
            
                </div>
              </div>
    
    </>
  )
}

export default Gana