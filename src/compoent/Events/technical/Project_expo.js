/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import project from "../../../Assets/images/project.jpeg"
import { useEffect } from 'react';
import RegisterButton from '../../Registerbutton';
const Project_expo = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <>
            <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={project}/>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Project Expo
            </h1>
            <p className="mb-8 text-justify">    • Project Expo is a technical event in which the participants  should prepare  their project at home and they have to  bring the project to demonstrate before the judges.<br/>
    • There is only one round and the best is chosen by the judges and the respective prizes are given away.</p>
            <div className="flex justify-center">
                <a href='https://docs.google.com/forms/d/e/1FAIpQLScRsuDcwsQKkXH0Ql8Qo6nrK3O4stLHUTSvMJDzK_cyypRq6Q/viewform?usp=sf_link'>
                  <RegisterButton/>
                  </a> 
            </div>
            </div>
        </div>
    </section>
                <div className="bg-white py-4 sm:py-4 lg:py-6">
                <div className="mx-auto max-w-screen-md px-4 md:px-8">
              
                  <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">RULES :</h2>
              
                    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8 leading-relaxed">
                    <strong className='text-black-400'>General Rules and Guidelines for competition:</strong><br/>
                    <strong>➤ Each team can have maximum of 4 members.</strong><br/>
                    ➤ The competition is open to only under graduate students.<br/>
                    ➤ Members should have a valid student ID card of their college.<br/>
                    ➤ A team member can participate in only one project presentation.<br/><br/>
                                <strong className='text-black-400'> Regulations for  competition and display of Project :</strong><br/>
                            Student taking part in project exhibition event should follow certain rules regarding the event.<br/>
                            1. The project for competition must be displayed and presented with an effective power point presentation.<br/>
                            2. The presentation  should  contain  a  simple description  about  their  project.<br/>
                            3. The  candidates  can  take help of following points to describe their project in the ppt.<br/>
                                <strong>• Introduction</strong><br/>
                                <strong>• Block diagram</strong><br/>
                                <strong>• Working principle</strong><br/>
                                <strong>• Its advantage and disadvantages</strong><br/>
                                <strong>• Future Work</strong><br/><br/>
                            4.Teams will be given a space to set up their model/design at the venue, center-3  for exhibition and for judging.<br/><br/>
                            <strong className='text-black-400'>Important note:</strong><br/>
                                • Partial outputs are considered.<br/>
                                • All selected participants will receive participation certificate.<br/>
                                • Basic system requirement  will  be  made  available  to participants as per requirement of project.<br/>
                                • Participants should  bring  all  their requirements to execute their project.<br/>
                                • The decision of the judges shall be treated as final and binding.<br/>
                                • The panel  of  judges  consists  of  subject  experts from  our college.<br/>
                                • The organizers  reserve the  rights  to  change  any  or  all  of  the  above  rules  as  they  deem fit<br/><br/>
                                <strong className='text-black-400'>Judging:  Key Evaluation Criteria would be</strong><br/>
                                • Innovation<br/>
                                • Design (Compactness and the efficiency of work done)<br/>
                                • Efficiency (Performance of said task)<br/>
                                • Relevance with practical need<br/>
                    </p>

                    <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">REGISTRATION FEE:</h2>
              
                    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <h4><strong className='text-red-600'>• 300/- Per Team.</strong></h4><br/>
                    </p>
            
                </div>
              </div>
    
    
    </>
  )
}

export default Project_expo