import React from 'react'
import ShippingAddress from '../form'
import { Cashpay } from '@/actions/paycash'

export  default async function page(props) {
   const {id} =  await props.params  
    //  console.log("params:", params);


  return (
   <ShippingAddress CartId={id}/>
  )
}
