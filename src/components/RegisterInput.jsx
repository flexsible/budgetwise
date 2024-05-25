import React from 'react'

export default function RegisterInput () {
  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#515F96] rounded-2xl shadow-xl">
        <div className="flex flex-row gap-3 pb-4">
            <h1 className="text-3xl font-bold text-[#ffff] m-auto">Welcome !</h1>
        </div>
        <form className="flex flex-col">
            <div className="pb-2">
                <label className="block mb-2 text-sm font-medium text-[#ffff]">Email</label>
                <div className="relative text-gray-400">
                    <input type="email" name="email" id="email" className="text-[#ffff] bg-[#515F96] sm:text-md focus:outline-none inline-block w-full p-2.5 py-3 px-4" placeholder="name@company.com"/>
                    <hr className='h-0.5 bg-[#ffff]'/>
                </div>
            </div>
            <div className="pb-2">
                <label className="block mb-2 text-sm font-medium text-[#ffff]">Username</label>
                <div className="relative text-gray-400">
                    <input type="text" name="username" id="username" className="text-[#ffff] bg-[#515F96] sm:text-md focus:outline-none inline-block w-full p-2.5 py-3 px-4" placeholder="username"/>
                    <hr className='h-0.5 bg-[#ffff]'/>
                </div>
            </div>
            <div className="pb-6">
                <label className="block mb-2 text-sm font-medium text-[#ffff]">Password</label>
                <div className="relative text-gray-400">
                    <input type="password" name="password" id="password" placeholder="••••••••••" className="text-[#ffff] bg-[#515F96] sm:text-md focus:outline-none inline-block w-full p-2.5 py-3 px-4"/>
                    <hr className='h-0.5 bg-[#ffff]'/>
                </div>
            </div>
            <button type="submit" className="w-1/2 text-[#0D3B66] bg-[#ffff] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">Register</button>
        </form>
      </div>
    </div>
    </>
  )
}
