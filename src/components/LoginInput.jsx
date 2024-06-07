import React, { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseConfig'
import { useNavigate, Link } from 'react-router-dom'
import { useAtom } from 'jotai'
import { sessionStore } from '../stores/stores'

export default function LoginInput () {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [session, setSession] = useAtom(sessionStore)

  useEffect(() => {
    if (session) {
      navigate('/')
    }
  }, [session])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    setError(error)
    if (!error) {
      setEmail('')
      setPassword('')

      navigate('/', { replace: true })
    }
    alert(error.message)
  }

  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className="flex flex-col w-80 md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-4 md:p-8 2xl:p-10 3xl:p-12 bg-[#ffffff] rounded-2xl shadow-xl">
        <div className="flex flex-row gap-3 mb-4">
            <h1 className="text-3xl font-bold text-[#4B5563] m-auto">Welcome Back !</h1>
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="pb-2">
                <label className="block mb-2 text-sm font-medium text-[#515F96]">Email</label>
                <div className="relative text-gray-400">
                    <input type="email" name="email" id="email" className="text-[#515F96] sm:text-md focus:outline-none inline-block w-full p-2.5 py-3 px-4" placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                    <hr className='h-0.5 bg-[#515F96] mb-2'/>
                </div>
            </div>
            <div className="pb-6">
                <label className="block mb-2 text-sm font-medium text-[#515F96]">Password</label>
                <div className="relative text-gray-400">
                    <input type="password" name="password" id="password" placeholder="••••••••••" className="text-[#515F96] sm:text-md focus:outline-none inline-block w-full p-2.5 py-3 px-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                    {error?.message === 'user already registered' && (
                      <div>Email already registered</div>
                    )}
                    <hr className='h-0.5 bg-[#515F96]'/>
                </div>
            </div>
            <button type="submit" className="text-[#FFFFFF] bg-[#515F96] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">Login</button>
            <div className="text-sm font-light text-[#6B7280] ">
              Don&apos;t have an account yet?
              <Link className='font-medium text-[#515F96] hover:underline'
              to={'/register'}>
                Register
              </Link>
            </div>
        </form>
      </div>
    </div>
    </>
  )
}
