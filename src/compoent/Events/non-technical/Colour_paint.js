/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useEffect } from 'react';
import colour_paint from "../../../Assets/images/color_paint.jpg"
import RegisterButton from '../../Registerbutton';
const Colour_paint = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
  return (
    <>
        <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={colour_paint}/>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">ONE MINUTE DRAWING
            </h1>
            <p className="mb-8 leading-relaxed text-justify">A simple drawing will be shown to the participants. They will be given one minute time to draw. The evaluation will be based on which participant completed the drawing within the given timeline.</p>
            <div className="flex justify-end">
              <a href='https://forms.gle/nwSnmfiFSGcW7DNq6'>
                <RegisterButton/>
                </a>
            </div>
            </div>
        </div>
    </section>
                <div className="bg-white py-6 sm:py-4 lg:py-6">
                <div className="mx-auto max-w-screen-md px-4 md:px-8">
              
                  <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">RULES :</h2>
              
                    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    ➤   The time given for drawing will be only one minute.<br/>

                    ➤   The participants should finish the work within the given time. No extra time will be given.<br/>

                    ➤   Only individual participants are allowed.<br/>
                    </p>

                    <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">STUDENT COORDINATORS :</h2>
              
                    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    • B. Prathyusha - 8247274024<br/>
                    </p>

                    <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">REGISTRATION FEE:</h2>
              
                    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <strong className='text-red-600'>• 50/- Per Head.</strong><br/>
                    </p>
            
                </div>
              </div>
    
    </>
  )
}

export default Colour_paint