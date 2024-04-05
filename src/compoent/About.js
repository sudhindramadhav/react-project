import React from "react";
import principal from "../Assets/images/Principal_Passport.jpg"

const About = () => {
  return (
    <div className="App">
      <header>
        <strong><p className="text-center"><h4>Welcome to the heart of Spark</h4></p></strong><br></br>

        <h1 className="px-10 leading-relaxed text-justify">Welcome to a world where innovation and creativity collide! Our diverse range of events is designed to challenge, inspire, and engage attendees from all backgrounds. Whether you're a seasoned professional looking to expand your horizons or just starting your journey of exploration, there's something here for everyone.

          Experience a dynamic lineup of thought-provoking seminars, interactive discussions, and networking opportunities that will spark your imagination and push you to think differently. Join us as we explore cutting-edge ideas, celebrate creativity, and inspire new ways of thinking.

          Come and be a part of this exciting journey where ideas take flight and innovation knows no bounds. Embrace the challenge, ignite your passion, and unlock your full potential with us. The future is waiting – are you ready to explore it?
        </h1>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/2 lg:mb-0 mb-6 p-4 mx-auto">
                <div className="h-full text-center">
                  <img alt="testimonial" className="w-60 h-60 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={principal} />
                  <strong><p className="leading-relaxed text-justify">This event is not just a gathering; it is a testament to our shared values of excellence, collaboration, and celebration.

                    Let us approach this event with enthusiasm and a commitment to showcase the best of who we are. Together, we will create an experience that reflects our collective efforts and achievements. I look forward to seeing our community come together in unity and joy.</p></strong>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Dr N. Sudhakar Reddy</h2>
                  <p className="text-gray-500">Principal, SVCE </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container px-5  mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-6 pb-10 rounded-lg overflow-hidden text-center relative">
                  {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Technical Events</h2> */}
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Technical Events</h1>
                  <p className="leading-relaxed mb-3 text-justify">Explore our exciting lineup of technical events designed to challenge your skills and expand your knowledge. From coding competitions to hackathons and workshops, these events are perfect for tech enthusiasts looking to push their boundaries and learn something new.
                  </p>

                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-6 pb-10 rounded-lg overflow-hidden text-center relative">
                  {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Non-Technical Events</h1>
                  <p className="leading-relaxed mb-3 text-justify">Dive into our array of non-technical events designed to inspire creativity and foster a sense of community. From art and music competitions to gaming tournaments and exciting events, there's something for everyone to enjoy and participate in.
                  </p>

                </div>
              </div>

              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-6 pb-10 rounded-lg overflow-hidden text-center relative">
                  {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Spot Events</h1>
                  <p className="leading-relaxed mb-3 text-justify">"Spot Events at SPARK bring quick, surprising challenges, enabling participants to showcase their skills, spark creativity, and compete in a fun, on-the-spot manner, enhancing the overall experience."
                  </p>

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
