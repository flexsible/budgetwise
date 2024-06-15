import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAtom } from 'jotai'
import { userType } from '../stores/stores'
import { image } from '../utils/api'

const RectangleInput = ({onClick}) => {
  // const [type, setType] = useAtom(userType)
  // console.log('type', type)
  // // useEffect(() => {
  // //   setType('agresif')
  // // })
  return (
    <Link className="flex-col flex items-center justify-center" to={'/:id'} onClick={onClick}>
      <div className="bg-white flex mx-auto justify-center items-center shadow-lg rounded-2xl p-3">
        <div className="flex flex-col rounded-xl w-64 bg-[#F4D35E] p-3 gap-6">
          <div className="grid grid-cols-1 place-content-center aspect-square rounded-2xl">
            <img
              src={image.rectangle}
              alt="Example"
              className="mx-auto mb-2"
              style={{ marginTop: '4px' }} // Adjust the value as needed for the gap
            />
            <span
              className="text-3xl font-poppins font-bold mx-auto text-[#FF0000] drop-shadow-xl"
              // style={{
              //   textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Add drop shadow
              // }}
              >
              AGRESIF
            </span>
          </div>
        </div>
        {/* <div
          className="absolute w-[195px] h-[40px] rounded-xl flex items-center justify-center"
          style={{
            top: 'calc(200px + (105px / 2))', // Center the text between yellow rectangle and white rectangle bottom
            backgroundColor: 'transparent', // Make background transparent
            border: '2px solid #515F96' // Add border with specified color
          }}
        >
        </div> */}
      </div>
    </Link>
  )
}

export default RectangleInput
