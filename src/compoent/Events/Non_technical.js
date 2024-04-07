/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'
import color_paint from "../../Assets/images/color_paint.jpg"
import dialoguewar from "../../Assets/images/dialoguewar.jpeg"
import dillse from "../../Assets/images/dliise.jpg"
import dumbcharades from "../../Assets/images/dumbcharades.jpg"
import face_paint from "../../Assets/images/minipolaroid.jpg"
import gana from "../../Assets/images/singing.jpg"

import poetry from "../../Assets/images/poetry.jpg"
import rampwalk from "../../Assets/images/rampwalk.jpg"
import reels from "../../Assets/images/reels.jpg"

import sound_space from "../../Assets/images/musicialinstrument.jpeg"
import standupcomedy from "../../Assets/images/standupcomedy.jpg"


const Non_technical = () => {
  return (
    <>
        <p className='text-red-500 text-center text-xl'>Note: Entry Fee of 300/- is mandatory for participating in this events</p>
      <div className="container  py-5 mx-auto flex flex-wrap flex-col">
        <nav className="flex lg:mx-auto flex-wrap justify-center">
          <Link to='/events' className="sm:px-8 py-3 w-1/3 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-indigo-500 tracking-wider text-center">
            Technical
          </Link>
          <Link to='/spot' className="sm:px-8 py-3 w-1/3 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-indigo-500 tracking-wider">
            Spot
          </Link>
        </nav>
      </div>




      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">Non Technical Events</h2>


          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">

            <div>
              <Link to='/colour-paint' className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={color_paint}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span className="text-lg font-bold text-gray-800 lg:text-xl">One Minute Drawing</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/dialogue-war' className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={dialoguewar}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span className="text-lg font-bold text-gray-800 lg:text-xl">Dialogue War</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/dillse-dance' className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={dillse}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span className="text-lg font-bold text-gray-800 lg:text-xl">Dillse Dance</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/dumb-charades' className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={dumbcharades}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span className="text-lg font-bold text-gray-800 lg:text-xl">Dumb Charades</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/face-paint' className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={face_paint}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span className="text-lg font-bold text-gray-800 lg:text-xl">MINI POLAROID PAINTING</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/gana' className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={gana}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span className="text-lg font-bold text-gray-800 lg:text-xl">Gaana</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/poetry-pros' className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={poetry}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span className="text-lg font-bold text-gray-800 lg:text-xl">Poetry Pro's</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/ramp-walk' className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={rampwalk}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span className="text-lg font-bold text-gray-800 lg:text-xl">Ramp Walk</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/reels' className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={reels}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span className="text-lg font-bold text-gray-800 lg:text-xl">Reels</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/sound-space' className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={sound_space}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span className="text-lg font-bold text-gray-800 lg:text-xl">Sound Space</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/stand-up-comedy' className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={standupcomedy}  
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span className="text-lg font-bold text-gray-800 lg:text-xl">Stand Up Comedy</span>
                </div>
              </Link>
            </div>

          </div>

                          

        </div>
      </div>

    </>
  )
}

export default Non_technical