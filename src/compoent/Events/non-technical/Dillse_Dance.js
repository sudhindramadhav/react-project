import React from 'react'
import { useEffect } from 'react';
import dillse from "../../../Assets/images/dliise.jpg"
import RegisterButton from '../../Registerbutton';
const Dillse_Dance = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <>
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={dillse}/>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">DILLSE DANCE
            </h1>
            <p class="mb-8 leading-relaxed text-justify">DIL-SE(BEATZ BATTLE): is a term that translates to "Dance from the Heart" in Hindi. It generally refers to dancing with passion, emotion, and a genuine expression of one's feelings. The term is often used to describe dance performances or styles that are heartfelt and full of energy, connecting deeply with the audience or viewers. In the context of Indian dance forms, such as Bollywood or classical dances, "Dil Se Dance" emphasizes the emotional and expressive aspect of the performance, along with the technical skills involved.</p>
            <div class="flex justify-center">
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSfD2px5sVz0nFL_cm9b5uzPBzqa3uFxQpVoATbKoopcGF2Xqw/viewform '>
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
                    ➤ There will be total of 2 rounds.<br/>
                    ➤ In 1st round the participant can DANCE for his/her favourite song.<br/>
                    ➤ Duration is 1 minute only. <br/>
                    ➤ If the student qualified for 2nd round then.<br/>
                    ➤ The student has to dance for the song which is selected by co-ordinators or else judges.<br/>
                    ➤ After selecting a song 5 minutes is provided to students, to make themselves prepared.<br/>
                    </p>
                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">CO-ORDINATORS:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    • K. CHARAN – 97045 79985 – 3rd ECE.<br/>
                    • P.S.R CHIDDHVILAASA REDDY - 6300 267 513 – 4TH ECE.<br/>
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

export default Dillse_Dance