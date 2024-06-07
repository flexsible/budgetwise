import React, { useEffect } from 'react'
import { supabase } from './utils/supabaseConfig'
import { useAtom } from 'jotai'
import { useNavigate } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { sessionStore } from './stores/stores'
// import LoginInput from './components/LoginInput'
// import RegisterInput from './components/RegisterInput'
// import Card from './components/Card'
// import Profile from './components/Profile'
// import Login from './pages/Login'
// import InputBarang from './components/InputBarang'
function App () {
  const navigate = useNavigate()
  const [session, setSession] = useAtom(sessionStore)

  useEffect(() => {
    supabase.auth.getSession()
      .then(({ data: { session } }) => {
        setSession(session)
      })

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <AppRoutes />
  )
}

export default App
