import React from 'react'
import { useEffect } from 'react';
import gully_cricket from "../../../Assets/images/gully_cricket.jpg"
const Gully_circket = () => {
    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);
  return (
    <>
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={gully_cricket}/>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">GULLY CIRCKET
            </h1>
            <p class="mb-8 leading-relaxed text-justify">Gully Cricket: Refers to a casual form of cricket played in streets, parks, or any open space, rather than in a formal cricket ground. It's popular in many cricket-loving countries, particularly in India. Gully cricket often involves improvised rules, such as fewer players, smaller playing areas, and variations in equipment. It's a fun and accessible way for people to enjoy the sport in a more informal setting.</p>
            <div class="flex justify-center">
              <a href='https://forms.gle/yQ5YNR4FNUG7xiX46'>
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register Now</button> 
                </a>
            </div>
            </div>
        </div>
    </section>
                <div class="bg-white py-4 sm:py-4 lg:py-6">
                <div class="mx-auto max-w-screen-md px-4 md:px-8">
              
                  <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">RULES :</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <strong>➤ Team contains 5 members.</strong><br/>
                    ➤ Gully cricket emphasises fair play and sportsmanship. Players are expected to abide by the rules, respect their opponents, and play in the spirit of the game.<br/>
                    ➤ There can be variations in the rules regarding boundaries, such as hitting the ball over a certain height or distance being declared as six, or the ball bouncing off a wall counting as runs, etc.<br/>
                    ➤ Depending on the locality and the preferences of the players, additional rules or modifications to existing rules may be introduced to suit the conditions or enhance the enjoyment of the game.<br/>
                    </p>
                    
                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">CO-ORDINATOR :</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    • Y. Praveen Kumar - 8179794785<br/>
                    </p>

                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">REGISTRATION FEE:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <h4><strong>• 200/- Per Team.</strong></h4><br/>
                    </p>
            
                </div>
              </div>
    
    </>
  )
}

export default Gully_circket