import React from "react";
import 'C:/Users/DELL/OneDrive/Desktop/example/src/App.css';

const About = () => {
  return (
    <div className="App">
      <header>
        <p><h4>Welcome to the heart of Spark</h4></p><br></br>

        <h1>Where innovation and creativity collide! Explore our diverse range of events designed to challenge, inspire, and engage attendees from all backgrounds.
          </h1>
          <h1> Whether you're a seasoned professional or just starting your journey, there's something here for everyone.
        </h1>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 lg:w-1/3">
                <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Technical Events</h2> */}
                  <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Technical Events</h1>
                  <p class="leading-relaxed mb-3">Explore our exciting lineup of technical events designed to challenge your skills and expand your knowledge. From coding competitions to hackathons and workshops, these events are perfect for tech enthusiasts looking to push their boundaries and learn something new.
                  </p>
                </div>
              </div>
              <div class="p-4 lg:w-1/3">
                <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                  <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Non-Technical Events</h1>
                  <p class="leading-relaxed mb-3">Dive into our array of non-technical events designed to inspire creativity and foster a sense of community. From art and music competitions to gaming tournaments and leadership workshops, there's something for everyone to enjoy and participate in.
                  </p>
                </div>
              </div>

              <div class="p-4 lg:w-1/3">
                <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                  <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Spot Events</h1>
                  <p class="leading-relaxed mb-3">Get ready for some spontaneous fun with our spot events! These activities are designed to surprise and delight, offering a chance for participants to showcase their skills and creativity on the spot. From quick challenges to impromptu competitions, spot events are sure to add an extra element of excitement to your experience at SPARK.
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
