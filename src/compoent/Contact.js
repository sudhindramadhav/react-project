import React from "react";
 // Import CSS file for styling
import './Contact.css';
const Contact = () => {
  return (
    <>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-xl px-4 md:px-8">
         
            <div class="mb-10 md:mb-16">
              <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Meet our Team</h2>

              
            </div>
            

            <div class="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
         
              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
                <div class="h-30 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-40 md:w-32">
                  <img src={process.env.PUBLIC_URL + '/images/praveen.jpg'} loading="lazy" alt=" by Radu Florin" class="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <div class="text-center font-bold text-indigo-500 sm:text-left md:text-lg">Praveen</div>
                  <p class="text-center text-sm text-gray-500 sm:text-left md:text-base">Coordinator</p>
                </div>
              </div>
             
              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
                <div class="h-30 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32">
                  <img src={process.env.PUBLIC_URL + '/images/murali.jpeg'} loading="lazy" alt=" by christian ferrer" class="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <div class="text-center font-bold text-indigo-500 sm:text-left md:text-lg">DJ Murali Mahes</div>
                  <p class="text-center text-sm text-gray-500 sm:text-left md:text-base">Website Incharge</p>
                </div>
              </div>
          
              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
                <div class="h-30 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-40 md:w-32">
                  <img src={process.env.PUBLIC_URL + '/images/Sudhindra1.jpeg'} loading="lazy" alt=" by Ayo Ogunseinde" class="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <div class="text-center font-bold text-indigo-500 sm:text-left md:text-lg">KKM Sudhindra</div>
                  <p class="text-center text-sm text-gray-500 sm:text-left md:text-base">Website Inchare</p>
                </div>
              </div>
          
              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
                <div class="h-30 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-40 md:w-32">
                  <img src={process.env.PUBLIC_URL + '/images/praveen.jpg'} loading="lazy" alt=" by Midas Hofstra" class="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <div class="text-center font-bold text-indigo-500 sm:text-left md:text-lg">Robert Greyson</div>
                  <p class="text-center text-sm text-gray-500 sm:text-left md:text-base">Creative Director</p>
                </div>
              </div>
             
              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
                <div class="h-30 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32">
                  <img src={process.env.PUBLIC_URL + '/images/praveen.jpg'} loading="lazy" alt=" by Elizeu Dias" class="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <div class="text-center font-bold text-indigo-500 sm:text-left md:text-lg">John Roberts</div>
                  <p class="text-center text-sm text-gray-500 sm:text-left md:text-base">Investor Relations</p>
                </div>
              </div>
       
              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
                <div class="h-30 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32">
                  <img src={process.env.PUBLIC_URL + '/images/praveen.jpg'} loading="lazy" alt=" by Matheus Ferrero" class="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <div class="text-center font-bold text-indigo-500 sm:text-left md:text-lg">Judy Amandez</div>
                  <p class="text-center text-sm text-gray-500 sm:text-left md:text-base">Senior Art Director</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
    </>
  );
};

export default Contact;
