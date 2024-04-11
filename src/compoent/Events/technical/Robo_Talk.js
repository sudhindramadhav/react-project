import React from 'react'
import { useEffect } from 'react';
import robo_talk from "../../../Assets/images/robotalk.jpg"
import RegisterButton from '../../Registerbutton';
const Robo_Talk = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={robo_talk} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">ROBO TALK
            </h1>
            <p className="mb-8 leading-relaxed text-justify">ROBO TALK: is an engaging and educational event designed to explore the fascinating world of robotics. Participants will embark on a two-level journey, starting with Level 1, where they'll be tested on their basic knowledge of robots. Those who excel will progress to Level 2, where they'll identify specific components of robots and explain their functionalities.</p>
            <p className="mb-8 leading-relaxed text-justify">This event isn't just about answering questions; it's about understanding the inner workings of robots and how they impact our world. Finalists will have the opportunity to delve deep into the realm of robotics by researching and presenting on an advanced real-life robot, discussing its advantages and disadvantages.</p>
            <div className="flex justify-center">
              <a href='https://forms.gle/kqLgP9urMqWPzNy3A'>
                <RegisterButton/>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white py-4 sm:py-4 lg:py-6">
        <div className="mx-auto max-w-screen-md px-4 md:px-8">

          <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">RULES :</h2>

          <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
          <strong>➤ The event is structured as a representation of real-world robots and aims to cover basic information
            about robots across 2 levels </strong><br /><br/>
            <strong>• Level 1 : </strong><br/><p className='ps-4'>-Participants answer basic questions about robots.<br />
            -Participants' response are evaluated and top perfromes are selected for round 2.<br/><br/></p>
            <strong>• Level 2 : </strong><br/><p className='ps-4'>-Participants identify specific components of robots and explain their functionalities. <br />
            -Provide finalists with guidelines for selecting and researching advanced real-life robots for their presentations. <br/>
            -Winners will be decided based on quiz performance, component identification, and presentation quality.</p>
          </p>

          <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">STUDENT COORDINATORS :</h2>

          <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
            • R. Simhadri - 8919386853<br />
          </p>

          <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">REGISTRATION FEE:</h2>

          <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
            <h4><strong className='text-red-600'>• 50/- Per Head.</strong></h4><br />
          </p>

        </div>
      </div>


    </>
  )
}

export default Robo_Talk