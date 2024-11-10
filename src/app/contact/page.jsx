import Link from 'next/link';
import React from 'react'
import { IoHome } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";

function page() {
  return (
    <>
   <section className='bg-[#182029]'>
       <div className='container py-20'>
      <div>
        <ul className='flex items-center text-[#494D51] gap-3'>
            <Link href="/">
            <li className='flex items-center gap-1'><IoHome />
            Home /</li></Link>
            <li className='text-[#F8633B]'>Contact</li>
        </ul>
      </div>
      <div className='py-10'>
        <h3 className='text-white font-semibold text-[30px]'>Get In Touch</h3>
        <p className='text-[#7995A3] text-[18px] py-2'>Don't worry we never spam. Required fields are marked *.</p>
        <div className='lg:flex gap-4'>
            <input className='px-16 py-3 bg-[#11181F] border-[#7995A3] border-2' placeholder='First Name *'></input>
            <input className='px-16 py-3 bg-[#11181F] border-[#7995A3] border-2 lg:my-0 my-2' placeholder='Last Name *'></input>
        </div>
        <div className='lg:flex gap-4 py-4'>
            <input className='px-16 py-3 bg-[#11181F] border-[#7995A3] border-2' placeholder='Email *'></input>
            <input className='px-16 py-3 bg-[#11181F] border-[#7995A3] border-2 lg:my-0 my-2' placeholder='Phone Number *'></input>
        </div>
        <input className='lg:px-[228px] px-16 lg:py-7 py-16 bg-[#11181F] border-[#7995A3] border-2' placeholder=' Your message*'></input>
      </div>
      <button className='text-white bg-[#F8633B] px-5 py-3'>Send Message</button>
      </div>
    </section>
    </>
  )
}

export default page
