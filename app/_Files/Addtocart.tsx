"use client"
import { Addapicart } from '@/actions/apiAddtocart'
import React, { ReactNode } from 'react'

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
export default function Addtocart({
  child,
  cls,
  productId,
}: {
  child: ReactNode;
  cls: string;
  productId: string;
}) {
const query  = useQueryClient() 
async function handel() {
  
  mutate(productId)
  // try {
    const data = await Addapicart(productId);
  //   console.log("SUCCESS:", data);
  // } catch (error) {
  //   console.log("ERROR:", error);
  // }
}

  const {mutate , data: dataadd} = useMutation({
    mutationFn:Addapicart,
    onSuccess:(data)=>{
      toast.success(data.message)
                query.invalidateQueries({queryKey:["getcart"]})

    },
    onError:(data)=>{
       toast.error(data.message)
    }
  })

  return (
   <button onClick={handel} className={cls}>{child}</button>
  )
}
