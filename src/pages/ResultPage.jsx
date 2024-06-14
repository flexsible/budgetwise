import React, { useEffect, useState } from 'react'
import InputBudget from '../components/InputBudget'
import ResultItems from '../components/ResultItems'
import { userBudget, userDarurat, userInvest, userSaran, userType, userUtama, currentId } from '../stores/stores'
import { supabase } from '../utils/supabaseConfig'
import { useAtom } from 'jotai'

export default function ResultPage ({ id }) {
  const [data, setData] = useState('')
  const [error, setError] = useState('')
  const [budget, setBudget] = useAtom(userBudget)
  const [type, setType] = useAtom(userType)
  const [darurat, setDarurat] = useAtom(userDarurat)
  const [invest, setInvest] = useAtom(userInvest)
  const [saran, setSaran] = useAtom(userSaran)
  const [utama, setUtama] = useAtom(userUtama)
  const [_id, setId] = useAtom(currentId)

  console.log('id', _id)
  console.log('data', data)
  console.log('budget', budget)
  console.log('testtype', type)

  if (budget <= 5000000) {
    if (type === 'agresif') {
      setUtama(budget * 55 / 100)
      setInvest(budget * 25 / 100)
      setDarurat(budget * 10 / 100)
      setSaran(budget * 10 / 100)
    }

    if (type === 'konservatif') {
      setUtama(budget * 60 / 100)
      setInvest(budget * 20 / 100)
      setDarurat(budget * 10 / 100)
      setSaran(budget * 10 / 100)
    }
  }

  if (budget >= 5000000 && budget <= 10000000) {
    if (type === 'agresif') {
      setUtama(budget * 35 / 100)
      setInvest(budget * 30 / 100)
      setDarurat(budget * 20 / 100)
      setSaran(budget * 15 / 100)
    }

    if (type === 'konservatif') {
      setUtama(budget * 40 / 100)
      setInvest(budget * 25 / 100)
      setDarurat(budget * 10 / 100)
      setSaran(budget * 15 / 100)
    }
  }

  if (budget >= 10000000) {
    if (type === 'agresif') {
      setUtama(budget * 25 / 100)
      setInvest(budget * 35 / 100)
      setDarurat(budget * 25 / 100)
      setSaran(budget * 15 / 100)
    }

    if (type === 'konservatif') {
      setUtama(budget * 30 / 100)
      setInvest(budget * 30 / 100)
      setDarurat(budget * 25 / 100)
      setSaran(budget * 15 / 100)
    }
  }

  const insertData = async () => {
    const { data, error } = await supabase
      .from('result')
      .insert([
        {
          id: _id,
          type: type,
          utama: utama,
          invest: invest,
          saran: saran,
          darurat: darurat
        }
      ])
      .select()

    console.log('insert', data)
  }

  const onClickHandler = () => {
    try {
      insertData()
    } catch (error) {
      alert(error.message)
    }
  }

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
        <div className="flex justify-center">
          <input className="px-3 py-3 text-lg font-bold rounded-lg border-2 focus:outline focus:outline-2 focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-borderBlue" value={budget} disabled/>
        </div>
        <div className="py-6 flex flex-col gap-6 justify-center bg-krem items-center">
        <div className="flex items-center me-4 w-1/2 gap-4">
          <div className='bg-biru rounded-full me-2 px-4 text-center outline outline-offset-2 outline-biru'>
            <label className="block mb-2 text-3xl font-medium text-white">1</label>
          </div>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-3/4'>Kebutuhan Utama</h1>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-1/4'>Rp. {utama}</h1>
        </div>
      </div>

      <div className="py-6 flex flex-col gap-6 justify-center bg-krem items-center">
        <div className="flex items-center me-4 w-1/2 gap-4">
          <div className='bg-biru rounded-full me-2 px-4 text-center outline outline-offset-2 outline-biru'>
            <label className="block mb-2 text-3xl font-medium text-white">2</label>
          </div>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-3/4'>Investasi</h1>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-1/4'>Rp {invest}</h1>
        </div>
      </div>

      <div className="py-6 flex flex-col gap-6 justify-center bg-krem items-center">
        <div className="flex items-center me-4 w-1/2 gap-4">
          <div className='bg-biru rounded-full me-2 px-4 text-center outline outline-offset-2 outline-biru'>
            <label className="block mb-2 text-3xl font-medium text-white">3</label>
          </div>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-3/4'>Dana Darurat</h1>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-1/4'>Rp. {darurat}</h1>
        </div>
      </div>

      <div className="py-6 flex flex-col gap-6 justify-center bg-krem items-center">
        <div className="flex items-center me-4 w-1/2 gap-4">
          <div className='bg-biru rounded-full me-2 px-4 text-center outline outline-offset-2 outline-biru'>
            <label className="block mb-2 text-3xl font-medium text-white">4</label>
          </div>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-3/4'>Dana Target Pembelian Kamu!</h1>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-1/4'>Rp {saran}</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="my-6 block font-bold text-white rounded-lg px-6 py-3 bg-[#EE946B]" onClick={onClickHandler}>Insert</button>
      </div>
      </div>
    </>
  )
}
