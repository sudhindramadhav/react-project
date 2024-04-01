import React from 'react'
import { useEffect } from 'react';
import robo_talk from "../../../Assets/images/robotalk.jpg"
const Robo_Talk = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <>
    <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={robo_talk}/>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">ROBO TALK
            </h1>
            <p class="mb-8 leading-relaxed">ROBO TALK: is an engaging and educational event designed to explore the fascinating world of robotics. Participants will embark on a two-level journey, starting with Level 1, where they'll be tested on their basic knowledge of robots. Those who excel will progress to Level 2, where they'll identify specific components of robots and explain their functionalities.</p>
            <p class="mb-8 leading-relaxed">This event isn't just about answering questions; it's about understanding the inner workings of robots and how they impact our world. Finalists will have the opportunity to delve deep into the realm of robotics by researching and presenting on an advanced real-life robot, discussing its advantages and disadvantages.</p>
            <div class="flex justify-center">
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSc9v6fe-zYZ3-SfbXcgUyisaA_ar56behRUC1xKEFZZxtDozQ/viewform?usp=sf_link'>
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register Now</button> 
                </a>
            </div>
            </div>
        </div>
    </section>
                <div class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-md px-4 md:px-8">
              
                  <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">RULES:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    • The event is structured as a representation of real-world robots and aims to cover basic information 
about robots across 2 levels:<br/>
                    • Level 1:Participants are asked basic questions about robots to filter contestants for the next round.<br/>
                    • Level 2: Participants identify specific components of robots and explain their functionalities to 
proceed . A combination of a quiz and component identification where finalists also give a 
presentation on an advanced real-life robot, discussing its pros and cons.<br/>
                   </p>

                   <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">PROCEDURE OF CONDUCT THE EVENT</h2>
              
              <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
              1. Preparation:
 - Organize necessary quiz questions, presentation equipment for the event .
 - Recruit knowledgeable judges or experts in robotics to evaluate participants.
 - Select advanced real-life robots for participants to research and present on.<br/><br/>
2. Participant Registration:
 - Promote the event to potential participants through various channels and provide a registration 
platform.
 - Collect necessary information from participants, including team details if applicable.<br/><br/>
Event Day 
1
 - Welcome participants and provide an overview of the event structure and rules.<br/>
 - Conduct Level 1, where participants answer basic questions about robots.
 - Evaluate participants' responses and select top performers to proceed to Final 2.
 - Begin with Level 2, where participants identify specific components of robots and explain their 
functionalities.
 - Judges assess participants' knowledge and explanations to determine result
 - Provide finalists with guidelines for selecting and researching advanced real-life robots for their 
presentations.
 - Judges score participants based on their quiz performance, component identification, and 
presentation quality.
            
              </p>

                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">CO-ORDINATOR :</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    • K Jayanth - 7013454639<br/>
                    </p>

                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">ENTRY FEE:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <h4>50/-</h4><br/>
                    </p>
            
                </div>
              </div>
    
    
    </>
  )
}

export default Robo_Talk