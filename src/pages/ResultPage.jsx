import React, { useEffect, useState } from 'react'
import { userBudget, userDarurat, userInvest, userSaran, userType, userUtama, currentId, userQuote } from '../stores/stores'
import { supabase } from '../utils/supabaseConfig'
import { useAtom } from 'jotai'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'

export default function ResultPage ({ id }) {
  const [data, setData] = useState('')
  const [error, setError] = useState('')
  const [budget, setBudget] = useAtom(userBudget)
  const [type, setType] = useAtom(userType)
  const [darurat, setDarurat] = useAtom(userDarurat)
  const [invest, setInvest] = useAtom(userInvest)
  const [saran, setSaran] = useAtom(userSaran)
  const [utama, setUtama] = useAtom(userUtama)
  const [_id, setId] = useAtom(currentId)
  const [quote, setQuote] = useAtom(userQuote)
  const navigate = useNavigate()

  const clear = () => {
    setBudget(0)
    setType('')
    setId('')
  }

  console.log('id', _id)
  console.log('data', data)
  console.log('budget', budget)
  console.log('testtype', type)

  if (budget <= 5000000) {
    if (type === 'agresif') {
      setUtama(budget * 55 / 100)
      setInvest(budget * 25 / 100)
      setDarurat(budget * 10 / 100)
      setSaran(budget * 10 / 100)
      setQuote(`"Orang ini punya gaya yang penuh semangat dan berani dalam ngatur keuangan. Dia selalu memastikan ${utama} dari gajinya cukup buat kebutuhan sehari-hari, tapi nggak ragu ngurangin buat peluang yang lebih besar. ${invest} dia pake buat investasi yang punya potensi tinggi, meskipun risikonya juga besar. Buat dia, masa depan cerah bisa dicapai dengan langkah-langkah berani. Meski begitu, dia tetap nyisihin ${darurat} buat dana darurat, biar tetap aman kalau ada kejadian tak terduga. ${saran} dia manfaatin buat mengejar barang-barang atau pengalaman yang bisa ningkatin hidupnya sekarang. Dengan strategi ini, dia yakin bisa meraih lebih cepat dari yang lain."`)
    }

    if (type === 'konservatif') {
      setUtama(budget * 60 / 100)
      setInvest(budget * 20 / 100)
      setDarurat(budget * 10 / 100)
      setSaran(budget * 10 / 100)
      setQuote(`"Orang ini tipe yang santai dan sabar dalam ngatur keuangan. Dia pastikan ${utama} dari gajinya aman buat kebutuhan sehari-hari. Terus, ${invest} disimpen buat investasi biar masa depan lebih terjamin. Nggak lupa juga, ${darurat} buat dana darurat, jadi dia nggak pernah panik kalau ada kejadian tak terduga. Terakhir, ${saran} dia alokasiin buat barang impian yang pengen dibeli tahun depan. Pelan tapi pasti, dia jalanin semua dengan tenang."`)
    }
  }

  if (budget >= 5000000 && budget <= 10000000) {
    if (type === 'agresif') {
      setUtama(budget * 35 / 100)
      setInvest(budget * 30 / 100)
      setDarurat(budget * 20 / 100)
      setSaran(budget * 15 / 100)
      setQuote(`
      "Orang yang berani dan dinamis dalam mengatur keuangan biasanya selalu mencari cara untuk mempercepat pertumbuhan asetnya. Dengan alokasi dana seperti ini:
      \n
      ${utama} buat kebutuhan utama, memastikan kebutuhan sehari-hari terpenuhi dengan efisien tanpa berlebihan.
      \n
      ${invest} buat investasi, fokus pada peluang dengan potensi keuntungan tinggi meski risikonya juga besar.
      \n
      ${darurat} buat dana darurat, agar tetap siap menghadapi kejadian tak terduga tanpa harus mengganggu strategi investasi utama.
      \n
      ${saran} buat barang impian atau pengalaman seru, biar setahun lagi bisa menikmati hasil jerih payah dan keberanian mengambil risiko."`)
    }

    if (type === 'konservatif') {
      setUtama(budget * 40 / 100)
      setInvest(budget * 25 / 100)
      setDarurat(budget * 10 / 100)
      setSaran(budget * 15 / 100)
      setQuote(`"Orang yang penyabar dalam mengatur keuangan biasanya fokus memastikan hidupnya nyaman dan terjamin. Dengan alokasi dana seperti ini:
        ${utama} buat kebutuhan utama, supaya semua kebutuhan sehari-hari terpenuhi tanpa harus khawatir.
        ${invest} buat investasi, dengan tujuan jangka panjang dan konsisten menambah aset.
        ${darurat} buat dana darurat, agar siap menghadapi kejutan tak terduga.
        ${saran} buat barang impian, biar setahun lagi bisa punya sesuatu yang sudah lama diinginkan."`)
    }
  }

  if (budget >= 10000000) {
    if (type === 'agresif') {
      setUtama(budget * 25 / 100)
      setInvest(budget * 35 / 100)
      setDarurat(budget * 25 / 100)
      setSaran(budget * 15 / 100)
      setQuote(`"Siap untuk tantangan? Di BudgetWise, kita bisa kelola duit dengan berani dan penuh semangat. Bayangin aja, ${utama} buat kebutuhan sehari-hari yang nggak bisa ditunda, ${invest} buat investasi di peluang besar dengan potensi keuntungan yang menggoda, ${darurat} untuk dana darurat biar siap ngadepin kejadian tak terduga, dan ${saran} buat ngincer barang atau pengalaman keren yang kita pengenin dalam waktu dekat. Jadi, kita bisa ambil langkah maju dengan percaya diri dan semangat tinggi. Ayo, mulai kelola keuangan dengan cara yang dinamis di BudgetWise!"`)
    }

    if (type === 'konservatif') {
      setUtama(budget * 30 / 100)
      setInvest(budget * 30 / 100)
      setDarurat(budget * 25 / 100)
      setSaran(budget * 15 / 100)
      setQuote(`"Tenang aja, sabar-sabar aja. Di BudgetWise, kita bisa atur duit dengan santai. Coba bayangin, ${utama} buat keperluan utama yang penting banget, ${invest} buat investasi buat masa depan, ${darurat} buat jaga-jaga kalo ada apa-apa, dan ${saran} buat beli barang yang kita pengenin dalam setahun. Jadi, kita bisa nikmatin hidup tanpa perlu khawatirin soal uang. Yuk, kita mulai atur duit bersama-sama di BudgetWise!"`)
    }
  }

  const insertData = async () => {
    const { data, error } = await supabase
      .from('result')
      .insert([
        {
          id: _id,
          type,
          utama,
          invest,
          saran,
          darurat
        }
      ])
      .select()

    console.log('insert', data)
  }

  const onClickHandler = () => {
    try {
      Swal.fire({
        title: 'Do you want to save the changes?',
        text: quote,
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: 'Save'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
          insertData()
          setTimeout(() => {
            navigate('/')
          }, 3000)
          clear()
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    const fetchResult = async () => {
      const { data, error } = await supabase
        .from('result')
        .select('*')

      if (error) {
        setError(error.message)
        setData(null)
      }
      if (data) {
        setData(data)
        setError(null)
      }
    }
    fetchResult()
  }, [])
  return (
    <>
      <div className="bg-krem h-screen bg-RP">
        <h1 className="pt-20 pb-10 text-6xl font-bold text-biru drop-shadow-lg my-1 text-center">
          Saran Penggunaan Budget
        </h1>
        <div className="flex justify-center">
          <input className="px-3 py-3 text-lg font-bold rounded-lg border-2 focus:outline focus:outline-2 focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-borderBlue" value={'Rp. ' + budget} disabled/>
        </div>
        <div className="py-6 flex flex-col gap-6 justify-center bg-krem items-center">
        <div className="flex items-center me-4 w-1/2 gap-4">
          <div className='bg-biru rounded-full me-2 px-4 text-center outline outline-offset-2 outline-biru'>
            <label className="block mb-2 text-3xl font-medium text-white">1</label>
          </div>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-3/4'>Kebutuhan Utama</h1>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-1/4'>Rp. {utama}</h1>
        </div>
      </div>

      <div className="py-6 flex flex-col gap-6 justify-center bg-krem items-center">
        <div className="flex items-center me-4 w-1/2 gap-4">
          <div className='bg-biru rounded-full me-2 px-4 text-center outline outline-offset-2 outline-biru'>
            <label className="block mb-2 text-3xl font-medium text-white">2</label>
          </div>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-3/4'>Investasi</h1>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-1/4'>Rp. {invest}</h1>
        </div>
      </div>

      <div className="py-6 flex flex-col gap-6 justify-center bg-krem items-center">
        <div className="flex items-center me-4 w-1/2 gap-4">
          <div className='bg-biru rounded-full me-2 px-4 text-center outline outline-offset-2 outline-biru'>
            <label className="block mb-2 text-3xl font-medium text-white">3</label>
          </div>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-3/4'>Dana Darurat</h1>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-1/4'>Rp. {darurat}</h1>
        </div>
      </div>

      <div className="py-6 flex flex-col gap-6 justify-center bg-krem items-center">
        <div className="flex items-center me-4 w-1/2 gap-4">
          <div className='bg-biru rounded-full me-2 px-4 text-center outline outline-offset-2 outline-biru'>
            <label className="block mb-2 text-3xl font-medium text-white">4</label>
          </div>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-3/4'>Dana Target Pembelian Kamu!</h1>
          <h1 className='px-3 py-3 text-lg font-bold rounded-lg border-2 bg-[#ffffff] text-[#444444] border-borderBlue w-1/4'>Rp. {saran}</h1>
        </div>
      </div>
      <div className="flex justify-center gap-5">
        <Link to={'/budgets'} className="my-6 block font-bold text-white rounded-lg px-6 py-3 bg-[#EE946B]">Back</Link>
        <button className="my-6 block font-bold text-biru rounded-lg px-6 py-3 bg-mustard sm:bg-biru sm:text-white" onClick={onClickHandler}>See your result!</button>
      </div>
      </div>
    </>
  )
}
