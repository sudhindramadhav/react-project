import React from "react"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <>
     <section className="min-h-90 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden  bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48 ">
    
        <img src={process.env.PUBLIC_URL + '/assets/images/clgpost.jpg'} loading="lazy" alt=" by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0  mix-blend-multiply"></div>
        <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
          <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">Very proud to introduce</p>
          <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">SVCE SPARk</h1>

          <div className="flex  flex-col gap-2.5 sm:flex-row sm:justify-center">
            <Link to='/events'>
            <a href="/" className="rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Register Now</a>
            </Link>
          </div>
        </div>
      </section>


 <section className="text-gray-600 body-font">
<div className="container px-5 py-4 mx-auto flex flex-wrap">
 <div className="flex w-full mb-4 flex-wrap  p-4">
   <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900  lg:mb-0 mb-4 text-center">AMPLE GALLERY :</h1>
 </div>
 <div className="flex flex-wrap md:-m-2 -m-1">
   <div className="flex flex-wrap w-1/2">
     <div className="md:p-2 p-1 w-1/2">
       <img alt="gallery" className="w-full object-cover h-full object-center block" src={process.env.PUBLIC_URL + '/assets/images/img_1.jpg'}/>
     </div>
     <div className="md:p-2 p-1 w-1/2">
       <img alt="gallery" className="w-full object-cover h-full object-center block" src={process.env.PUBLIC_URL + '/assets/images/img_2.jpg'}/>
     </div>
     <div className="md:p-2 p-1 w-full">
       <img alt="gallery" className="w-full h-full object-cover object-center block" src={process.env.PUBLIC_URL + '/assets/images/img_1.jpg'}/>
     </div>
   </div>
   <div className="flex flex-wrap w-1/2">
     <div className="md:p-2 p-1 w-full">
       <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361"/>
     </div>
     <div className="md:p-2 p-1 w-1/2">
       <img alt="gallery" className="w-full object-cover h-full object-center block" src={process.env.PUBLIC_URL + '/assets/images/img_3.jpg'}/>
     </div>
     <div className="md:p-2 p-1 w-1/2">
       <img alt="gallery" className="w-full object-cover h-full object-center block" src={process.env.PUBLIC_URL + '/assets/images/img_4.jpg'}/>
     </div>
   </div>
 </div>
</div>
</section>


<section className="text-gray-600 body-font">
<div className="container px-5 py-4 mx-auto">
  <div className="flex flex-wrap w-full mb-6">
    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Technical events</h1>
      <div className="h-1 w-20 bg-indigo-500 rounded"></div>
    </div>
    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Some matter about Technical events</p>
  </div>
  <div className="flex flex-wrap -m-4">
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
      <Link to="/idea_blitz">
      <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/assets/images/img_1.jpg'} alt="content"/>
      </Link>
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">event 1</h2>
        <p className="leading-relaxed text-base">about the event</p>
      </div>
    </div>
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content"/>
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Event 1</h2>
        <p className="leading-relaxed text-base">about the event</p>
      </div>
    </div>
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content"/>
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Event 2</h2>
        <p className="leading-relaxed text-base">about the event</p>
      </div>
    </div>
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"/>
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Event 3S</h2>
        <p className="leading-relaxed text-base">about the event</p>
      </div>
    </div>
  </div>
</div>
</section>

<section className="text-gray-600 body-font">
<div className="container px-5 py-4 mx-auto">
  <div className="flex flex-wrap w-full mb-4">
    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">other events</h1>
      <div className="h-1 w-20 bg-indigo-500 rounded"></div>
    </div>
    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Some thing about it.</p>
  </div>
  <div className="flex flex-wrap -m-4">
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/assets/images/img_2.jpg'} alt="content"/>
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Event 1</h2>
        <p className="leading-relaxed text-base">about the event</p>
      </div>
    </div>
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content"/>
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Event 1</h2>
        <p className="leading-relaxed text-base">about the event</p>
      </div>
    </div>
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content"/>
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Event 2</h2>
        <p className="leading-relaxed text-base">about the event</p>
      </div>
    </div>
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"/>
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">SEvent 3</h2>
        <p className="leading-relaxed text-base">about the event</p>
      </div>
    </div>
  </div>
</div>
</section>
<section className="text-gray-600 body-font">
<div className="container px-5 py-4 mx-auto">
  <div className="flex flex-wrap w-full mb-4">
    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Non technical</h1>
      <div className="h-1 w-20 bg-indigo-500 rounded"></div>
    </div>
    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">some thing about the non technical</p>
  </div>
  <div className="flex flex-wrap -m-4">
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <img className="h-40 rounded w-full object-cover object-center mb-6" src={process.env.PUBLIC_URL + '/assets/images/img_3.jpg'} alt="content"/>
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Event 1</h2>
        <p className="leading-relaxed text-base">about the event</p>
      </div>
    </div>
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content"/>
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Event 1</h2>
        <p className="leading-relaxed text-base">about the event</p>
      </div>
    </div>
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content"/>
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Event 2</h2>
        <p className="leading-relaxed text-base">about the event</p>
      </div>
    </div>
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"/>
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">SEvent 3</h2>
        <p className="leading-relaxed text-base">about the event</p>
      </div>
    </div>
  </div>
</div>
</section>
  
    </>
  )
}
export default Home
