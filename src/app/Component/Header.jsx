import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";

import Link from 'next/link';


function Header() {
  return (
    <>
      <section className='bg-[#182029] lg:flex justify-stretch gap-32 border-b-4 border-[#F8633B]'>
       <div className='flex container lg:w-[30%] w-[100%]'>
      <div className='bg-black  text-white container gap-5 py-4 px-5 inline-flex w-[50%] '>
        <h3><FaFacebookF /></h3>
        <h3><FaXTwitter /></h3>
        <h3><FaLinkedinIn /></h3>
        <h3><FaPinterestP /></h3>
      </div>
      <div className='bg-[#F8633B] text-white container items-center justify-center inline-flex '>
       <h3>Tuesday, September 17, 2024</h3>
      </div>
      </div>
      <div className='flex text-[#7995A3] lg:w-[40%] w-[100%] lg:justify-end container items-center'>
        <nav>
            <ul className='flex gap-4 justify-center lg:py-0 py-3 mx-auto w-[100%]'>
                <li className=' hover:text-[#F8633B] '>Sign up</li>
                <li className=' hover:text-[#F8633B] '>Elements</li>
                <li className=' hover:text-[#F8633B] '>Sign in</li>
                <li className=' hover:text-[#F8633B] '>Subscribe</li>
            </ul>
        </nav>
      </div>
      </section>
      <section className='bg-[#182029]'>
        <div className='container py-6 flex justify-between'>
          <div>
            <Link href="/">
            <h2 className='text-[35px] font-semibold text-[#F8633B]'>
                Newsportal
            </h2>
            </Link>
          </div>
          <div className='flex gap-4 items-center'>
            <div className='relative'>
                <input className='px-28 py-3 bg-black lg:block hidden' type="text" placeholder='Search anything' />
                <h2 className='text-[#F8633B] lg:absolute right-4 top-3 text-[20px] font-bold'><CiSearch />
                </h2>
                
            </div>
            <h3 className='text-[#7995A3] text-[25px]'>
            <MdOutlineWbSunny /></h3>
            <h2 className='lg:hidden text-white text-[25px]'>
                <MdOutlineMenu />

                </h2>
          </div>
          </div>
      </section>
      <section className='bg-[#11181F] text-[#7995A3]'>
        <div className='container py-7'>
         <ul className='flex gap-5'>
          <Link href="/">
            <li className='text-[#F8633B]'>Home</li></Link>
            <li className=' hover:text-[#F8633B] flex items-center'>Post Layouts <span className='text-[20px]'> <IoMdArrowDropdown /></span> 
            </li>
            <li className=' hover:text-[#F8633B] '>Authors</li>
            <li className=' hover:text-[#F8633B] '>Tag</li>
            <Link href={`/contact/`}>
            <li className=' hover:text-[#F8633B] '>Contact</li></Link>
         </ul>
         </div>
      </section>
    </>
  )
}

export default Header
