import React from 'react'

export default function Card () {
  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='flex mx-auto justify-center items-center'>
        <div className="flex flex-col rounded-2xl w-64 bg-[#ffffff] shadow-xl p-3 gap-6 mx-4">
          <figure className="flex justify-center items-center rounded-2xl">
              <img src="https://placehold.co/400x400" alt="Card Preview" className="rounded-2xl "/>
          </figure>
          <div className="flex flex-col p-1">
              <div className="text-lg rounded-2xl border border-gray-400 text-[#374151] p-2 text-center font-bold">placeholder</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
