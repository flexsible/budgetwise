// import React from 'react'

// const WordStart = (onClose) => {
//   return (
//     <div className="flex flex-col items-start justify-center bg-krem">
//       <div className="flex mx-auto justify-center items-center">
//         <div className="flex flex-col rounded-2xl w-fit bg-biru shadow-xl p-3 gap-6 mx-4">
//           <p className="mb-2 text-white">
//             <strong>Pilihan Konservatif</strong>: <br /> Profil ini merupakan sebutan bagi kamu yang menghindari risiko tinggi.
//           </p>
//           <p className="mb-2 text-white">
//             <strong>Pilihan Agresif</strong>: <br /> Profil risiko ini cocok bagi kamu yang mengejar peningkatan nilai investasi dalam jangka panjang.
//           </p>
//         </div>
//       </div>
//       <button onClick={onClose}>close</button>
//     </div>
//   )
// }

// export default WordStart

import { Button, Modal } from 'flowbite-react'
import React, { useState, useEffect } from 'react'

export default function WordStart () {
  const [openModal, setOpenModal] = useState(true)

  useEffect(() => {
    // Tampilkan modal setelah 1 detik
    const timer = setTimeout(() => {
      setOpenModal(true)
    }, 10000) // 1000 ms = 1 detik

    // Bersihkan timer jika komponen dibongkar
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
