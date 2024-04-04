import React from "react";
import principal from "../Assets/images/Principal_Passport.jpg"

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
      <div class="lg:w-1/2 lg:mb-0 mb-6 p-4 mx-auto">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-60 h-60 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={principal}/>
          <p class="leading-relaxed text-justify">This event is not just a gathering; it is a testament to our shared values of excellence, collaboration, and celebration.

Let us approach this event with enthusiasm and a commitment to showcase the best of who we are. Together, we will create an experience that reflects our collective efforts and achievements. I look forward to seeing our community come together in unity and joy.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Dr N. Sudhakar Reddy</h2>
          <p class="text-gray-500">Principal, SVCE </p>
        </div>
      </div>
    </div>
  </div>
</section>

        <section class="text-gray-600 body-font">
          <div class="container px-5  mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 lg:w-1/3">
                <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-6 pb-10 rounded-lg overflow-hidden text-center relative">
                  {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Technical Events</h2> */}
                  <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Technical Events</h1>
                  <p class="leading-relaxed mb-3 text-justify">Explore our exciting lineup of technical events designed to challenge your skills and expand your knowledge. From coding competitions to hackathons and workshops, these events are perfect for tech enthusiasts looking to push their boundaries and learn something new.
                  </p>
    
                </div>
              </div>
              <div class="p-4 lg:w-1/3">
                <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-6 pb-10 rounded-lg overflow-hidden text-center relative">
                  {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                  <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Non-Technical Events</h1>
                  <p class="leading-relaxed mb-3 text-justify">Dive into our array of non-technical events designed to inspire creativity and foster a sense of community. From art and music competitions to gaming tournaments and exciting events, there's something for everyone to enjoy and participate in.
                  </p>
                  
                </div>
              </div>

              <div class="p-4 lg:w-1/3">
                <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-6 pb-10 rounded-lg overflow-hidden text-center relative">
                  {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                  <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Spot Events</h1>
                  <p class="leading-relaxed mb-3 text-justify">"Spot Events at SPARK bring quick, surprising challenges, enabling participants to showcase their skills, spark creativity, and compete in a fun, on-the-spot manner, enhancing the overall experience."
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
