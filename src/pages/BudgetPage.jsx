import React, { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import { sessionStore, budgetStore, userBudget, userDarurat, userInvest, userKebutuhan, userTarget } from '../stores/stores'
import { useNavigate } from 'react-router-dom'
import RectangleInput from '../components/RectangleInput'
import RectangleInput2 from '../components/RectangleInput2'
import OutputBudget from '../components/OutputBudget'

function BudgetPage ({ id }) {
  const navigate = useNavigate()
  const [session, setSession] = useAtom(sessionStore)
  // const [budget, setBudget] = useState(0)
  const [budget, setBudget] = useAtom(budgetStore)
  console.log(session)

  const onCardClick = (e) => {
    e.preventDefault()
    setBudget(e.target.value)
    navigate(`/budgets/${id}`)
  }

  // useEffect(() => {
  //   if (!session) {
  //     navigate('/auth/login')
  //     alert('Please login to access the features!')
  //   }
  // }, [session])

  return (
    <>
      <div className="bg-krem min-h-screen flex flex-col items-center bg-IB">
        <h1 className="pt-20 pb-10 text-6xl font-bold text-biru drop-shadow-lg my-1 text-center">
          Jumlah Budget Anda
        </h1>
        <div className='flex items-center me-4 justify-center pb-3'>
          <input
            className="px-3 py-3 text-lg font-bold rounded-lg border-2 focus:outline focus:outline-2 focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-borderBlue"
            onChange={(e) => setBudget(e.target.value)}
            value={budget}
          />
        </div>
        <OutputBudget budget={budget} />
        <div className="flex justify-center space-x-4">
          <RectangleInput onClick={onCardClick}/>
          <RectangleInput2 onClick={onCardClick} />
        </div>
      </div>
    </>
  )
}

export default BudgetPage
