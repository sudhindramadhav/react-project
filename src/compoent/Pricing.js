import React, { useState, useEffect } from 'react';
import silver from "../Assets/images/silver2.jpeg";
import gold from "../Assets/images/yello2.jpeg";
import brass from "../Assets/images/brass2.jpeg";

const Pricing = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2024-04-23T18:29:59+05:30');
    const currentDate = new Date();

    const remainingTime = targetDate.getTime() - currentDate.getTime();

    if (remainingTime <= 0) {
      setButtonDisabled(true);
    } else {
      const timer = setTimeout(() => {
        setButtonDisabled(true);
      }, remainingTime);

      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">COMBO OFFERS</h2>
          <div className="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">

            <div className="flex flex-col overflow-hidden rounded-lg border sm:mt-8">
              <div className="h-2 bg-yellow-800"></div>

              <div className="flex flex-1 flex-col p-6 pt-8">
                <div className="mb-12">
                  <div className="mb-4 text-center text-2xl font-bold text-gray-800">Explorer </div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img alt="hero" src={brass} style={{ height: '120px' }} />
                  </div>

                  <div className="space-y-4">

                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>

                      <span className="text-gray-600">Pro Show</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>

                      <span className="text-gray-600">Technical Events</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>

                      <span className="text-gray-600">Non Technical Events</span>
                    </div>

                  </div>
                </div>

                <div className="mt-auto flex justify-center">
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSdJmsfz-_2KK8JmeF1VqDD_YBI7B2TTQIvoxVtNansCa0g83Q/viewform?usp=sf_link'>
                  <button
                    className={`block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-red-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base flex justify-center ${buttonDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
                    disabled={buttonDisabled}
                  >
                    <div className="text-red-500 line-through text-xl pe-2 mt-1.5">₹500</div>
                    <div className="text-black text-3xl">₹300</div>
                  </button></a>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-lg border-2 border-gray-500">
              <div className="bg-gray-400 py-2 text-center text-sm font-semibold uppercase tracking-widest text-white">Popular choice</div>

              <div className="flex flex-1 flex-col p-6 pt-8">
                <div className="mb-12">
                  <div className="mb-2 text-center text-2xl font-bold text-gray-800">Achiever</div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img alt="hero" src={silver} style={{ height: '120px' }} />
                  </div>

                  <div className="space-y-4">

                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>

                      <span className="text-gray-600">Pro Show</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>

                      <span className="text-gray-600">Technical Event <strong>(Any One)</strong></span>
                    </div>
                    

                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>

                      <span className="text-gray-600">Non Technical Event <strong>(Any One)</strong></span>
                    </div>
                    <br />
                    <p className="mb-6 text-red-500 sm:text-lg md:mb-8">
                      <strong>NOTE : Only Solo Participation Events</strong>
                    </p>

                  </div>
                </div>

                <div className="mt-auto flex justify-center"><a href='https://docs.google.com/forms/d/e/1FAIpQLSddHBkExqgusFeaHM1EM4pdphwsYqpAjUWRvwH48n199MZE9w/viewform?usp=sf_link'>
                  <button
                    className={`block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-red-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base flex justify-center ${buttonDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
                    disabled={buttonDisabled}
                  >
                    <div className="text-red-500 line-through text-xl pe-2 mt-1.5">₹700</div>
                    <div className="text-black text-3xl">₹400</div>
                  </button></a>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-lg border lg:mt-8">
              <div className="h-2 bg-yellow-500"></div>

              <div className="flex flex-1 flex-col p-6 pt-8">
                <div className="mb-12">
                  <div className="mb-2 text-center text-2xl font-bold text-gray-800">Champion</div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img alt="hero" src={gold} style={{ height: '120px' }} />
                  </div>

                  <div className="space-y-4">

                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>

                      <span className="text-gray-600">Pro Show</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>

                      <span className="text-gray-600">Technical Event <strong>(Any Two)</strong></span>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>

                      <span className="text-gray-600">Non Technical Event <strong>(Any Two)</strong></span>
                    </div><br/>
                    <p className="mb-6 text-red-500 sm:text-lg md:mb-8">
                      <strong>NOTE : Only Solo Participation Events</strong>
                    </p>
                  </div>
                </div>

                <div className="mt-auto flex justify-center">
                  <a href='https://docs.google.com/forms/d/e/1FAIpQLSdGZgUL8qgj3Z8tjYAtxyNgpW8sXxoZt1MhWt0STMjb58Ux9Q/viewform?usp=sf_link'>
                  <button
                    className={`block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-red-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base flex justify-center ${buttonDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
                    disabled={buttonDisabled}
                  >
                    <div className="text-red-500 line-through text-xl pe-2 mt-1.5">₹1000</div>
                    <div className="text-black text-3xl">₹500</div>
                  </button></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;

