import React, { useState, useEffect } from 'react'
import InputBarang from '../components/InputBarang'
import TombolGenerate from '../components/TombolGenerate'
import InputBudget from '../components/InputBudget'
import { useAtom } from 'jotai'
import { sessionStore } from '../stores/stores'
import { useNavigate } from 'react-router-dom'
import RectangleInput from '../components/RectangleInput'
import RectangleInput2 from '../components/RectangleInput2'

function BudgetPage() {
  const navigate = useNavigate()
  const [session] = useAtom(sessionStore)

  useEffect(() => {
    if (!session) {
      navigate('/login')
      alert('Please login to access the features!')
    }
  }, [session, navigate])

  return (
    <>
      <div className="bg-krem min-h-screen flex flex-col items-center bg-IB">
        <h1 className="pt-20 pb-10 text-6xl font-bold text-biru drop-shadow-lg my-1 text-center">
          Jumlah Budget Anda
        </h1>
        <InputBudget />
        <div className="flex justify-center space-x-4">
          <RectangleInput />
          <RectangleInput2 />
        </div>
      </div>
    </>
  )
}

export default BudgetPage
