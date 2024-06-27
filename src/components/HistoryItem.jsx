/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { supabase } from '../utils/supabaseConfig'

export default function HistoryItem ({ number, date, budget }) {
  const getData = async () => {
    const { data: result, error } = await supabase
      .from('result')
      .select('*')
      .eq('')
    console.log('result', result)
  }

  const getUserData = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    console.log('user', user.id)
  }

  useEffect(() => {
    getData()
    getUserData()
  })

  return (
    <div className="py-6 flex gap-6 justify-center">
      <div className="flex items-center me-4">
        <div className='bg-mustard rounded-full me-4 px-4 text-center outline outline-offset-2 outline-biru'>
          <label className="block mb-2 text-3xl font-medium text-white">{number}</label>
        </div>
        <div className="px-6 py-6 text-2xl font-bold rounded-xl border-2 flex justify-between w-full max-w-3xl bg-[#ffffff] text-[#444444] border-borderBlue">
          <div className="flex-grow">{date}</div>
          <div className="w-px bg-borderBlue mx-4"></div>
          <div className="flex-grow">{budget}</div>
        </div>
      </div>
    </div>
  )
}
