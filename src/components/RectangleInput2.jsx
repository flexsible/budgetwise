import React from 'react'

const RectangleInput2 = () => {
  return (
    <div className="relative flex items-center justify-center p-5">
      <div className="bg-white w-[280px] h-[305px] rounded-2xl flex items-center justify-center relative">
        <div className="absolute top-3 w-[260px] h-[200px] rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#F4D35E' }}>
          <div className="flex flex-col items-center justify-center">
            <img
              src="../public/gambar_rectangle_input2.png"
              alt="Example"
              className="max-w-full max-h-full object-cover mb-2"
              style={{ marginTop: '4px' }} // Adjust the value as needed for the gap
            />
            <span
              className="text-[30px] font-poppins font-bold"
              style={{
                marginBottom: '4px', // Adjust the value as needed for the gap
                color: '#00B01C', // Set text color
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Add drop shadow
              }}
            >
              Konservatif
            </span>
          </div>
        </div>
        <div
          className="absolute w-[195px] h-[40px] rounded-xl flex items-center justify-center"
          style={{
            top: 'calc(200px + (105px / 2))', // Center the text between yellow rectangle and white rectangle bottom
            backgroundColor: 'transparent', // Make background transparent
            border: '2px solid #515F96' // Add border with specified color
          }}
        >
        </div>
      </div>
    </div>
  )
}

export default RectangleInput2
