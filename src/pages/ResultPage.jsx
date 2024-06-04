import React from 'react'
import InputBudget from '../components/InputBudget'
import ResultItems from '../components/ResultItems'

export default function ResultPage () {
  const result = Array.from({ length: 5 })
  return (
    <>
      <div className="bg-krem h-screen bg-RP">
        <h1 className="pt-20 pb-10 text-6xl font-bold text-biru drop-shadow-lg my-1 text-center">
          Saran Penggunaan Budget
        </h1>
        <InputBudget />
        {result.map((_, index) => (
          <ResultItems key={index} number={index + 1} />
        ))}
      </div>
    </>
  )
}
