import React from 'react'

function AboutUs() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-krem h-screen bg-ornamenAU bg-no-repeat bg-right-bottom py-6 gap-4" id='about'>
      <div className='flex w-full md:w-1/2 justify-center items-center px-4'>
        <img src="/hiasan-aboutUs.png" alt="Decoration for About Us" className="max-w-full"/>
      </div>
      <div className='flex flex-col w-full md:w-1/2 justify-center items-center md:items-start px-4'>
        <div className='py-3'>
          <img src="/1-aboutUs.png" alt="About Us Feature" />
        </div>
        <h1 className='text-4xl md:text-6xl font-bold text-black drop-shadow-lg my-1'>
          Tentang BudgetWise
        </h1>
        <h2 className='text-xl md:text-2xl text-black font-semibold w-full md:w-3/4'>
          Sebuah platform website untuk membantu dalam mengambil keputusan membeli barang
        </h2>
        <ul className='flex gap-2 mt-4'>
          <li className='bg-blue-900 rounded-full w-8 h-8 md:w-12 md:h-12'></li>
          <li className='bg-yellow-300 rounded-full w-8 h-8 md:w-12 md:h-12'></li>
          <li className='bg-zinc-900 rounded-full w-8 h-8 md:w-12 md:h-12'></li>
          <li className='bg-orange-500 rounded-full w-8 h-8 md:w-12 md:h-12'></li>
          <li className='bg-red-600 rounded-full w-8 h-8 md:w-12 md:h-12'></li>
        </ul>
        <button className="mt-6 font-bold text-white rounded-lg px-6 py-2 bg-[#EE946B] hover:bg-[#d68559] transition-colors">
          Next
        </button>
      </div>
    </div>
  )
}

export default AboutUs
