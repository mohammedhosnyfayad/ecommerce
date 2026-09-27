import React from 'react'
import Logic from '../logiccat'

export default async function page(props:any) {
  const {id} = await props.params

  return (
   <Logic id={id}/>
  )
}
