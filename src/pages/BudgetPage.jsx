import React, { useState } from 'react'
import InputBarang from '../components/InputBarang'
import TombolGenerate from '../components/TombolGenerate'
import InputBudget from '../components/InputBudget'

function BudgetPage () {
  const [inputs, setInputs] = useState([{}])

  const handleAddInput = () => {
    setInputs([...inputs, {}])
  }

  const handleRemoveInput = (index) => {
    if (inputs.length > 1) {
      const newInputs = inputs.slice()
      newInputs.splice(index, 1)
      setInputs(newInputs)
    }
  }

  return (
    <div className="bg-krem min-h-screen flex flex-col items-center bg-IB">
      <h1 className="pt-20 pb-10 text-6xl font-bold text-biru drop-shadow-lg my-1 text-center">
        Jumlah Budget Anda
      </h1>
      <InputBudget />
      {inputs.map((_, index) => (
        <div key={index} className="flex items-center space-x-2">
          <InputBarang number={index + 1} />
          <button
            onClick={() => handleRemoveInput(index)}
            className="text-white font-bold text-xl bg-red-500 px-4 py-2 outline outline-offset-2 outline-merah"
          >
            -
          </button>
        </div>
      ))}
      <div className="flex items-center space-x-2 mt-4 gap-6">
      <TombolGenerate />
        <button
          onClick={handleAddInput}
          className="px-4 py-2 bg-biru text-white rounded outline outline-offset-2 outline-biru"
        >
          +
        </button>
      </div>
    </div>
  )
}

export default BudgetPage
