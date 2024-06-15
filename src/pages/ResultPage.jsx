import React, { useEffect, useState } from 'react'
import { userBudget, userDarurat, userInvest, userSaran, userType, userUtama, currentId } from '../stores/stores'
import { supabase } from '../utils/supabaseConfig'
import { useAtom } from 'jotai'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  const clear = () => {
    setBudget(0)
    setType('')
    setId('')
  }

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
          type,
          utama,
          invest,
          saran,
          darurat
        }
      ])
      .select()

    console.log('insert', data)
  }

  const onClickHandler = () => {
    try {
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: 'Save',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
          insertData()
          setTimeout(() => {
            navigate('/')
          }, 3000)
          clear()
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
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
          <input className="px-3 py-3 text-lg font-bold rounded-lg border-2 focus:outline focus:outline-2 focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-borderBlue" value={'Rp. ' + budget} disabled/>
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
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-1/4'>Rp. {invest}</h1>
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
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-1/4'>Rp. {saran}</h1>
        </div>
      </div>
      <div className="flex justify-center gap-5">
        <Link to={'/budgets'} className="my-6 block font-bold text-white rounded-lg px-6 py-3 bg-[#EE946B]">Back</Link>
        <button className="my-6 block font-bold text-white rounded-lg px-6 py-3 bg-[#515F96]" onClick={onClickHandler}>Insert</button>
      </div>
      </div>
    </>
  )
}
