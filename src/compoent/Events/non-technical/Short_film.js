import React from 'react'
import { useEffect } from 'react';
import shortfilm from "../../../Assets/images/shortfilm.jpg"
const Short_film = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
  return (
    <>
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={shortfilm}/>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">SHORT FILM
            </h1>
            <p class="mb-8 leading-relaxed">SHORT SPACE: SPARK presents a Short film Contest for aspiring film makers. It acts as an interactive platform for aspiring filmmakers to exhibit their skills .The participants will be given time to shoot and produce their own Short Film, giving them first hand experience of film making and providing them a medium to use the knowledge they possess. For the final day, movies filmed and produced by the participants will be screened and judged by experienced film makers, hence declaring the winners who will be awarded prize money.</p>
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
                    • The Participants of this event can be minimum1 person ( maximum your wish)  per Team.<br/>
                    • Participants can shoot a video that does not exceed 15 minutes in duration based on any topic of their choice.<br/>
                    • Participants must make sure that the topic chosen is free from any Copyright, controversies, vulgarity or anything that is disturbing.<br/>
                    • The group which follows all the above rules are declared as the winners.<br/>
                    • Once the shooting and editing are done, participants need to upload their video on any of the online video sharing platforms like YouTube/Google Drive and should submit a URL.<br/>
                    • The Language of the video should be Either Telugu or English.<br/>
                    </p>
                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">CO-ORDINATOR :</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    • <br/>
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

export default Short_film