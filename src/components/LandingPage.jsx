import React from 'react'
// import Navigation from './Navigation'

export default function LandingPage () {
  return (
    <>
    {/* <Navigation/> */}
      <div className="py-6 flex gap-6 justify-center bg-biru h-screen bg-line bg-no-repeat bg-bottom bg-contain">
        <div className='flex flex-col place-content-center items-start me-4'>
          <h2 className='text-white text-2xl text-left drop-shadow-lg font-semibold'>Smart Choices, Brighter Futures</h2>
          <h1 className='text-6xl font-bold text-white drop-shadow-lg my-1'>
            <span className='text-[#F4D35E]'>NAVIGATE YOUR </span>FINANCE <br /> WITH <span className='text-[#F4D35E]'>CONFIDENCE</span>
          </h1>
          <h2 className='text-[#F4D35E] text-2xl drop-shadow-lg font-semibold'>Your Path to Financial Success</h2>
          <button className="my-6 block font-bold text-white rounded-lg px-4 py-1 bg-[#EE946B]">Get Started</button>
        </div>
        <div className='flex items-center me-4'>
          <img src="/Home_logo.png" alt="" />
        </div>
      </div>
    </>
  )
}
