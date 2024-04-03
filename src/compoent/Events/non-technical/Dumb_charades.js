import React from 'react'
import { useEffect } from 'react';
import dumbcharades from "../../../Assets/images/dumbcharades.jpg"
import RegisterButton from '../../Registerbutton';
const Dumb_charades = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
  return (
    <>
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={dumbcharades}/>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">DUMB CHARADES
            </h1>
            <p class="mb-8 leading-relaxed text-justify">DUMB CHARADES: Dumb Charades is a Movie Name Guessing game where there will be two participants Per team and they will be given the title of a movie and one person in a Team should have to explain the name of the movie through acting while the other member of team try to guess what the Movie name is.</p>
            <div class="flex justify-center">
              <a href='https://forms.gle/GG7ALnsPh8TWbJNu6'>
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
                    ➤ The game is played as team (2 Participants Per Team).<br/>
                    ➤ A person is not allowed to talk and is required to act out the name by using different gestures, facial expressions, and body language.<br/>
                    ➤ The number of movie names guessed by team for a duration of 2 minutes will be noted.<br/>
                    ➤ The team which guess the more number of movie names for a duration of 2 minutes will be declared as a winner and cash prize will be awarded for that team.<br/>
                    </p>
                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">CO-ORDINATOR :</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    • Pavan - 8247655251<br/>
                    </p>

                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">REGISTRATION FEE:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <strong>• 50/- Per Team.</strong><br/>
                    </p>
            
                </div>
              </div>
    
    </>
  )
}

export default Dumb_charades