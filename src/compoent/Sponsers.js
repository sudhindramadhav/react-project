import React from "react";
import fgc from "../Assets/images/global.jpeg"
import viva from "../Assets/images/vivawa bhojana.jpeg"
import dance from "../Assets/images/team twoz logo.png"
import elite from "../Assets/images/elite park 2.jpg"
import emphasis from "../Assets/images/emphasis.jpeg"
import sree from "../Assets/images/sree veshwara.jpeg"
import city from "../Assets/images/citycare.jpeg"
const sponser = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-grey-600">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl mt-6">TITLE SPONSORED BY</h2>
        <div className="container mx-auto flex px-2  items-center justify-center flex-col">
          <img className="lg:w-1/3 md:w-3/6 w-5/6  object-cover object-center rounded" alt="hero" src={fgc}/>
          <div className="text-center lg:w-3/4 w-full">
            
          <div className="bg-white sm:py-4 ">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="grid grid-cols-3  rounded-lg bg-gray-100 p-6  sm:content-evenly md:grid-cols-3">
          
            <div className="flex justify-center text-gray-400">
            <img alt="testimonial" className=" object-cover object-center  inline-block  border-gray-200 bg-gray-100 my-6 h-12 lg:h-40" src={elite}></img>
            </div>
     
            <div className="flex justify-center text-gray-400">
            <img alt="testimonial" className=" object-cover object-center  inline-block  border-gray-200 bg-gray-100 my-6 h-12 lg:h-40" src={city}></img>
            </div>
           
            <div className="flex justify-center text-gray-400">
            <img alt="testimonial" className=" object-cover object-center  inline-block  border-gray-200 bg-gray-100 my-6 h-12 lg:h-40" src={sree}></img>
            </div>
         
          </div>
        </div>
      </div>

          </div>
        </div>
      </section>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between">
      <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 lg:mb-0 lg:text-3xl">Event Sponsors</h2>
    </div>

    <div className="grid grid-cols-3  gap-4 rounded-lg md:grid-cols-3  lg:gap-6">
    
      <div className="flex  items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 ">
      <img alt="testimonial" className=" object-cover object-center  inline-block  border-gray-200 bg-gray-100" src={viva}></img>
      </div>
    
      <div className="flex  items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 ">
      <img alt="testimonial" className=" object-cover object-center  inline-block  border-gray-200 bg-gray-100" src={dance}></img>
      </div>
     
      <div className="flex  items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 ">
      <img alt="testimonial" className=" object-cover object-center  inline-block  border-gray-200 bg-gray-100" src={emphasis}></img>
      </div>
     
    </div>
  </div>
</div>
         
    </>
  )
}
export default sponser