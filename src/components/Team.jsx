/* eslint-disable no-unused-vars */
import React from 'react'
import { image } from '../utils/api'

export default function Team () {
  return (
    <>
    <div className='flex flex-wrap items-center justify-center gap-8 bg-TIM'>
      <div className='flex flex-col justify-center items-center h-screen'>
        <div className='flex mx-auto justify-center items-center'>
          <div className="flex flex-col rounded-2xl w-64 bg-[#ffffff] shadow-xl p-3 gap-6 mx-4">
            <figure className="flex justify-center items-center rounded-2xl">
                <img src={image.avatar2} alt="Card Preview" className="rounded-2xl"/>
            </figure>
          </div>
        </div>
          <h1 className='py-2 text-white text-3xl font-semibold drop-shadow-md'>M. Roni Kusuma</h1>
          <h2 className='text-[#F4D35E] text-xl font-semibold drop-shadow-md'>Front-End Developer</h2>
      </div>
      <div className='flex flex-col justify-center items-center h-screen'>
        <div className='flex mx-auto justify-center items-center'>
          <div className="flex flex-col rounded-2xl w-64 bg-[#ffffff] shadow-xl p-3 gap-6 mx-4">
            <figure className="flex justify-center items-center rounded-2xl">
                <img src={image.avatar} alt="Card Preview" className="rounded-2xl "/>
            </figure>
          </div>
        </div>
          <h1 className='py-2 text-white text-3xl font-semibold drop-shadow-md'>Nyoman Semarajaya</h1>
          <h2 className='text-[#F4D35E] text-xl font-semibold drop-shadow-md'>Front-End Developer</h2>
      </div>
      <div className='flex flex-col justify-center items-center h-screen'>
        <div className='flex mx-auto justify-center items-center'>
          <div className="flex flex-col rounded-2xl w-64 bg-[#ffffff] shadow-xl p-3 gap-6 mx-4">
            <figure className="flex justify-center items-center rounded-2xl">
                <img src={image.avatar3} alt="Card Preview" className="rounded-2xl "/>
            </figure>
          </div>
        </div>
          <h1 className='py-2 text-white text-3xl font-semibold drop-shadow-md'>M. Rifqi Syamsul M.</h1>
          <h2 className='text-[#F4D35E] text-xl font-semibold drop-shadow-md'>Front-End Developer</h2>
      </div>
    </div>
    </>
  )
}
