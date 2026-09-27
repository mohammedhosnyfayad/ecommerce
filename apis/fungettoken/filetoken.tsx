"use server";

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function gettokendata(): Promise<string | undefined> {
  const cookis = await cookies();

  const Nametoken =
    cookis.get("__Secure-next-auth.session-token")?.value ??
    cookis.get("next-auth.session-token")?.value;

  console.log("COOKIE TOKEN:", Nametoken);

  console.log("SECRET EXISTS:", !!process.env.NEXTAUTH_SECRET);

  if (!Nametoken) {
    console.log("NO COOKIE TOKEN");
    return undefined;
  }

  const valuetoken = await decode({
    secret: process.env.NEXTAUTH_SECRET!,
    token: Nametoken,
  });

  console.log("DECODE SUCCESS:", !!valuetoken);
  console.log("API TOKEN EXISTS:", !!valuetoken?.token);

  return valuetoken?.token as string | undefined;
}