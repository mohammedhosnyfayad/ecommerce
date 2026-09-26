import { getallprodcut, prodcutdetils } from '@/apis/getallprocut';
import React from 'react'
import Link from 'next/link';
import Addtocart from './../_Files/Addtocart';
import AddWhielist from '../addWhielist';

export default async function designallprodcut() {
      const data = await getallprodcut()


  return (
<div className="container mx-auto px-4 py-10">

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

    {/* Product 1 */}
{data?.map((prod)=>     <div key={prod._id} className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="relative">
    <Link  href={`/prodcutdelils/${prod.id}`}>
            <img
          src={prod.imageCover}
          alt="Product"
          className="w-full p-5 h-64 object-cover"
        />

    </Link>
<AddWhielist prodid={prod._id} child={         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
} cls={"absolute top-3 right-3 w-10 h-10 rounded-full bg-red-300 shadow flex items-center justify-center"}/>

      </div>

      <div className="p-5 text-black">
        <h2 className="text-lg font-bold mb-2">{prod.title}</h2>

        <p className="text-sm text-black mb-4 line-clamp-2">
          {prod.description}
        </p>








{prod.priceAfterDiscount ? <>
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xl font-bold"> {prod.priceAfterDiscount} EGP</span>
          <span className="text-sm text-gray-400 line-through  ">
            {prod.price} EGP
          </span>
        </div>


</> : <>
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xl font-bold">
            {prod.price} EGP
          </span>
        </div>

</>}

        {/* <div className="flex items-center gap-3 mb-5">
          <span className="text-xl font-bold"> {prod.priceAfterDiscount}</span>
          <span className="text-sm text-gray-400 line-through">
            {prod.price} EGP
          </span>
        </div> */}
<Addtocart productId={prod._id} child={<>
        <p>Addtocart</p>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
    
    </>} cls={"w-full bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2"}/>
      </div>
    </div>
)}


  </div>
</div>  )
}
