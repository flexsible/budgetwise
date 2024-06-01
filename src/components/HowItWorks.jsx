import React from 'react'

function HowItWorks () {
  return (
    <>
      <div className="flex flex-col items-center h-screen bg-krem bg-HIW">
        <div>
          <img src="/2-howItWorks.png" alt="How it works" />
        </div>
        <h1 className="py-3 text-6xl font-bold text-black drop-shadow-lg my-1 pb-20">
          <span className="text-black">How It Works?</span>
        </h1>
        <div className="justify-center"></div>
        <div className="flex justify-center items-center gap-20 mb-6 pb-10">
          <div className="relative w-96 h-fit bg-white rounded-2xl shadow-lg p-6 flex items-center">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-12 w-24 h-24 bg-[#F4D35E] rounded-full flex justify-center items-center">
              <span className="text-black text-4xl drop-shadow-lg font-bold">01</span>
            </div>
            <div className="ml-14 flex flex-col justify-center h-full">
              <h1 className="py-1 text-4xl font-bold text-black drop-shadow-lg my-1">
                Register
              </h1>
              <h2 className="py-1 text-black text-xl drop-shadow-lg font-semibold">
                Daftarkan diri kalian terlebih dahulu.
              </h2>
            </div>
          </div>
          <div className="relative w-96 h-fit bg-white rounded-2xl shadow-lg p-6 flex items-center">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-12 w-24 h-24 bg-[#F4D35E] rounded-full flex justify-center items-center">
              <span className="text-black text-4xl drop-shadow-lg font-bold">02</span>
            </div>
            <div className="ml-14 flex flex-col justify-center h-full">
              <h1 className="py-1 text-4xl font-bold text-black drop-shadow-lg my-1">
                Login
              </h1>
              <h2 className="py-1 text-black text-xl drop-shadow-lg font-semibold">
                Masuk ke akun yang telah anda buat.
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-20">
          <div className="relative w-96 h-fit bg-white rounded-2xl shadow-lg p-6 flex items-center">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-12 w-24 h-24 bg-[#F4D35E] rounded-full flex justify-center items-center">
              <span className="text-black text-4xl drop-shadow-lg font-bold">03</span>
            </div>
            <div className="ml-14 flex flex-col justify-center h-full">
              <h1 className="py-1 text-4xl font-bold text-black drop-shadow-lg my-1">
                Konsultasi
              </h1>
              <h2 className="py-1 text-black text-xl drop-shadow-lg font-semibold">
                Beri tahu kami kondisi keuangan anda.
              </h2>
            </div>
          </div>
          <div className="relative w-96 h-fit bg-white rounded-2xl shadow-lg p-6 flex items-center">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-12 w-24 h-24 bg-[#F4D35E] rounded-full flex justify-center items-center">
              <span className="text-black text-4xl drop-shadow-lg font-bold">04</span>
            </div>
            <div className="ml-14 flex flex-col justify-center h-full">
              <h1 className="py-1 text-4xl font-bold text-black drop-shadow-lg my-1">
                Solusi
              </h1>
              <h2 className="py-1 text-black text-xl drop-shadow-lg font-semibold">
                Saran terbaik untuk mengelola finansial anda.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowItWorks
