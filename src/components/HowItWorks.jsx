import React from 'react'

function HowItWorks () {
  return (
    <div className="flex flex-col items-center min-h-screen bg-krem" id='how'>
      {/* Mobile View */}
      <div className="sm:hidden w-full px-4 py-8">  {/* Menambahkan padding vertikal dengan py-8 */}
        <div className="flex flex-col items-center justify-center w-full text-center">
          <img src="/2-howItWorks.png" alt="How it works" className="max-w-full" />
          <h1 className="text-3xl font-bold text-black drop-shadow-lg my-1 py-3">
            How It Works?
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 px-4 py-6">
          {['Daftarkan diri kalian terlebih dahulu.', 'Masuk ke akun yang telah anda buat.', 'Beri tahu kami kondisi keuangan anda.', 'Saran terbaik untuk mengelola finansial anda.'].map((text, index) => (
            <div key={index} className="relative w-full max-w-xs bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#F4D35E] rounded-full flex justify-center items-center mb-4">
                <span className="text-black text-2xl font-bold">{index + 1}</span>
              </div>
              <h1 className="text-xl font-bold text-black">{['Register', 'Login', 'Consult', 'Solution'][index]}</h1>
              <h2 className="text-md text-black">
                {text}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View - Only visible on md screens and larger */}
      <div className="hidden md:block w-full px-4">
      <div className="flex flex-col items-center justify-center w-full">
        <img src="/2-howItWorks.png" alt="How it works" className="max-w-full" />
        <h1 className="text-6xl font-bold text-black drop-shadow-lg my-1 py-3 pb-20">
          How It Works?
        </h1>
      </div>
        {/* Container for both rows */}
        <div className="flex flex-col items-center gap-10 px-4">
          {/* First row */}
          <div className="flex justify-center items-center gap-20">
            {['Daftarkan diri kalian terlebih dahulu.', 'Masuk ke akun yang telah anda buat.'].map((text, index) => (
              <div key={index} className="relative w-96 h-fit bg-white rounded-2xl shadow-lg p-6 flex items-center">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-12 w-24 h-24 bg-[#F4D35E] rounded-full flex justify-center items-center">
                  <span className="text-black text-4xl drop-shadow-lg font-bold">{index + 1}</span>
                </div>
                <div className="ml-14 flex flex-col justify-center h-full">
                  <h1 className="text-4xl font-bold text-black drop-shadow-lg my-1">
                    {['Register', 'Login'][index]}
                  </h1>
                  <h2 className="text-xl text-black drop-shadow-lg font-semibold py-1">
                    {text}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        {/* Second row */}
        <div className="flex justify-center items-center gap-20">
          {['Beri tahu kami kondisi keuangan anda.', 'Saran terbaik untuk mengelola finansial anda.'].map((text, index) => (
            <div key={index + 2} className="relative w-96 h-fit bg-white rounded-2xl shadow-lg p-6 flex items-center">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-12 w-24 h-24 bg-[#F4D35E] rounded-full flex justify-center items-center">
                <span className="text-black text-4xl drop-shadow-lg font-bold">{index + 3}</span>
              </div>
              <div className="ml-14 flex flex-col justify-center h-full">
                <h1 className="text-4xl font-bold text-black drop-shadow-lg my-1">
                  {['Consult', 'Solution'][index]}
                </h1>
                <h2 className="text-xl text-black drop-shadow-lg font-semibold py-1">
                  {text}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default HowItWorks
