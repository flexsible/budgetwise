import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ErrorPage from '../pages/ErrorPage'
import BudgetPage from '../pages/BudgetPage'
import HistoryPage from '../pages/HistoryPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import ResultPage from '../pages/ResultPage'
import SuggestPage from '../pages/SuggestPage'
import RootLayout from '../layout/RootLayout'
import WordPage from '../pages/WordPage'

function AppRoutes () {
  return (
    <Routes>
      <Route element={<RootLayout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='login' element={<LoginPage />}/>
        <Route path='register' element={<RegisterPage />}/>
        <Route path='budgets' element={<BudgetPage />}>
          <Route path=':id' element={<SuggestPage/>}/>
        </Route>
        <Route path='word' element={<WordPage/>}/>
      </Route>
      <Route path='*' element={<ErrorPage />}/>
    </Routes>
  )
}

export default AppRoutes
