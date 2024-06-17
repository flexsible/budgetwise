import { Button, Modal } from 'flowbite-react'
import React, { useState, useEffect } from 'react'
import { buttonTrigger } from '../stores/stores'
import { useAtom } from 'jotai'

export default function WordStart ({ onClick }) {
  const [openModal, setOpenModal] = useAtom(buttonTrigger)

  return (
    <>
      {/* <Button className='position: absolute left-1/2 top-1/2 translate-x-1/2' onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>FAQ</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <strong>Pilihan Konservatif</strong>: <br /> Profil ini merupakan sebutan bagi kamu yang menghindari risiko tinggi.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <strong>Pilihan Agresif</strong>: <br /> Profil risiko ini cocok bagi kamu yang mengejar peningkatan nilai investasi dalam jangka panjang.
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
