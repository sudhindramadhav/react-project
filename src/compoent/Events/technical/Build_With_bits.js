/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useEffect } from 'react';
import build_with_bits from "../../../Assets/images/build_with_bits.jpg"
import RegisterButton from '../../Registerbutton';
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
            <p class="mb-8 leading-relaxed text-justify">BUILD WITH BITS : A compact, engaging brainstorming event, where participants in groups of 3-5 collaborate on inventive solutions for various problem statements. Prizes and appreciation are given for the most creative, feasible ideas, fostering an atmosphere of innovation and enthusiasm.</p>
            <div class="flex justify-center">
              <a href=''>
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
            ➤ The event aims to assess participants' knowledge and skills in binary numbers, circuit designing, and
            circuit identification across three levels :<br /><br/>
          </p>
          <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
            <strong>Level 1  <br/>Binary Basics :</strong><br/>
            <p className='ps-4'>
            - Present participants with tasks involving binary number identification, conversions, and circuit
            component identification.<br/>
            - Judges assess participants' accuracy and understanding of binary concepts and circuit
            components.<br/>
            - It is a simple Prelims round filtering the participants for another level<br/>
            - We will Provide the google form link for their First round.<br /><br /></p>
            <strong>Level 2<br/> Logic Gate Design :</strong><br/><p className='ps-4'>
            - Participants receive problems  to solve Boolean expressions and design logic gates
            accordingly.<br/>
            - Judges evaluate participants' logical reasoning and ability to design functional circuits based on
            given input-output requirements.<br/>
            - Question papers will be evaluated manually by the faculty.<br /><br /></p>
            <strong>Level 3<br/> Circuit Implementation and Design : [ Final Round ]</strong><br/><p className='ps-4'>
            - Participants are presented with scenarios where they must implement existing circuits creatively
            or design new circuits based on provided diagrams.<br/>
            - Judges assess participants' problem-solving skills, creativity, and understanding of circuit
            functionality and declare the final Result.<br /></p>
           
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