import React from 'react'
import { useEffect } from 'react';
import idea_blitz from "../../../Assets/images/idea_blitz.jpeg"
import RegisterButton from '../../Registerbutton';
const Idea_Blitz = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <>
    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={idea_blitz}/>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">IDEA BLITZ
            </h1>
            <p className="mb-8 leading-relaxed text-justify">Idea Blitz: A compact, engaging brainstorming event, where participants in groups of 3-5 collaborate on inventive solutions for various problem statements. Prizes and appreciation are given for the most creative, feasible ideas, fostering an atmosphere of innovation and enthusiasm.</p>
            <div className="flex justify-center">
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSfC-XTNTgFvnYUa6idI_mz5CNRVqpNny9T48jHu9qM3uJwbBg/viewform?usp=sf_link'>
                <RegisterButton/>
                </a>
            </div>
            </div>
        </div>
    </section>
                <div className="bg-white py-4 sm:py-4 lg:py-6">
                <div className="mx-auto max-w-screen-md px-4 md:px-8">
              
                  <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">RULES:</h2>
              
                    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <strong>➤ Participants should form a team of 3-5 members.</strong><br/>
                    ➤ A clear and random problem statements list will be provided at the beginning. <br/>
                    ➤ Teams brainstorm to generate as many ideas as possible.<br/>
                    ➤ Ideas should be creative and relevant to the problem statement.<br/>
                    ➤ Each team presents their top ideas in 3 minutes.<br/>
                    ➤ Awards are given for the most creative and feasible ideas.<br/>
                    </p>
                    <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">STUDENT COORDINATORS :</h2>
              
                    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    • C.Mounika Roy - 9391755292<br/>
                    </p>

                    <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">REGISTRATION FEE:</h2>
              
                    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <h4><strong className='text-red-600'>• 100/- Per Team.</strong></h4><br/>
                    </p>
            
                </div>
              </div>
    
    </>
    



  )
}

export default Idea_Blitz;