import React from 'react'
import { useEffect } from 'react';
import coding_automata from "../../../Assets/images/coding_automata.jpg"
import RegisterButton from '../../Registerbutton';
const Coding_automata = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={coding_automata} />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">CODING AUTOMATA
            </h1>
            <p class="mb-8 leading-relaxed text-justify">CODING AUTOMATA: A compact, engaging brainstorming event, where participants in groups of 3-5 collaborate on inventive solutions for various problem statements. Prizes and appreciation are given for the most creative, feasible ideas, fostering an atmosphere of innovation and enthusiasm.</p>
            <div class="flex justify-center">
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSfZgDE3IoRsyn_Rec7OyXYlUfoKGRIn05Iu90h8zeC6morHrA/viewform?usp=sf_link'>
                <RegisterButton/>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div class="bg-white py-4 sm:py-4 lg:py-6">
        <div class="mx-auto max-w-screen-md px-4 md:px-8">

          <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">RULES :</h2>

          <p class="mb-6 text-gray-500 sm:text-lg md:mb-8 text-justify">
            ➤ Each participant will be provided with a set of C programs containing bugs.<br />
            ➤ In the first round, the participant must detect the error in the given basic program and get the required output.<br />
            ➤ The top 10 participants will be qualified based on the speed they debug the code and promoted to the second round.<br />
            ➤ In the second round, the participant will be given a little trickier program to detect the bug and get the required output.<br />
           
          </p>
          <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">CO-ORDINATORS :</h2>

          <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
            • L. Jaya Lakshmi - 9347902488 <br />
            • N. Sahithya - 8143377433 <br />
          </p>

          <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">REGISTRATION FEE:</h2>

          <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
            <h4><strong className='text-red-600'>• 50/- per participant.</strong></h4><br />
          </p>

        </div>
      </div>

    </>
  )
}

export default Coding_automata