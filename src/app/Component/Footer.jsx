import React from 'react'
import { news } from '../Data'
import Link from 'next/link'

function Footer() {
  // let id5= news.filter((a)=>a.id=="5")
  // let id17= news.filter((a)=>a.id=="17")
  // let id22= news.filter((a)=>a.id=="22")

  let id5=news.filter((a)=>a.id=='5')
  let id17=news.filter((a)=>a.id=="17")
  let id22= news.filter((a)=>a.id=="22")
  return (
    <>
      <section className='bg-[#11181F]'>
        <div className='bg-[#11181F]'>
        <div className='container bg-[#11181F] lg:flex py-10'>
        <div className='w-[30%]'>
            <h2 className='text-[35px] font-semibold text-[#F8633B]'>
                Newsportal
            </h2>
            <p className='text-white py-2'>Thoughts, stories and ideas.</p>
            <div>
            <input placeholder='Enter your email address' className='py-3 px-7 bg-[#11181F] text-[#799592 border border-bg-[#799592] my-5'></input>
            <button className='bg-[#F8633B] text-white px-2 py-[14px]'>Subscribe</button>
            </div>
          </div>
          <div className="lg:w-[45%]">
    <div>
      <h3 className='text-white text-[25px]'>Recent News</h3>
    <div>
      {id5.map((a)=>(
        <div className="flex items-center gap-5">
          <img className="w-[40%]" src={a.image}/>
          <div>
          <Link href={`/details/${a.id}`}>
           <h3 className="text-white text-[20px] font-bold py-5">{a.title}</h3></Link>
           <p className="text-[#B4BFCB] py-2">{a.date}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="my-5">
    {id17.map((a)=>(
        <div className="flex items-center gap-5">
          <img className="w-[40%]" src={a.image}/>
          <div>
            <Link href={`/details/${a.id}`}>
           <h3 className="text-white text-[20px] font-bold py-5">{a.title}</h3></Link>
           <p className="text-[#B4BFCB] py-2">{a.date}</p>
          </div>
        </div>
      ))}
    </div>
    <div>
    {id22.map((a)=>(
        <div className="flex items-center gap-5">
          <img className="w-[40%]" src={a.image}/>
          <div>
          <Link href={`/details/${a.id}`}>
           <h3 className="text-white text-[20px] font-bold py-5">{a.title}</h3></Link>
           <p className="text-[#B4BFCB] py-2">{a.date}</p>
          </div>
        </div>
      ))}
    </div>
   </div>
   
        </div>
        <div className='lg:w-[30%]'>
    <h3 className='text-[25px] text-white'>Tags</h3>
    <div className='gap-2'>
      <p className='bg-[#1F2831] text-[#93BFCB] inline-flex px-2 py-1'>Hot Articles</p>
      <p className='bg-[#1F2831] text-[#93BFCB] inline-flex px-2 py-1 mx-2'>Technology</p>
      <p className='bg-[#1F2831] text-[#93BFCB] inline-flex px-2 py-1'>Weekly-Top</p>
    </div>
    <div className='gap-2 py-2'>
      <p className='bg-[#1F2831] text-[#93BFCB] inline-flex px-2 py-1'>Business</p>
      <p className='bg-[#1F2831] text-[#93BFCB] inline-flex px-2 py-1 mx-2'>Trending</p>
      <p className='bg-[#1F2831] text-[#93BFCB] inline-flex px-2 py-1'>International</p>
      <p className='bg-[#1F2831] text-[#93BFCB] inline-flex px-2 py-1 mx-2'>Travel</p>
    </div>
    <div className='gap-2'>
      <p className='bg-[#1F2831] text-[#93BFCB] inline-flex px-2 py-1'>Fashion</p>
      <p className='bg-[#1F2831] text-[#93BFCB] inline-flex px-2 py-1 mx-2'>Design</p>
      <p className='bg-[#1F2831] text-[#93BFCB] inline-flex px-2 py-1'>Lifestyle</p>
      <p className='bg-[#1F2831] text-[#93BFCB] inline-flex px-2 py-1 mx-2'>Creative</p>
    </div>
    <div className='gap-2 py-2'>
      <p className='bg-[#1F2831] text-[#93BFCB] inline-flex px-2 py-1'>News</p>
      <p className='bg-[#1F2831] text-[#93BFCB] inline-flex px-2 py-1 mx-2'>International</p>
      <p className='bg-[#1F2831] text-[#93BFCB] inline-flex px-2 py-1'>Politics</p>
    </div>
   </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Footer
