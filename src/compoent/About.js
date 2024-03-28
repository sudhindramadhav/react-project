import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="App">
      <header>
        <p className="text-center"><h4>Welcome to the heart of Spark</h4></p><br></br>

        <h1 className="text-center">Where innovation and creativity collide! Explore our diverse range of events designed to challenge, inspire, and engage attendees from all backgrounds.
          </h1>
          <h1 className="text-center"> Whether you're a seasoned professional or just starting your journey, there's something here for everyone.
        </h1>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 lg:w-1/3">
                <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-6 pb-10 rounded-lg overflow-hidden text-center relative">
                  {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Technical Events</h2> */}
                  <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Technical Events</h1>
                  <p class="leading-relaxed mb-3">Explore our exciting lineup of technical events designed to challenge your skills and expand your knowledge. From coding competitions to hackathons and workshops, these events are perfect for tech enthusiasts looking to push their boundaries and learn something new.
                  </p>
                  <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center pt-2">
                    <Link to='/events'>
                    <a href="/" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 my-4 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Register Now</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/3">
                <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-6 pb-10 rounded-lg overflow-hidden text-center relative">
                  {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                  <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Non-Technical Events</h1>
                  <p class="leading-relaxed mb-3">Dive into our array of non-technical events designed to inspire creativity and foster a sense of community. From art and music competitions to gaming tournaments and leadership workshops, there's something for everyone to enjoy and participate in.
                  </p>
                  <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center pt-2">
                    <Link to='/non_technical'>
                    <a href="/" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 my-4 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Register Now</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div class="p-4 lg:w-1/3">
                <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-6 pb-10 rounded-lg overflow-hidden text-center relative">
                  {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                  <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Spot Events</h1>
                  <p class="leading-relaxed mb-3">"Spot Events at SPARK bring quick, surprising challenges, enabling participants to showcase their skills, spark creativity, and compete in a fun, on-the-spot manner, enhancing the overall experience."
                  </p>
                  <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center pt-8">
                    <Link to='/spot'>
                    <a href="/" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 my-4 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Register Now</a>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default About;
