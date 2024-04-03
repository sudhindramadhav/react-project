import React from 'react'
import { useEffect } from 'react';
import kahoot_quiz from "../../../Assets/images/kahoot_quiz.png"
import RegisterButton from '../../Registerbutton';
const Kahoot_quiz = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <>
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-full w-full mb-10 md:mb-0">
            <img class="object-cover object-center rounded w-full" alt="hero" src={kahoot_quiz}/>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">KAHOOT QUIZ
            </h1>
            <p class="mb-8 leading-relaxed text-justify">KAHOOT QUIZ: are known for their engaging and interactive format, making them a fun and effective way to learn and review information. They can be used in classrooms, meetings, and events to assess knowledge, spark discussion, and liven up the learning experience.It's commonly used in educational settings, corporate training, and social gatherings. Kahoot quizzes, also known as Kahoots, can be created on a wide range of topics and can include multiple-choice questions, true or false questions, and other interactive elements.</p>
            <div class="flex justify-center">
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSdTxv7Ou3uMGJsuhNw0EfA7saHN2XP-FdUKM4kthC9kpzsgsQ/viewform?usp=sf_link '>
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
                    <strong>➤ Each team should consist of two members.</strong><br/>
                    ➤ The quiz will be conducted on a platform designed for fast-paced answering. <br/>
                    
                    ➤ Questions will cover various aspects of Computer Science and Technology.
<br/>
                    ➤ Limited time is provided to answer each question.<br/>
                    ➤ Those who answers all questions within less time will be declared as winner.<br/>
                    </p>
                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">CO-ORDINATORS :</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    • P. Prasanth - 7331104759<br/>
                    • Y.V. Parthasaradhi Reddy - 7993003170<br/>
                    </p>

                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">REGISTRATION FEE:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <h4><strong>• 100/- per team.</strong></h4><br/>
                    </p>
            
                </div>
              </div>
    
    </>
  )
}

export default Kahoot_quiz