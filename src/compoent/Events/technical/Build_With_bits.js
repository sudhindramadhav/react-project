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
            <img class="object-cover object-center rounded" alt="hero" src={build_with_bits} />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">BUILD WITH BITS
            </h1>
            <p class="mb-8 leading-relaxed">BUILD WITH BITS : A compact, engaging brainstorming event, where participants in groups of 3-5 collaborate on inventive solutions for various problem statements. Prizes and appreciation are given for the most creative, feasible ideas, fostering an atmosphere of innovation and enthusiasm.</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register Now</button>
            </div>
          </div>
        </div>
      </section>
      <div class="bg-white py-4 sm:py-4 lg:py-6">
        <div class="mx-auto max-w-screen-md px-4 md:px-8">

          <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">RULES :</h2>

          <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
            <strong>➤ The event aims to assess participants' knowledge and skills in binary numbers, circuit designing, and
            circuit identification across three levels :</strong><br /><br/>

            <strong>Level 1:</strong> Focuses on basic binary number system understanding, conversions, and identification of
            circuit components.<br />
            <strong>Level 2:</strong> Involves solving Boolean expressions and designing logic gates based on specified input-output requirements.<br />
            <strong>Level 3:</strong> Challenges participants to implement existing circuits in new ways to solve problems.<br />
          </p>

          <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">HOW EVENT IS CONDUCTED :</h2>

          <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
            <strong>Level 1 : Binary Basics :</strong><br/>
            - Present participants with tasks involving binary number identification, conversions, and circuit
            component identification.<br/>
            - Judges assess participants' accuracy and understanding of binary concepts and circuit
            components.<br/>
            - It is a simple Prelims round filtering the participants for another level
            - We will Provide the google form link for their First round.<br /><br />
            <strong>Level 2: Logic Gate Design :</strong><br/>
            - Participants receive problems requiring them to solve Boolean expressions and design logic gates
            accordingly.<br/>
            - Judges evaluate participants' logical reasoning and ability to design functional circuits based on
            given input-output requirements.<br/>
            - Question papers will be evaluated manually by the faculty.<br /><br />
            <strong>Level 3: Circuit Implementation and Design : [ Final Round ]</strong><br/>
            - Participants are presented with scenarios where they must implement existing circuits creatively
            or design new circuits based on provided diagrams.<br/>
            - Judges assess participants' problem-solving skills, creativity, and understanding of circuit
            functionality and declare the final Result.<br />
          </p>

          <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">CO-ORDINATOR :</h2>

          <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
            • K Jayanth - 7013454639<br />
          </p>

          <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">REGISTRATION FEE:</h2>

          <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
            <h4><strong>• 50/- Per Head.</strong></h4><br />
          </p>

        </div>
      </div>

    </>
  )
}

export default Build_With_bits