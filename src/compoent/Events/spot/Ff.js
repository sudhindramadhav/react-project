import React from 'react'
import { useEffect } from 'react';
import ff from "../../../Assets/images/FreeFire.jpg"
import RegisterButton from '../../Registerbutton';
const Ff = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
  return (
    <>
            <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={ff}/>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">FREE FIRE
            </h1>
            <p class="mb-8 leading-relaxed text-justify">FREE FIRE: Free Fire is the ultimate survival shooter game available on mobile. Each 10-minute game places you on a remote island where you are pit against 49 other players, all seeking survival. Players freely choose their starting point with their parachute, and aim to stay in the safe zone for as long as possible.</p>
            <div class="flex justify-center">
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSdNyMAGNl0tqpVRxPEDt9WwGMGVwiz5iK5_BapUrxu8yEduNg/viewform?pli=1'>
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
                    <strong>➤ It consists of 2 rounds.</strong><br/>
                    ➤ The squad consists of only 4 members.<br/>
                    ➤ Single or duo players will not consider for the game.<br/>
                    ➤ 1st round mode is classic consist of 13 squads.<br/>
                    ➤ Top 6 squads will be considered for 2nd round.<br/>
                    ➤ In 2nd round winner will be announced.<br/>
                    </p>
                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">CO-ORDINATORS :</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    • P.M. Sasidhar - 9573237790 - 3rd ECE<br/>
                    • G. Muni Vignesh - 7673912934 - 2nd ECE<br/>
                    </p>

                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">REGISTRATION FEE:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <h4><strong>• 200/- Per Squad</strong></h4>
                    </p>
            
                </div>
              </div>
    
    
    
    </>
  )
}

export default Ff