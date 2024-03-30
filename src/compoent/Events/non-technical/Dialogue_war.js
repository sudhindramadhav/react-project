import React from 'react'
import { useEffect } from 'react';
import dialoguewar from "../../../Assets/images/dialoguewar.jpg"
const Dialogue_war = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
  return (
    <>
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={dialoguewar}/>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">DIALOGUE WAR
            </h1>
            <p class="mb-8 leading-relaxed">DIALOGUE WAR: is not a standard term or concept. It could potentially refer to a situation where individuals or groups engage in a verbal or written exchange of arguments, opinions, or ideas, often in a competitive or confrontational manner. This could occur in various contexts, such as debates, discussions, or online forums, where participants aim to persuade others or defend their own viewpoints through dialogue.</p>
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
                    • A team should consist 2 members.<br/>
                    • 2 teams will face each other.<br/>
                    • Each team should accurately guess or translate the dialogue.<br/>
                    • Round 1: A Telugu dialogue is translated into English and it will be provided by the coordinator.<br/>
                    • Participants has to translate the dialogue into Telugu (original).<br/>
                    • In 1st round total of 5 dialogues are provided.<br/>
                    • In order to win the tie, they have to answer 3 correctly.<br/>
                    • Those who have qualified for 2nd round.<br/>
                    • The coordinators will provide MOVIE NAME & HERO - The participant has to guess the famous dialogue in that movie.<br/>
                    </p>
                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">CO-ORDINATORS:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    • Prashanthi - 7569563542 - 2nd ECE.<br/>
                    • Sai Gayathri - 8639057352 - 2nd ECE.<br/>
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

export default Dialogue_war