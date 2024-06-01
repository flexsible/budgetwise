/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import HistoryItem from './HistoryItem'
// import { HistoryData } from '../api'

export default function HistoryList () {
//   const [historyData, setHistoryData] = useState([])

  //   useEffect(() => {
  //     const getHistoryData = async () => {
  //       const data = await HistoryData()
  //       setHistoryData(data)
  //     }

  //     getHistoryData()
  //   }, [])

  return (
    <div>
      {/* {historyData.map((item, index) => (
        <HistoryItem
          key={index}
          number={index + 1}
          date={item.date}
          budget={item.budget}
        />
      ))} */}
    </div>
  )
}
