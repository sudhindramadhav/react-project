import React from 'react'
import { useEffect } from 'react';
import reels from "../../../Assets/images/reels.jpg"
import RegisterButton from '../../Registerbutton';
const Reels = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
  return (
    <>
        <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={reels}/>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">INSTAGRAM REELS
            </h1>
            <p className="mb-8 leading-relaxed text-justify">REELS: The Contest is based on Instagram Reels.</p>
            <div className="flex justify-center">
              <a href='https://forms.gle/GG7ALnsPh8TWbJNu6'>
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
                    ➤ The reel must be an original creation.<br/>
                    ➤ Plagiarized content lead to disqualification.<br/>
                    ➤ Only one entry from each participant will be accepted, and a second entry will lead to disqualification.<br/>
                    ➤ The Cash Prize is Given to Top 2 Winners (1 male, 1 female) of the overall contest.<br/>
                    ➤ The decision of the judging panel will be final.<br/>
                    ➤ Share your reels to @theatreclub_svcolleges Instagram page with following details : <br/>
                    <p className='ps-6'>
                    ➤	Name of the participant <br/>
                    ➤	College Name <br/>
                    ➤	Branch/Year  <br/>
                    ➤	Email Id     <br/>
                    ➤ Mobile Number<br/>
                    <strong>Winning Criteria :</strong><br/><br/>
                      </p>
1
1.Top 20 posts will be shown to judges. Post With Highest Views Will be Declared as One Winner.<br/>
2.Winners will be announced in the page itself and also will be notified through mail.<br/>

                    </p>
                    <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">STUDENT COORDINATORS :</h2>
              
                    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    • CH.GOVARDHAN- 89193 33975<br/>
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

export default Reels