import React from 'react'
import { useEffect } from 'react';
import dialoguewar from "../../../Assets/images/dialoguewar.jpeg"
import RegisterButton from '../../Registerbutton';
const Dialogue_war = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
  return (
    <>
        <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={dialoguewar}/>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">DIALOGUE WAR
            </h1>
            <p className="mb-8 leading-relaxed text-justify">DIALOGUE WAR: is not a standard term or concept. It could potentially refer to a situation where individuals or groups engage in a verbal or written exchange of arguments, opinions, or ideas, often in a competitive or confrontational manner. This could occur in various contexts, such as debates, discussions, or online forums, where participants aim to persuade others or defend their own viewpoints through dialogue.</p>
            <div className="flex justify-center">
              <a href='https://forms.gle/WHtWFXGUBxPqsTCN8'>
                <RegisterButton/>
                </a>
            </div>
            </div>
        </div>
    </section>
                <div className="bg-white py-6 sm:py-4 lg:py-6">
                <div className="mx-auto max-w-screen-md px-4 md:px-8">
              
                  <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">RULES :</h2>
              
                    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    ➤ A team should consist 2 members.<br/>
                    ➤ 2 teams will face each other.<br/>
                    ➤ Each team should accurately guess or translate the dialogue.<br/>
                    ➤ Round 1: A Telugu dialogue is translated into English and it will be provided by the coordinators.<br/>
                    ➤ Participants has to translate the dialogue into Telugu (original).<br/>
                    ➤ In 1st round total of 5 dialogues are provided.<br/>
                    ➤ In order to win the tie, they have to answer 3 correctly.<br/>
                    ➤ Those who have qualified for 2nd round will be provided with MOVIE NAME & HERO.<br/>
                    ➤ The participant has to guess the famous dialogue in that movie.<br/>
                    </p>
                    <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">CO-ORDINATORS :</h2>
              
                    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    • T. PRASHANTHI - 75695 63542 – 2ND ECE.<br/>
                    • V.SAI GAYATHRI - 86390 57352 – 2ND CSE.<br/>
                    </p>

                    <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">REGISTRATION FEE:</h2>
              
                    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <strong className='text-red-600'>• 100/- Per Team.</strong><br/>
                    </p>
            
                </div>
              </div>
    
    </>
  )
}

export default Dialogue_war