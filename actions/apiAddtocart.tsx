"use server";

import { gettokendata } from "@/apis/fungettoken/filetoken";



export async function Addapicart(productId: string) {
 const token =  await gettokendata()
if  (!token){
 throw new Error("API Error23");
}
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v2/cart",
    {
      method: "POST",
      headers: {
        token: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: productId,
      }),
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