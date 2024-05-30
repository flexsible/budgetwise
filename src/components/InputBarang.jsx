import React, { useState } from 'react'
// import { TbCircleNumber1Filled } from 'react-icons/tb'
export default function InputBarang () {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState('')
  const options = [
    { label: 'Tidak Penting' },
    { label: 'Penting' },
    { label: 'Sangat Penting' }
  ]

  function handelSelect (event) {
    setValue(event.target.value)
  }
  return (
    <>
      <div className="py-6 flex gap-6 justify-center">
        <div className='flex items-center me-4'>
          <div className='bg-biru rounded-full me-4 px-4 text-center outline outline-offset-2 outline-biru'>
            <label className="block mb-2 text-3xl font-medium text-white">1</label>
          </div>
          <input className="px-3 py-3 text-lg font-bold rounded-lg border-2 focus:outline focus:outline-2 focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-borderBlue"/>
        </div>
        <div className='flex items-center me-4'>
          <input className="px-3 py-3 text-lg font-bold rounded-lg border-2 focus:outline focus:outline-2 focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-borderBlue"/>
        </div>
        <div className='flex items-center me-4'>
          <select className="px-3 py-3 text-lg font-bold rounded-lg border-2 focus:outline focus:outline-2 focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-borderBlue" onChange={handelSelect}>
            {options.map(option => (
              <option className='font-semibold' key={option.label} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}