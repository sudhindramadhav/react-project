/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'
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
        <Link  to='/kahoot_quiz' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
<<<<<<< HEAD
        <img src={process.env.PUBLIC_URL + '/images/gully_cricket.jpg'} loading="lazy"
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
=======
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} loading="lazy" alt="  by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

>>>>>>> b6d18ec1714c89377e09bba34fc6589ddbd17a85
          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-lg font-bold text-gray-800 lg:text-xl">Gully Circket</span>
          </div>
        </Link>
      </div>
    
      <div>
        <Link  to='/robo_talk' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
<<<<<<< HEAD
        <img src={process.env.PUBLIC_URL + '/images/tug_of_war.jpg'} loading="lazy"
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
=======
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} loading="lazy" alt="  by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

>>>>>>> b6d18ec1714c89377e09bba34fc6589ddbd17a85
          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-lg font-bold text-gray-800 lg:text-xl">Tug Of War</span>
          </div>
        </Link>
      </div>

      <div>
<<<<<<< HEAD
        
      </div>
    
      <div>
        
=======
        <Link  to='/kahoot_quiz' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} loading="lazy" alt="  by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-lg font-bold text-gray-800 lg:text-xl">KAHOOT QUIZ</span>
          </div>
        </Link>
      </div>
    
      <div>
        <Link  to='/robo_talk' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} loading="lazy" alt="  by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-lg font-bold text-gray-800 lg:text-xl">ROBO TALK</span>
          </div>
        </Link>
>>>>>>> b6d18ec1714c89377e09bba34fc6589ddbd17a85
      </div>
   
    </div>
  </div>
</div>

    
    </>
  )
}

export default Spot