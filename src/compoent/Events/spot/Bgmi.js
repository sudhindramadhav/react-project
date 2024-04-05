import React from 'react'
import { useEffect } from 'react';
import bgmi from "../../../Assets/images/bgmi.jpeg"
import RegisterButton from '../../Registerbutton';
const Bgmi = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
  return (
    <>
             <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={bgmi}/>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">BGMI
            </h1>

            <p className="mb-8 leading-relaxed text-justify">BGMI : BGMI is a term you must have probably heard by now. It is the abbreviated form of PlayerUnknown's Battleground. Basically, it is a video game which is a multiplayer battle royale game. It is very famous all over the world.</p>
            <div className="flex justify-center">
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSdNyMAGNl0tqpVRxPEDt9WwGMGVwiz5iK5_BapUrxu8yEduNg/viewform'>
                <RegisterButton/>
                </a>
            </div>
            </div>
        </div>
    </section>
                <div className="bg-white py-4 sm:py-4 lg:py-6">
                <div className="mx-auto max-w-screen-md px-4 md:px-8">
              
                  <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">RULES :</h2>
              
                    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <strong>➤ It consists of 2 rounds.</strong><br/>
                    ➤ The squad consists of only 4 members.<br/>
                    ➤ Single or duo players will not consider for the game.<br/>
                    ➤ 1st round mode is classNameic consist of 13 squads.<br/>
                    ➤ Top 6 squads will be considered for 2nd round.<br/>
                    ➤ In 2nd round winner will be announced.<br/>
                    </p>
                    <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">CO-ORDINATORS :</h2>

                    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    • P.M. Sasidhar - 9573237790 - 3rd ECE<br/>
                    • G. Muni Vignesh - 7673912934 - 2nd ECE<br/>
                    </p>            

                    <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">REGISTRATION FEE:</h2>
              
                    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <h4><strong className='text-red-600'>• 200/- Per Squad</strong></h4><br/>
                    </p>
            
                </div>
              </div>
    </>
  )
}

export default Bgmi