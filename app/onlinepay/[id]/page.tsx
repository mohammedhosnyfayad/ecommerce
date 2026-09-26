import React from 'react'
import { Cashpay } from '@/actions/paycash'
import PayOnlinepage from '../formonline'

export default async function page(
  props: { params: Promise<{ id: string }> }
) {
   const { id } = await props.params

  return (
   <PayOnlinepage CartId={id}/>
  )
}