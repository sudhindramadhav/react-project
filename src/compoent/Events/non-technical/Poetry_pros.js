import React from 'react'
import { useEffect } from 'react';
import poetry from "../../../Assets/images/poetry.jpg"
import RegisterButton from '../../Registerbutton';
const Poetry_pros = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
  return (
    <>
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={poetry}/>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">POETRY PROS
            </h1>
            <p class="mb-8 leading-relaxed text-justify">POETRY PROS: likely refers to individuals who are skilled or experienced in writing poetry. These are people who have a deep understanding of poetic forms, techniques, and language, and who can effectively express their thoughts and emotions through poetry. Poetry pros may include published poets, spoken word artists, poetry teachers, or anyone who has a strong passion and talent for crafting poems.</p>
            <div class="flex justify-center">
              <a href='https://forms.gle/rUKgohpVcfUMn8rA8 '>
                <RegisterButton/>
                </a>
            </div>
            </div>
        </div>
    </section>
                <div class="bg-white py-4 sm:py-4 lg:py-6">
                <div class="mx-auto max-w-screen-md px-4 md:px-8">
              
                  <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">RULES:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    ➤ Only one round is conducted.<br/>
                    ➤ Student will be provided a paper and topic instantly.<br/>
                    ➤ And some time (around 15 mins) is provided to think and write.<br/>
                    ➤ Once the student is ready, he/she may proceed to present their poetry orally.<br/>
                    ➤ Judges decision is final.<br/>
                    </p>
                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">CO-ORDINATORS :</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    • M. VENKATA NARASIMHA - 70328 29039 – 2ND ECE.<br/>
                    • M. CHARU HASINI - 6281 779 813 – 2ND ECE.<br/>
                    </p>

                    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">REGISTRATION FEE:</h2>
              
                    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    <strong>50/- Per Head</strong><br/>
                    </p>
            
                </div>
              </div>
    
    </>
  )
}

export default Poetry_pros