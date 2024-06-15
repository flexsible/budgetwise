import React, { useEffect } from 'react'
import { useAtom } from 'jotai'
import { userType } from '../stores/stores'
import { Link } from 'react-router-dom'
import { image } from '../utils/api'

const RectangleInput2 = ({onClick}) => {
  // const [type, setType] = useAtom(userType)
  // console.log('type2', type)
  // useEffect(() => {
  //   setType('konservatif')
  // })
  return (
    <Link className="flex-col flex items-center justify-center" to={'/:id'} onClick={onClick}>
      <div className="bg-white flex mx-auto justify-center items-center shadow-lg rounded-2xl p-3">
        <div className="flex flex-col rounded-xl w-64 bg-[#F4D35E] p-3 gap-6">
          <div className="grid grid-cols-1 place-content-center aspect-square rounded-2xl">
            <img
              src={image.rectangle2}
              alt="Example"
              className="mx-auto mb-2"
              style={{ marginTop: '4px' }} // Adjust the value as needed for the gap
            />
            <span
              className="text-3xl font-poppins font-bold mx-auto text-[#00B01C] drop-shadow-xl"
              // style={{
              //   marginBottom: '4px', // Adjust the value as needed for the gap
              //   color: '#00B01C', // Set text color
              //   textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Add drop shadow
              // }}
            >
              KONSERVATIF
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

export default RectangleInput2
