import React from 'react'
import InputBarang from '../components/InputBarang'
import InputBudget from '../components/InputBudget'
import TombolGenerate from '../components/TombolGenerate'

function BudgetPage () {
  const inputs = Array.from({ length: 5 })

  return (
    <div className="bg-krem min-h-screen flex flex-col items-center">
      <h1 className="pt-20 pb-10 text-6xl font-bold text-biru drop-shadow-lg my-1 text-center">
        Jumlah Budget Anda
      </h1>
      <InputBudget />
      {inputs.map((_, index) => (
        <InputBarang key={index} number={index + 1} />
      ))}
      <TombolGenerate/>
    </div>
  )
}

export default BudgetPage
