import React, { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import { v4 as uuidv4 } from 'uuid'
import { sessionStore, userBudget, userType, currentId, buttonTrigger } from '../stores/stores'
import { Link, useNavigate } from 'react-router-dom'
import RectangleInput from '../components/RectangleInput'
import RectangleInput2 from '../components/RectangleInput2'
import Swal from 'sweetalert2'
import { supabase } from '../utils/supabaseConfig'
import WordStart from '../components/WordStart'

function BudgetPage () {
  const navigate = useNavigate()
  const [session, setSession] = useAtom(sessionStore)
  const [budget, setBudget] = useAtom(userBudget)
  const [type, setType] = useAtom(userType)
  const [_id, setId] = useAtom(currentId)
  const [openModal, setOpenModal] = useAtom(buttonTrigger)
  const id = uuidv4()

  useEffect(() => {
    const storedToken = localStorage.getItem('sb-jakimybhtjdbdhptzkxw-auth-token')
    if (!storedToken) {
      navigate('/auth/login')
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please login to access the features!'
      })
    }
  }, [session])

  const handleRectangleClick = (e, newType) => {
    e.preventDefault()
    if (!budget) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please input your budget!'
      })
      return
    }
    setType(newType)
    setId(id)
    navigate(`/budgets/${id}`)
  }

  return (
    <>
      <div className="bg-krem min-h-screen flex flex-col items-center bg-IB">
        <h1 className="pt-20 text-4xl md:text-6xl lg:text-8xl font-bold text-biru drop-shadow-lg my-1 text-center">Jumlah Budget Anda</h1>
        <button className='text-lg md:text-xl lg:text-2xl font-bold underline hover:text-biru' onClick={() => setOpenModal(true)}>FAQ?</button>
        <div className='flex items-center justify-center pb-3 mt-4'>
          <input
            className="px-3 py-3 text-sm md:text-lg lg:text-xl font-bold rounded-lg border-2 focus:outline-none bg-[#ffffff] text-[#444444] border-borderBlue"
            placeholder='Masukan budget anda'
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
          <RectangleInput2 onClick={(e) => handleRectangleClick(e, 'konservatif')} />
          <RectangleInput onClick={(e) => handleRectangleClick(e, 'agresif')} />
        </div>
      </div>
      <WordStart/>
    </>
  )
}

export default BudgetPage
