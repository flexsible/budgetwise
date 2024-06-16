import React, { useEffect, useState } from 'react'
import { userBudget, userDarurat, userInvest, userSaran, userType, userUtama, currentId, userQuote } from '../stores/stores'
import { supabase } from '../utils/supabaseConfig'
import { useAtom } from 'jotai'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'

export default function ResultPage ({ id }) {
  const [budget, setBudget] = useAtom(userBudget)
  const [type, setType] = useAtom(userType)
  const [darurat, setDarurat] = useAtom(userDarurat)
  const [invest, setInvest] = useAtom(userInvest)
  const [saran, setSaran] = useAtom(userSaran)
  const [utama, setUtama] = useAtom(userUtama)
  const [_id, setId] = useAtom(currentId)
  const [quote, setQuote] = useAtom(userQuote)
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640)

  useEffect(() => {
    function handleResize () {
      setIsMobile(window.innerWidth < 640)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const clear = () => {
    setBudget(0)
    setType('')
    setId('')
  }

  const onClickHandler = () => {
    Swal.fire({
      title: 'Do you want to save the changes?',
      text: quote,
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Save'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
        navigate('/')
        clear()
      }
    })
  }

  return (
    <div className={`bg-krem ${isMobile ? 'h-auto min-h-screen' : 'h-screen'} bg-RP`}>
      <h1 className="pt-20 pb-10 text-6xl font-bold text-biru drop-shadow-lg my-1 text-center">
        Saran Penggunaan Budget
      </h1>
      <div className="flex justify-center">
        <input className="px-3 py-3 text-sm font-bold rounded-lg border-2 focus:outline focus:outline-2 focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-borderBlue" value={`Rp. ${budget}`} disabled />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {[utama, invest, darurat, saran].map((value, index) => (
          <div key={index} className={`py-6 ${isMobile ? 'flex-col' : 'flex'} items-center justify-center gap-4`}>
            <div className={`rounded-full px-4 text-center outline outline-offset-2 outline-biru bg-biru ${isMobile ? 'mb-2' : 'me-2'}`}>
              <label className="text-3xl font-medium text-white">{index + 1}</label>
            </div>
            <h1 className={`px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue ${isMobile ? 'w-full' : 'w-3/4'}`}>
              {['Kebutuhan Utama', 'Investasi', 'Dana Darurat', 'Dana Target Pembelian Kamu!'][index]}
            </h1>
            <h1 className={`px-3 py-3 text-sm font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue ${isMobile ? 'w-full' : 'w-1/4'}`}>
              Rp. {value}
            </h1>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-5">
        <Link to={'/budgets'} className="my-6 block font-bold text-white rounded-lg px-6 py-3 bg-[#EE946B]">Back</Link>
        <button className="my-6 block font-bold text-biru rounded-lg px-6 py-3 bg-biru text-white text-sm md:text-base md:px-6 md:py-3" onClick={onClickHandler}>
          See your result!
        </button>
      </div>
    </div>
  )
}
