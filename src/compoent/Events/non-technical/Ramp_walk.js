import React from 'react'
import { useEffect } from 'react';
const Ramp_walk = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
  return (
    <>
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={process.env.PUBLIC_URL + '/images/rampwalk.jpg'}/>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">RAMP WALK
            </h1>
            <p class="mb-8 leading-relaxed">RAMP WALK: also known as a runway walk, is a term primarily used in the context of fashion shows. It refers to the walk that models take on a raised platform or runway to showcase clothing and accessories to an audience. Ramp walks are a key component of fashion shows, allowing designers to display their creations in a dynamic and theatrical manner. Models often undergo specific training to perfect their ramp walk, which involves a particular style of walking that highlights the clothing and exudes confidence and grace.</p>
            <div class="flex justify-center">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register Now</button> 
            </div>
            </div>
        </div>
    </section>
                <div class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-md px-4 md:px-8">
              
                  <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">RULES:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    • There will be 2 rounds conducted.<br/>
                    • In 1st round the students has to walk on a ramp. <br/>
                    • And the further round selected students will be shortlisted by their way of walking and presenting themselves there.<br/>
                    • Students who got qualified for 2nd round will undergo a question-and-answer round.<br/>
                    • Which is considered as final round and winner deciding round.<br/>
                    • The student has to answer Confidently & Relatable to the question asked. <br/>
                    </p>
                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">CO-ORDINATORS:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    • Chaitanya - 8019527077 - 4th ECE.<br/>
                    • Surya Vardhan - 6302256802 - 4th ECE.<br/>
                    </p>

                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">ENTRY FEE:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <h4>100/-</h4><br/>
                    </p>
            
                </div>
              </div>
    
    </>
  )
}

export default Ramp_walk