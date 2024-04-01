/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'
import gully_cricket from "../../Assets/images/gully_cricket.jpg"
import tug_of_war from "../../Assets/images/tug_of_war.jpg"
import bgmi from "../../Assets/images/bgmi.jpeg"
import ff from "../../Assets/images/FreeFire.jpg"
import movieQuiz from "../../Assets/images/movieQuiz.jpeg"
const Spot = () => {
  return (
    <>

<div class="container  py-5 mx-auto flex flex-wrap flex-col">
            <nav class="flex lg:mx-auto flex-wrap justify-center">
            <Link to='/events' class="sm:px-8 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-indigo-500 tracking-wider text-center">
                
                Technical
            </Link>
            <Link to='/non_technical' class="sm:px-8 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-indigo-500 tracking-wider">
                Non Technical
            </Link>
            </nav>
        </div>




      <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">Spot Events</h2>

    <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      
    <div>
        <Link  to='/gully_cricket' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">


          <img src={gully_cricket}   alt="  by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-lg font-bold text-gray-800 lg:text-xl">Gully Circket</span>
          </div>
        </Link>
      </div>
    
      <div>
        <Link  to='/tug_of_war' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">


          <img src={tug_of_war}   alt="  by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-lg font-bold text-gray-800 lg:text-xl">Tug Of War</span>
          </div>
        </Link>
      </div>

      <div>
        <Link  to='/bgmi' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">


          <img src={bgmi}   alt="  by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-lg font-bold text-gray-800 lg:text-xl">BGMI</span>
          </div>
        </Link>
      </div>

      <div>
        <Link  to='/ff' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">


          <img src={ff}   alt="  by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-lg font-bold text-gray-800 lg:text-xl">FREE FIRE</span>
          </div>
        </Link>
      </div>

      <div>
        <Link  to='/movieQuiz' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">


          <img src={movieQuiz}   alt="  by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-lg font-bold text-gray-800 lg:text-xl">MOVIE QUIZ</span>
          </div>
        </Link>
      </div>

      <div>        
      </div>
    

   
    </div>
  </div>
</div>

    
    </>
  )
}

export default Spot