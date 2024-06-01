import React from 'react'
import { FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa'

export default function Footer () {
  return (
    <>
      <footer className="bg-biru">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6">
              <a href="" className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">BudgetWise</span>
              </a>
              <div className="flex gap-3 align-middle justify-center mt-0">
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <FaFacebook className='fill-[#F4D35E] text-3xl'/>
                  <span className="sr-only">Facebook page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <FaInstagramSquare className='fill-[#F4D35E] text-3xl'/>
                  <span className="sr-only">Instagram page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <FaTwitter className='fill-[#F4D35E] text-3xl'/>
                  <span className="sr-only">Twitter page</span>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Anything to ask ?</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="" className="hover:underline text-[#F4D35E]">Budgetwise@gmail.com</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Terms</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="" className="hover:underline text-[#F4D35E]">Privacy & Policy</a>
                  </li>
                  <li>
                    <a href="" className="hover:underline text-[#F4D35E]">Terms & Condition</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Our Location</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline text-[#F4D35E]">Indonesia</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="flex items-center justify-center">
            <span className="text-sm text-white text-center">© 2023 <a href="" className="hover:underline">BudgetWise</a>. All Rights Reserved.
            </span>
            {/* <div className="flex mt-4 gap-3 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <FaFacebook className='fill-[#F4D35E] text-3xl'/>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <FaInstagramSquare className='fill-[#F4D35E] text-3xl'/>
                <span className="sr-only">Instagram page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <FaTwitter className='fill-[#F4D35E] text-3xl'/>
                <span className="sr-only">Twitter page</span>
              </a>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  )
}
