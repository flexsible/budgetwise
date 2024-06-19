/* eslint-disable no-unused-vars */
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import { useAtom } from 'jotai'
import { sessionStore } from '../stores/stores'
import { supabase } from '../utils/supabaseConfig'
import Swal from 'sweetalert2'
import { image } from '../utils/api'

function RootLayout () {
  const [session] = useAtom(sessionStore)
  const [isMenuOpen, setIsMenuOpen] = useState(false) // State untuk kontrol visibilitas menu

  const handleSubmit = async (e) => {
    e.preventDefault()
    Swal.fire({
      title: 'Do you want to logout?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        const { error } = supabase.auth.signOut()
        Swal.fire('Success! You have been logged out!', '', 'success')
      }
    })
  }

  return (
    <>
      <nav className="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to='/' className="flex items-center">
              <img src={image.logo} className="h-10 rounded-lg" alt="BudgetWise Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">BudgetWise</span>
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
          <div className={`md:flex md:items-center md:w-auto ${isMenuOpen ? 'block' : 'hidden'} w-full`} id="navbar-default">
            {/* Mobile View */}
            <ul className="flex flex-col p-4 mt-4 gap-3 md:hidden">
              <li><a href="/#home" className="text-biru block py-2 pr-4 pl-3 bg-mustard rounded">Home</a></li>
              <li><a href="/#about" className="text-biru block py-2 pr-4 pl-3 bg-mustard rounded">About</a></li>
              <li><a href="/#how" className="text-biru block py-2 pr-4 pl-3 bg-mustard rounded">How</a></li>
              <li><a href="/#team" className="text-biru block py-2 pr-4 pl-3 bg-mustard rounded">Team</a></li>
              <li>{session
                ? (
                  <div className="flex-col gap-2 items-center flex">
                    <Link to="/budgets" className="text-center block font-bold text-white border rounded-lg px-4 py-1 border-[#EE946B] hover:bg-[#EE946B]">App</Link>
                    {/* <Link to="/history" className="text-center block font-bold text-white border rounded-lg px-4 py-1 border-[#EE946B] hover:bg-[#EE946B]">Your History</Link> */}
                    <button
                    className='text-center block font-bold text-white border rounded-lg px-4 py-1 border-[#EE946B] hover:bg-[#EE946B]'
                    onClick={handleSubmit}
                    >
                      Logout
                    </button>
                  </div>
                  )
                : (
                  <Link to="/auth/login" className="text-center block font-bold text-white border rounded-lg px-4 py-1 border-[#EE946B] hover:bg-[#EE946B]">Login</Link>
                  )}
              </li>
            </ul>
            {/* Desktop View */}
            <ul className="hidden md:flex md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
              <li><a href="/#home" className="text-white block py-2 pr-4 pl-3 md:hover:text-[#EE946B]">Home</a></li>
              <li><a href="/#about" className="text-white block py-2 pr-4 pl-3 md:hover:text-[#EE946B]">About</a></li>
              <li><a href="/#how" className="text-white block py-2 pr-4 pl-3 md:hover:text-[#EE946B]">How</a></li>
              <li><a href="/#team" className="text-white block py-2 pr-4 pl-3 md:hover:text-[#EE946B]">Team</a></li>
              <li>{session
                ? (
                  <div className="flex">
                    <Link to="/budgets" className="mx-6 text-white block font-bold border rounded-lg px-4 py-1 border-[#EE946B] hover:bg-[#EE946B]">App</Link>
                    {/* <Link to="/history" className="text-center block font-bold text-white border rounded-lg px-4 py-1 border-[#EE946B] hover:bg-[#EE946B]">Your History</Link> */}
                    <button
                    className='mx-6 text-white block font-bold border rounded-lg px-4 py-1 border-[#EE946B] hover:bg-[#EE946B]'
                    onClick={handleSubmit}
                    >
                      Logout
                    </button>
                  </div>
                  )
                : (
                  <Link to="/auth/login" className="mx-6 text-white block font-bold border rounded-lg px-4 py-1 border-[#EE946B] hover:bg-[#EE946B]">Login</Link>
                  )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet/>
    </>
  )
}

export default RootLayout
