import React, { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseConfig'
import { useNavigate, Link } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function RegisterInput () {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signUp({
      email,
      password
    })

    setError(error)
    if (!error) {
      setEmail('')
      setPassword('')
      Swal.fire({
        icon: 'success',
        title: 'Register Success',
        text: 'Confirmation has been sent to your email!'
      })

      navigate('/auth/login')
    }
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error
    })
  }
  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#515F96] rounded-2xl shadow-lg">
        <div className="flex flex-row gap-3 pb-4">
            <h1 className="text-3xl font-bold text-[#ffff] m-auto">Welcome !</h1>
        </div>
        <form
          className="flex flex-col"
          onSubmit={handleSubmit}
        >
            <div className="pb-2">
                <label className="block mb-2 text-sm font-medium text-[#ffff]">Email</label>
                <div className="relative text-gray-400">
                    <input type="email" name="email" id="email" className="text-[#515F96] sm:text-md focus:outline-none inline-block w-full p-2.5 py-3 px-4 placeholder-[#515F96] bg-white" placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                    {error?.message === 'user already registered' && (
                      <div>Email already registered</div>
                    )}
                    <hr className='h-0.5 bg-[#ffff]'/>
                </div>
            </div>
            <div className="pb-6">
                <label className="block mb-2 text-sm font-medium text-[#ffff]">Password</label>
                <div className="relative text-gray-400">
                    <input type="password" name="password" id="password" placeholder="••••••••••" className="text-[#515F96] sm:text-md focus:outline-none inline-block w-full p-2.5 py-3 px-4 placeholder-[#515F96] bg-white"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                    <hr className='h-0.5 bg-[#ffff]'/>
                </div>
            </div>
            <button type="submit" className=" text-[#0D3B66] bg-[#ffff] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">Register</button>
            <div className="text-sm font-light text-[#FFF] ">
              Already have an account?
              <Link className='font-medium text-[#FFF] hover:underline'
              to={'/auth/login'}>
                Login
              </Link>
            </div>
        </form>
      </div>
    </div>
    </>
  )
}
