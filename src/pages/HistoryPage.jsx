import React from 'react'
import HistoryList from '../components/HistoryList'

const HistoryPage = () => {
  return (
    <div className="relative min-h-screen">
      <h1 className="pt-20 pb-10 text-6xl font-bold text-white drop-shadow-lg text-center">
        Riwayat BudgetWise
      </h1>
      <HistoryList />
      <img
        src="/ornamenBawah.png"
        alt="Decorative"
        className="absolute bottom-0 right-0"
      />
      <img
        src="/coinAtas.png"
        alt="Decorative"
        className="absolute top-0 left-20"
      />
    </div>
  )
}

export default HistoryPage
