import React from 'react'
import { Link } from 'react-router-dom'
import { image } from '../utils/api'

const RectangleInput2 = ({ onClick }) => {
  return (
    <Link className="flex flex-col items-center justify-center w-full" to={'/:id'} onClick={onClick}>
      <div className="bg-white flex justify-center items-center shadow-lg rounded-2xl p-3 w-full sm:w-auto">
        <div className="flex flex-col rounded-xl bg-[#F4D35E] p-3 gap-6 w-full sm:max-w-sm">
          <div className="grid grid-cols-1 place-content-center aspect-square rounded-2xl">
            <img
              src={image.rectangle2}
              alt="Example"
              className="mx-auto mb-2"
            />
            <span className="text-3xl font-poppins font-bold mx-auto text-[#00B01C] drop-shadow-xl">
              KONSERVATIF
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RectangleInput2;
