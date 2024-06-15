import React from 'react'
import { Carousel } from 'flowbite-react'

export default function Testimoni () {
  return (
    <div className='flex justify-center items-center w-full h-screen bg-krem bg-oranmenTESTI bg-no-repeat bg-right-top' id='testi'>
      <div className="w-full max-w-4xl h-1/2 px-4 md:px-0 flex flex-col md:flex-row gap-12">
        {/* Single Carousel for both sets of testimonials to ensure better control and simplicity */}
        <Carousel className='w-full shadow-lg rounded-lg'>
          <div className='flex flex-col items-center justify-center bg-[#EEEEEE] h-full rounded-xl p-4 md:px-24'>
            <img className='rounded-full w-24 h-24' src="https://i.pravatar.cc/300?img=3" alt="Testimonial from a user"/>
            <h1 className='text-center text-xl font-semibold my-4'>John Doe</h1>
            <p className='text-center text-base md:text-xl'>
              "Sejak menggunakan BudgetWise, saya lebih mudah dalam mengatur keuangan pribadi. Platform ini membantu saya dalam membuat keputusan belanja yang lebih bijak. Dengan saran yang diberikan, saya bisa mengidentifikasi prioritas pengeluaran saya dan mengurangi pemborosan."
            </p>
          </div>
          <div className='flex flex-col items-center justify-center bg-[#EEEEEE] h-full rounded-xl p-4 md:px-24'>
            <img className='rounded-full w-24 h-24' src="https://i.pravatar.cc/300?img=4" alt="Testimonial from another user"/>
            <h1 className='text-center text-xl font-semibold my-4'>Jane Smith</h1>
            <p className='text-center text-base md:text-xl'>
              "BudgetWise benar-benar mengubah cara saya mengelola keuangan. Fitur-fitur yang disediakan sangat intuitif dan memberikan analisis yang mendalam tentang pengeluaran saya. Dengan bantuan alat-alat ini, saya telah berhasil menabung lebih banyak dan mengurangi hutang."
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  )
}
