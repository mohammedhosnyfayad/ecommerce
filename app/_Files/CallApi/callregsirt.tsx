"use server"


import axios from 'axios'
import React from 'react'
import { async } from './../../../.next/dev/types/routes.d';


export async function  apisignin(data) {
   axios
    .post(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      data
    )
    .then((resp) => {
      console.log("resp" , resp);
      console.log("resp.status" , resp.status);
    })
    .catch((error) => {
      console.log("error" , error);
    });
}




export default async function callregsirt() {
  return (
    <div>callregsirt</div>
  )
}
