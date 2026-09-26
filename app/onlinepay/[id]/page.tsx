import React from 'react'
import { Cashpay } from '@/actions/paycash'
import PayOnlinepage from '../formonline'

export  default async function page(props) {
   const {id} =  await props.params  
    //  console.log("params:", params);


  return (
   <PayOnlinepage CartId={id}/>
  )
}
