import React from 'react'
import { useEffect } from 'react';
import flipIt from '../../../Assets/images/flipIt.jpeg';
import RegisterButton from '../../Registerbutton';
const FilpIt_PitchIt = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={flipIt} />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">FLIP_IT AND PITCH_IT
            </h1>
            <p class="mb-8 leading-relaxed text-justify">FLIP IT & PITCH IT: also known as a programming contest or hackathon, is a competitive event where individuals or teams solve programming problems within a specified time frame. These contests can be online or in-person and are popular among computer programmers, software engineers, and students.</p>
            <p class="mb-8 leading-relaxed text-justify">Gear up for a coding marathon like no other, where innovation meets competition,
              and every line of code brings you closer to victory! Register your team today and
              let the coding battle begin!</p>
            <div class="flex justify-center">
              <a href='https://docs.google.com/forms/d/e/1FAIpQLScC9x9g1_9_8OtVyHuj0LwHdyLnHMkN2UDOZaHO21l2DrJsPA/viewform?usp=sf_link'>
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
            <strong>➤ Team should consist of 3-4 members.</strong><br />
            ➤ Images of things used in our day-to-day life will be displayed on a projector and each team will be given one of those images.<br />
            ➤ Teams are given a short time (around 4-5 minute) to analyze the image and discuss the current purpose/target audience of the product/service.<br />
            ➤ Each team is given 5 minutes time to present their given image and 5 more minutes to “Reverse Pitch” i.e. How could the product/service be used for something completely different? <br />
            ➤ Who else could benefit from this product/service and why? <br />
            ➤ Propose a new use and target audience for the product/service. <br />
            ➤ Awards are given for the most creative and feasible ideas.<br />
          </p>
          <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">CO-ORDINATOR :</h2>

          <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
            • H. Vishal Sri Sai - 8247205396 <br />
          </p>

          <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">REGISTRATION FEE:</h2>

          <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
            <h4><strong className='text-red-600'>• 150/- Per Team.</strong></h4><br />
          </p>

        </div>
      </div>

    </>
  )
}

export default FilpIt_PitchIt