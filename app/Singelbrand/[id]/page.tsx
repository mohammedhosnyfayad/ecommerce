import React from 'react'
import Logic from '../logic'

export default async  function page(props : any) {
    const {id} = await props.params
        

  return (
    <Logic id={id}/>
  )
}
