import React from 'react'
import { useEffect } from 'react';
import build_with_bits from "../../../Assets/images/build_with_bits.jpg"
const Build_With_bits = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <>
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={build_with_bits}/>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">BUILD WITH BITS
            </h1>
            <p class="mb-8 leading-relaxed">Build With Bits: A compact, engaging brainstorming event, where participants in groups of 3-5 collaborate on inventive solutions for various problem statements. Prizes and appreciation are given for the most creative, feasible ideas, fostering an atmosphere of innovation and enthusiasm.</p>
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
                    • The event aims to assess participants' knowledge and skills in binary numbers, circuit designing, and 
circuit identification across three levels:<br/>
                    • <br/>
                    • Level 1: Focuses on basic binary number system understanding, conversions, and identification of 
circuit components.<br/>
                    • Level 2:Involves solving Boolean expressions and designing logic gates based on specified input-output requirements.<br/>
                    • Level 3: Challenges participants to implement existing circuits in new ways to solve problems.<br/>
                    </p>

                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">HOW EVENT IS CONDUCTED</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    1. Preparation:
 - Recruit judges knowledgeable in binary systems, circuit design, and electronics.
 - Prepare written tasks or scenarios for each level, including problems for participants to solve.<br/>
 2. Participant Registration:
 - Provide registration forms for participants to sign up individually or in teams.
 - And verifying the registered teams on the event day.<br/>
 3. Event Day:
 - Welcome participants and provide an overview of the event structure and rules.
 - Assign participants to their respective levels and stations.
 - Set time limits for each level/task and communicate them clearly.
 - Ensure all necessary materials and resources are readily available at each station.<br/><br/>
 Level 1: Binary Basics:
 - Present participants with tasks involving binary number identification, conversions, and circuit 
component identification.
 - Judges assess participants' accuracy and understanding of binary concepts and circuit 
components.
 - It is a simple Prelims round filtering the participants for another level
 - We will Provide the google form link for their First round.<br/><br/>
Level 2: Logic Gate Design:
 - Participants receive problems requiring them to solve Boolean expressions and design logic gates 
accordingly.
 - Judges evaluate participants' logical reasoning and ability to design functional circuits based on 
given input-output requirements.
 - Question papers will be evaluated manually by the faculty.<br/><br/>
Level 3: Circuit Implementation and Design: [ Final Round ]
 - Participants are presented with scenarios where they must implement existing circuits creatively 
or design new circuits based on provided diagrams.
 - Judges assess participants' problem-solving skills, creativity, and understanding of circuit 
functionality and declare the final Result<br/>
                    </p>

                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">CO-ORDINATOR:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    • <br/>
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

export default Build_With_bits