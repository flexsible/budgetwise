import React, { useEffect, useState } from 'react'
import InputBudget from '../components/InputBudget'
import ResultItems from '../components/ResultItems'
import { supabase } from '../utils/supabaseConfig'

export default function ResultPage () {
  const [data, setData] = useState('')
  const [error, setError] = useState('')
  console.log('data', data)
  useEffect(() => {
    const fetchResult = async () => {
      const { data, error } = await supabase
        .from('result')
        .select('*')

      if (error) {
        setError(error.message)
        setData(null)
      }
      if (data) {
        setData(data)
        setError(null)
      }
    }
    fetchResult()
  }, [])
  return (
    <>
      <div className="bg-krem h-screen bg-RP">
        <h1 className="pt-20 pb-10 text-6xl font-bold text-biru drop-shadow-lg my-1 text-center">
          Saran Penggunaan Budget
        </h1>
        <InputBudget />
        <div className="py-6 flex flex-col gap-6 justify-center bg-krem items-center">
        <div className="flex items-center me-4 w-1/2 gap-4">
          <div className='bg-biru rounded-full me-2 px-4 text-center outline outline-offset-2 outline-biru'>
            <label className="block mb-2 text-3xl font-medium text-white">1</label>
          </div>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-3/4'>Kebutuhan Utama</h1>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-1/4'>Rp</h1>
        </div>
      </div>

      <div className="py-6 flex flex-col gap-6 justify-center bg-krem items-center">
        <div className="flex items-center me-4 w-1/2 gap-4">
          <div className='bg-biru rounded-full me-2 px-4 text-center outline outline-offset-2 outline-biru'>
            <label className="block mb-2 text-3xl font-medium text-white">2</label>
          </div>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-3/4'>SBN Ritel</h1>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-1/4'>Rp 1.000.000</h1>
        </div>
      </div>

      <div className="py-6 flex flex-col gap-6 justify-center bg-krem items-center">
        <div className="flex items-center me-4 w-1/2 gap-4">
          <div className='bg-biru rounded-full me-2 px-4 text-center outline outline-offset-2 outline-biru'>
            <label className="block mb-2 text-3xl font-medium text-white">3</label>
          </div>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-3/4'>SBN Ritel</h1>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-1/4'>Rp 1.000.000</h1>
        </div>
      </div>

      <div className="py-6 flex flex-col gap-6 justify-center bg-krem items-center">
        <div className="flex items-center me-4 w-1/2 gap-4">
          <div className='bg-biru rounded-full me-2 px-4 text-center outline outline-offset-2 outline-biru'>
            <label className="block mb-2 text-3xl font-medium text-white">4</label>
          </div>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-3/4'>SBN Ritel</h1>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-1/4'>Rp 1.000.000</h1>
        </div>
      </div>
      </div>
    </>
  )
}
