"use server";

import { gettokendata } from "@/apis/fungettoken/filetoken";



export async function forgetpasswordapi(data:any) {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
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



export async function resetcodefunc(resetCode:any) {
 const token =  await gettokendata()

  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        resetCode:resetCode.resetCode
      }),
    }
  );

  const payload = await response.json();

  console.log("STATUS:", response.status);
  console.log("API:", payload);

  if (!response.ok) {
    throw new Error("API Error");
  }

  return payload;
}
export async function resatpassowrdend(data:any) {

  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email:data.email,
        newPassword:data.newPassword
      }),
    }
  );

  const payload = await response.json();

  console.log("STATUS:", response.status);
  console.log("API:", payload);

  if (!response.ok) {
    throw new Error("API Error");
  }

  return payload;
}