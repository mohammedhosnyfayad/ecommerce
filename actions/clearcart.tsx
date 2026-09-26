"use server";

import { gettokendata } from "@/apis/fungettoken/filetoken";



export async function Clearcartfunc() {
 const token =  await gettokendata()
if  (!token){
 throw new Error("API Error23");
}
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v2/cart`,
    {
      method: "DELETE",
      headers: {
        token: token,
        "Content-Type": "application/json",
      },
 
    }
  );

  const payload = await response.json();

  console.log("STATUS:", response.status);
  console.log("API:", payload);

  if (!response.ok) {
    throw new Error(payload.message || "API Error");
  }

  return payload;
}