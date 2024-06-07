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
      </Route>

      <Route path='*' element={<ErrorPage />}/>
    </Routes>
  )
}

export default AppRoutes

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomePage />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: '/login',
//     element: <LoginPage />
//   },
//   {
//     path: '/register',
//     element: <RegisterPage />
//   },
//   {
//     path: '/budgets',
//     element: <BudgetPage />
//   },
//   {
//     path: '/budgets/:id/suggest',
//     element: <SuggestPage />
//   },
//   // {
//   //   path: '/budgets/:id/result',
//   //   element: <ResultPage />
//   // },
//   {
//     path: '/result',
//     element: <ResultPage />
//   },
//   {
//     path: '/history',
//     element: <HistoryPage />
//   }
// ])

// export default router
