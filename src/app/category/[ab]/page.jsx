"use client"
import { news } from '@/app/Data'
import { useParams } from 'next/navigation'
import React from 'react'

function page() {
    let {category}=useParams()
    let abc= news.filter((a)=>a.category==category)
  return (
    <div className='container'>
      <h2>{category}</h2>
      <div className="row">
            {abc.map((a)=>(
                <div className="col-3"key={a.id}>
                <div className="shadow p-2">
                    <img className='w-100' src={a.image} alt="" />
                    <p className='py-2'>
                        <Link to={`/details/${a.id}`}>
                        {a.title}
                        </Link>
                        </p>
                    <button className='btn btn-primary'>Add To Cart</button>

                </div>
            </div>
            ))}
            
        </div>
    </div>
  )
}

export default page
