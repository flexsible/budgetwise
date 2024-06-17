import React, { useEffect } from 'react'
import RegisterInput from '../components/RegisterInput'
import { supabase } from '../utils/supabaseConfig'

const RegisterPage = () => {
  return (
    <div>
      <RegisterInput />
    </div>
  )
}

export default RegisterPage
