"use client"

import { apiwishlistfunc } from '@/actions/apiwishlist'
import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { toast } from "react-toastify";

export default function AddWhielist({child , cls , prodid}) {
 async function handelwhielist(){
   const wshlistdata = await mutate(prodid)
  }

  const {data , mutate} = useMutation({
    mutationFn:apiwishlistfunc,
    onSuccess:(data)=>{
    toast.success(data.message)
    },
    onError:(data)=>{
      toast.error(data.message)
    }

  })
  return (
    <button  onClick={handelwhielist} className={cls}>{child}</button>
  )
}
