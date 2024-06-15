import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ErrorPage from '../pages/ErrorPage'
import BudgetPage from '../pages/BudgetPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import ResultPage from '../pages/ResultPage'
import RootLayout from '../layout/RootLayout'

function AppRoutes () {
  return (
    <Routes>
      <Route element={<RootLayout/>}>
      <Route path='auth'>
      <Route path='login' element={<LoginPage />}/>
      <Route path='register' element={<RegisterPage />}/>
      </Route>
        <Route path='/' element={<HomePage/>}/>
        {/* <Route path='word' element={<WordPage />}/> */}
        <Route path='budgets' element={<BudgetPage />}/>
        <Route path='/budgets/:id' element={<ResultPage />}/>
      </Route>
      <Route path='*' element={<ErrorPage />}/>
    </Routes>
  )
}

export default AppRoutes
