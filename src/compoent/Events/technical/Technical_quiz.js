import React from 'react'
import { useEffect } from 'react';
import quiz from "../../../Assets/images/quiz.jpg"
const Technical_quiz = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
  return (
    <>
            <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={quiz}/>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">TECHNICAL QIIZ
            </h1>
            <p class="mb-8 leading-relaxed">TECHNICAL QUIZ : A quiz is a game which can also be called a mind sport wherein the players, either as individuals or in teams attempt to answer questions posed to them correctly, in order to win a prize. We designed these to promote, a fun way of study and help in the process of improving one’s general knowledge. On account of Engineers day celebration department wise technical Quiz Competition organized by Co-Curricular committee in association with Student Chapter of Indian Society of Technical Education</p>
            <div class="flex justify-center">
                <a href='https://docs.google.com/forms/d/e/1FAIpQLScRsuDcwsQKkXH0Ql8Qo6nrK3O4stLHUTSvMJDzK_cyypRq6Q/viewform?usp=sf_link'><button  class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register Now</button> </a> 
            </div>
            </div>
        </div>
    </section>
                <div class="bg-white py-4 sm:py-4 lg:py-6">
                <div class="mx-auto max-w-screen-md px-4 md:px-8">
              
                  <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">RULES :</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <strong className='text-red-500'>➤ Screening Round</strong> <br/>
        ◦ Each team would be given a set of question papers containing 15 objective type questions.<br/>
        ◦ Time limit – 15 minutes.<br/>
        ◦ Only Qualified Teams would be selected for STAGE ROUNDS.<br/>
        ◦ In case of tie between 2 or more teams, further 3 questions would be asked for final selection<br/><br/>
        <strong className='text-red-500'>➤ Stage Rounds</strong><br/>
         <strong>• First Round (Lap Round)</strong><br/>
    
            ▪ Each team would be asked 5 questions. (Objective question)<br/>
            ▪ 10 marks for correct answer, and no negative marking for wrong answer.<br/>
            ▪ If a team cannot answer the question, then the question would be forwarded to the next team (NO TIME).<br/>
            ▪ Only 6 teams would be selected for the 2nd Round.<br/>
            ▪ Answering time is only 30 seconds.<br/><br/>
            <strong>• Second Round (Audio-visual round)</strong><br/>
        ◦ This Round would be the Audio-visual round.<br/>
        ◦ 10 marks for the correct answer and no negative marking for wrong answer.<br/>
        ◦ Each Team would be asked 2 audio-visual questions.<br/>
        ◦ Audio-Visual played for 60 seconds and answering time is only 30 seconds.<br/>
        ◦ If a team cannot answer the question, then the question would be forwarded to the next team.<br/>
        ◦ This round is not elimination round.<br/>
        <br/>
        <strong>• Third Round (Picture Identify)</strong><br/>
        ◦ This Round would be Picture Identify Round.<br/>
        ◦ 10 marks for the correct answer and negative 5 marks for the wrong or no answer.<br/>
        ◦ Answering time is only 30 seconds.<br/>
        ◦ 3 teams are to be selected for the final round.<br/><br/>
    <strong>• Final Round (Rapid Fire)</strong> <br/>
        ◦ Each team will give 5 questions to answer within the time limit of 50 seconds.<br/>
        ◦ 10 marks for the correct answer and negative 5 marks for the wrong or no answer.<br/>
        ◦ Question will be changed for every 10 seconds.<br/>
        ◦ 2 teams are to be selected as Winners and Runners.<br/>
                    </p>

                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">REGISTRATION FEE :</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <h4><strong>• 100/- per team.</strong></h4><br/>
                    </p>
            
                </div>
              </div>
    
    
    </>
  )
}

export default Technical_quiz