import React from 'react'
import InputBudget from '../components/InputBudget'
import Investment from '../components/Investment'

export default function InvestPage () {
  const result = Array.from({ length: 5 })
  return (
    <>
      <div className="bg-krem h-screen">
        <h1 className="pt-20 pb-10 text-6xl font-bold text-biru drop-shadow-lg my-1 text-center">
          Budget Investasi Anda
        </h1>
        <InputBudget />
        {result.map((_, index) => (
          <Investment key={index} number={index + 1} />
        ))}
      </div>
    </>
  )
}
