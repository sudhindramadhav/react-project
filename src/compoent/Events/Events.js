/* eslint-disable jsx-a11y/img-redundant-alt */

import React from 'react'
import { Link } from 'react-router-dom'
import build_with_bits from "../../Assets/images/build_with_bits.jpg"

import coding_automata from "../../Assets/images/coding_automata.jpg"
import coding_contest from "../../Assets/images/codingcontest.jpg"
import idea_blitz from "../../Assets/images/idea_blitz.jpeg"
import kahoot_quiz from "../../Assets/images/kahoot_quiz.png"
import robo_talk from "../../Assets/images/robotalk.jpg"
import poster from "../../Assets/images/posterpresentation.jpg"
import paper from "../../Assets/images/paperpresentation.jpg"
import technical_quiz from "../../Assets/images/quiz.jpg"
import expo from "../../Assets/images/expo.jpeg"
import flipIt from "../../Assets/images/flipIt.jpeg"

const Events = () => {
  return (
    <>
      <div className="container  py-5 mx-auto flex flex-wrap flex-col">
        <nav className="flex lg:mx-auto flex-wrap justify-center ">
          <Link to='/non_technical' className="sm:px-8 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-indigo-500 tracking-wider text-center">
            Non Technical
          </Link>
          <Link to='/spot' className="sm:px-8 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-indigo-500 tracking-wider">
            Spot
          </Link>
        </nav>
      </div>


      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">TECHNICAL EVENTS</h2>

          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">

            <div>
              <Link to='/bwb' className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={build_with_bits}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span className="text-lg font-bold text-gray-800 lg:text-xl">BUILD WITH BITS</span>
                </div>
              </Link>
            </div>



            <div>
              <Link to='/coding_automata' className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={coding_automata}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span className="text-lg font-bold text-gray-800 lg:text-xl">CODING AUTOMATA</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/coding_contest' className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={coding_contest}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span className="text-lg font-bold text-gray-800 lg:text-xl">CODING CONTEST</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/idea_blitz' className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={idea_blitz}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span className="text-lg font-bold text-gray-800 lg:text-xl">IDEA BLITZ</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/kahoot_quiz' className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={kahoot_quiz}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span className="text-lg font-bold text-gray-800 lg:text-xl">KAHOOT QUIZ</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/robo_talk' className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={robo_talk}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span className="text-lg font-bold text-gray-800 lg:text-xl">ROBO TALK</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/poster' className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={poster}  
                  alt="Description of the image"
                  className="absolute inset-0 h-4/5 w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span className="text-lg font-bold text-gray-800 lg:text-xl">POSTER PRESENTATION</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/paper' className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={paper}  
                  alt="Description of the image"
                  className="absolute inset-0 h-3/4 w-6/7 object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span className="text-lg font-bold text-gray-800 lg:text-xl">PARER PRESENTATION</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/technical_quiz' className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={technical_quiz}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span className="text-lg font-bold text-gray-800 lg:text-xl">TECHNICAL QUIZ</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/project' className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={expo}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span className="text-lg font-bold text-gray-800 lg:text-xl">PROJECT EXPO</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/flipIt' className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={flipIt}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span className="text-lg font-bold text-gray-800 lg:text-xl">FLIP_IT & PITCH_IT</span>
                </div>
              </Link>
            </div>

          </div>
        </div>

      </div>

    </>
  )
}

export default Events

