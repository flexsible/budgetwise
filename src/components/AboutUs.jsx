import React from 'react'

function AboutUs () {
  return (
    <div className="py-6 flex gap-6 justify-center items-center bg-krem h-screen">
      <div className='flex w-1/2 justify-center items-center me-4'>
        <img src="/hiasan-aboutUs.png" alt="" className="max-w-full"/>
      </div>
      <div className='flex flex-col w-1/2 justify-center items-start me-4'>
        <div className='py-6'>
            <img src="/1-aboutUs.png" alt="" />
        </div>
        <h1 className='py-6 text-6xl font-bold text-black drop-shadow-lg my-1'>
          <span className='text-black'>Tentang BudgetWise</span>
        </h1>
        <h2 className='py-6 text-black text-2xl drop-shadow-lg font-semibold'>
          Sebuah platform website untuk membantu dalam mengambil keputusan membeli barang
        </h2>
        <button className="my-6 block font-bold text-white rounded-lg px-4 py-1 bg-[#EE946B]">Next</button>
      </div>
    </div>
  )
}

export default AboutUs