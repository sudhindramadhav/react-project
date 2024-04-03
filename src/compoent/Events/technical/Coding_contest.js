import React from 'react'
import { useEffect } from 'react';
import coding_contest from "../../../Assets/images/codingcontest.jpg"
import RegisterButton from '../../Registerbutton';
const Coding_contest = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={coding_contest} />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">CODING CONTEST
            </h1>
            <p class="mb-8 leading-relaxed text-justify">CODING CONTEST: also known as a programming contest or hackathon, is a competitive event where individuals or teams solve programming problems within a specified time frame. These contests can be online or in-person and are popular among computer programmers, software engineers, and students.</p>
            <p class="mb-8 leading-relaxed text-justify">Gear up for a coding marathon like no other, where innovation meets competition,
              and every line of code brings you closer to victory! Register your team today and
              let the coding battle begin!</p>
            <div class="flex justify-center">
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSf0BpGl0pBSYvy5GLp-m0f1dWBq_kZjwzR30JGZZaoX_QF6kQ/viewform?usp=sf_link'>
                <RegisterButton/>
                </a>
            </div>
          </div>
        </div>
      </section>
      <div class="bg-white py-4 sm:py-4 lg:py-6">
        <div class="mx-auto max-w-screen-md px-4 md:px-8">

          <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">RULES:</h2>

          <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
            <strong>➤ Each team should consist of a maximum two members.<br/></strong>
            ➤ Teams will be provided with a set of coding questions to solve within a specified
            time limit for each round.<br />
            ➤ Code submissions must adhere to the given problem statements and meet all
            specified requirements.<br />
            ➤ Teams will be ranked as per the number of problems solved.<br />
            ➤ Ties will be broken by the total time for each user in ascending order of time.<br />
            ➤ The contest will consist of two rounds, with teams progressing in every
            round.<br />
          </p>
          <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">CO-ORDINATORS :</h2>

          <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
            • JVS. Tharun Sai - 9491237041<br />
            • S. Moulikaa - 9121991326<br />
          </p>

          <h2 class="mb-2 text-xl font-bold text-gray-800 sm:text-2xl md:mb-4">REGISTRATION FEE:</h2>

          <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
            <h4><strong>• 100/- per team.</strong></h4><br />
          </p>

        </div>
      </div>

    </>
  )
}

export default Coding_contest