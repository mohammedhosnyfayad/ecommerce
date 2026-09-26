"use client"

import { useQuery } from '@tanstack/react-query'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import { cart } from '../typs/typscart'
import Link from "next/link";

export default function Navbar() {

    const {data:datacart} = useQuery<cart>({
    queryKey:['getcart'],
    queryFn: async()=>{
      const response = await fetch("/api/cart")
      if(!response.ok) throw new Error(response.statusText)
        return response.json()
    }
  })

  
  const {status} = useSession()
  
      function handellogout(){
        signOut({redirect:true , callbackUrl:`/login`})
    }

  return (
  
<nav className="w-full border-b border-gray-200 bg-black">
  <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">

    {/* Logo + Search */}
    <div className="flex items-center gap-5">

 <h1 className="font-bold text-4xl uppercase">shops</h1>

      <div>
        <input
          className="h-[38px] w-[400px] rounded-3xl border border-green-600 px-4 outline-none focus:ring-2 focus:ring-green-200"
          type="text"
          placeholder="Search..."
        />
      </div>

    </div>

    {/* Mobile Menu Button */}
    <button
      data-collapse-toggle="navbar-dropdown"
      type="button"
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-600 hover:bg-gray-100 md:hidden"
      aria-controls="navbar-dropdown"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>

      <svg
        className="h-6 w-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2}
          d="M5 7h14M5 12h14M5 17h14"
        />
      </svg>
    </button>

    {/* Navigation */}
    <div
      className="hidden w-full md:block md:w-auto"
      id="navbar-dropdown"
    >

      {status === "authenticated" ? (
        <ul className="mt-4 flex flex-col gap-4 rounded-lg border border-gray-200  p-4 font-medium md:mt-0 md:flex-row md:items-center md:gap-8 md:border-0 text-white md:p-0">

          <li>
            <Link
              href="./"
              className="block  transition hover:text-green-700"
            >
              Home
            </Link>
          </li>


          <li>
            <Link
              href="/brands"
              className="block  transition hover:text-green-600"
            >
              brands
            </Link>
          </li>

          <li>
            <Link
              href="/categories"
              className="block  transition hover:text-green-600"
            >
              categories
            </Link>
          </li>


        </ul>
      ) : null}

    </div>

    {/* Right Side */}
    <div className="flex items-center gap-4">

      {/* Login / Logout */}
      {status === "authenticated" ? (
        <button
          onClick={handellogout}
          type="button"
          className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
        >
          Logout
        </button>
      ) : (
        <button
          type="button"
          className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
        >
          Login
        </button>
      )}

      {/* Cart */}
      <div className="relative inline-block cursor-pointer">
         <Link href="/cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1-1.5 0Z"
          />
        </svg>
</Link>
        <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">
          {datacart?.numOfCartItems}
        </span>

      </div>

      {/* Wishlist */}
      <Link href="/wishlist">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6 cursor-pointer transition hover:text-red-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
</Link>
    </div>

  </div>
</nav>

  )
}
