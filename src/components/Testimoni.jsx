import React from 'react'
import { Carousel } from 'flowbite-react'

export default function Testimoni () {
  return (
    <>
    <div className='h-screen w-full justify-center flex items-center bg-krem bg-oranmenTESTI bg-no-repeat bg-right-top'>
      <div className="h-1/2 w-3/4 flex flex-row gap-12">
        <Carousel className='shadow-lg rounded-lg'>
          <div className='flex flex-col items-center justify-center bg-[#EEEEEE] h-full rounded-xl px-24'>
            <img className='rounded-full' src="https://placehold.co/100x100"/>
            <h1 className='text-center text-xl font-semibold my-4'>placeholder</h1>
            <h1 className='text-center text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ea iste magnam quaerat accusamus sunt asperiores aliquid, quo exercitationem veritatis beatae mollitia saepe odit magni, corporis excepturi, at quasi deserunt quas nemo voluptate recusandae. Dolorum numquam quae maiores molestias mollitia?</h1>
          </div>
          <div className='flex flex-col items-center justify-center bg-[#EEEEEE] h-full rounded-xl px-24'>
            <img className='rounded-full' src="https://placehold.co/100x100"/>
            <h1 className='text-center text-xl font-semibold my-4'>placeholder2</h1>
            <h1 className='text-center text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime suscipit quaerat distinctio nostrum magnam! Eos, animi delectus vero in, maiores, reprehenderit iusto suscipit quod illo praesentium dolore minima vel. Ut, odio? Laboriosam perspiciatis minima illo laudantium necessitatibus, iusto dolorum dolore.</h1>
          </div>
        </Carousel>
        <Carousel className='shadow-lg rounded-lg'>
          <div className='flex flex-col items-center justify-center bg-[#EEEEEE] h-full rounded-xl px-24'>
            <img className='rounded-full' src="https://placehold.co/100x100"/>
            <h1 className='text-center text-xl font-semibold my-4'>placeholder</h1>
            <h1 className='text-center text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim harum eos tenetur ea voluptatibus? Nesciunt ab non repudiandae facilis debitis repellat velit beatae sint, quae, odio eum! Tempore aliquam at doloribus cumque consequuntur eum, voluptatibus facere reiciendis animi perspiciatis! Perferendis.</h1>
          </div>
          <div className='flex flex-col items-center justify-center bg-[#EEEEEE] h-full rounded-xl px-24'>
            <img className='rounded-full' src="https://placehold.co/100x100"/>
            <h1 className='text-center text-xl font-semibold my-4'>placeholder2</h1>
            <h1 className='text-center text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime suscipit quaerat distinctio nostrum magnam! Eos, animi delectus vero in, maiores, reprehenderit iusto suscipit quod illo praesentium dolore minima vel. Ut, odio? Laboriosam perspiciatis minima illo laudantium necessitatibus, iusto dolorum dolore.</h1>
          </div>
        </Carousel>
      </div>
    </div>
    </>
  )
}
