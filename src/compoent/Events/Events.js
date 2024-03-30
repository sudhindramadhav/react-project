/* eslint-disable jsx-a11y/img-redundant-alt */

import React from 'react'
import { Link } from 'react-router-dom'

const Events = () => {
  return (
    <>
      <div class="container  py-5 mx-auto flex flex-wrap flex-col">
        <nav class="flex lg:mx-auto flex-wrap justify-center ">
          <Link to='/non_technical' class="sm:px-8 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-indigo-500 tracking-wider text-center">
            Non Technical
          </Link>
          <Link to='/spot' class="sm:px-8 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-indigo-500 tracking-wider">
            Spot
          </Link>
        </nav>
      </div>


      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">TECHNICAL EVENTS</h2>

          <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">

            <div>
              <Link to='/bwb' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={process.env.PUBLIC_URL + '/images/build_with_bits.jpg'} loading="lazy"
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">BUILD WITH BITS</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/circut_trace' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={process.env.PUBLIC_URL + '/images/circut_trace.jpg'} loading="lazy"
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">CIRCUT TRACE</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/coding_automata' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={process.env.PUBLIC_URL + '/images/coding_automata.jpg'} loading="lazy"
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">CODING AUTOMATA</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/coding_contest' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={process.env.PUBLIC_URL + '/images/codingcontest.jpg'} loading="lazy"
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">CODING CONTEST</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/idea_blitz' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={process.env.PUBLIC_URL + '/images/idea_blitz.jpeg'} loading="lazy"
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">IDEA BLITZ</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/kahoot_quiz' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={process.env.PUBLIC_URL + '/images/kahoot_quiz.png'} loading="lazy"
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">KAHOOT QUIZ</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/robo_talk' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={process.env.PUBLIC_URL + '/images/robotalk.jpg'} loading="lazy"
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">ROBO TALK</span>
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

