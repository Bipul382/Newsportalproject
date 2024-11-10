"use client"
import { news } from '@/app/Data'
import { useParams } from 'next/navigation'
import React from 'react'

function page() {
    let{id}=useParams()
    let aaa= news.find((a)=>a.id==id)
  return (
    <section className='bg-[#182029]'>
       <div className='container text-white py-11'>
        <h2 className='text-[35px] font-bold'>{aaa.title}</h2>
        <p className='text-[#B4BFCB] py-5'>{aaa.post}</p>
        <h4 className='italic text-[20px] border-t-2 border-b-2 py-5 border-[#B4BFCB]'>{aaa.semiTitle}</h4>
        <img className='w-[80%] py-3' src={aaa.image}/>
        <h6 className='text-[25px]'>{aaa.semititle1}</h6>
        <h6 className='text-[25px] py-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit corporis nam aliquid iusto error reprehenderit et aliquam pariatur incidunt quam distinctio natus sint, ea consequuntur! Iusto sed quas fugiat reiciendis. </h6>
       </div>
    </section>
  )
}

export default page
