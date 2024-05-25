import React from 'react'

export default function Profile () {
  return (
    <>
      <div className='flex flex-col justify-center items-center h-screen'>
        <div className='flex mx-auto justify-center items-center'>
          <div className="flex flex-col rounded-2xl w-64 bg-[#ffffff] shadow-xl p-3 gap-6 mx-4">
            <figure className="flex justify-center items-center rounded-2xl">
                <img src="https://placehold.co/400x400" alt="Card Preview" className="rounded-2xl "/>
            </figure>
          </div>
        </div>
        <div className="flex flex-col p-4 text-center">
          <h1 className="text-2xl font-bold   text-white pb-2">Generator</h1>
          <p className=" text-xl text-white">Front-end Developer</p>
        </div>
      </div>
    </>
  )
}
