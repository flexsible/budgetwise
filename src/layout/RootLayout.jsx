import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import { useAtom } from 'jotai'
import { sessionStore } from '../stores/stores'
import BudgetPage from '../pages/BudgetPage'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import { supabase } from '../utils/supabaseConfig'

function RootLayout () {
  const [session, setSession] = useAtom(sessionStore)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signOut()
  }
  return (
    <>
      <nav className="bg-transparent border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://placehold.co/100x40" className="h-8 rounded-lg" alt="BudgetWise Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BudgetWise</span>
            </Link>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
                <li>
                  <Link to="/" className="mx-6 px-3 py-2 block font-bold text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#EE946B] md:p-0 dark:text-white md:dark:hover:text-[#EE946B] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
                </li>
                <li>
                  <Link to="/" className="mx-6 px-3 py-2 block font-bold text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#EE946B] md:p-0 dark:text-white md:dark:hover:text-[#EE946B] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                </li>
                <li>
                  <Link to="/" className="mx-6 px-3 py-2 block font-bold text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#EE946B] md:p-0 dark:text-white md:dark:hover:text-[#EE946B] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">How</Link>
                </li>
                <li>
                  <Link to="/" className="mx-6 px-3 py-2 block font-bold text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#EE946B] md:p-0 dark:text-white md:dark:hover:text-[#EE946B] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Team</Link>
                </li>
                <li>
                  {session
                    ? (
                      <div className='flex'>
                        <Link to="/budgets" className="mx-6 block font-bold text-white border rounded-lg px-4 py-1 border-[#EE946B] hover:bg-[#EE946B]">Fitur</Link>
                        <button
                        className='mx-6 block font-bold text-white border rounded-lg px-4 py-1 border-[#EE946B] hover:bg-[#EE946B]'
                        onClick={handleSubmit}
                        >
                          Signout
                        </button>
                      </div>
                      )
                    : (
                      <Link to="/login" className="mx-6 block font-bold text-white border rounded-lg px-4 py-1 border-[#EE946B] hover:bg-[#EE946B]">Login</Link>
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
