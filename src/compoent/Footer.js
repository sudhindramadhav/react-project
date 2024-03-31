
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
          <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
  <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="flex flex-col items-center border-t pt-6">
   
      <nav className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
        <Link to='/about' className="about text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</Link>
        <Link to='/sponsers' className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Sponsers</Link>
        <Link to='/events'className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Events</Link>
        <Link to='/contact'className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact Us</Link>
   
      </nav>
  
      <div className="flex gap-4">
        <a href="https://www.instagram.com/svcolleges/"  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
          <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>

        <a href="https://www.instagram.com/svcolleges/"  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24" height="24"><path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"/></svg>
        </a>

        

        <a href="https://www.linkedin.com/school/svcetirupati/"  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
          <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>

        <a href="https://www.facebook.com/SVCETPT"  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
      </div>
  
    </div>

    <div className="py-8 text-center text-sm text-gray-400">Copyright © sv colleges all rights are reserved  <br/> DJ MURALI MAHESH || KKM SUDHINDRA</div>
  </footer>
</div>
    
    
    </>
  )
}

export default Footer