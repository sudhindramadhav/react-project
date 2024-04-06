/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { useEffect } from 'react';
import poster from "../../../Assets/images/posterpresentation.jpg"
import RegisterButton from '../../Registerbutton';
const Poster_presentation = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
  return (
    <>

<section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={poster}/>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">POSTER PRESENTATION
            </h1>
            <p className="mb-8 leading-relaxed text-justify">Poster Presentation
Posters have become an increasingly popular method for presentation at conferences, as they promote greater interaction between researchers and conference participants.</p>
            <div className="flex justify-center">
                <a href='https://docs.google.com/forms/d/e/1FAIpQLScRsuDcwsQKkXH0Ql8Qo6nrK3O4stLHUTSvMJDzK_cyypRq6Q/viewform?usp=sf_link'>
                  <RegisterButton/>
                   </a> 
            </div>
            </div>
        </div>
        <div class='flex justify-center mx-4'>
  <table class='border border-gray-800  mx-auto border-collapse'>
    <thead>
      <tr>
        <th class='border border-gray-800 text-center mx-6 py-2 px-2'>DEPARTMENT</th>
        <th class='border border-gray-800  py-2'>TOPICS</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class='border border-gray-800 py-2'>CSE</td>
        <td class='border border-gray-800 py-2'>
          • ETHICAL HACKING <br />
          • CLOUD COMPUTING <br />
          • IOT & IT'S APPLICATIONS <br />
          • WEB DEVELOPMENT <br />
          • FRONT END TECHNOLOGIES<br />
        </td>
      </tr>
      <tr>
        <td class='border border-gray-800  py-2'>ECE</td>
        <td class='border border-gray-800 py-2'>
          • SIGNAL / IMAGE & VIDEO PROCESSING<br />
          • COMMUNICATION SYSTEMS<br />
          • EMBEDDED SYSTEMS<br />
          • VLSI<br />
          • SENSOR NETWORKING<br />
        </td>
      </tr>
      <tr>
        <td class='border border-gray-800  py-2'>MECH</td>
        <td class='border border-gray-800 py-2'>
          • RECENT TRENDS IN MECHANICAL ENGINEERING<br />
          • ENHANCEMENT OF HEAT TRANSFER TECHNIQUES<br />
          • ROBOTICS, CAD/CAM & FEA<br />
          • NANO-COMPOSITES<br />
          • CAD modelling<br />
          • ADDITIVE AND SUSTAINABLE MANUFACTURING TECHNOLOGIES<br />
        </td>
      </tr>
      <tr>
        <td class='border border-gray-800  py-2'>CIVIL</td>
        <td class='border border-gray-800 py-2'>
          • STRUCTURAL ENGINEERING<br />
          • GEO-TECHNICAL ENGINEERING<br />
          • TRANSPORTATION ENGINEERING<br />
          • WATER RESOURCE ENGINEERING<br />
          • CAD modelling<br />
          • ENVIRONMENTAL ENGINEERING<br />
        </td>
      </tr>
      <tr>
        <td class='border border-gray-800  py-2'>EEE</td>
        <td class='border border-gray-800 py-2'>
          • SMART GRIDS<br />
          • ELECTRIC VEHICLE TECHNOLOGIES<br />
          • POWER QUALITY IMPROVEMENT TECHNIQUES<br />
          • BATTERY MANAGEMENT SYSTEM<br />
          • SOFT COMPUTING TECHNIQUES<br />
        </td>
      </tr>
      <tr>
        <td class='border border-gray-800  py-2'>S&H</td>
        <td class='border border-gray-800 py-2'>
          • NANO MATERIALS<br />
          • TRANSFORM TECHNIQUES<br />
          • POLYMERS<br />
          • APPLICATIONS OF OPTICAL FIBERS & LASERS<br />
          • ADVANCED ENGINEERING MATERIALS<br />
        </td>
      </tr>
      <tr>
        <td class='border border-gray-800 text-center py-2'>IT</td>
        <td class='border border-gray-800 py-2'>
          • BLOCKCHAIN TECHNOLOGIES<br />
          • IOT(INTERNET OF THINGS)<br />
          • BIG DATA<br />
          • CYBER SECURITY<br />
          • CLOUD COMPUTING<br />
          • AUGMENTED REALITY & VIRTUAL REALITY<br />
        </td>
      </tr>
      <tr>
        <td class='border border-gray-800 text-center py-2'>CSA</td>
        <td class='border border-gray-800 py-2'>
          • MACHINE LEARNING<br />
          • BLOCKCHAIN TECHNOLOGIES<br />
          • DEVOPS<br />
          • BIG DATA<br />
          • CYBER SECURITY<br />
          • QUANTUM COMPUTING<br />
          • DATA ANALYTICS<br />
        </td>
      </tr>
      <tr>
        <td class='border border-gray-800 text-center py-2'>MCA</td>
        <td class='border border-gray-800 py-2'>
          • Deep learning, machine learning <br />
          • A.I latest Technologies<br />
          • Blockchain Technologies<br />
          • Cloud computing, Machine Learning<br />
        </td>
      </tr>
      <tr>
        <td class='border border-gray-800 text-center py-2'>MBA</td>
        <td class='border border-gray-800 py-2'>
          • Sustainable Marketing Strategies<br />
          • Digital HR<br />
          • Green Banking<br />
          • Management New Paradigms<br />
          • Entrepreneurship<br />
          • Women Empowerment<br />
        </td>
      </tr>
    </tbody>
  </table>
</div>



    </section>
                <div className="bg-white py-4 sm:py-4 lg:py-6">
                <div className="mx-auto max-w-screen-md px-4 md:px-8">

                    <p>
                    <h4 className='text-red-500'>Instructions to Candidates:</h4><br/><p className='ps-4'>
                            1.Open to all B.E/B.Tech Students<br/>
                            2. A paper/Poster can have maximum of two authors.<br/>
                            3. Papers must be in IEEE Format<br/>
                            4. Papers should be sent through E-mail only<br/>
                            5. No accommodation will be <br/></p>
                              <strong> • Registration Fee and mode of payment</strong><br/><p className='ps-4'>
                            Registration Fee has to be paid in online
                            payment after confirmation. Account details
                            are available in the website.<br/></p>
                              <strong> • Last date for Registration :</strong><p className='ps-4'>  20th April, 2024
                            Intimation of Confirmation: 21th April, 2024 <br/></p>
                            <strong>Registration Fee and mode of payment:</strong> <br/><p className='ps-4'>
                            Registration Fee has to be paid in online
                            payment after confirmation. Account details
                            are available in the website.<br /></p>
                            <strong>Send your papers to</strong> <br/><p className='ps-4'>
                            • CE : <a href='mailto:spark.ce@svce.edu.in' style={{ color: 'blue' }}>spark.ce@svce.edu.in</a><br />
            • EEE : <a href='mailto:spark.eee@svce.edu.in' style={{ color: 'blue' }}>spark.eee@svce.edu.in</a><br />
            • ME : <a href='mailto:spark.me@svce.edu.in' style={{ color: 'blue' }}>spark.me@svce.edu.in</a><br />
            • ECE : <a href='mailto:spark.ece@svce.edu.in' style={{ color: 'blue' }}>spark.ece@svce.edu.in</a><br />
            • CSE : <a href='mailto:spark.cse@svce.edu.in' style={{ color: 'blue' }}>spark.cse@svce.edu.in</a> <br />
            • CSA : <a href='mailto:spark.csa@svce.edu.in' style={{ color: 'blue' }}>spark.csa@svce.edu.in</a><br />
            • HS : <a href='mailto:spark.sh@svce.edu.in' style={{ color: 'blue' }}>spark.sh@svce.edu.in</a><br />
            • IT/CSM/CSD/CSC: <a href='mailto:spark.it@svce.edu.in' style={{ color: 'blue' }}>spark.it@svce.edu.in</a><br /></p>

                    </p>
              
                  <h2 className="my-2 mt-4 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">RULES:</h2>
              
                    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                          <h4 className='text-black-800'> Purpose:</h4> <br/>
                            • To enhance participant’s ability in Writing or making papers in English as well as to present it, and also to broaden the mind of the participants.<br/>
                            <strong className='text-red-300'> Team Formation: </strong><br/>
                            • 1. Team can have maximum of 2 participants from B.Tech/B. E/ Diploma.<br/>
                        2. No participants can be part of more than one team.<br/>
                        3. It is not necessary that the participants forming a team should be from the same college.<br/>
                        4. There is no restriction on the number of teams from the same college.<br/>
                        <strong className='text-red-300'> Presentation Rules: </strong><br/>
                            • 1. The paper submitted will have to be presented during the event.<br/>
                        2. Hard copies of the same are to be submitted before presentation to Judges.<br/>
                        3. The Teams will get 8 minutes to present their paper. And 2 minutes will be for questioning by judges.<br/>
                        4. The participants will have to present their papers in MS-Power Point (ppt) format only.<br/>
                        5. Violation of any rule can result in rejection of paper.<br/>
                        6. The organizers reserve the right to change/update the rules of the contest at any point of time and will do their best to inform to participants of the same. However, it is ultimately the responsibility of the teams to keep themselves updated.<br/>
                           <strong className='text-red-300'>Paper Format Rules:</strong><br/>
                            • The paper should be in IEEE format.<br/>
                        1. Abstract may not exceed the limit of two Pages.<br/>
                        2. The front page should have title of paper on the top and the details of the team members at the bottom. (As mentioned in abstract)<br/>
                        3. It should have abstract attached.<br/>
                        4. Font style for text: Times New Roman.<br/>
                        5. Font size for text: 12 points.<br/>
                        6. Font size for headings: 16 points.<br/>
                        7. Font size for sub-headings: 14 points.<br/>
                        8. Margin of 1 inches from all sides.<br/>
                    </p>

                    <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4"> REGSITRATION FEE:</h2>
              
                    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <h4><strong className='text-red-600'>• 200/- Per Team.</strong></h4><br/>
                    </p>
          
            
                </div>
              </div>
    
    
    </>
  )
}

export default Poster_presentation
