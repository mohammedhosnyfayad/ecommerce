import { prodcutdetils } from '@/apis/getallprocut'
import Designdeits from '@/app/Pordcutdetilsdesing/designdeits'
import React from 'react'

export default async function page(
  { params }: { params: Promise<{ id: string }> }
) {

  const { id } = await params

  const dataprodcut = await prodcutdetils(id)

  return (
    <Designdeits prodcut={dataprodcut}/>
  )
}