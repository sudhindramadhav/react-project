import React from 'react'
import { useEffect } from 'react';
import rampwalk from "../../../Assets/images/rampwalk.jpg"
import RegisterButton from '../../Registerbutton';
const Ramp_walk = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
  return (
    <>
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={rampwalk}/>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">RAMP WALK
            </h1>
            <p class="mb-8 leading-relaxed text-justify">RAMP WALK: also known as a runway walk, is a term primarily used in the context of fashion shows. It refers to the walk that models take on a raised platform or runway to showcase clothing and accessories to an audience. Ramp walks are a key component of fashion shows, allowing designers to display their creations in a dynamic and theatrical manner. Models often undergo specific training to perfect their ramp walk, which involves a particular style of walking that highlights the clothing and exudes confidence and grace.</p>
            <div class="flex justify-center">
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSfSIaZwifAR8TTReVb-0Pgkp-iBl2XeIvFYZ8DkQEnGCynxsw/viewform?usp=sf_link '>
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
                    ➤ 2 rounds will be conducted.<br/>
                    ➤ In 1st round the students has to walk on a ramp. <br/>
                    ➤ Selected students will be shortlisted to further round by their way of walking and presenting themselves .<br/>
                    ➤ Students who got qualified for 2nd round will undergo a question-and-answer round, Which is considered as final round and winner deciding round.<br/>
                    ➤ The student has to give relevant answers Confidently to the question asked. <br/>
                    </p>
                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">CO-ORDINATORS :</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    ➤ K. CHAITANYA - 80195 27077 – 4th ECE.<br/>
                    ➤ K. SURYA VARDHAN - 6302 256 802 – 4TH ECE.<br/>
                    </p>

                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">REGISTRATION FEE:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <strong>100/- Per Head</strong><br/>
                    </p>
            
                </div>
              </div>
    
    </>
  )
}

export default Ramp_walk