import React from 'react'
import akil from "../Assets/images/akil.jpg"
import gallery1 from "../Assets/images/gallery1.jpg"
import gallery2 from "../Assets/images/gallery2.jpg"
import gallery3 from "../Assets/images/gallery3.jpg"

const Gallery = () => {
  return (
    <>
    
    <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
      <div class="flex items-center gap-12">
        <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">Gallery</h2>


      </div>


    </div>

    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
 
      <div class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
        <img src={akil}   alt="  by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        
      </div>
   
      <div class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
        <img src={gallery1}  alt="  by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

      </div>
     
      <div class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
        <img src={gallery2}   alt="  by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

   
      </div>
   
      <div class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
        <img src={gallery3}  alt="  by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

      </div>
   
    </div>
  </div>
</div>
    
    
    </>
  )
}

export default Gallery