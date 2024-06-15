import React from 'react'
import { FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa'

export default function Footer () {
  return (
    <footer className="bg-biru">
      <div className="mx-auto max-w-screen-xl px-4 py-6 lg:px-8 lg:py-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-6 text-center md:text-left">
            <a href="#" className="flex justify-center md:justify-start">
              <span className="text-2xl font-semibold whitespace-nowrap text-white">BudgetWise</span>
            </a>
            <div className="flex justify-center gap-3 mt-4">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <FaFacebook className='text-3xl' style={{ color: '#F4D35E' }}/>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <FaInstagramSquare className='text-3xl' style={{ color: '#F4D35E' }}/>
                <span className="sr-only">Instagram page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <FaTwitter className='text-3xl' style={{ color: '#F4D35E' }}/>
                <span className="sr-only">Twitter page</span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center md:text-left">
            <div>
              <h2 className="text-sm font-semibold uppercase text-white">Anything to ask?</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <a href="mailto:budgetwise@gmail.com" className="hover:underline text-[#F4D35E]">Budgetwise@gmail.com</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase text-white">Terms</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <a href="#" className="hover:underline text-[#F4D35E]">Privacy & Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-[#F4D35E]">Terms & Condition</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase text-white">Our Location</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <a href="#" className="hover:underline text-[#F4D35E]">Indonesia</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700" />
        <div className="flex justify-center">
          <span className="text-sm text-white text-center">
            © 2023 <a href="#" className="hover:underline">BudgetWise</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
