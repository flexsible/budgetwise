import React, { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import { v4 as uuidv4 } from 'uuid'
import { sessionStore, userBudget, userType, currentId } from '../stores/stores'
import { Link, useNavigate } from 'react-router-dom'
import RectangleInput from '../components/RectangleInput'
import RectangleInput2 from '../components/RectangleInput2'
import ResultPage from './ResultPage'

function BudgetPage () {
  const navigate = useNavigate()
  const [session, setSession] = useAtom(sessionStore)
  const [budget, setBudget] = useAtom(userBudget)
  const [type, setType] = useAtom(userType)
  const [_id, setId] = useAtom(currentId)
  const id = uuidv4()
  console.log(session)

  const onRectangleClick = (e) => {
    e.preventDefault()
    navigate(`/budgets/${id}`)
    setType('agresif')
    setId(id)
  }

  const onSecondRectangleClick = (e) => {
    e.preventDefault()
    navigate(`/budgets/${id}`)
    setType('konservatif')
    setId(id)
  }

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
    if (!session) {
      navigate('/auth/login')
      alert('Please login to access the features!')
    }
  }, [session])

  return (
    <>
      <div className="bg-krem min-h-screen flex flex-col items-center bg-IB">
        <h1 className="pt-20 pb-10 text-6xl font-bold text-biru drop-shadow-lg my-1 text-center">
          Jumlah Budget Anda
        </h1>
        <div className='flex items-center me-4 justify-center pb-3'>
          <input
           className="px-3 py-3 text-lg font-bold rounded-lg border-2 focus:outline focus:outline-2 focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-borderBlue"
           value={budget}
           onChange={(e) => setBudget(e.target.value)}/>
        </div>
        <div className="flex justify-center space-x-4">
          <RectangleInput onClick={onRectangleClick} budget={budget}/>
          <RectangleInput2 onClick={onSecondRectangleClick} budget={budget} />
        </div>
      </div>
    </>
  )
}

export default BudgetPage
