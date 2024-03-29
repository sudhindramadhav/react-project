/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'
const Non_technical = () => {
  return (
    <>

      <div class="container  py-5 mx-auto flex flex-wrap flex-col">
        <nav class="flex lg:mx-auto flex-wrap justify-center">
          <Link to='/events' class="sm:px-8 py-3 w-1/3 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-indigo-500 tracking-wider text-center">
            Technical
          </Link>
          <Link to='/spot' class="sm:px-8 py-3 w-1/3 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-indigo-500 tracking-wider">
            Spot
          </Link>
        </nav>
      </div>




      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">Non Technical Events</h2>

<<<<<<< HEAD
          <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">

            <div>
              <Link to='/colour-paint' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={process.env.PUBLIC_URL + '/images/color_paint.jpg'} loading="lazy"
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Color Paint</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/dialogue-war' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={process.env.PUBLIC_URL + '/images/dialogur_war.jpg'} loading="lazy"
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Dialogue War</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/dillse-dance' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={process.env.PUBLIC_URL + '/images/dance.jpg'} loading="lazy"
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Dillse Dance</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/dumb-charades' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={process.env.PUBLIC_URL + '/images/dumb_charades.jpg'} loading="lazy"
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Dumb Charades</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/face-paint' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={process.env.PUBLIC_URL + '/images/face_paint.jpg'} loading="lazy"
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Face Paint</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/gana' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={process.env.PUBLIC_URL + '/images/idea_blitz.jpeg'} loading="lazy"
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Gana</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/mehandi' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={process.env.PUBLIC_URL + '/images/idea_blitz.jpeg'} loading="lazy"
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Mehandi</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/meme-challenge' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={process.env.PUBLIC_URL + '/images/idea_blitz.jpeg'} loading="lazy"
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Meme challenge</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/pencil-sketch' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={process.env.PUBLIC_URL + '/images/idea_blitz.jpeg'} loading="lazy"
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Pencil Sketch</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/period-pain' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={process.env.PUBLIC_URL + '/images/idea_blitz.jpeg'} loading="lazy"
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Period Pain</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/poetry-pros' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={process.env.PUBLIC_URL + '/images/idea_blitz.jpeg'} loading="lazy"
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Poetry Pro's</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/ramp-walk' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={process.env.PUBLIC_URL + '/images/idea_blitz.jpeg'} loading="lazy"
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Ramp Walk</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/reels' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={process.env.PUBLIC_URL + '/images/idea_blitz.jpeg'} loading="lazy"
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Reels</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/short-film' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={process.env.PUBLIC_URL + '/images/idea_blitz.jpeg'} loading="lazy"
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Short Film</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/sound-sapce' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={process.env.PUBLIC_URL + '/images/idea_blitz.jpeg'} loading="lazy"
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Sound Space</span>
                </div>
              </Link>
            </div>

            <div>
              <Link to='/stand-up-comedy' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src={process.env.PUBLIC_URL + '/images/idea_blitz.jpeg'} loading="lazy"
                  alt="Description of the image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Stand Up Comedy</span>
                </div>
              </Link>
            </div>
=======
    <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      
    <div>
        <Link  to='/colour-paint' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} loading="lazy" alt="  by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
>>>>>>> b6d18ec1714c89377e09bba34fc6589ddbd17a85

          </div>
        </div>
      </div>

<<<<<<< HEAD
=======
      <div>
        <Link  to='/dialogue-war' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} loading="lazy" alt="  by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-lg font-bold text-gray-800 lg:text-xl">Dialogue War</span>
          </div>
        </Link>
      </div>

      <div>
        <Link  to='/dillse-dance' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} loading="lazy" alt="  by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-lg font-bold text-gray-800 lg:text-xl">Dillse Dance</span>
          </div>
        </Link>
      </div>

      <div>
        <Link  to='/dumb-charades' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} loading="lazy" alt="  by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-lg font-bold text-gray-800 lg:text-xl">Dumb Charades</span>
          </div>
        </Link>
      </div>
      
      <div>
        <Link  to='/face-paint' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} loading="lazy" alt="  by engin akyurt" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-lg font-bold text-gray-800 lg:text-xl">Face Paint</span>
          </div>
        </Link>
      </div>
     
      <div>
        <Link  to='/gana' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} loading="lazy" alt="  by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-lg font-bold text-gray-800 lg:text-xl">Gana</span>
          </div>
        </Link>
      </div>
    
      <div>
        <Link  to='/mehandi' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} loading="lazy" alt="  by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-lg font-bold text-gray-800 lg:text-xl">Mehandi</span>
          </div>
        </Link>
      </div>

      <div>
        <Link  to='/meme-challenge' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} loading="lazy" alt="  by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-lg font-bold text-gray-800 lg:text-xl">Meme challenge</span>
          </div>
        </Link>
      </div>

      <div>
        <Link  to='/pencil-sketch' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} loading="lazy" alt="  by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-lg font-bold text-gray-800 lg:text-xl">Pencil Sketch</span>
          </div>
        </Link>
      </div>

      <div>
        <Link  to='/period-pain' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} loading="lazy" alt="  by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-lg font-bold text-gray-800 lg:text-xl">Period Pain</span>
          </div>
        </Link>
      </div>

      <div>
        <Link  to='/poetry-pros' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} loading="lazy" alt="  by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-lg font-bold text-gray-800 lg:text-xl">Poetry Pro's</span>
          </div>
        </Link>
      </div>
      
      <div>
        <Link  to='/ramp-walk' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} loading="lazy" alt="  by engin akyurt" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-lg font-bold text-gray-800 lg:text-xl">Ramp Walk</span>
          </div>
        </Link>
      </div>
     
      <div>
        <Link  to='/reels' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} loading="lazy" alt="  by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-lg font-bold text-gray-800 lg:text-xl">Reels</span>
          </div>
        </Link>
      </div>
    
      <div>
        <Link  to='/short-film' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} loading="lazy" alt="  by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-lg font-bold text-gray-800 lg:text-xl">Short Film</span>
          </div>
        </Link>
      </div>

      <div>
        <Link  to='/sound-sapce' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} loading="lazy" alt="  by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-lg font-bold text-gray-800 lg:text-xl">Sound Space</span>
          </div>
        </Link>
      </div>
    
      <div>
        <Link  to='/stand-up-comedy' class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} loading="lazy" alt="  by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-lg font-bold text-gray-800 lg:text-xl">Stand Up Comedy</span>
          </div>
        </Link>
      </div>
   
    </div>
  </div>
</div>

>>>>>>> b6d18ec1714c89377e09bba34fc6589ddbd17a85
    </>
  )
}

export default Non_technical