import React from 'react'

// eslint-disable-next-line react/prop-types
export default function Investment ({ number }) {
  return (
    <>
      <div className="py-6 flex flex-col gap-6 justify-center bg-krem items-center">
        <div className="flex items-center me-4 w-1/2 gap-4">
          <div className='bg-biru rounded-full me-2 px-4 text-center outline outline-offset-2 outline-biru'>
            <label className="block mb-2 text-3xl font-medium text-white">{number}</label>
          </div>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-3/4'>SBN Ritel</h1>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-1/4'>Rp 1.000.000</h1>
        </div>
      </div>
    </>
  )
}
