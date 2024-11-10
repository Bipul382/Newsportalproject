"use client"
import Link from "next/link";
import { news } from "./Data";

import { CiCalendarDate } from "react-icons/ci";
import { BiMenuAltLeft } from "react-icons/bi";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



export default function Home() {
  let id1= news.filter((a)=>a.id=="1")
  let id2= news.filter((a)=>a.id=="2")
  let id3= news.filter((a)=>a.id=="3")
  let id4= news.filter((a)=>a.id=="4")
  let id5= news.filter((a)=>a.id=="5")
  let id6= news.filter((a)=>a.id=="6")
  let id7= news.filter((a)=>a.id=="7")
  let id8= news.filter((a)=>a.id=="8")
  let id9= news.filter((a)=>a.id=="9")
  let id10= news.filter((a)=>a.id=="10")
  let id11= news.filter((a)=>a.id=="11")
  let id12= news.filter((a)=>a.id=="12")
  let id13= news.filter((a)=>a.id=="13")
  let id14= news.filter((a)=>a.id=="14")
  let id15= news.filter((a)=>a.id=="15")
  let id16= news.filter((a)=>a.id=="16")
  let id17= news.filter((a)=>a.id=="17")
  let id18= news.filter((a)=>a.id=="18")
  let id19= news.filter((a)=>a.id=="19")
  let id20= news.filter((a)=>a.id=="20")
  let id21= news.filter((a)=>a.id=="21")
  let id22= news.filter((a)=>a.id=="22")
  let id23= news.filter((a)=>a.id=="23")
  let id24= news.filter((a)=>a.id=="24")
 
  return (
<>
<section className="bg-[#182029]">
  <div className="py-10 container lg:flex gap-5">
    <div className="lg:w-[70%]">
      {id1.map((a)=>(
        <div className="relative overflow-hidden" key={a.id}>
          <div>
          <img className="w-full" src={a.image}/>
          </div>
          <div className="absolute bottom-5 left-4 z-10">
            <Link href={`/details/${a.id}`}>
            <h2 className="text-white text-[30px] font-semibold hover:text-[#F8633B] hover:font-bold">{a.title}</h2></Link>
            <p className="flex text-[#B4BFCB] items-center gap-1 py-3"> <CiCalendarDate />
            {a.date}</p>
            <h4 className="text-white text-[15px]">{a.semiTitle}</h4>
          </div>
          <div className="absolute left-0 top-0 bg-gradient-to-t from-black to to-transparent p-[500px] opacity-95">

          </div>
        </div>
      ))}
    </div>
    <div className="lg:w-[40%]">
     <div>
      {id18.map((a)=>(
        <div className="relative w-[85%] overflow-hidden" key={a.id}>
          <img className="" src={a.image}/>
          <div className="absolute bottom-1 left-1 z-10">
            <Link href={`/details/${a.id}`}>
            <h2 className="text-white text-[30px] font-semibold hover:text-[#F8633B] hover:font-bold">{a.title}</h2></Link>
            <p className="flex text-[#B4BFCB] items-center gap-1 py-3"> <CiCalendarDate />
            {a.date}</p>
           
          </div>
          <div className="absolute left-0 top-0 bg-gradient-to-t from-black to to-transparent p-[500px] opacity-95">

          </div>
          <div className="absolute left-0 top-0 bg-gradient-to-t from-black to to-transparent p-[500px] opacity-95">

          </div>
        </div>
        
      ))}
     </div>
     <div className="py-6">
       
         {id22.map((a)=>(
          <div className="relative w-[85%] overflow-hidden h-56">
            <img className="" src={a.image}/>
            <div className="absolute bottom-1 left-1 z-10">
            <Link href={`/details/${a.id}`}>
            <h2 className="text-white text-[30px] font-semibold hover:text-[#F8633B] hover:font-bold">{a.title}</h2></Link>
            <p className="flex text-[#B4BFCB] items-center gap-1 py-3"> <CiCalendarDate />
            {a.date}</p>
           </div>
           <div className="absolute left-0 top-0 bg-gradient-to-t from-black to to-transparent p-96 ">

           </div>
          </div>
         ))}
       
     </div>
    </div>
  </div>
</section>
<section className="bg-[#182029]">
  <div className="container py-10">
   <div className="flex justify-between">
   <h2 className="text-white text-[28px] font-semibold flex items-center gap-5"><div className="text-[#F8633B] text-[45px]"> <BiMenuAltLeft /></div>
   Latest News</h2>
   <h2 className="text-[28px] text-white font-semibold">View All</h2>
   </div>
   <div className="lg:flex gap-10 justify-around py-10">
    <div className="lg:w-[45%]">
     {id10.map((a)=>(
      <div className="relative  h-[300px] overflow-hidden">
      <img className="w-full" src={a.image}/>
      <div className="absolute bottom-1 left-1 z-10">
      <Link href={`/details/${a.id}`}>
      <h2 className="text-white text-[30px] font-semibold hover:text-[#F8633B] hover:font-bold">{a.title}</h2></Link>
      <p className="flex text-[#B4BFCB] items-center gap-1 py-3"> <CiCalendarDate />
      {a.date}</p>
     
    </div>
    <div className="absolute left-0 top-0 bg-gradient-to-t from-black to to-transparent p-96 opacity-65">

          </div>
    </div>
     ))}
    </div>
    <div className="lg:w-[45%]">
      {id15.map((a)=>(
         <div className="relative h-[300px] overflow-hidden">
         <img className="w-full" src={a.image}/>
         <div className="absolute bottom-1 left-1 z-10">
         <Link href={`/details/${a.id}`}>
         <h2 className="text-white text-[30px] font-semibold hover:text-[#F8633B] hover:font-bold">{a.title}</h2></Link>
         <p className="flex text-[#B4BFCB] items-center gap-1 py-3"> <CiCalendarDate />
         {a.date}</p>
        
       </div>
       <div className="absolute left-0 top-0 bg-gradient-to-t from-black to to-transparent p-96 opacity-65">
   
             </div>
       </div>
      ))}
    </div>
   </div>
   <div className="lg:flex gap-5 border-[1px] border-[#B4BFCB] border-opacity-20 p-10 my-5">
    <div>
      {id6.map((a)=>(
        <div>
          <img className="h-[250px] w-[300px]" src={a.image}/>
          <Link href={`/details/${a.id}`}>
          <h2 className="text-white text-[20px]">{a.title}</h2></Link>
           <p className="text-[#B4BFCB]">{a.date}</p>
        </div>
      ))}
    </div>
    <div>
      {id7.map((a)=>(
        <div>
        <img className="h-[250px] w-[300px]" src={a.image}/>
        <Link href={`/details/${a.id}`}>
        <h2 className="text-white text-[20px]">{a.title}</h2></Link>
           <p className="text-[#B4BFCB]">{a.date}</p>
      </div>
      ))}
    </div>
    <div>
      {id10.map((a)=>(
        <div>
        <img className="h-[250px] w-[300px]" src={a.image}/>
        <Link href={`/details/${a.id}`}>
        <h2 className="text-white text-[20px]">{a.title}</h2></Link>
           <p className="text-[#B4BFCB]">{a.date}</p>
      </div>
      ))}
    </div>
    <div>
    {id8.map((a)=>(
        <div>
        <img className="h-[250px] w-[300px]" src={a.image}/>
        <Link href={`/details/${a.id}`}>
        <h2 className="text-white text-[20px]">{a.title}</h2></Link>
           <p className="text-[#B4BFCB]">{a.date}</p>
           
      </div>
      ))}
    </div>
   </div>
  </div>
</section>
<section className="bg-[#182029]">
   <div className="container py-5">
   <div className="flex justify-between">
   <h2 className="text-white text-[28px] font-semibold flex items-center gap-5"><div className="text-[#F8633B] text-[45px]"> <BiMenuAltLeft /></div>
   Trending News</h2>
   
   </div>
   <div className="lg:flex gap-5 p-5 justify-between">
    <div className="lg:w-[30%]">
      {id13.map((a)=>(
        <div className="relative overflow-hidden">
          <img className="h-[250px]" src={a.image}/>
          <div className="absolute left-0 bottom-0 z-40">
          <Link href={`/details/${a.id}`}>
          <h2 className="text-white text-[20px]">{a.title}</h2></Link>
           <p className="text-[#B4BFCB]">{a.date}</p>
          </div>
          <div className="absolute left-0 top-0 bg-gradient-to-t from-black to to-transparent p-80"></div>
        </div>
      ))}
    </div>
    <div className="lg:w-[30%]">
      {id21.map((a)=>(
        <div className="relative overflow-hidden">
        <img className="h-[250px]" src={a.image}/>
        <div className="absolute left-0 bottom-0 z-40">
        <Link href={`/details/${a.id}`}>
        <h2 className="text-white text-[20px]">{a.title}</h2></Link>
           <p className="text-[#B4BFCB]">{a.date}</p>
           </div>
           <div className="absolute left-0 top-0 bg-gradient-to-t from-black to to-transparent p-80"></div>
      </div>
      ))}
    </div>
    <div className="lg:w-[30%]">
      {id19.map((a)=>(
        <div className="relative overflow-hidden">
        <img className="h-[250px]" src={a.image}/>
        <div className="absolute left-0 bottom-0 z-40">
        <Link href={`/details/${a.id}`}>
        <h2 className="text-white text-[20px]">{a.title}</h2></Link>
           <p className="text-[#B4BFCB]">{a.date}</p>
           </div>
           <div className="absolute left-0 top-0 bg-gradient-to-t from-black to to-transparent p-80"></div>
      </div>
      ))}
    </div>
   
   </div>
   <div className="lg:flex gap-5">
    <div>
      {id2.map((a)=>(
        <div className="flex gap-2">
          <img className="w-[50%]" src={a.image}/>
          <div>
          <Link href={`/details/${a.id}`}>
        <h2 className="text-white text-[20px]">{a.title}</h2></Link>
           <p className="text-[#B4BFCB]">{a.date}</p>
          </div>
        </div>
      ))}
    </div>
    <div>
    <div >
      {id16.map((a)=>(
        <div className="flex gap-2">
          <img className="w-[50%]" src={a.image}/>
          <div>
          <Link href={`/details/${a.id}`}>
        <h2 className="text-white text-[20px]">{a.title}</h2></Link>
           <p className="text-[#B4BFCB]">{a.date}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
    <div>
    <div >
      {id12.map((a)=>(
        <div className="flex gap-2">
          <img className="w-[50%]" src={a.image}/>
          <div>
          <Link href={`/details/${a.id}`}>
        <h2 className="text-white text-[20px]">{a.title}</h2></Link>
           <p className="text-[#B4BFCB]">{a.date}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
   </div>
   </div>
</section>
<section className="bg-[#182029]">
  <div className="container py-20">
<div className="flex justify-between">
   <h2 className="text-white text-[28px] font-semibold flex items-center gap-5 capitalize"><div className="text-[#F8633B] text-[45px]"> <BiMenuAltLeft /></div>
   Top Reads of the week</h2>
   
   </div>
   <div className="py-5 lg:flex gap-5 justify-between">
      <div className="lg:w-[30%]">
        {id24.map((a=>(
          <div>
            <img src={a.image}/>
            <Link href={`/details/${a.id}`}>
            <h3 className="text-white text-[20px]">{a.title}</h3></Link>
            <p className="text-[#B4BFCB]">{a.date}</p>
          </div>
        )))}
         <div className="py-3">
            {id3.map((a)=>(
              <div className="flex gap-3">
                <img className="w-[50%]" src={a.image}/>
                <div>
                  <h3 className="text-white text-[20px]">{a.title}</h3>
                  <p className="text-[#B4BFCB]">{a.date}</p>
                </div>
              </div>
            ))}
         </div>
         <div className="py-3">
            {id4.map((a)=>(
              <div className="flex gap-3">
                <img className="w-[50%]" src={a.image}/>
                <div>
                  <h3 className="text-white text-[20px]">{a.title}</h3>
                  <p className="text-[#B4BFCB]">{a.date}</p>
                </div>
              </div>
            ))}
         </div>
      </div>
      <div className="lg:w-[30%]">
        {id20.map((a)=>(
          <div className="relative overflow-hidden">
            <img className="w-full lg:h-[650px] object-cover" src={a.image}/>
            <div className="absolute lg:left-7 lg:bottom-72 left-0 bottom-0 z-40">
        <Link href={`/details/${a.id}`}>
        <h2 className="text-white text-[35px] font-bold">{a.title}</h2></Link>
           <p className="text-[#B4BFCB] font-bold">{a.date}</p>
           </div>
           <div className="absolute left-0 top-0 bg-gradient-to-t from-black to to-transparent p-96 opacity-80"></div>
          </div>
        ))}
      </div>
      <div className="lg:w-[30%]">
        {id1.map((a=>(
          <div>
            <img src={a.image1}/>
            <Link href={`/details/${a.id}`}>
            <h3 className="text-white text-[20px]">{a.title}</h3></Link>
            <p className="text-[#B4BFCB]">{a.date}</p>
          </div>
        )))}
         <div className="py-3">
            {id1.map((a)=>(
              <div className="flex gap-3">
                <img className="w-[50%] object-cover" src={a.image}/>
                <div>
                  <h3 className="text-white text-[20px]">{a.title}</h3>
                  <p className="text-[#B4BFCB]">{a.date}</p>
                </div>
              </div>
            ))}
         </div>
         <div className="py-3">
            {id3.map((a)=>(
              <div className="flex gap-3">
                <img className="w-[50%]" src={a.image}/>
                <div>
                  <h3 className="text-white text-[20px]">{a.title}</h3>
                  <p className="text-[#B4BFCB]">{a.date}</p>
                </div>
              </div>
            ))}
         </div>
      </div>
    </div> 
   </div>
</section>
<section className="bg-[#182029]">
   <div className="container pb-10">
   <div className="flex justify-between">
   <h2 className="text-white text-[28px] font-semibold flex items-center gap-5 capitalize"><div className="text-[#F8633B] text-[45px]"> <BiMenuAltLeft /></div>
   Fashion in 2022</h2>
   <h2 className="text-white text-[28px] font-semibold">View All</h2>
   </div>
   <div className="lg:flex gap-5 justify-between">
   <div className="lg:w-[45%] py-5">
    {id11.map((a)=>(
      <div>
        <img className="lg:h-[250px] lg:w-[600px] object-cover" src={a.image}/>
        <Link href={`/details/${a.id}`}>
        <h3 className="text-white text-[20px] font-bold py-5">{a.title}</h3></Link>
        <p className="text-[#B4BFCB]">{a.date}</p>
        <h2 className="text-[#B4BFCB] py-2">Global Markets React to Sudden Economic Shift In a world where economic stability is often viewed as a cornerstone of</h2>
        <Link href={`/details/${a.id}`}>
        <button className="bg-transparent border-[#F8633B] border-[1px] py-2 px-3 text-white my-3">Read More</button></Link>
      </div>
    ))}
   </div>
   <div className="lg:w-[45%]">
    <div>
      {id12.map((a)=>(
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
    {id13.map((a)=>(
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
    {id14.map((a)=>(
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
   </div>
</section>
<section className="bg-[#182029]">
  <div className="container py-10">
  <div className="flex justify-between">
   <h2 className="text-white text-[28px] font-semibold flex items-center gap-5 capitalize"><div className="text-[#F8633B] text-[45px]"> <BiMenuAltLeft /></div>
   Business News</h2>
   <h2 className="text-white text-[28px] font-semibold">View All</h2>
   </div>
   <div className="lg:flex gap-5 justify-between">
   <div className="lg:w-[45%] py-5">
    {id21.map((a)=>(
      <div>
        <img className="lg:h-[250px] lg:w-[600px] object-cover" src={a.image}/>
        <Link href={`/details/${a.id}`}>
        <h3 className="text-white text-[20px] font-bold py-5">{a.title}</h3></Link>
        <p className="text-[#B4BFCB]">{a.date}</p>
        <h2 className="text-[#B4BFCB] py-2">Global Markets React to Sudden Economic Shift In a world where economic stability is often viewed as a cornerstone of</h2>
        <Link href={`/details/${a.id}`}>
        <button className="bg-transparent border-[#F8633B] border-[1px] py-2 px-3 text-white my-3">Read More</button></Link>
      </div>
    ))}
    <div className="my-5">
    {id23.map((a)=>(
        <div className="flex items-center gap-5">
          <img className="w-[40%]" src={a.image}/>
          <div>
            <Link href={`/details/${a.id}`}>
           <h3 className="text-white text-[20px] font-bold py-5">{a.title}</h3></Link>
           <p className="text-[#B4BFCB] py-2">{a.date}</p>
           <Link href={`/details/${a.id}`}>
        <button className="bg-transparent border-[#F8633B] border-[1px] py-2 px-3 text-white my-3">Read More</button></Link>
          </div>
        </div>
      ))}
    </div>
   </div>
   <div className="lg:w-[45%] py-5">
    {id22.map((a)=>(
      <div>
        <img className="lg:h-[250px] lg:w-[600px] object-cover" src={a.image}/>
        <Link href={`/details/${a.id}`}>
        <h3 className="text-white text-[20px] font-bold py-5">{a.title}</h3></Link>
        <p className="text-[#B4BFCB]">{a.date}</p>
        <h2 className="text-[#B4BFCB] py-2">Global Markets React to Sudden Economic Shift In a world where economic stability is often viewed as a cornerstone of</h2>
        <Link href={`/details/${a.id}`}>
        <button className="bg-transparent border-[#F8633B] border-[1px] py-2 px-3 text-white my-3">Read More</button></Link>
      </div>
    ))}
    <div className="my-5">
    {id24.map((a)=>(
        <div className="flex items-center gap-5">
          <img className="w-[40%]" src={a.image}/>
          <div>
            <Link href={`/details/${a.id}`}>
           <h3 className="text-white text-[20px] font-bold py-5">{a.title}</h3></Link>
           <p className="text-[#B4BFCB] py-2">{a.date}</p>
           <Link href={`/details/${a.id}`}>
        <button className="bg-transparent border-[#F8633B] border-[1px] py-2 px-3 text-white my-3">Read More</button></Link>
          </div>
        </div>
        
      ))}
    </div>
   </div>
   </div>
  </div>
</section>
<section className="bg-[#182029]">
  <div className="container lg:flex justify-between pb-20">
    <div className="lg:w-[30%]">
    <div className="flex py-5">
   <h2 className="text-white text-[28px] font-semibold flex items-center gap-5 capitalize"><div className="text-[#F8633B] text-[45px]"> <BiMenuAltLeft /></div>
   Design</h2>
   
   </div>
    {id16.map((a=>(
          <div>
            <img src={a.image}/>
            <Link href={`/details/${a.id}`}>
            <h3 className="text-white text-[20px]">{a.title}</h3></Link>
            <p className="text-[#B4BFCB]">{a.date}</p>
          </div>
        )))}
    </div>
    <div className="lg:w-[30%]">
    <div className="flex py-5">
   <h2 className="text-white text-[28px] font-semibold flex items-center gap-5 capitalize"><div className="text-[#F8633B] text-[45px]"> <BiMenuAltLeft /></div>
   Creative</h2>
   
   </div>
    {id9.map((a=>(
          <div>
            <img src={a.image}/>
            <Link href={`/details/${a.id}`}>
            <h3 className="text-white text-[20px]">{a.title}</h3></Link>
            <p className="text-[#B4BFCB]">{a.date}</p>
          </div>
        )))}
    </div>
    <div className="lg:w-[30%]">
    <div className="flex py-5">
   <h2 className="text-white text-[28px] font-semibold flex items-center gap-5 capitalize"><div className="text-[#F8633B] text-[45px]"> <BiMenuAltLeft /></div>
   Travel</h2>
   
   </div>
    {id18.map((a=>(
          <div>
            <img src={a.image}/>
            <Link href={`/details/${a.id}`}>
            <h3 className="text-white text-[20px]">{a.title}</h3></Link>
            <p className="text-[#B4BFCB]">{a.date}</p>
          </div>
        )))}
    </div>
  </div>
</section>
<section className="bg-[#182029]">
  <div className="py-20">
<div className="flex justify-between pb-10 container">
   <h2 className="text-white text-[28px] font-semibold flex items-center gap-5 capitalize"><div className="text-[#F8633B] text-[45px]"> <BiMenuAltLeft /></div>
   All News</h2>
   
   </div>
   <div className="hidden lg:block">
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {news.map((a)=>(
         <SwiperSlide>
           <div className="relative overflow-hidden">
            <img className="w-[500px] h-[300px]" src={a.image}/>
            <div className="absolute left-0 bottom-3 z-10">
            <Link href={`/details/${a.id}`}>
            <h3 className="text-white text-[20px] font-bold">{a.title}</h3></Link>
            <p className="text-[#B4BFCB] font-bold">{a.date}</p>
            </div>
            <div className="absolute left-0 top-0 bg-gradient-to-t from-black to to-transparent p-96 opacity-80"></div>
           </div>
         </SwiperSlide>
        ))}
        
      </Swiper>
      </div>
      <div className="block lg:hidden">
<Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {news.map((a)=>(
         <SwiperSlide>
           <div className="relative overflow-hidden">
            <img className="w-[500px] h-[300px]" src={a.image}/>
            <div className="absolute left-0 bottom-3 z-10">
            <Link href={`/details/${a.id}`}>
            <h3 className="text-white text-[20px] font-bold">{a.title}</h3></Link>
            <p className="text-[#B4BFCB] font-bold">{a.date}</p>
            </div>
            <div className="absolute left-0 top-0 bg-gradient-to-t from-black to to-transparent p-96 opacity-80"></div>
           </div>
         </SwiperSlide>
        ))}
        
      </Swiper>
      </div>
      </div>
</section>
</>
  );
}
