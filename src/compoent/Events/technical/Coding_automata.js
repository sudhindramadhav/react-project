import React from 'react'
import { useEffect } from 'react';
import coding_automata from "../../../Assets/images/coding_automata.jpg"
const Coding_automata = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <>
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={coding_automata}/>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">CODING AUTOMATA
            </h1>
            <p class="mb-8 leading-relaxed">CODING AUTOMATA: A compact, engaging brainstorming event, where participants in groups of 3-5 collaborate on inventive solutions for various problem statements. Prizes and appreciation are given for the most creative, feasible ideas, fostering an atmosphere of innovation and enthusiasm.</p>
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
                    • Each team should consist of a maximum two members.<br/>
                    • Participants must register in advance to participate in the Coding Automata: 
Debugging Edition.<br/>
                    • Each participant will be provided with a set of C programs containing bugs to 
debug.<br/>
                    • In the first round, the student must detect the error in the given basic program and 
get the required output.<br/>
                    • The top 10 students are qualified based on the speed they complete the code
and promoted to the second round.<br/>
                    • In the second round, the student will be given a little trickier program to detect the 
bug and get the required output.<br/>
• The student who completes the program faster is considered and the top 3 
students are declared as winners.<br/>
                    </p>
                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">CO-ORDINATOR:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    • <br/>
                    </p>

                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">ENTRY FEE:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <h4>50/- per head</h4><br/>
                    </p>
            
                </div>
              </div>
    
    </>
  )
}

export default Coding_automata