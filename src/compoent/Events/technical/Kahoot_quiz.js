import React from 'react'
import { useEffect } from 'react';
const Kahoot_quiz = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <>
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={process.env.PUBLIC_URL + '/images/idea_blitz.jpeg'}/>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">KAHOOT QUIZ
            </h1>
            <p class="mb-8 leading-relaxed">KAHOOT QUIZ: are known for their engaging and interactive format, making them a fun and effective way to learn and review information. They can be used in classrooms, meetings, and events to assess knowledge, spark discussion, and liven up the learning experience.It's commonly used in educational settings, corporate training, and social gatherings. Kahoot quizzes, also known as Kahoots, can be created on a wide range of topics and can include multiple-choice questions, true or false questions, and other interactive elements.</p>
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
                    • Each team should consist of a maximum two members.<br/>
                    • Participants must register in advance and pay the registration fee to secure their 
spot in this Kahoot Quiz.<br/>
                    • The quiz will be conducted on a platform designed for fast-paced answering.<br/>
                    • Questions will cover various aspects of computer science and technology.
<br/>
                    • Each team will have a limited time to answer each question.<br/>
                    • The team with the highest cumulative score at the end of the quiz will be declared 
the winner.<br/>
                    </p>
                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">CO-ORDINATOR:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    • <br/>
                    </p>

                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">ENTRY FEE:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <h4>100/- per team</h4><br/>
                    </p>
            
                </div>
              </div>
    
    </>
  )
}

export default Kahoot_quiz