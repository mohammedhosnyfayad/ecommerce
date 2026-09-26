import React from 'react'
import ShippingAddress from '../form'
import { Cashpay } from '@/actions/paycash'

export default async function page(
  props: { params: Promise<{ id: string }> }
) {
  const { id } = await props.params;

  return (
    <ShippingAddress CartId={id} />
  )
}