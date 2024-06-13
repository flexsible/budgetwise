import React from 'react'

function OutputBudget ({ budget }) {
  return (
    <div className="input-budget-container">
      <h3 className="text-lg font-medium">Budget Saat Ini:</h3>
      <p className="text-xl font-bold">{budget}</p>
    </div>
  )
}

export default OutputBudget
