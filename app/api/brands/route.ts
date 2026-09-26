import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/brands"
  );

  const data = await response.json();
    console.log(data);
    
  return NextResponse.json(data);
}