
import React from 'react'
import './Events.css'
import './Event_script.js'

const Events = () => {
  return (
    <>
            <div class="container">
      <div class="row mt-5" id="filter-buttons">
        <div class="col-12">
          <button class="btn mb-2 me-1 active" data-filter="all">Show all</button>
          <button class="btn mb-2 mx-1" data-filter="nature">Nature</button>
          <button class="btn mb-2 mx-1" data-filter="cars">Cars</button>
          <button class="btn mb-2 mx-1" data-filter="people">People</button>
        </div>
      </div>

      <div class="row px-2 mt-4 gap-3" id="filterable-cards">
        <div class="card p-0" data-name="nature">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="img"/>
          <div class="card-body">
            <h6 class="card-title">Mountains</h6>
            <p class="card-text">Lorem ipsum dolor..</p>
          </div>
        </div>
        <div class="card p-0" data-name="nature">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="img"/>
          <div class="card-body">
            <h6 class="card-title">Lights</h6>
            <p class="card-text">Lorem ipsum dolor..</p>
          </div>
        </div>
        <div class="card p-0" data-name="nature">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="img"/>
          <div class="card-body">
            <h6 class="card-title">Nature</h6>
            <p class="card-text">Lorem ipsum dolor..</p>
          </div>
        </div>
        <div class="card p-0" data-name="cars">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="img"/>
          <div class="card-body">
            <h6 class="card-title">Retro</h6>
            <p class="card-text">Lorem ipsum dolor..</p>
          </div>
        </div>
        <div class="card p-0" data-name="cars">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="img"/>
          <div class="card-body">
            <h6 class="card-title">Fast</h6>
            <p class="card-text">Lorem ipsum dolor..</p>
          </div>
        </div>
        <div class="card p-0" data-name="cars">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'}alt="img"/>
          <div class="card-body">
            <h6 class="card-title">Classic</h6>
            <p class="card-text">Lorem ipsum dolor..</p>
          </div>
        </div>
        <div class="card p-0" data-name="people">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="img"/>
          <div class="card-body">
            <h6 class="card-title">Men</h6>
            <p class="card-text">Lorem ipsum dolor..</p>
          </div>
        </div>
        <div class="card p-0" data-name="people">
          <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="img"/>
          <div class="card-body">
            <h6 class="card-title">Girl</h6>
            <p class="card-text">Lorem ipsum dolor..</p>
          </div>
        </div>
      </div>
    </div>
            
    </>
  )
}

export default Events

/*<div class="container  py-5 mx-auto flex flex-wrap flex-col">
            <div class="flex lg:mx-auto flex-wrap ">
            <Link to='/technical' class="sm:px-8 py-3 w-1/3 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none border-gray-200 hover:text-indigo-500 tracking-wider text-center">               
                Technical
            </Link>
            <Link to='/Non_techincal' class="sm:px-8 py-3 w-1/3 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-indigo-500 tracking-wider text-center">
                
                Non Technical
            </Link>
            <Link to='/spot' class="sm:px-8 py-3 w-1/3 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-indigo-500 tracking-wider">
                Spot
            </Link>
            </div>
        </div>*/