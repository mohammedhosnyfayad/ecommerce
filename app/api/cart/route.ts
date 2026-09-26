import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    console.log("REQ:", req);

    const token = await getToken({
        req:req
    })
console.log("TOKEN:", token);
console.log("USER ID2323:", token?.id);
    
    if(!token){
        return NextResponse.json({message:"Login frist" , status:401})
    }

      const response = await fetch(
    "https://ecommerce.routemisr.com/api/v2/cart",
    {
      
      headers: {
        token: token.token as string,
        "Content-Type": "application/json",
      },
    }
  );

    if(!response.ok)  return NextResponse.json({message:"Login frist" , status:401})
  const payload = await response.json();

  console.log("STATUS:", response.status);
  console.log("APIpayload:", payload);


  return NextResponse.json(payload);
}