import React from 'react'
import { useEffect } from 'react';
import movieQuiz from "../../../Assets/images/movieQuiz.jpeg"
import RegisterButton from '../../Registerbutton';
const Movie_quiz = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={movieQuiz} />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">MOVIE QUIZ
            </h1>
            <p class="mb-8 leading-relaxed text-justify">MOVIE QUIZ : Movie Quiz is a game where there will be two participants Per team. A Movie Clip Is Showed to the Participant Team and Questions were asked based on the Movie Clip. The Team must be answered for question within the given time limit.</p>
            <div class="flex justify-center">
              <a href='https://forms.gle/GG7ALnsPh8TWbJNu6'>
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
            <strong>➤ The game is played as team (2 Participants Per Team).</strong><br />
            ➤ The number of correct answers out of 10 questions answered by team  will be noted.<br />
            ➤ The team which answers the greater number of correct answers out of 10 questions will be declared as a winner and cash prize will be awarded for that team.<br />
          </p>

          <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">CO-ORDINATOR :</h2>

          <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
            • R. Yashwanth - 9248347473
            <br />
          </p>

          <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">REGISTRATION FEE :</h2>

          <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
            <h4><strong>• 200/- per Team.</strong></h4><br />
          </p>

        </div>
      </div>


    </>
  )
}

export default Movie_quiz