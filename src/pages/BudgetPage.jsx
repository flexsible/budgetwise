import React, { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import { v4 as uuidv4 } from 'uuid'
import { sessionStore, userBudget, userType, currentId, buttonTrigger } from '../stores/stores'
import { Link, useNavigate } from 'react-router-dom'
import RectangleInput from '../components/RectangleInput'
import RectangleInput2 from '../components/RectangleInput2'
import ResultPage from './ResultPage'
import WordStart from '../components/WordStart'
import Swal from 'sweetalert2'
import { supabase } from '../utils/supabaseConfig'

function BudgetPage () {
  const navigate = useNavigate()
  const [session, setSession] = useAtom(sessionStore)
  const [budget, setBudget] = useAtom(userBudget)
  const [type, setType] = useAtom(userType)
  const [_id, setId] = useAtom(currentId)
  const [openModal, setOpenModal] = useAtom(buttonTrigger)
  const id = uuidv4()
  console.log('session', session)

  const onRectangleClick = (e) => {
    e.preventDefault()
    if (budget === 0 || budget === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please input your budget!'
      })
    }
    if (budget > 0) {
      navigate(`/budgets/${id}`)
      setType('agresif')
      setId(id)
    }
  }

  const onSecondRectangleClick = (e) => {
    e.preventDefault()
    if (budget === 0 || budget === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please input your budget!'
      })
    }
    if (budget > 0) {
      navigate(`/budgets/${id}`)
      setType('konservatif')
      setId(id)
    }
  }

  // const onChangeHandler = (e) => {
  //   const inputBudget = document.getElementById('budget')
  //   inputBudget.addEventListener('keyup', function (e) {
  //     inputBudget.value = formatRupiah(this.value, 'Rp. ')
  //   })

  //   /* Fungsi */
  //   function formatRupiah (angka, prefix) {
  //     const number = angka.replace(/[^,\d]/g, '').toString()
  //     const split = number.split(',')
  //     const sisa = split[0].length % 3
  //     let rupiah = split[0].substr(0, sisa)
  //     const ribuan = split[0].substr(sisa).match(/\d{3}/gi)

  //     if (ribuan) {
  //       const separator = sisa ? '.' : ''
  //       rupiah += separator + ribuan.join('.')
  //     }

  //     rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah
  //     return prefix === undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '')
  //   }
  // }

  // useEffect(() => {
  //   const storedToken = localStorage.getItem('accessToken')
  //   if (!storedToken) {
  //     navigate('/auth/login')
  //     alert('Please login to access the features!')
  //   } else {
  //     setSession(storedToken)
  //   }
  // }, [session, navigate, setSession])

  useEffect(() => {
    const storedToken = localStorage.getItem('sb-jakimybhtjdbdhptzkxw-auth-token')
    console.log('stored token', storedToken)
    if (!storedToken) {
      navigate('/auth/login')
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please login to access the featurs!'
      })
      // supabase.auth.getSession().then(({ data: { session } }) => {
      //   setSession(session)
      // })
    }
    // supabase.auth.onAuthStateChange((_event, session) => {
    //   setSession(session)
    // })
  }, [session])

  return (
    <>
      <div className="bg-krem min-h-screen flex flex-col items-center bg-IB">
        <div className="flex flex-col pb-5">
        <h1 className="pt-20 text-6xl font-bold text-biru drop-shadow-lg my-1 text-center">
          Jumlah Budget Anda
        </h1>
        <button className='text-2xl font-bold underline hover:text-biru' onClick={() => setOpenModal(true)}>FAQ?</button>
        </div>
        <div className='flex items-center me-4 justify-center pb-3'>
          <input
            className="px-3 py-3 text-lg font-bold rounded-lg border-2 focus:outline focus:outline-2 focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-borderBlue"
            placeholder='Masukan budget anda'
            value={budget}
            id='budget'
            onChange={(e) => setBudget(e.target.value)}/>
        </div>
        <div className="flex justify-center gap-4 space-x-4 mt-8">
          <RectangleInput2 onClick={onSecondRectangleClick} budget={budget} />
          <RectangleInput onClick={onRectangleClick} budget={budget}/>
        </div>
      </div>
      {/* <WelcomePopUp/> */}
      <WordStart/>

    </>
  )
}

export default BudgetPage
