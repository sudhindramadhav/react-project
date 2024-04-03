import React from 'react'
import { useEffect } from 'react';
import standupcomedy from "../../../Assets/images/standupcomedy.jpg"
const Stand_up_comedy = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
  return (
    <>
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={standupcomedy}/>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">STAND UP COMEDY
            </h1>
            <p class="mb-8 leading-relaxed text-justify">STAND UP COMEDY: is a form of entertainment where a comedian performs in front of a live audience, usually speaking directly to them. The comedian typically delivers a series of humorous stories, jokes, one-liners, or anecdotes, often based on personal experiences, observations, or social commentary. Stand-up comedy performances can vary widely in style and content, but the goal is usually to make the audience laugh.</p>
            
            <div class="flex justify-center">
              <a href='https://forms.gle/1h6LvwaR2ZFkutG6A'>
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register Now</button> 
                </a>
            </div>
            </div>
        </div>
    </section>
                <div class="bg-white py-4 sm:py-4 lg:py-6">
                <div class="mx-auto max-w-screen-md px-4 md:px-8">
              
                  <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">RULES:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    ➤ Only one round is conducted.<br/>
                    ➤ The student has to generate fun using any language, but preferably Telugu and English.<br/>
                    ➤ Words shouldn’t be offensive.<br/>
                    ➤ Foul language should be avoided, shouldn’t disrespect any institution or college.<br/>
                    ➤ Judges decision is final.<br/>
                    </p>
                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">CO-ORDINATORS :</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    • M. VENKATA NARASIMHA - 70328 29039 – 2ND ECE.<br/>
                    </p>

                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">ENTRY FEE:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <strong>• 100/- Per Head.</strong><br/>
                    </p>
            
                </div>
              </div>
    
    </>
  )
}

export default Stand_up_comedy