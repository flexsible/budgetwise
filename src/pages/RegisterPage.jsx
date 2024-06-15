import React, { useEffect } from 'react'
import RegisterInput from '../components/RegisterInput'
import { supabase } from '../utils/supabaseConfig'

const RegisterPage = () => {
  const getEmailData = async () => {
    const { data: { users }, error } = await supabase.auth.admin.listUsers()
    console.log('emailData', users)
  }

  useEffect(() => {
    getEmailData()
  })
  return (
    <div>
      <RegisterInput />
    </div>
  )
}

export default RegisterPage
