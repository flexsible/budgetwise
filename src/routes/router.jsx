import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import ErrorPage from '../pages/ErrorPage'
import BudgetPage from '../pages/BudgetPage'
import SuggestPage from '../pages/SuggestPage'
import ResultPage from '../pages/ResultPage'
import HistoryPage from '../pages/HistoryPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/budgets',
    element: <BudgetPage />
  },
  {
    path: '/budgets/:id/suggest',
    element: <SuggestPage />
  },
  // {
  //   path: '/budgets/:id/result',
  //   element: <ResultPage />
  // },
  {
    path: '/result',
    element: <ResultPage />
  },
  {
    path: '/history',
    element: <HistoryPage />
  }
])

export default router
