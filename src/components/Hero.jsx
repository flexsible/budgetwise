import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { sessionStore } from '../stores/stores'
import Swal from 'sweetalert2'

export default function LandingPage () {
  const navigate = useNavigate()
  const [session, setSession] = useAtom(sessionStore)

  const onClickHandler = () => {
    const storedToken = localStorage.getItem('sb-jakimybhtjdbdhptzkxw-auth-token')
    if (!storedToken) {
      Swal.fire({
        title: 'Oops! Please login to access the features',
        showCancelButton: true,
        confirmButtonText: 'OK',
        icon: 'error'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/auth/login')
        }
      })
    } else {
      navigate('/budgets')
    }
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-biru h-screen bg-line bg-no-repeat bg-bottom bg-contain" id='hero'>
      <div className='flex flex-col items-center md:items-start px-6 md:px-8'>
        <h2 className='text-white text-xl md:text-2xl lg:text-3xl text-center md:text-left drop-shadow-lg font-semibold'>Smart Choices, Brighter Futures</h2>
        <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center md:text-left drop-shadow-lg my-1'>
          <span className='text-[#F4D35E]'>NAVIGATE YOUR </span>FINANCE<br />WITH <span className='text-[#F4D35E]'>CONFIDENCE</span>
        </h1>
        <h2 className='text-[#F4D35E] text-xl md:text-2xl lg:text-3xl drop-shadow-lg font-semibold text-center md:text-left'>Your Path to Financial Success</h2>
        <button onClick={onClickHandler} className="mt-6 mb-4 md:my-6 text-white rounded-lg px-5 py-3 text-lg md:px-6 md:py-4 md:text-xl bg-[#EE946B] hover:bg-[#d68559] transition-colors">Get Started</button>
      </div>
      <div className='hidden md:flex items-center justify-center'>
        <img src="/Home_logo.png" alt="Home Logo" className="w-1/2 md:w-auto" />
      </div>
    </div>
  )
}
