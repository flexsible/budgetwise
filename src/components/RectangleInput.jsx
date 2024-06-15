import React from 'react';
import { Link } from 'react-router-dom';
import { image } from '../utils/api';

const RectangleInput = ({ onClick }) => {
  return (
    <Link className="flex flex-col items-center justify-center w-full" to={'/:id'} onClick={onClick}>
      <div className="bg-white flex justify-center items-center shadow-lg rounded-2xl p-3 w-full sm:w-64">
        <div className="flex flex-col rounded-xl bg-[#F4D35E] p-3 gap-6 w-full">
          <div className="grid grid-cols-1 place-content-center aspect-square rounded-2xl">
            <img
              src={image.rectangle}
              alt="Example"
              className="mx-auto mb-2"
            />
            <span className="text-3xl font-poppins font-bold mx-auto text-[#FF0000] drop-shadow-xl">
              AGRESIF
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RectangleInput;
